import type { LocaleContent, Lang } from "@/lib/data";
import { flagships, others, ui } from "@/lib/work";

export type Chunk = { id: string; title: string; text: string; href: string; external?: boolean };
export type Hit = { chunk: Chunk; score: number };
export type Answer =
  | { kind: "answer"; hits: Hit[]; terms: string[]; confidence: number; missing: string[] }
  | { kind: "declined"; terms: string[]; best: number };

const STOP = new Set(
  (
    "a an the and or of to in on for with is are was were be been it its this that these those what which who whom how why when where does do did " +
    "can could should would will about as at by from her she he his me my you your i we they them there than then so if not no yes any all " +
    "und oder der die das den dem des ein eine einer einen einem ist sind war waren wird werden hat haben mit von zu zum zur im in am auf für " +
    "project projects built build know uses use tell give show many much long was wer wie warum wann wo welche welcher welches gibt es sie ihr ihre ich du wir nicht kein"
  ).split(" "),
);

const SYN: Record<string, string[]> = {
  worked: ["experience", "intern", "trainee"],
  didn: ["limits", "weak", "not"],
  job: ["experience", "werkstudent"],
  jobs: ["experience", "werkstudent"],
  studied: ["education", "degree"],
  study: ["education", "degree"],
  degree: ["education"],
  university: ["education", "btu", "cottbus"],
  hire: ["open", "werkstudent", "internship"],
  available: ["open", "werkstudent", "internship"],
  email: ["contact"],
  reach: ["contact", "email"],
  failed: ["limits", "weak", "not"],
  fail: ["limits", "weak"],
  wrong: ["limits"],
  weakness: ["limits", "weak"],
  weaknesses: ["limits", "weak"],
  best: ["recall", "mrr", "auroc"],
  accuracy: ["recall", "auroc", "accuracy"],
  tests: ["tests"],
  paper: ["research", "published"],
  published: ["research", "paper"],
  arbeit: ["experience", "intern"],
  studium: ["education", "m.sc"],
  kontakt: ["contact", "email"],
};

function stem(w: string): string {
  if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith("ed")) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}

const SYNS = new Map<string, string[]>(Object.entries(SYN).map(([k, v]) => [stem(k), v.map(stem)]));

export function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}.+#]+/gu, " ")
    .split(" ")
    .map((w) => w.replace(/^\.+|\.+$/g, ""))
    .filter((w) => w.length > 1 && !STOP.has(w))
    .map(stem);
}

export function buildChunks(t: LocaleContent, lang: Lang): Chunk[] {
  const u = ui[lang];
  const c: Chunk[] = [];
  flagships.forEach((f) => {
    c.push({ id: `${f.slug}-a`, title: f.name, text: `${f.tagline[lang]} ${f.problem[lang]}`, href: "#work" });
    c.push({ id: `${f.slug}-b`, title: `${f.name} · ${u.built}`, text: `${f.built[lang]} ${f.stack.join(", ")}`, href: "#work" });
    c.push({ id: `${f.slug}-c`, title: `${f.name} · ${u.limits}`, text: f.limits[lang], href: "#work" });
    c.push({
      id: `${f.slug}-d`,
      title: `${f.name} · results`,
      text: f.metrics.map((m) => `${m.value} ${m.label[lang]}`).join("; "),
      href: "#work",
    });
  });
  others.forEach((o) =>
    c.push({
      id: o.name,
      title: o.name,
      text: `${o.line[lang]} ${o.metric[lang]} ${o.stack.join(", ")}`,
      href: o.github,
      external: true,
    }),
  );
  t.education.forEach((e) =>
    c.push({ id: `edu-${e.title}`, title: `${e.title} · ${e.place}`, text: `${e.period}. ${e.description} ${e.tags.join(", ")} education degree`, href: "#education" }),
  );
  t.experience.forEach((e) =>
    c.push({ id: `exp-${e.title}`, title: `${e.title} · ${e.place}`, text: `${e.period}. ${e.description} ${e.tags.join(", ")} experience`, href: "#experience" }),
  );
  t.publications.forEach((p) =>
    c.push({ id: `pub-${p.title}`, title: p.title, text: `${p.venue} ${p.year} ${p.identifier}. ${p.summary} research paper published`, href: "#research" }),
  );
  t.skills.forEach((g) => c.push({ id: `skill-${g.category}`, title: `Skills · ${g.category}`, text: g.items.join(", "), href: "#skills" }));
  u.how.forEach((h) => c.push({ id: `how-${h.title}`, title: h.title, text: `${h.text} ${h.proof}`, href: "#approach" }));
  c.push({
    id: "profile",
    title: t.profile.name,
    text: `${t.profile.role}. ${t.profile.education}. ${t.profile.location}. ${u.status}. open to Werkstudent internship Germany hire available`,
    href: "#top",
  });
  c.push({
    id: "contact",
    title: "Contact",
    text: `Email ${t.profile.email}. GitHub ${t.profile.githubHandle}. LinkedIn ${t.profile.linkedinHandle}. contact reach`,
    href: "#contact",
  });
  return c;
}

const K1 = 1.5;
const B = 0.75;

export function search(query: string, chunks: Chunk[]): Answer {
  const base = tokenize(query);
  const terms = Array.from(new Set(base.flatMap((w) => [w, ...(SYNS.get(w) ?? [])])));
  const core = Array.from(new Set(base));
  if (core.length === 0) return { kind: "declined", terms: [], best: 0 };

  const docs = chunks.map((ch) => tokenize(`${ch.title} ${ch.text}`));
  const titles = chunks.map((ch) => new Set(tokenize(ch.title)));
  const avg = docs.reduce((n, d) => n + d.length, 0) / docs.length;
  const df = new Map<string, number>();
  docs.forEach((d) => new Set(d).forEach((w) => df.set(w, (df.get(w) ?? 0) + 1)));
  const N = docs.length;

  const scored: Hit[] = chunks.map((chunk, i) => {
    const d = docs[i];
    const tf = new Map<string, number>();
    d.forEach((w) => tf.set(w, (tf.get(w) ?? 0) + 1));
    let score = 0;
    terms.forEach((q) => {
      const f = tf.get(q) ?? 0;
      if (!f) return;
      const n = df.get(q) ?? 0;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      const weight = core.includes(q) ? (SYNS.has(q) ? 0.3 : 1) : 0.7;
      score += weight * idf * ((f * (K1 + 1)) / (f + K1 * (1 - B + (B * d.length) / avg)));
      if (titles[i].has(q) && n <= N * 0.15) score += weight * idf;
    });
    return { chunk, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const top = scored[0];

  const topTokens = new Set(docs[chunks.indexOf(top.chunk)]);
  const isKnown = (q: string) => df.has(q) || (SYNS.get(q) ?? []).some((x) => df.has(x));
  const known = core.filter(isKnown);
  const informative = known.filter((q) => (df.get(q) ?? 0) <= N * 0.25 || SYNS.has(q));
  const basis = informative.length ? informative : known;
  const covered = basis.filter((q) => topTokens.has(q) || (SYNS.get(q) ?? []).some((x) => topTokens.has(x)));
  const coverage = basis.length ? covered.length / basis.length : 0;
  const missing = core.filter((q) => !isKnown(q) && q.length > 2);

  if (top.score < 2.2 || known.length === 0 || coverage < 0.5) {
    return { kind: "declined", terms: core, best: top.score };
  }
  const hits = scored.filter((h) => h.score >= top.score * 0.8).slice(0, 3);
  return { kind: "answer", hits, terms: core, confidence: Math.min(1, coverage), missing };
}

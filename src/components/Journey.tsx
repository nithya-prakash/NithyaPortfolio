"use client";

import SectionLabel from "@/components/SectionLabel";
import { useLanguage } from "@/lib/LanguageContext";
import Aside from "@/components/Aside";
import { ui } from "@/lib/work";

export function Education() {
  const { lang, t } = useLanguage();
  const u = ui[lang];
  return (
    <section id="education" className="snap-page container-px mx-auto max-w-6xl py-8">
      <SectionLabel emoji="🎓" label={u.eduLabel} title={u.eduTitle} />
      <div className="grid gap-4 md:grid-cols-2">
        {[...t.education].reverse().map((e) => (
          <div key={e.title} data-reveal className="rounded-2xl border border-line bg-surface p-6">
            <p className="font-mono text-xs text-accent">{e.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{e.title}</h3>
            <p className="text-sm text-ink-soft">{e.place}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {e.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-info">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Research() {
  const { lang, t } = useLanguage();
  const u = ui[lang];
  return (
    <section id="research" className="snap-page container-px mx-auto max-w-6xl py-8">
      <SectionLabel emoji="📄" label={u.researchLabel} title={u.researchTitle} />
      {t.publications.map((p) => (
        <article
          key={p.title}
          data-reveal
          className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface p-6 sm:p-8"
        >
          <div className="glow-lilac pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full" aria-hidden />
          <p className="relative font-mono text-xs text-accent">
            {p.venue} · {p.year} · {p.identifier}
          </p>
          <h3 className="relative mt-2 text-xl font-semibold text-ink">{p.title}</h3>
          <p className="relative mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">{p.summary}</p>
          <div className="relative mt-4 flex flex-wrap items-center gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-info">
                {s}
              </span>
            ))}
            <a href={p.href} target="_blank" rel="noreferrer" className="ml-2 font-mono text-xs text-accent hover:underline">
              {t.publicationsSection.readPaper} →
            </a>
          </div>
        </article>
      ))}
      <Aside i={1} />
    </section>
  );
}

export function Experience() {
  const { lang, t } = useLanguage();
  const u = ui[lang];
  return (
    <section id="experience" className="snap-page container-px mx-auto max-w-6xl py-8">
      <SectionLabel emoji="💼" label={u.expLabel} title={u.expTitle} />
      <ol className="relative ml-2 border-l border-line-strong">
        {t.experience.map((e) => (
          <li key={e.title + e.period} data-reveal className="relative pb-7 pl-8 last:pb-0">
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                e.current ? "border-accent bg-accent" : "border-accent bg-bg"
              }`}
              aria-hidden
            />
            <p className="font-mono text-xs text-accent">
              {e.current ? `${u.now} · ` : ""}
              {e.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-ink">{e.title}</h3>
            <p className="text-sm text-ink-soft">{e.place}</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">{e.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {e.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-info">
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

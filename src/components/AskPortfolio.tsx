"use client";

import { useMemo, useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import { buildChunks, search, type Answer } from "@/lib/ask";
import { useLanguage } from "@/lib/LanguageContext";
import { askUi } from "@/lib/work";

const STEP_MS = 320;

export default function AskPortfolio() {
  const { lang, t } = useLanguage();
  const a = askUi[lang];
  const chunks = useMemo(() => buildChunks(t, lang), [t, lang]);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(-1);
  const [result, setResult] = useState<{ query: string; answer: Answer } | null>(null);
  const [empty, setEmpty] = useState(false);

  const run = (query: string) => {
    const text = query.trim();
    if (!text) {
      setEmpty(true);
      return;
    }
    setEmpty(false);
    setResult(null);
    const answer = search(text, chunks);
    a.steps.forEach((_, i) => setTimeout(() => setActive(i), i * STEP_MS));
    setTimeout(() => {
      setResult({ query: text, answer });
      setActive(-1);
    }, a.steps.length * STEP_MS);
  };

  const running = active >= 0;
  const maxScore = result?.answer.kind === "answer" ? result.answer.hits[0].score : 1;

  return (
    <section id="ask" className="container-px mx-auto max-w-6xl py-16 sm:py-24">
      <SectionLabel emoji="🔍" label={a.label} title={a.title} />
      <div
        data-reveal
        className="relative overflow-hidden rounded-3xl border border-line-strong bg-surface p-5 sm:p-8"
      >
        <div className="glow-pink pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full" aria-hidden />
        <p className="relative max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">{a.sub}</p>

        <form
          className="relative mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            run(q);
          }}
        >
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setEmpty(false);
            }}
            placeholder={a.placeholder}
            aria-label={a.label}
            className="flex-1 rounded-full border border-line-strong bg-bg px-5 py-3 font-mono text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            disabled={running}
            className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {a.button} ☕
          </button>
        </form>
        {empty && <p className="relative mt-2 text-sm text-accent">{a.placeholder}</p>}

        <div className="relative mt-4 flex flex-wrap gap-2">
          {a.chips.map((c) => (
            <button
              key={c}
              type="button"
              disabled={running}
              onClick={() => {
                setQ(c);
                run(c);
              }}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent disabled:opacity-60"
            >
              {c}
            </button>
          ))}
        </div>

        <ol className="relative mt-6 flex flex-wrap gap-2 font-mono text-xs" aria-label="pipeline">
          {a.steps.map((s, i) => {
            const done = result !== null || i < active;
            const on = i === active;
            return (
              <li
                key={s}
                className={`flex items-center gap-2 rounded-full border px-3 py-1 transition-colors ${
                  on
                    ? "border-accent bg-accent-soft text-accent"
                    : done
                      ? "border-line-strong text-ink-soft"
                      : "border-line text-ink-faint"
                }`}
              >
                <span aria-hidden>{done && !on ? "✓" : "○"}</span>
                {s}
              </li>
            );
          })}
        </ol>

        <div aria-live="polite" className="relative mt-6 min-h-[3rem]">
          {result?.answer.kind === "declined" && (
            <div className="rounded-2xl border border-line-strong bg-bg p-5">
              <p className="font-medium text-ink">🤷‍♀️ {a.declined}</p>
              <p className="mt-1 text-sm text-ink-soft">{a.declinedHint}</p>
            </div>
          )}
          {result?.answer.kind === "answer" && (
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs uppercase tracking-wide text-accent">{a.answerFrom}</p>
              {result.answer.missing.length > 0 && (
                <p className="text-sm text-ink-soft">
                  {a.notFound}: <span className="font-mono text-accent">{result.answer.missing.join(", ")}</span>
                </p>
              )}
              {result.answer.hits.map((h, i) => (
                <article key={h.chunk.id} className="rounded-2xl border border-line bg-bg p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold text-ink">
                      <span className="mr-2 font-mono text-accent">[{i + 1}]</span>
                      {h.chunk.title}
                    </h3>
                    <a
                      href={h.chunk.href}
                      {...(h.chunk.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="shrink-0 font-mono text-xs text-ink-soft transition-colors hover:text-accent"
                    >
                      {a.open} →
                    </a>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.chunk.text}</p>
                  <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-ink-faint">
                    <span>
                      {a.score} {h.score.toFixed(1)}
                    </span>
                    <span className="h-1.5 w-32 overflow-hidden rounded-full bg-line">
                      <span
                        className="block h-full rounded-full bg-accent"
                        style={{ width: `${Math.max(8, Math.round((h.score / maxScore) * 100))}%` }}
                      />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <p className="relative mt-6 text-xs leading-relaxed text-ink-faint">{a.noLlm}</p>
      </div>
    </section>
  );
}

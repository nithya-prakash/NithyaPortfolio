"use client";

import SectionLabel from "@/components/SectionLabel";
import { GithubIcon } from "@/components/icons/BrandIcons";
import Aside from "@/components/Aside";
import { useLanguage } from "@/lib/LanguageContext";
import { others, ui } from "@/lib/work";

export default function OtherWork() {
  const { lang } = useLanguage();
  const u = ui[lang];

  return (
    <section id="more" className="snap-page container-px mx-auto w-full max-w-6xl py-10">
      <SectionLabel emoji="🧩" label={u.othersLabel} title={u.othersTitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((o) => (
          <article
            key={o.name}
            data-reveal
            className="flex flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-mono text-sm font-medium text-ink">{o.name}</h3>
              <a
                href={o.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${o.name} on GitHub`}
                className="text-ink-faint transition-colors hover:text-accent"
              >
                <GithubIcon size={16} />
              </a>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{o.line[lang]}</p>
            <p className="mt-3 font-mono text-xs text-accent">{o.metric[lang]}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {o.stack.map((s) => (
                <span key={s} className="rounded-full border border-line px-2 py-0.5 font-mono text-[11px] text-info">
                  {s}
                </span>
              ))}
            </div>
            {o.demo && (
              <a
                href={o.demo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 font-mono text-xs text-ink-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {u.live} →
              </a>
            )}
          </article>
        ))}
      </div>
      <Aside i={0} />
    </section>
  );
}
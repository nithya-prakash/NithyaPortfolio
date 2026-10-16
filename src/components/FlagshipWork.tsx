"use client";

import SectionLabel from "@/components/SectionLabel";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { useLanguage } from "@/lib/LanguageContext";
import { flagships, ui } from "@/lib/work";

export default function FlagshipWork() {
  const { lang } = useLanguage();
  const u = ui[lang];

  return (
    <section id="work">
      <div>
        {flagships.map((f, i) => (
          <div key={f.slug} className="snap-page">
          <div className="container-px mx-auto w-full max-w-6xl py-10">
          {i === 0 && <SectionLabel emoji="✨" label={u.flagshipLabel} title={u.flagshipTitle} />}
          <article
            key={f.slug}
            data-reveal
            className="overflow-hidden rounded-3xl border border-line-strong bg-surface"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-xs text-ink-faint">
              <span>
                <span className="text-accent">0{i + 1}</span> / {f.slug}
              </span>
              <span className="flex items-center gap-4">
                {f.demo && (
                  <a href={f.demo} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                    {u.live} →
                  </a>
                )}
                <a
                  href={f.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <GithubIcon size={13} />
                  {u.code}
                </a>
              </span>
            </div>

            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{f.name}</h3>
                <p className="mt-2 text-base text-ink-soft sm:text-lg">{f.tagline[lang]}</p>

                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wide text-accent">{u.problem}</dt>
                    <dd className="mt-1 text-ink-soft">{f.problem[lang]}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wide text-accent">{u.built}</dt>
                    <dd className="mt-1 text-ink-soft">{f.built[lang]}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wide text-accent">{u.limits}</dt>
                    <dd className="mt-1 text-ink-soft">{f.limits[lang]}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  {f.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-xs text-info"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.gif}
                  alt={`${f.name} demo`}
                  loading="lazy"
                  className="w-full rounded-lg border border-line bg-bg"
                />
                <div className="grid grid-cols-3 gap-3">
                  {f.metrics.map((m) => (
                    <div key={m.value} className="rounded-lg border border-line bg-bg p-3">
                      <div className="font-mono text-xl font-medium text-accent sm:text-2xl">{m.value}</div>
                      <div className="mt-1 text-xs leading-snug text-ink-faint">{m.label[lang]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}

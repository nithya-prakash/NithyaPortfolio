"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section
      id="about"
      className="snap-page container-px mx-auto flex min-h-screen max-w-6xl flex-col justify-center py-20 sm:py-28 lg:h-screen lg:snap-start lg:py-0"
    >
      <SectionHeading eyebrow={about.eyebrow} index={about.index} title={about.headline} />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal delay={0.05} className="space-y-6">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-balance text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="space-y-10">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-ink-faint">{about.workAcrossLabel}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-2">
              {about.focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-ink">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-ink-faint">{about.careAboutLabel}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

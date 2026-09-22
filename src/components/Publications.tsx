"use client";

import { ArrowUpRight, FileText } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TechIcon from "@/components/TechIcon";
import { useLanguage } from "@/lib/LanguageContext";

export default function Publications() {
  const { t } = useLanguage();

  return (
    <section
      id="publications"
      className="snap-page container-px mx-auto flex min-h-screen max-w-6xl flex-col justify-center py-20 sm:py-28 lg:h-screen lg:snap-start lg:py-0"
    >
      <SectionHeading
        eyebrow={t.publicationsSection.eyebrow}
        index={t.publicationsSection.index}
        title={t.publicationsSection.title}
      />

      <div className="space-y-4">
        {t.publications.map((pub) => (
          <Reveal key={pub.title}>
            <a
              href={pub.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start justify-between gap-6 rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors hover:border-accent sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors group-hover:border-accent group-hover:text-accent">
                  <FileText size={15} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-faint">
                    {pub.venue}, {pub.year} · {pub.identifier}
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                    {pub.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pub.stack.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-faint"
                      >
                        <TechIcon name={tech} size={12} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="mt-0.5 flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink-faint transition-colors group-hover:text-accent">
                {t.publicationsSection.readPaper}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import SectionLabel from "@/components/SectionLabel";
import { useLanguage } from "@/lib/LanguageContext";
import Marquee from "@/components/Marquee";
import { ui } from "@/lib/work";

export default function Skills() {
  const { lang, t } = useLanguage();

  const all = Array.from(new Set(t.skills.flatMap((g) => g.items)));
  const half = Math.ceil(all.length / 2);
  return (
    <section id="skills" className="snap-page container-px mx-auto max-w-6xl py-4">
      <SectionLabel emoji="🛠️" label={ui[lang].skillsLabel} title={t.skillsSection.title} />
      <div className="-mx-5 mb-5 flex flex-col gap-2 sm:-mx-10">
        <Marquee items={all.slice(0, half)} />
        <Marquee items={all.slice(half)} reverse />
      </div>
      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.map((g) => (
          <div key={g.category}>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">{g.category}</h3>
            <div className="mt-2 flex flex-wrap gap-1">
              {g.items.map((item) => (
                <span key={item} className="rounded-full border border-line bg-surface px-2 py-0.5 text-[11px] text-ink">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

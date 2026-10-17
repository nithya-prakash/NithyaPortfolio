"use client";

import SectionLabel from "@/components/SectionLabel";
import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";
import Marquee from "@/components/Marquee";
import { ui } from "@/lib/work";

export default function Skills() {
  const { lang, t } = useLanguage();

  const [paused, setPaused] = useState(false);
  const all = Array.from(new Set(t.skills.flatMap((g) => g.items)));
  const half = Math.ceil(all.length / 2);
  return (
    <section id="skills" className="snap-page container-px mx-auto max-w-6xl py-4">
      <div className="relative">
        <SectionLabel emoji="🛠️" label={ui[lang].skillsLabel} title={t.skillsSection.title} />
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          aria-pressed={paused}
          className="absolute bottom-6 right-0 flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-soft transition-colors hover:border-accent hover:text-accent"
        >
          <span aria-hidden>{paused ? "▶" : "❚❚"}</span>
          {paused ? ui[lang].playTools : ui[lang].pauseTools}
        </button>
      </div>
      <div className="-mx-5 mb-5 flex flex-col gap-2 sm:-mx-10">
        <Marquee items={all.slice(0, half)} paused={paused} />
        <Marquee items={all.slice(half)} reverse paused={paused} />
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

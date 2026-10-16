"use client";

import SectionLabel from "@/components/SectionLabel";
import { useLanguage } from "@/lib/LanguageContext";
import { ui } from "@/lib/work";

export default function Approach() {
  const { lang } = useLanguage();
  const u = ui[lang];

  return (
    <section id="approach" className="snap-page container-px mx-auto max-w-6xl py-16 sm:py-24">
      <SectionLabel emoji="🧪" label={u.howLabel} title={u.howTitle} />
      <div className="grid gap-4 md:grid-cols-3">
        {u.how.map((h, i) => (
          <div key={h.title} data-reveal className="rounded-2xl border border-line bg-surface p-6">
            <p className="font-mono text-xs text-accent">0{i + 1}</p>
            <h3 className="mt-2 text-lg font-medium text-ink">{h.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.text}</p>
            <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-ink-faint">
              <span className="font-mono text-accent">{u.approachProof}:</span> {h.proof}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

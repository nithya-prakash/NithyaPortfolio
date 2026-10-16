"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { ui } from "@/lib/work";

export default function CoffeeBreak() {
  const { lang } = useLanguage();
  const u = ui[lang];
  const [i, setI] = useState(0);
  const quote = u.quotes[i % u.quotes.length];

  return (
    <section className="snap-page container-px mx-auto w-full max-w-6xl py-10">
      <div data-reveal className="relative overflow-hidden rounded-3xl border border-line-strong bg-surface px-6 py-10 text-center sm:px-12">
        <div className="dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <p className="relative font-mono text-xs text-accent" aria-hidden>
          ✦ ☕ ✦
        </p>
        <p className="relative mx-auto mt-3 max-w-2xl text-balance text-xl font-medium leading-snug text-ink sm:text-3xl">
          “{quote}”
        </p>
        <button
          type="button"
          onClick={() => setI((n) => n + 1)}
          className="relative mt-6 rounded-full border border-line-strong px-4 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent"
        >
          ☕ {u.anotherCup}
        </button>
      </div>
    </section>
  );
}

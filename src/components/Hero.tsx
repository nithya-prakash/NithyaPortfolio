"use client";

import { useState } from "react";
import CoffeeCup from "@/components/CoffeeCup";
import { useLanguage } from "@/lib/LanguageContext";
import { ui } from "@/lib/work";

const tags = ["RAG", "LLM agents", "MCP", "MLOps", "Computer vision", "Time series"];

export default function Hero() {
  const { lang, t } = useLanguage();
  const u = ui[lang];
  const [purr, setPurr] = useState(0);
  const meows = ["mrrp ☕", "purr…", "feed me after the demo", "mew!"];

  return (
    <section id="top" className="snap-page relative overflow-hidden">
      <div className="dots pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="glow-pink pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full" aria-hidden />
      <div className="glow-lilac pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full" aria-hidden />

      <div className="container-px relative mx-auto grid max-w-6xl items-center gap-10 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-6 lg:pb-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="font-mono text-sm text-accent">✦ $ whoami</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{t.profile.name}</h1>
          <p className="cursor mt-5 max-w-3xl text-balance text-2xl font-medium text-ink sm:text-3xl">{u.headline}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{u.sub}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line-strong bg-surface px-3 py-1 font-mono text-xs text-info"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            {u.status}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              {u.ctaWork}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line-strong px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {u.ctaContact}
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-xs lg:block">
          <CoffeeCup className="w-full" />
          <button
            type="button"
            onClick={() => setPurr((n) => n + 1)}
            aria-label="Pet the cat"
            className="bob absolute -bottom-2 -right-4 text-5xl transition-transform hover:scale-110"
          >
            🐱
          </button>
          {purr > 0 && (
            <span
              key={purr}
              className="pop-note absolute -right-10 -top-0 rounded-2xl border border-line-strong bg-surface px-3 py-1.5 font-mono text-xs text-ink"
            >
              {meows[purr % meows.length]}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

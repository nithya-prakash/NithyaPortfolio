"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const next = lang === "en" ? "de" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={lang === "en" ? "Zu Deutsch wechseln" : "Switch to English"}
      className="flex h-9 min-w-9 items-center justify-center rounded-full border border-line px-2.5 text-xs font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:border-accent hover:text-accent"
    >
      {lang === "en" ? "DE" : "EN"}
    </button>
  );
}

"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const options = [
    { code: "en", label: "EN", name: "English" },
    { code: "de", label: "DE", name: "Deutsch" },
  ] as const;

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex h-9 items-center rounded-full border border-line-strong bg-surface p-0.5 font-mono text-xs"
    >
      {options.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            type="button"
            onClick={() => setLang(o.code)}
            aria-pressed={active}
            aria-label={`${o.label} ${o.name}`}
            title={o.name}
            className={`h-full rounded-full px-2.5 font-semibold transition-colors ${
              active ? "bg-accent text-bg" : "text-ink-soft hover:text-accent"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

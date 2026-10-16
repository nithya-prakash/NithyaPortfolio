"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line">
      <div className="container-px mx-auto flex max-w-6xl flex-col gap-2 py-8 font-mono text-xs text-ink-faint sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {t.profile.name}
        </span>
        <span>
          {t.footer.role} · ☕ + 💜
        </span>
      </div>
    </footer>
  );
}

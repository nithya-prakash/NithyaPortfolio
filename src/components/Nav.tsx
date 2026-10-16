"use client";

import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/lib/LanguageContext";
import { ui } from "@/lib/work";

export default function Nav() {
  const { lang, t } = useLanguage();
  const n = ui[lang].nav;
  const links = [
    { href: "#work", label: n.work },
    { href: "#more", label: n.other },
    { href: "#ask", label: `${n.ask} ✦` },
    { href: "#education", label: n.about },
    { href: "#skills", label: n.skills },
    { href: "#contact", label: n.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="container-px mx-auto flex h-14 max-w-6xl items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm text-ink">
          <span className="text-accent">~/</span>nithya
        </a>
        <ul className="hidden items-center gap-6 font-mono text-xs text-ink-soft md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={t.profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent sm:block"
          >
            {ui[lang].resume}
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

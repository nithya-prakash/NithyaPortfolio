"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/lib/LanguageContext";
import { ui } from "@/lib/work";

export default function Nav() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const u = ui[lang];
  const n = u.nav;
  const links = [
    { href: "#work", label: n.work },
    { href: "#more", label: n.other },
    { href: "#ask", label: n.ask },
    { href: "#experience", label: n.about },
    { href: "#skills", label: n.skills },
    { href: "#contact", label: n.contact },
  ];

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        {u.skipToContent}
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
        <nav aria-label="Main" className="container-px mx-auto flex h-14 max-w-6xl items-center justify-between gap-3">
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
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={t.profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-surface text-ink-soft transition-colors hover:border-accent hover:text-accent lg:flex"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={t.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-surface text-ink-soft transition-colors hover:border-accent hover:text-accent lg:flex"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={t.profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              aria-label={u.resume}
              className="flex h-9 items-center gap-1.5 rounded-full bg-accent px-3 text-xs font-semibold text-bg transition-transform hover:-translate-y-0.5 sm:px-4"
            >
              <Download size={14} aria-hidden />
              <span className="hidden sm:inline">{u.resume}</span>
            </a>
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? u.closeMenu : u.menu}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-surface text-ink md:hidden"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
        {open && (
          <div id="mobile-menu" className="border-t border-line bg-bg md:hidden">
            <ul className="container-px mx-auto flex max-w-6xl flex-col py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-mono text-sm text-ink-soft transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 py-3">
                <a href={t.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink-soft">
                  <GithubIcon size={17} />
                </a>
                <a href={t.profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink-soft">
                  <LinkedinIcon size={17} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/LanguageContext";

export default function Nav() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between sm:h-20">
        <a href="#top" className="font-serif text-lg font-medium tracking-tight text-ink">
          Nithya <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={t.profile.resumeHref}
            download
            className="hidden rounded-full border border-line px-4 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            {t.nav.resume}
          </a>
          <LanguageToggle />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-bg lg:hidden"
          >
            <div className="container-px mx-auto flex max-w-6xl flex-col py-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="border-b border-line/60 py-4 text-base text-ink-soft last:border-none hover:text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={t.profile.resumeHref}
                download
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.04, duration: 0.3 }}
                className="py-4 text-base text-ink-soft hover:text-ink sm:hidden"
              >
                {t.nav.downloadResume}
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

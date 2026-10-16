"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { ui } from "@/lib/work";

export default function Aside({ i }: { i: number }) {
  const { lang } = useLanguage();
  const list = ui[lang].asides;
  return (
    <p
      data-reveal
      className="container-px mx-auto max-w-6xl py-6 text-center font-mono text-sm text-ink-faint"
    >
      <span className="text-accent">✦</span> {list[i % list.length]} <span className="text-info">✦</span>
    </p>
  );
}

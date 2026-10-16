"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { ui } from "@/lib/work";

export default function Fx() {
  const { lang } = useLanguage();
  const u = ui[lang];
  const bar = useRef<HTMLDivElement>(null);
  const [pop, setPop] = useState<{ id: string; text: string } | null>(null);
  const seen = useRef(new Set<string>());
  const popsRef = useRef(u.pops);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    popsRef.current = u.pops;
  }, [u.pops]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onClick = (e: MouseEvent) => {
      if (reduce) return;
      for (let i = 0; i < 6; i++) {
        const s = document.createElement("span");
        s.className = "spark";
        s.textContent = i % 2 ? "✦" : "♥";
        const a = (Math.PI * 2 * i) / 6 + Math.random();
        const d = 28 + Math.random() * 26;
        s.style.left = `${e.clientX}px`;
        s.style.top = `${e.clientY}px`;
        s.style.setProperty("--dx", `${Math.cos(a) * d}px`);
        s.style.setProperty("--dy", `${Math.sin(a) * d}px`);
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 850);
      }
    };
    window.addEventListener("click", onClick);

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("rv-in");
            revealIO.unobserve(en.target);
          }
        }),
      { threshold: 0.12 },
    );
    targets.forEach((el) => {
      el.classList.add("rv");
      revealIO.observe(el);
    });

    const popIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          const id = en.target.id;
          if (en.isIntersecting && popsRef.current[id] && !seen.current.has(id)) {
            seen.current.add(id);
            setTimeout(() => {
              setPop({ id, text: popsRef.current[id] });
              clearTimeout(timer.current);
              timer.current = setTimeout(() => setPop(null), 6500);
            }, 1200);
          }
        }),
      { threshold: 0.45 },
    );
    Object.keys(popsRef.current).forEach((id) => {
      const el = document.getElementById(id);
      if (el) popIO.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick);
      revealIO.disconnect();
      popIO.disconnect();
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      <div
        ref={bar}
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left scale-x-0 bg-accent"
        aria-hidden
      />
      {pop && (
        <div
          key={pop.id}
          role="status"
          className="pop-note fixed bottom-5 right-5 z-50 flex max-w-[18rem] items-start gap-3 rounded-2xl border border-line-strong bg-surface p-4 shadow-lg"
        >
          <span className="bob text-xl" aria-hidden>
            ☕
          </span>
          <p className="text-sm leading-snug text-ink">{pop.text}</p>
          <button
            type="button"
            onClick={() => setPop(null)}
            aria-label={u.close}
            className="-mr-1 -mt-1 rounded-full px-1.5 text-ink-faint transition-colors hover:text-accent"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

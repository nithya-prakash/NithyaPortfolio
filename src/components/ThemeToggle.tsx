"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9 rounded-full border border-line-strong" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? t.themeToggle.switchToLight : t.themeToggle.switchToDark}
      title={isDark ? t.themeToggle.switchToLight : t.themeToggle.switchToDark}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-surface text-accent transition-colors hover:border-accent hover:bg-accent-soft"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

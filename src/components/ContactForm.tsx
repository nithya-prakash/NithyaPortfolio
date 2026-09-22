"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!FORM_ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-accent/40 bg-accent/10 px-6 py-8 text-center text-sm text-ink"
      >
        {t.contactForm.success}
      </motion.div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-line bg-bg-alt px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="name" placeholder={t.contactForm.namePlaceholder} required className={fieldClass} />
        <input type="email" name="email" placeholder={t.contactForm.emailPlaceholder} required className={fieldClass} />
      </div>
      <textarea name="message" placeholder={t.contactForm.messagePlaceholder} required rows={5} className={fieldClass} />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "submitting" ? t.contactForm.sending : t.contactForm.send}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">{t.contactForm.error}</p>
      )}
      {status === "unconfigured" && (
        <p className="text-sm text-ink-faint">{t.contactForm.unconfigured}</p>
      )}
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function ContactForm() {
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
        Thanks — your message is in. I&apos;ll get back to you soon.
      </motion.div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-line bg-bg-alt px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="name" placeholder="Name" required className={fieldClass} />
        <input type="email" name="email" placeholder="Email" required className={fieldClass} />
      </div>
      <textarea name="message" placeholder="Message" required rows={5} className={fieldClass} />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong — please try again, or email me directly.</p>
      )}
      {status === "unconfigured" && (
        <p className="text-sm text-ink-faint">
          The contact form isn&apos;t connected yet — reach out directly via email in the meantime.
        </p>
      )}
    </form>
  );
}

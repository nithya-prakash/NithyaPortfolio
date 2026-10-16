"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import ContactForm from "@/components/ContactForm";
import Aside from "@/components/Aside";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const links = [
    { label: t.contact.emailLabel, value: t.profile.email, href: `mailto:${t.profile.email}`, icon: Mail },
    { label: t.contact.githubLabel, value: t.profile.githubHandle, href: t.profile.github, icon: GithubIcon },
    { label: t.contact.linkedinLabel, value: t.profile.linkedinHandle, href: t.profile.linkedin, icon: LinkedinIcon },
  ];

  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{"// contact"} <span aria-hidden>💌</span></p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.contact.headline}
          </h2>
          <p className="mt-3 max-w-md text-ink-soft">{t.contact.subheading}</p>
          <div className="mt-8 flex flex-col gap-3">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === t.contact.emailLabel ? undefined : "_blank"}
                rel={label === t.contact.emailLabel ? undefined : "noreferrer"}
                className="group flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line transition-colors group-hover:border-accent group-hover:text-accent">
                  <Icon size={15} />
                </span>
                <span>
                  <span className="block font-mono text-xs text-ink-faint">{label}</span>
                  {value}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
      <Aside i={2} />
    </section>
  );
}

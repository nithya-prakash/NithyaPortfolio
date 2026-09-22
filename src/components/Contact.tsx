"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    { label: t.contact.emailLabel, value: t.profile.email, href: `mailto:${t.profile.email}`, icon: Mail },
    { label: t.contact.githubLabel, value: t.profile.githubHandle, href: t.profile.github, icon: GithubIcon },
    { label: t.contact.linkedinLabel, value: t.profile.linkedinHandle, href: t.profile.linkedin, icon: LinkedinIcon },
  ];

  return (
    <section
      id="contact"
      className="snap-page container-px mx-auto flex min-h-screen max-w-6xl flex-col justify-center py-20 sm:py-28 lg:h-screen lg:snap-start lg:py-0"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">
            {t.contactSection.eyebrow} — {t.contactSection.index}
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            {t.contact.headline}
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-soft">{t.contact.subheading}</p>

          <div className="mt-10 flex flex-col gap-3">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === t.contact.emailLabel ? undefined : "_blank"}
                rel={label === t.contact.emailLabel ? undefined : "noreferrer"}
                className="group flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:text-accent">
                  <Icon size={15} />
                </span>
                <span>
                  <span className="block text-xs text-ink-faint">{label}</span>
                  {value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

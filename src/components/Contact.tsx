import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { contact, profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-page container-px mx-auto flex min-h-screen max-w-6xl flex-col justify-center py-20 sm:py-28 lg:h-screen lg:snap-start lg:py-0"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Contact — 07</span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            {contact.headline}
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-soft">{contact.subheading}</p>

          <div className="mt-10 flex flex-col gap-3">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
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

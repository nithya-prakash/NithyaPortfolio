import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-px mx-auto flex max-w-6xl flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-faint">AI Engineer · Germany</p>
          <p className="mt-1 font-script text-lg text-ink-faint">Created with ☕️ and curiosity.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>

      <div className="container-px mx-auto max-w-6xl border-t border-line py-5 text-xs text-ink-faint">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}

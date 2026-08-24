import type { JourneyEntry } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TechIcon from "@/components/TechIcon";

export default function JourneyTimeline({
  id,
  eyebrow,
  index,
  title,
  entries,
}: {
  id: string;
  eyebrow: string;
  index: string;
  title: string;
  entries: JourneyEntry[];
}) {
  return (
    <section
      id={id}
      className="snap-page container-px mx-auto flex min-h-screen max-w-6xl flex-col justify-center py-20 sm:py-28 lg:h-screen lg:snap-start lg:py-0"
    >
      <SectionHeading eyebrow={eyebrow} index={index} title={title} />

      <div className="grid gap-5 sm:grid-cols-2">
        {entries.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors hover:border-line-strong sm:p-7">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full border-2 ${
                    entry.current ? "border-accent bg-accent" : "border-accent bg-bg"
                  }`}
                  aria-hidden
                />
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  {entry.period}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-ink sm:text-2xl">{entry.title}</h3>
              <p className="mt-1 text-sm text-ink-faint">{entry.place}</p>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-soft">
                {entry.description}
              </p>
              <div className="mt-4 flex flex-1 flex-wrap items-end gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-ink-faint"
                  >
                    <TechIcon name={tag} size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

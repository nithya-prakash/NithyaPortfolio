import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  index,
  title,
}: {
  eyebrow: string;
  index: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="flex items-baseline gap-3 text-xs uppercase tracking-[0.25em] text-ink-faint">
        <span className="text-accent">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="mt-4 h-px w-full bg-line" />
      <h2 className="mt-6 max-w-2xl text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

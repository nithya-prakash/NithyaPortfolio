export default function SectionLabel({
  label,
  title,
  emoji,
}: {
  label: string;
  title: string;
  emoji?: string;
}) {
  return (
    <div className="mb-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {`// ${label}`}
        {emoji && (
          <span className="ml-2" aria-hidden>
            {emoji}
          </span>
        )}
      </p>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Marquee({
  items,
  reverse = false,
  paused = false,
}: {
  items: string[];
  reverse?: boolean;
  paused?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee overflow-hidden py-1 ${paused ? "paused" : ""}`} aria-hidden="true" data-nosnippet>
      <div className={`marquee-track ${reverse ? "rev" : ""}`} style={{ animationDuration: `${Math.round(items.length * 1.6)}s` }}>
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1 font-mono text-xs text-ink-soft"
          >
            <span className={i % 2 ? "text-info" : "text-accent"}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

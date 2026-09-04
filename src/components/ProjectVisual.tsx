const patterns = [
  // 01 — concentric rings + node grid (retrieval / knowledge graph)
  (
    <>
      <circle cx="140" cy="120" r="86" className="stroke-line-strong" strokeWidth="1" fill="none" />
      <circle cx="140" cy="120" r="56" className="stroke-accent/40" strokeWidth="1" fill="none" />
      <circle cx="140" cy="120" r="4" className="fill-accent" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = Math.round((140 + 86 * Math.cos(rad)) * 100) / 100;
        const y = Math.round((120 + 86 * Math.sin(rad)) * 100) / 100;
        return <circle key={deg} cx={x} cy={y} r="3" className="fill-ink-soft" />;
      })}
    </>
  ),
  // 02 — waveform / anomaly spike (time-series)
  (
    <>
      <path
        d="M20 150 L60 150 L80 100 L100 180 L120 60 L140 150 L170 150 L190 130 L220 150 L260 150"
        className="stroke-accent"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="120" cy="60" r="4" className="fill-accent" />
      <line x1="20" y1="190" x2="260" y2="190" className="stroke-line-strong" strokeWidth="1" />
    </>
  ),
  // 03 — telemetry grid / dashboard blocks
  (
    <>
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={40 + col * 70}
            y={40 + row * 60}
            width="52"
            height="40"
            rx="4"
            className={row === 1 && col === 1 ? "fill-accent/70" : "fill-none stroke-line-strong"}
            strokeWidth="1"
          />
        ))
      )}
    </>
  ),
  // 04 — droplet / hydration motif, abstracted
  (
    <>
      <path
        d="M140 40 C170 90 200 120 200 150 C200 180 172 202 140 202 C108 202 80 180 80 150 C80 120 110 90 140 40 Z"
        className="stroke-accent"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="140" cy="150" r="24" className="fill-accent/25" />
    </>
  ),
  // 05 — transformer attention grid
  (
    <>
      {[0, 1, 2, 3].map((i) =>
        [0, 1, 2, 3].map((j) => (
          <circle
            key={`${i}-${j}`}
            cx={60 + i * 55}
            cy={60 + j * 40}
            r={(i + j) % 3 === 0 ? 5 : 2.5}
            className={(i + j) % 3 === 0 ? "fill-accent" : "fill-ink-soft/60"}
          />
        ))
      )}
    </>
  ),
  // 06 — sun rays / bar growth (renewable energy forecasting)
  (
    <>
      {[...Array(7)].map((_, i) => {
        const height = 30 + ((i * 37) % 90);
        return (
          <rect
            key={i}
            x={30 + i * 32}
            y={200 - height}
            width="16"
            height={height}
            rx="3"
            className={i === 4 ? "fill-accent" : "fill-line-strong"}
          />
        );
      })}
      <circle cx="238" cy="55" r="18" className="stroke-accent" strokeWidth="2" fill="none" />
    </>
  ),
  // 07 — distributed nodes / event mesh (microservices, message queues)
  (
    <>
      {[
        [70, 60],
        [210, 60],
        [40, 150],
        [140, 130],
        [240, 160],
        [140, 210],
      ].map(([x, y], i, arr) => (
        <line
          key={`edge-${i}`}
          x1={arr[i][0]}
          y1={arr[i][1]}
          x2={arr[(i + 1) % arr.length][0]}
          y2={arr[(i + 1) % arr.length][1]}
          className="stroke-line-strong"
          strokeWidth="1"
        />
      ))}
      {[
        [70, 60],
        [210, 60],
        [40, 150],
        [140, 130],
        [240, 160],
        [140, 210],
      ].map(([x, y], i) => (
        <circle
          key={`node-${i}`}
          cx={x}
          cy={y}
          r={i === 3 ? 7 : 4.5}
          className={i === 3 ? "fill-accent" : "fill-ink-soft"}
        />
      ))}
    </>
  ),
];

export default function ProjectVisual({ index }: { index: number }) {
  const pattern = patterns[index % patterns.length];
  return (
    <svg viewBox="0 0 280 240" className="h-full w-full" aria-hidden="true">
      {pattern}
    </svg>
  );
}

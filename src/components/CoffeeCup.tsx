export default function CoffeeCup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 200" className={className} fill="none" role="img" aria-label="A steaming cup of coffee">
      <g stroke="var(--info)" strokeWidth="3" strokeLinecap="round">
        <path className="steam" d="M82 58c-10-10 10-18 0-30" />
        <path className="steam steam-2" d="M110 58c-10-10 10-18 0-30" />
        <path className="steam steam-3" d="M138 58c-10-10 10-18 0-30" />
      </g>
      <path
        d="M52 74h116v46a48 48 0 0 1-48 48h-20a48 48 0 0 1-48-48V74z"
        fill="var(--accent-soft)"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M168 88h10a20 20 0 0 1 0 40h-14" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
      <path d="M52 92h116" stroke="var(--accent)" strokeWidth="4" />
      <path
        d="M110 150c-14-10-22-18-22-27a12 12 0 0 1 22-6 12 12 0 0 1 22 6c0 9-8 17-22 27z"
        fill="var(--accent)"
      />
      <ellipse cx="110" cy="182" rx="76" ry="8" fill="var(--line-strong)" opacity="0.5" />
      <g fill="var(--info)">
        <path className="twinkle" d="M24 40l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
        <path className="twinkle" d="M196 30l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
      </g>
    </svg>
  );
}

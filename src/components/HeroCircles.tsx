export default function HeroCircles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-16 top-0 hidden h-[30rem] w-[30rem] lg:block"
    >
      <div
        className="absolute right-4 top-6 h-80 w-80 rounded-full opacity-[0.16] blur-[2px]"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute right-32 top-40 h-64 w-64 rounded-full border"
        style={{ borderColor: "var(--line-strong)" }}
      />
      <div
        className="absolute right-0 top-56 h-44 w-44 rounded-full"
        style={{ background: "var(--bg-alt)", border: "1px solid var(--line-strong)" }}
      />
      <div
        className="absolute right-52 top-4 h-28 w-28 rounded-full border"
        style={{ borderColor: "var(--line-strong)" }}
      />
    </div>
  );
}

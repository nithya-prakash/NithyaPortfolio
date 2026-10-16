const glyphs = [
  { t: "RAG", x: 6, d: 0, s: 58 },
  { t: "☕", x: 14, d: -22, s: 72 },
  { t: "MRR 0.959", x: 22, d: -40, s: 64 },
  { t: "{ }", x: 31, d: -9, s: 52 },
  { t: "✦", x: 39, d: -31, s: 66 },
  { t: "BM25", x: 47, d: -15, s: 60 },
  { t: "Recall@5", x: 55, d: -46, s: 70 },
  { t: "♥", x: 63, d: -27, s: 56 },
  { t: "LangGraph", x: 71, d: -5, s: 68 },
  { t: "p95 65 ms", x: 79, d: -36, s: 62 },
  { t: "✦", x: 86, d: -19, s: 54 },
  { t: "MLOps", x: 93, d: -43, s: 66 },
  { t: "</>", x: 10, d: -50, s: 74 },
  { t: "0.817", x: 68, d: -55, s: 59 },
];

const stars = [
  { x: 4, y: 18, d: 0, z: 10 }, { x: 12, y: 62, d: 1.2, z: 14 }, { x: 19, y: 34, d: 2.1, z: 9 },
  { x: 27, y: 80, d: 0.6, z: 12 }, { x: 35, y: 12, d: 1.8, z: 10 }, { x: 44, y: 55, d: 2.6, z: 14 },
  { x: 52, y: 24, d: 0.3, z: 9 }, { x: 58, y: 88, d: 1.5, z: 12 }, { x: 66, y: 44, d: 2.3, z: 10 },
  { x: 74, y: 70, d: 0.9, z: 14 }, { x: 82, y: 16, d: 2, z: 9 }, { x: 89, y: 52, d: 1, z: 12 },
  { x: 95, y: 82, d: 2.8, z: 10 }, { x: 8, y: 90, d: 1.4, z: 9 }, { x: 91, y: 30, d: 0.5, z: 14 },
];

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="dots absolute inset-0 opacity-[0.22]" />
      {stars.map((st, i) => (
        <span key={`s${i}`} className="star" style={{ left: `${st.x}%`, top: `${st.y}%`, animationDelay: `${st.d}s`, fontSize: st.z }}>
          ✦
        </span>
      ))}
      {glyphs.map((g, i) => (
        <span
          key={i}
          className="float-glyph"
          style={{ left: `${g.x}%`, animationDuration: `${g.s}s`, animationDelay: `${g.d}s` }}
        >
          {g.t}
        </span>
      ))}
    </div>
  );
}

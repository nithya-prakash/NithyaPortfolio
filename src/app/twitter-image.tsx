import { ImageResponse } from "next/og";

export const alt = "Nithya Madalakote Prakash, AI engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "#140f17",
          color: "#f6edf8",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ fontSize: 30, color: "#f472b6", display: "flex" }}>~/nithya</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginTop: 18, display: "flex" }}>
            Nithya Madalakote Prakash
          </div>
          <div style={{ fontSize: 38, color: "#c4b3cc", marginTop: 26, display: "flex" }}>
            AI systems, measured honestly.
          </div>
          <div style={{ fontSize: 28, color: "#c4b5fd", marginTop: 26, display: "flex" }}>
            RAG · LLM agents · MLOps
          </div>
        </div>
        <svg width="360" height="360" viewBox="0 0 64 64">
          <path d="M32 3C40 3 46 14 46 26c0 4 5 8 5 16 0 12-8 19-19 19S13 54 13 42c0-8 5-12 5-16C18 14 24 3 32 3z" fill="#4c7a2e" />
          <path d="M32 8c6 0 10 9 10 19 0 4 5 8 5 15 0 9-6 15-15 15S17 51 17 42c0-7 5-11 5-15C22 17 26 8 32 8z" fill="#cfe86a" />
          <circle cx="32" cy="42" r="10" fill="#9a6532" />
          <circle cx="28.3" cy="40.5" r="1.4" fill="#2b1a0e" />
          <circle cx="35.7" cy="40.5" r="1.4" fill="#2b1a0e" />
          <path d="M29.2 44c1.6 2 4 2 5.6 0" fill="none" stroke="#2b1a0e" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="25.8" cy="44" r="1.8" fill="#f2a0b4" />
          <circle cx="38.2" cy="44" r="1.8" fill="#f2a0b4" />
        </svg>
      </div>
    ),
    size,
  );
}

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
          <g fill="none" stroke="#c4b5fd" strokeWidth="3" strokeLinecap="round">
            <path d="M23 9c-3 3 3 5 0 9" />
            <path d="M32 7c-3 3 3 5 0 9" />
            <path d="M41 9c-3 3 3 5 0 9" />
          </g>
          <path d="M13 24h32v14a13 13 0 0 1-13 13h-6a13 13 0 0 1-13-13V24z" fill="#3a1a2e" stroke="#f472b6" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M45 28h3a7 7 0 0 1 0 14h-4" fill="none" stroke="#f472b6" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M29 44c-6-4-9-7-9-10a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1c0 3-3 6-9 10z" fill="#f472b6" />
        </svg>
      </div>
    ),
    size,
  );
}

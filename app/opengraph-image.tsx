import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Optruvian — AI products for everyday work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(37,99,235,0.22) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 100% 0%, rgba(124,58,237,0.18) 0%, transparent 65%)",
          color: "#ffffff",
          fontFamily: "Geist, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10.5" stroke="#ffffff" strokeWidth="1.25" />
            <path
              d="M12 4.2 C 12.45 10.7, 13.3 11.55, 19.8 12 C 13.3 12.45, 12.45 13.3, 12 19.8 C 11.55 13.3, 10.7 12.45, 4.2 12 C 10.7 11.55, 11.55 10.7, 12 4.2 Z"
              fill="#ffffff"
            />
          </svg>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Optruvian
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 88,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            <div style={{ display: "flex" }}>One company.</div>
            <div style={{ display: "flex" }}>Many tools.</div>
            <div
              style={{
                display: "flex",
                color: "rgba(255,255,255,0.55)",
                fontStyle: "italic",
              }}
            >
              All built to last.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            AI-powered products for everyday people. No learning curve. No fluff.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <div>optruvian.tech</div>
          <div>Building AI that just works</div>
        </div>
      </div>
    ),
    { ...size },
  );
}

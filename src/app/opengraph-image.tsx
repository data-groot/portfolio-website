import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0f",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8d8878",
            fontSize: 28,
            letterSpacing: 4,
          }}
        >
          <span>{site.monogram}</span>
          <span>{site.location.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              color: "#ebe7de",
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            KRISHNA MIHIR
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              color: "#ff5c1f",
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            TATAVARTHI
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#ebe7de",
            fontSize: 32,
          }}
        >
          <div style={{ width: 56, height: 8, background: "#ff5c1f" }} />
          {site.role}
        </div>
      </div>
    ),
    size
  );
}

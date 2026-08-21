import { ImageResponse } from "next/og";

export const alt = "Value 4 Casa — foreclosure, probate, and as-is real estate in Southern California";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#163332",
          color: "white",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            color: "#d4af37",
            textTransform: "uppercase",
          }}
        >
          Value 4 Casa
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 58,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          Foreclosure, probate & as-is sales in Southern California
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Commerce, CA · 4.9 from 100 Google reviews · (949) 325-5813
        </div>
      </div>
    ),
    size,
  );
}

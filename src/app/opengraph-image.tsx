import { ImageResponse } from "next/og";

export const alt =
  "Harrie Kevin Gallo — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          backgroundColor: "#101010",
          color: "#eeeeee",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 9999,
              backgroundColor: "#ffb423",
            }}
          />
          <div style={{ fontSize: 28, color: "#b5b5b5" }}>
            harriekevingallo.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
            Harrie Kevin Gallo
          </div>
          <div style={{ fontSize: 36, color: "#b5b5b5" }}>
            Full stack developer — websites and online stores that turn
            visitors into customers.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#7b7b7b" }}>
          Cebu City, Philippines · Working worldwide
        </div>
      </div>
    ),
    { ...size }
  );
}

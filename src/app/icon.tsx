import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2198DB 0%, #0077BE 55%, #0063A0 100%)",
          borderRadius: 14,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
          <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.85">
            <path d="M24 24 13 14M24 24l11-10M24 24 13 34M24 24l11 10" />
          </g>
          <g fill="#fff">
            <circle cx="24" cy="24" r="5" />
            <circle cx="13" cy="14" r="3.2" />
            <circle cx="35" cy="14" r="3.2" />
            <circle cx="13" cy="34" r="3.2" />
            <circle cx="35" cy="34" r="3.2" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — Salesforce consulting, Agentforce and integration architecture`;
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
          padding: 72,
          background: "#04070c",
          backgroundImage:
            "radial-gradient(900px circle at 20% 0%, rgba(0,119,190,0.35), transparent 60%), radial-gradient(700px circle at 100% 100%, rgba(14,165,233,0.18), transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #2198DB, #0063A0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
              <g stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.85">
                <path d="M24 24 13 14M24 24l11-10M24 24 13 34M24 24l11 10" />
              </g>
              <g fill="#fff">
                <circle cx="24" cy="24" r="5" />
                <circle cx="13" cy="14" r="3" />
                <circle cx="35" cy="14" r="3" />
                <circle cx="13" cy="34" r="3" />
                <circle cx="35" cy="34" r="3" />
              </g>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, color: "#f8fafc", fontWeight: 600 }}>
              Zentium Technologies
            </span>
            <span style={{ fontSize: 18, color: "#64748b", letterSpacing: 2 }}>
              SEAMLESS TECH. SMARTER SOLUTIONS.
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 62,
              lineHeight: 1.12,
              color: "#f8fafc",
              fontWeight: 600,
              letterSpacing: -1.5,
              maxWidth: 940,
            }}
          >
            Salesforce, architected to still make sense in year three
          </span>
          <span style={{ fontSize: 26, color: "#94a3b8", maxWidth: 880 }}>
            Agentforce · Integration architecture · Experience Cloud · Managed services
          </span>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 22, color: "#7dd3fc" }}>
          <span>17x Salesforce certified</span>
          <span style={{ color: "#1e293b" }}>|</span>
          <span>zentiumtechnologies.com</span>
        </div>
      </div>
    ),
    size,
  );
}

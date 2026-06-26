import React from "react";
import { useLocation, useParams } from "react-router";

export function meta() {
  return [{ title: "Page" }];
}

const LANG_COLORS: Record<string, { bg: string; fg: string }> = {
  fr: { bg: "#e8f5e9", fg: "#2e7d32" },
  ru: { bg: "#fce4ec", fg: "#c62828" },
  it: { bg: "#fff3e0", fg: "#e65100" },
  tr: { bg: "#f3e5f5", fg: "#6a1b9a" },
};

export default function LangPages() {
  const location = useLocation();
  const params = useParams();
  const splat = params["*"] ?? "";

  const lang = location.pathname.split("/").filter(Boolean)[0] ?? "?";
  const slug = splat ? `/${splat}` : "/";
  const colors = LANG_COLORS[lang] ?? { bg: "#f5f5f5", fg: "#333" };

  return (
    <div style={page}>
      <div style={card}>
        <span style={{ ...badge, background: colors.bg, color: colors.fg }}>{lang.toUpperCase()}</span>
        <h1 style={title}>Page: {location.pathname}</h1>
        <p style={sub}>Slug within language: <code style={code}>{slug}</code></p>
        <p style={hint}>Placeholder — content will be added in the next phase.</p>
      </div>
    </div>
  );
}

const page:  React.CSSProperties = { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" };
const card:  React.CSSProperties = { background: "#fff", borderRadius: 8, padding: "2rem 2.5rem", boxShadow: "0 1px 4px rgba(0,0,0,.12)", maxWidth: 540, width: "100%" };
const badge: React.CSSProperties = { display: "inline-block", borderRadius: 4, padding: "2px 10px", fontSize: 12, fontWeight: 700, marginBottom: 12 };
const title: React.CSSProperties = { margin: "0 0 8px", fontSize: 22, fontWeight: 700, color: "#111" };
const sub:   React.CSSProperties = { margin: "0 0 16px", fontSize: 14, color: "#555" };
const code:  React.CSSProperties = { background: "#f0f0f0", borderRadius: 3, padding: "1px 5px", fontFamily: "monospace", fontSize: 13 };
const hint:  React.CSSProperties = { margin: 0, fontSize: 13, color: "#888", fontStyle: "italic" };

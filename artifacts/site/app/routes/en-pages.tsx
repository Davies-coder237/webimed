import React from "react";
import { useLocation, useParams } from "react-router";

export function meta() {
  return [{ title: "Page" }];
}

export default function EnPages() {
  const location = useLocation();
  const params = useParams();
  const slug = params["*"] ?? location.pathname;

  return (
    <div style={page}>
      <div style={card}>
        <span style={badge}>EN</span>
        <h1 style={title}>Page: {location.pathname}</h1>
        <p style={sub}>Slug: <code style={code}>{slug}</code></p>
        <p style={hint}>Placeholder — content will be added in the next phase.</p>
      </div>
    </div>
  );
}

const page:  React.CSSProperties = { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" };
const card:  React.CSSProperties = { background: "#fff", borderRadius: 8, padding: "2rem 2.5rem", boxShadow: "0 1px 4px rgba(0,0,0,.12)", maxWidth: 540, width: "100%" };
const badge: React.CSSProperties = { display: "inline-block", background: "#e7f0ff", color: "#2255cc", borderRadius: 4, padding: "2px 10px", fontSize: 12, fontWeight: 700, marginBottom: 12 };
const title: React.CSSProperties = { margin: "0 0 8px", fontSize: 22, fontWeight: 700, color: "#111" };
const sub:   React.CSSProperties = { margin: "0 0 16px", fontSize: 14, color: "#555" };
const code:  React.CSSProperties = { background: "#f0f0f0", borderRadius: 3, padding: "1px 5px", fontFamily: "monospace", fontSize: 13 };
const hint:  React.CSSProperties = { margin: 0, fontSize: 13, color: "#888", fontStyle: "italic" };

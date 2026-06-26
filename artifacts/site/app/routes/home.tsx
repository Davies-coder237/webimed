import { useLocation } from "react-router";

export function meta() {
  return [{ title: "Home" }];
}

export default function Home() {
  const location = useLocation();
  return <Placeholder path={location.pathname} lang="en" note="Static home page" />;
}

function Placeholder({ path, lang, note }: { path: string; lang: string; note: string }) {
  return (
    <div style={page}>
      <div style={card}>
        <span style={badge}>{lang.toUpperCase()}</span>
        <h1 style={title}>Page: {path}</h1>
        <p style={sub}>{note}</p>
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
const hint:  React.CSSProperties = { margin: 0, fontSize: 13, color: "#888", fontStyle: "italic" };

import React from "react";

import React from "react";

export function NotFoundPage({ path }: { path: string }) {
  return (
    <div style={page}>
      <div style={card}>
        <span style={badge}>404</span>
        <h1 style={title}>Page introuvable</h1>
        <p style={sub}>
          <code style={code}>{path}</code> n'existe pas dans la table de routes.
        </p>
      </div>
    </div>
  );
}

const page:  React.CSSProperties = { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff8f8" };
const card:  React.CSSProperties = { background: "#fff", borderRadius: 8, padding: "2rem 2.5rem", boxShadow: "0 1px 4px rgba(0,0,0,.12)", maxWidth: 480, width: "100%" };
const badge: React.CSSProperties = { display: "inline-block", background: "#fee2e2", color: "#b91c1c", borderRadius: 4, padding: "2px 10px", fontSize: 12, fontWeight: 700, marginBottom: 12 };
const title: React.CSSProperties = { margin: "0 0 8px", fontSize: 22, fontWeight: 700, color: "#111" };
const sub:   React.CSSProperties = { margin: 0, fontSize: 14, color: "#555" };
const code:  React.CSSProperties = { background: "#f0f0f0", borderRadius: 3, padding: "1px 5px", fontFamily: "monospace", fontSize: 13 };

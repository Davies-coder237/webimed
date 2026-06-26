import React from "react";
import { useLocation } from "react-router";
import { resolvePage } from "../i18n/resolve";
import { NotFoundPage } from "./not-found-page";

/**
 * hair_type_en group — 2 explicit routes: /1a-hair-type, /1b-hair-type
 * No :param in URL (routes are explicit), so we read the slug from useLocation().
 */
export function meta() {
  return [{ title: "Hair Type" }];
}

export default function HairType() {
  const { pathname } = useLocation();
  const resolved = resolvePage("en", pathname);

  if (!resolved || resolved.key !== "hair_type_en") {
    return <NotFoundPage path={pathname} />;
  }

  return (
    <div style={page}>
      <div style={card}>
        <span style={badge}>EN · hair_type_en</span>
        <h1 style={title}>{resolved.slug ?? pathname.slice(1)}</h1>
        <p style={sub}>
          Group: <code style={code}>{resolved.key}</code>
          {" "}· Path: <code style={code}>{pathname}</code>
        </p>
        <p style={hint}>Placeholder — content will be added in the next phase.</p>
      </div>
    </div>
  );
}

const page:  React.CSSProperties = { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" };
const card:  React.CSSProperties = { background: "#fff", borderRadius: 8, padding: "2rem 2.5rem", boxShadow: "0 1px 4px rgba(0,0,0,.12)", maxWidth: 540, width: "100%" };
const badge: React.CSSProperties = { display: "inline-block", background: "#e8f5e9", color: "#2e7d32", borderRadius: 4, padding: "2px 10px", fontSize: 12, fontWeight: 700, marginBottom: 12 };
const title: React.CSSProperties = { margin: "0 0 8px", fontSize: 22, fontWeight: 700, color: "#111" };
const sub:   React.CSSProperties = { margin: "0 0 16px", fontSize: 14, color: "#555" };
const code:  React.CSSProperties = { background: "#f0f0f0", borderRadius: 3, padding: "1px 5px", fontFamily: "monospace", fontSize: 13 };
const hint:  React.CSSProperties = { margin: 0, fontSize: 13, color: "#888", fontStyle: "italic" };

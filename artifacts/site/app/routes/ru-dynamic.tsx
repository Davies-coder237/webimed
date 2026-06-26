import React from "react";
import { useParams } from "react-router";
import { resolvePage } from "../i18n/resolve";
import { NotFoundPage } from "./not-found-page";

/**
 * Handles all single-segment RU dynamic paths:
 *   - celebrity_hair_transplant_ru  (e.g. /ru/andrei-beburishvili-peresadka-volos)
 *   - grafts_count_ru               (e.g. /ru/peresadka-volos-3500-graftov)
 *   - RU variants of celebrity_hair_transplant_en (e.g. /ru/peresadka-volos-2000-graftov)
 *
 * Single-segment RU paths match `ru/:slug` before `ru/*`, so this component
 * also receives RU static pages with single-segment slugs (faq, why-worbimed…).
 * resolvePage() handles them transparently.
 */
export function meta() {
  return [{ title: "Page RU" }];
}

const DYNAMIC_KEYS = new Set([
  "celebrity_hair_transplant_ru",
  "grafts_count_ru",
  "celebrity_hair_transplant_en",
]);

export default function RuDynamic() {
  const { slug } = useParams<{ slug: string }>();
  const decodedSlug = slug ? decodeURIComponent(slug) : "";
  const path = `/${decodedSlug}`;
  const resolved = resolvePage("ru", path);

  if (!resolved) return <NotFoundPage path={`/ru${path}`} />;

  const isDynamic = resolved.type === "dynamic" && DYNAMIC_KEYS.has(resolved.key);

  return (
    <div style={page}>
      <div style={card}>
        <span style={{ ...badge, ...(isDynamic ? dynamicStyle : staticStyle) }}>
          RU · {isDynamic ? resolved.key : "static"}
        </span>
        <h1 style={title}>{resolved.slug ?? resolved.key}</h1>
        <p style={sub}>
          Type: <code style={code}>{resolved.type}</code>
          {resolved.slug && <> · Slug: <code style={code}>{resolved.slug}</code></>}
          {" "}· Path: <code style={code}>/ru{path}</code>
        </p>
        <p style={hint}>Placeholder — content will be added in the next phase.</p>
      </div>
    </div>
  );
}

const page:        React.CSSProperties = { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" };
const card:        React.CSSProperties = { background: "#fff", borderRadius: 8, padding: "2rem 2.5rem", boxShadow: "0 1px 4px rgba(0,0,0,.12)", maxWidth: 540, width: "100%" };
const badge:       React.CSSProperties = { display: "inline-block", borderRadius: 4, padding: "2px 10px", fontSize: 12, fontWeight: 700, marginBottom: 12 };
const dynamicStyle: React.CSSProperties = { background: "#fce4ec", color: "#c62828" };
const staticStyle:  React.CSSProperties = { background: "#f3e5f5", color: "#6a1b9a" };
const title:       React.CSSProperties = { margin: "0 0 8px", fontSize: 22, fontWeight: 700, color: "#111" };
const sub:         React.CSSProperties = { margin: "0 0 16px", fontSize: 14, color: "#555" };
const code:        React.CSSProperties = { background: "#f0f0f0", borderRadius: 3, padding: "1px 5px", fontFamily: "monospace", fontSize: 13 };
const hint:        React.CSSProperties = { margin: 0, fontSize: 13, color: "#888", fontStyle: "italic" };

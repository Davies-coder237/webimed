import React from "react";
import { useParams, useLocation } from "react-router";
import { resolvePage } from "../i18n/resolve";
import type { Lang } from "../i18n/routes";
import { NotFoundPage } from "./not-found-page";

export function meta() {
  return [{ title: "Blog" }];
}

const SUPPORTED_LANGS = new Set<Lang>(["fr", "ru", "it", "tr"]);

const LANG_COLORS: Record<string, { bg: string; fg: string }> = {
  en: { bg: "#e7f0ff", fg: "#2255cc" },
  fr: { bg: "#e8f5e9", fg: "#2e7d32" },
  ru: { bg: "#fce4ec", fg: "#c62828" },
  it: { bg: "#fff3e0", fg: "#e65100" },
  tr: { bg: "#f3e5f5", fg: "#6a1b9a" },
};

export default function BlogCategory() {
  const { category } = useParams<{ category: string }>();
  const { pathname } = useLocation();

  // Detect lang from URL prefix (e.g. /fr/blog/beard-transplant → "fr")
  const parts = pathname.split("/").filter(Boolean);
  const langRaw = parts[0] ?? "";
  const lang: Lang = SUPPORTED_LANGS.has(langRaw as Lang) ? (langRaw as Lang) : "en";

  const path = lang === "en" ? pathname : "/" + parts.slice(1).join("/");
  const resolved = resolvePage(lang, path);

  const colors = LANG_COLORS[lang] ?? LANG_COLORS.en;

  if (!resolved || resolved.key !== "blog_category_en") {
    return <NotFoundPage path={pathname} />;
  }

  return (
    <div style={page}>
      <div style={card}>
        <span style={{ ...badge, background: colors.bg, color: colors.fg }}>
          {lang.toUpperCase()} · blog_category_en
        </span>
        <h1 style={title}>{resolved.slug ?? category}</h1>
        <p style={sub}>
          Group: <code style={code}>blog_category_en</code>
          {" "}· Path: <code style={code}>{pathname}</code>
        </p>
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

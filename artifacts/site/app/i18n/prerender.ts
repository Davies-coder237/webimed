import { STATIC_ROUTES } from "./routes";
import { DYNAMIC_GROUPS } from "../data/dynamic-routes";

type Lang = "en" | "fr" | "it" | "ru" | "tr";

function buildPath(lang: Lang, slug: string): string {
  if (lang === "en") return slug;
  if (slug === "/") return `/${lang}/`;
  return `/${lang}${slug}`;
}

export function getAllPrerenderPaths(): string[] {
  const paths = new Set<string>();

  for (const entry of STATIC_ROUTES) {
    for (const [lang, slug] of Object.entries(entry.langs) as [Lang, string][]) {
      const p = buildPath(lang, slug);
      paths.add(p);
    }
  }

  for (const group of DYNAMIC_GROUPS) {
    for (const variant of group.variants) {
      for (const [lang, slug] of Object.entries(variant.langs) as [Lang, string][]) {
        const p = buildPath(lang, slug);
        paths.add(p);
      }
    }
  }

  return Array.from(paths).sort();
}

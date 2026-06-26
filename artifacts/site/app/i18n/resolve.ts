import { STATIC_ROUTES, type Lang } from "./routes";
import { DYNAMIC_GROUPS } from "../data/dynamic-routes";

export interface ResolvedPage {
  type: "static" | "dynamic";
  key: string;
  slug?: string;
  lang: Lang;
}

/** Decode percent-encoded sequences for comparison, without throwing. */
function decode(p: string): string {
  try { return decodeURIComponent(p); } catch { return p; }
}

/**
 * Resolve a path to a known page entry.
 *
 * @param lang  The language ("en" | "fr" | "it" | "ru" | "tr")
 * @param path  Path *within* that language — starts with "/", no trailing
 *              slash except for root "/". The caller strips the lang prefix.
 * @returns     ResolvedPage or null (genuine 404).
 */
export function resolvePage(lang: Lang, path: string): ResolvedPage | null {
  // Normalise: remove trailing slash (except root), decode percent-encoding
  const stripped = path === "" ? "/" : path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  const normalizedDecoded = decode(stripped);

  for (const route of STATIC_ROUTES) {
    const stored = route.langs[lang];
    if (stored !== undefined && decode(stored) === normalizedDecoded) {
      return { type: "static", key: route.key, lang };
    }
  }

  for (const group of DYNAMIC_GROUPS) {
    for (const variant of group.variants) {
      const stored = variant.langs[lang];
      if (stored !== undefined && decode(stored) === normalizedDecoded) {
        return { type: "dynamic", key: group.key, slug: variant.slug, lang };
      }
    }
  }

  return null;
}

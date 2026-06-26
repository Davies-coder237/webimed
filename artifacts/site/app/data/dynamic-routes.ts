export type Lang = "en" | "fr" | "it" | "ru" | "tr";

export interface DynamicVariant {
  slug: string;
  langs: Partial<Record<Lang, string>>;
}

export interface DynamicGroup {
  key: string;
  pattern: string;
  note: string;
  variants: DynamicVariant[];
}

export const DYNAMIC_GROUPS: DynamicGroup[] = [
  // ── hair_type_en ──────────────────────────────────────────────────────────
  // Pattern: ^\d[ab]-hair-type$  |  2 variants  |  EN only
  {
    key: "hair_type_en",
    pattern: "^\\d[ab]-hair-type$",
    note: "Hair type classification pages (EN)",
    variants: [
      { slug: "1a-hair-type", langs: { en: "/1a-hair-type" } },
      { slug: "1b-hair-type", langs: { en: "/1b-hair-type" } },
    ],
  },

  // ── celebrity_hair_transplant_en ──────────────────────────────────────────
  // Pattern: ^(?P<celeb>[\w-]+)-hair-transplant$  |  34 variants  |  EN + some RU
  // TODO: Replace placeholder slugs with the actual 34 celebrity / count slugs.
  // Each variant that has a RU version must include a `ru` entry with the RU slug.
  {
    key: "celebrity_hair_transplant_en",
    pattern: "^(?P<celeb>[\\w-]+)-hair-transplant$",
    note: "Celebrity / graft-count hair-transplant pages (EN + optional RU)",
    variants: [
      { slug: "2000-grafts-hair-transplant", langs: { en: "/2000-grafts-hair-transplant", ru: "/peresadka-volos-2000-graftov" } },
      // TODO: add the remaining 33 EN variants (and their RU slugs where applicable)
      // Example format:
      // { slug: "wayne-rooney-hair-transplant", langs: { en: "/wayne-rooney-hair-transplant" } },
    ],
  },

  // ── celebrity_hair_transplant_ru ──────────────────────────────────────────
  // Pattern: ^(?P<celeb>[\w-]+)-peresadka-volos$  |  13 variants  |  RU only
  // TODO: Replace placeholder slugs with the actual 13 celebrity RU slugs.
  {
    key: "celebrity_hair_transplant_ru",
    pattern: "^(?P<celeb>[\\w-]+)-peresadka-volos$",
    note: "Celebrity hair-transplant pages in Russian",
    variants: [
      { slug: "andrei-beburishvili-peresadka-volos", langs: { ru: "/andrei-beburishvili-peresadka-volos" } },
      // TODO: add the remaining 12 RU celebrity variants
    ],
  },

  // ── blog_category_en ──────────────────────────────────────────────────────
  // Pattern: ^blog/[\w-]+$  |  4 variants  |  EN only
  // TODO: Replace placeholder slugs with the actual 4 blog category slugs.
  {
    key: "blog_category_en",
    pattern: "^blog/[\\w-]+$",
    note: "Blog category pages (EN)",
    variants: [
      { slug: "blog/afro-hair",    langs: { en: "/blog/afro-hair" } },
      // TODO: add the remaining 3 blog category slugs
      // { slug: "blog/fue",       langs: { en: "/blog/fue" } },
      // { slug: "blog/dhi",       langs: { en: "/blog/dhi" } },
      // { slug: "blog/beard",     langs: { en: "/blog/beard" } },
    ],
  },

  // ── grafts_count_ru ───────────────────────────────────────────────────────
  // Pattern: ^peresadka-volos-(?P<n>\d+)-graftov$  |  7 variants  |  RU only
  {
    key: "grafts_count_ru",
    pattern: "^peresadka-volos-(?P<n>\\d+)-graftov$",
    note: "Graft-count pages in Russian",
    variants: [
      { slug: "peresadka-volos-500-graftov",  langs: { ru: "/peresadka-volos-500-graftov" } },
      { slug: "peresadka-volos-1000-graftov", langs: { ru: "/peresadka-volos-1000-graftov" } },
      { slug: "peresadka-volos-1500-graftov", langs: { ru: "/peresadka-volos-1500-graftov" } },
      { slug: "peresadka-volos-2000-graftov", langs: { ru: "/peresadka-volos-2000-graftov" } },
      { slug: "peresadka-volos-2500-graftov", langs: { ru: "/peresadka-volos-2500-graftov" } },
      { slug: "peresadka-volos-3000-graftov", langs: { ru: "/peresadka-volos-3000-graftov" } },
      { slug: "peresadka-volos-3500-graftov", langs: { ru: "/peresadka-volos-3500-graftov" } },
    ],
  },
];

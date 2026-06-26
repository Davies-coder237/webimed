import type { Lang } from "../i18n/routes";

export interface DynamicVariant {
  slug: string;
  langs: Partial<Record<Lang, string>>;
}

export interface DynamicGroup {
  key: string;
  note: string;
  variants: DynamicVariant[];
}

export const DYNAMIC_GROUPS: DynamicGroup[] = [
  // ── hair_type_en ─────────────────────────────────────────────────────────
  // 2 variants · EN only
  {
    key: "hair_type_en",
    note: "Hair type classification pages (EN)",
    variants: [
      { slug: "1a-hair-type", langs: { en: "/1a-hair-type" } },
      { slug: "1b-hair-type", langs: { en: "/1b-hair-type" } },
    ],
  },

  // ── celebrity_hair_transplant_en ─────────────────────────────────────────
  // 34 variants · EN + optional RU/TR (graft-count pages included)
  {
    key: "celebrity_hair_transplant_en",
    note: "Celebrity & graft-count hair-transplant pages (EN + optional RU/TR)",
    variants: [
      // Graft count pages (EN + optional RU/TR)
      { slug: "2000-grafts-hair-transplant", langs: { en: "/2000-grafts-hair-transplant", ru: "/peresadka-volos-2000-graftov" } },
      { slug: "2500-grafts-hair-transplant", langs: { en: "/2500-grafts-hair-transplant", ru: "/peresadka-volos-2500-graftov" } },
      { slug: "3000-grafts-hair-transplant", langs: { en: "/3000-grafts-hair-transplant", ru: "/peresadka-volos-3000-graftov" } },
      { slug: "3500-grafts-hair-transplant", langs: { en: "/3500-grafts-hair-transplant" } },
      { slug: "4000-grafts-hair-transplant", langs: { en: "/4000-grafts-hair-transplant", ru: "/peresadka-volos-4000-graftov" } },
      { slug: "4500-grafts-hair-transplant", langs: { en: "/4500-grafts-hair-transplant", ru: "/peresadka-volos-4500-graftov" } },
      { slug: "5000-grafts-hair-transplant", langs: { en: "/5000-grafts-hair-transplant", ru: "/peresadka-volos-5000-graftov", tr: "/5000-greft-sac-ekimi" } },
      { slug: "8000-grafts-hair-transplant", langs: { en: "/8000-grafts-hair-transplant" } },
      // Celebrity pages (EN only unless noted)
      { slug: "andrew-tate-hair-transplant",       langs: { en: "/andrew-tate-hair-transplant" } },
      { slug: "andros-townsend-hair-transplant",    langs: { en: "/andros-townsend-hair-transplant" } },
      { slug: "artas-robotic-hair-transplant",      langs: { en: "/artas-robotic-hair-transplant" } },
      { slug: "cbum-hair-transplant",              langs: { en: "/cbum-hair-transplant" } },
      { slug: "chris-pratt-hair-transplant",        langs: { en: "/chris-pratt-hair-transplant" } },
      { slug: "crown-hair-transplant",             langs: { en: "/crown-hair-transplant" } },
      { slug: "david-beckham-hair-transplant",      langs: { en: "/david-beckham-hair-transplant" } },
      { slug: "elon-musk-hair-transplant",         langs: { en: "/elon-musk-hair-transplant" } },
      { slug: "jamie-foxx-hair-transplant",        langs: { en: "/jamie-foxx-hair-transplant" } },
      { slug: "jidion-hair-transplant",            langs: { en: "/jidion-hair-transplant" } },
      { slug: "justin-bieber-hair-transplant",     langs: { en: "/justin-bieber-hair-transplant" } },
      { slug: "kevin-costner-hair-transplant",     langs: { en: "/kevin-costner-hair-transplant" } },
      { slug: "kirk-cousins-hair-transplant",      langs: { en: "/kirk-cousins-hair-transplant" } },
      { slug: "lebron-james-hair-transplant",      langs: { en: "/lebron-james-hair-transplant" } },
      { slug: "lewis-hamilton-hair-transplant",    langs: { en: "/lewis-hamilton-hair-transplant" } },
      { slug: "machine-gun-kelly-hair-transplant", langs: { en: "/machine-gun-kelly-hair-transplant" } },
      { slug: "mo-salah-hair-transplant",          langs: { en: "/mo-salah-hair-transplant" } },
      { slug: "rob-brydon-hair-transplant",        langs: { en: "/rob-brydon-hair-transplant" } },
      { slug: "rob-holding-hair-transplant",       langs: { en: "/rob-holding-hair-transplant" } },
      { slug: "salman-khan-hair-transplant",       langs: { en: "/salman-khan-hair-transplant" } },
      { slug: "steve-carell-hair-transplant",      langs: { en: "/steve-carell-hair-transplant" } },
      { slug: "ter-stegen-hair-transplant",        langs: { en: "/ter-stegen-hair-transplant", ru: "/ter-stegen-peresadka-volos" } },
      { slug: "tom-brady-hair-transplant",         langs: { en: "/tom-brady-hair-transplant" } },
      { slug: "tristan-tate-hair-transplant",      langs: { en: "/tristan-tate-hair-transplant" } },
      { slug: "wayne-rooney-hair-transplant",      langs: { en: "/wayne-rooney-hair-transplant" } },
      { slug: "will-arnett-hair-transplant",       langs: { en: "/will-arnett-hair-transplant" } },
    ],
  },

  // ── celebrity_hair_transplant_ru ─────────────────────────────────────────
  // 11 variants · RU only (pattern: *-peresadka-volos)
  {
    key: "celebrity_hair_transplant_ru",
    note: "Celebrity hair-transplant pages in Russian only",
    variants: [
      { slug: "neudacnaya-peresadka-volos",          langs: { ru: "/neudacnaya-peresadka-volos" } },
      { slug: "andrei-beburishvili-peresadka-volos", langs: { ru: "/andrei-beburishvili-peresadka-volos" } },
      { slug: "ayza-peresadka-volos",               langs: { ru: "/ayza-peresadka-volos" } },
      { slug: "david-beckham-peresadka-volos",      langs: { ru: "/david-beckham-peresadka-volos" } },
      { slug: "elon-musk-peresadka-volos",          langs: { ru: "/elon-musk-peresadka-volos" } },
      { slug: "grigoriy-leps-peresadka-volos",      langs: { ru: "/grigoriy-leps-peresadka-volos" } },
      { slug: "pavel-durov-peresadka-volos",        langs: { ru: "/pavel-durov-peresadka-volos" } },
      { slug: "rob-holding-peresadka-volos",        langs: { ru: "/rob-holding-peresadka-volos" } },
      { slug: "ruslan-beliy-peresadka-volos",       langs: { ru: "/ruslan-beliy-peresadka-volos" } },
      { slug: "slava-marlow-peresadka-volos",       langs: { ru: "/slava-marlow-peresadka-volos" } },
      { slug: "stas-mihailov-peresadka-volos",      langs: { ru: "/stas-mihailov-peresadka-volos" } },
      { slug: "zubarefff-peresadka-volos",          langs: { ru: "/zubarefff-peresadka-volos" } },
    ],
  },

  // ── blog_category_en ─────────────────────────────────────────────────────
  // 4 variants · EN + optional RU/TR
  {
    key: "blog_category_en",
    note: "Blog sub-category pages (EN + optional RU/TR)",
    variants: [
      { slug: "afro-hair",          langs: { en: "/blog/afro-hair" } },
      { slug: "beard-transplant",   langs: { en: "/blog/beard-transplant",    ru: "/%d0%b1%d0%bb%d0%be%d0%b3/peresadka-borodi",   tr: "/sac-ekimi-blogu/sakal-ekimi" } },
      { slug: "eyebrow-transplant", langs: { en: "/blog/eyebrow-transplant",  ru: "/%d0%b1%d0%bb%d0%be%d0%b3/peresadka-brovey",   tr: "/sac-ekimi-blogu/kas-ekimi" } },
      { slug: "hair-transplant",    langs: { en: "/blog/hair-transplant",     ru: "/%d0%b1%d0%bb%d0%be%d0%b3/peresadka-volos",    tr: "/sac-ekimi-blogu/sac-ekimi" } },
    ],
  },

  // ── grafts_count_ru ──────────────────────────────────────────────────────
  // 1 variant · RU only (no EN counterpart)
  {
    key: "grafts_count_ru",
    note: "Graft-count pages in Russian with no EN equivalent",
    variants: [
      { slug: "peresadka-volos-3500-graftov", langs: { ru: "/peresadka-volos-3500-graftov" } },
    ],
  },
];

import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // ── Blog sub-categories (EN + RU/TR variants) ─────────────────────────
  route("blog/:category", "routes/blog-category.tsx"),

  // ── EN static pages — listed explicitly so they take priority over :slug ─
  route("services",                               "routes/en-pages.tsx", { id: "en-services" }),
  route("contact",                                "routes/en-pages.tsx", { id: "en-contact" }),
  route("faq",                                    "routes/en-pages.tsx", { id: "en-faq" }),
  route("blog",                                   "routes/en-pages.tsx", { id: "en-blog-index" }),
  route("articles",                               "routes/en-pages.tsx", { id: "en-articles" }),
  route("why-worbimed",                           "routes/en-pages.tsx", { id: "en-why-worbimed" }),
  route("hair-transplant",                        "routes/en-pages.tsx", { id: "en-hair-transplant" }),
  route("hair-transplant-turkey-cost",            "routes/en-pages.tsx", { id: "en-ht-cost" }),
  route("hair-transplant-in-turkey-reviews",      "routes/en-pages.tsx", { id: "en-ht-reviews" }),
  route("hair-transplant-before-and-after",       "routes/en-pages.tsx", { id: "en-ht-before-after" }),
  route("hair-transplant-timeline-progress",      "routes/en-pages.tsx", { id: "en-ht-timeline" }),
  route("hair-transplant-after-10-years",         "routes/en-pages.tsx", { id: "en-ht-10y" }),
  route("is-hair-transplant-in-turkey-safe",      "routes/en-pages.tsx", { id: "en-ht-safe" }),
  route("hair-transplant-for-black-women",        "routes/en-pages.tsx", { id: "en-ht-bw" }),
  route("hair-transplant-in-birmingham",          "routes/en-pages.tsx", { id: "en-ht-birmingham" }),
  route("hair-transplant-in-istanbul",            "routes/en-pages.tsx", { id: "en-ht-istanbul" }),
  route("afro-hair-transplant-in-turkey",         "routes/en-pages.tsx", { id: "en-afro" }),
  route("unshaven-hair-transplant-in-turkey",     "routes/en-pages.tsx", { id: "en-unshaven" }),
  route("forehead-reduction-turkey",              "routes/en-pages.tsx", { id: "en-forehead" }),
  route("why-is-hair-transplant-popular-in-turkey", "routes/en-pages.tsx", { id: "en-why-turkey" }),
  route("fue-sapphire-hair-transplant-in-turkey", "routes/en-pages.tsx", { id: "en-fue" }),
  route("dhi-hair-transplant-in-turkey",          "routes/en-pages.tsx", { id: "en-dhi" }),
  route("beard-transplant-in-turkey",             "routes/en-pages.tsx", { id: "en-beard" }),
  route("eyebrow-transplant-in-turkey",           "routes/en-pages.tsx", { id: "en-eyebrow" }),
  route("women-hair-transplant-in-turkey",        "routes/en-pages.tsx", { id: "en-women" }),
  route("privacy-policy",                         "routes/en-pages.tsx", { id: "en-privacy" }),
  route("eminem-beard-transplant",                "routes/en-pages.tsx", { id: "en-eminem" }),

  // ── EN dynamic: hair_type_en (2 explicit variants) ────────────────────
  route("1a-hair-type", "routes/hair-type.tsx", { id: "en-1a-hair-type" }),
  route("1b-hair-type", "routes/hair-type.tsx", { id: "en-1b-hair-type" }),

  // ── EN dynamic: celebrity_hair_transplant_en (34 variants via :slug) ──
  // Only reached after all explicit EN static routes above fail to match.
  route(":slug", "routes/celebrity-transplant-en.tsx", { id: "en-celeb" }),

  // ── RU dynamic: single-segment slugs (celebrity_ru, grafts_ru, celeb_en RU variants) ─
  // Takes priority over ru/* for single-segment RU paths.
  route("ru/:slug", "routes/ru-dynamic.tsx", { id: "ru-dynamic" }),

  // ── Lang catch-alls (multi-segment statics + 404) ─────────────────────
  route("fr/*", "routes/lang-pages.tsx", { id: "routes/fr-pages" }),
  route("ru/*", "routes/lang-pages.tsx", { id: "routes/ru-pages" }),
  route("it/*", "routes/lang-pages.tsx", { id: "routes/it-pages" }),
  route("tr/*", "routes/lang-pages.tsx", { id: "routes/tr-pages" }),

  // ── EN catch-all: only for multi-segment EN paths + true 404 ──────────
  route("*", "routes/en-pages.tsx"),
] satisfies RouteConfig;

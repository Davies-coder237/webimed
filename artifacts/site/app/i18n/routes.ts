export type Lang = "en" | "fr" | "it" | "ru" | "tr";

export interface RouteEntry {
  key: string;
  langs: Partial<Record<Lang, string>>;
}

export const STATIC_ROUTES: RouteEntry[] = [
  // ── HOME ──────────────────────────────────────────────────────────────────
  { key: "home",          langs: { en: "/", ru: "/", fr: "/", it: "/", tr: "/" } },
  { key: "home-ru-alt",   langs: { ru: "/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f" } },
  { key: "home-fr-alt",   langs: { fr: "/accueil" } },
  { key: "home-it-alt",   langs: { it: "/home" } },
  { key: "home-tr-alt",   langs: { tr: "/ana-sayfa" } },

  // ── NAVIGATION ─────────────────────────────────────────────────────────────
  { key: "services",      langs: { en: "/services",                   ru: "/%d1%81%d0%b5%d1%80%d0%b2%d0%b8%d1%81%d1%8b", fr: "/prestations-de-service", it: "/servizi",   tr: "/hizmetlerimiz" } },
  { key: "contact",       langs: { en: "/contact",                    ru: "/%d0%ba%d0%be%d0%bd%d1%82%d0%b0%d0%ba%d1%82%d1%8b",                             fr: "/contact",  it: "/contatto",  tr: "/iletisim" } },
  { key: "faq",           langs: { en: "/faq",                        ru: "/faq",                                                                           fr: "/faq",      it: "/faq",       tr: "/sss" } },
  { key: "blog",          langs: { en: "/blog",                       ru: "/%d0%b1%d0%bb%d0%be%d0%b3",                                                     fr: "/blog-sur-la-greffe-de-cheveux",                 tr: "/blog" } },
  { key: "articles",      langs: { en: "/articles",                   ru: "/%d1%81%d1%82%d0%b0%d1%82%d1%8c%d0%b8",                                        it: "/articoli" } },
  { key: "why-worbimed",  langs: { en: "/why-worbimed",               ru: "/why-worbimed",                                                                  it: "/perche-worbimed" } },

  // ── HAIR TRANSPLANT MAIN ────────────────────────────────────────────────────
  { key: "hair-transplant",              langs: { en: "/hair-transplant",                    ru: "/peresadka-volos",              tr: "/sac-ekimi" } },
  { key: "hair-transplant-cost",         langs: { en: "/hair-transplant-turkey-cost",        ru: "/peresadka-volos-v-turcii-cena", tr: "/sac-ekimi-fiyatlari" } },
  { key: "hair-transplant-reviews",      langs: { en: "/hair-transplant-in-turkey-reviews",  ru: "/peresadka-volos-v-turcii-otzivi" } },
  { key: "hair-transplant-before-after", langs: { en: "/hair-transplant-before-and-after",   ru: "/peresadka-volos-do-i-posle",   fr: "/avant-et-apres",  it: "/risultati",  tr: "/sac-ekimi-sonuclari" } },
  { key: "hair-transplant-timeline",     langs: { en: "/hair-transplant-timeline-progress",  ru: "/process-posle-peresadki-volos" } },
  { key: "hair-transplant-10-years",     langs: { en: "/hair-transplant-after-10-years" } },
  { key: "hair-transplant-safe",         langs: { en: "/is-hair-transplant-in-turkey-safe" } },
  { key: "hair-transplant-black-women",  langs: { en: "/hair-transplant-for-black-women" } },
  { key: "hair-transplant-birmingham",   langs: { en: "/hair-transplant-in-birmingham" } },
  { key: "hair-transplant-istanbul",     langs: { en: "/hair-transplant-in-istanbul" } },
  { key: "afro-hair-transplant",         langs: { en: "/afro-hair-transplant-in-turkey" } },
  { key: "unshaven-hair-transplant",     langs: { en: "/unshaven-hair-transplant-in-turkey", ru: "/peresadka-volos-bez-britia" } },
  { key: "forehead-reduction",           langs: { en: "/forehead-reduction-turkey" } },
  { key: "why-turkey",                   langs: { en: "/why-is-hair-transplant-popular-in-turkey", ru: "/pocemu-peresadka-volos-v-turcii" } },

  // ── TECHNIQUES ─────────────────────────────────────────────────────────────
  { key: "fue-sapphire",  langs: { en: "/fue-sapphire-hair-transplant-in-turkey", ru: "/peresadka-volos-metodom-fue-sapphire",  it: "/trapianto-di-capelli-con-fue-sapphire" } },
  { key: "dhi",           langs: { en: "/dhi-hair-transplant-in-turkey",           ru: "/peresadka-volos-metodom-dhi",            it: "/trapianto-di-capelli-con-metodo-dhi" } },

  // ── OTHER PROCEDURES ───────────────────────────────────────────────────────
  { key: "beard-transplant",   langs: { en: "/beard-transplant-in-turkey",   ru: "/peresadka-borodi-v-turcii",           tr: "/sakal-ekimi" } },
  { key: "eyebrow-transplant", langs: { en: "/eyebrow-transplant-in-turkey", ru: "/peresadka-brovey-v-turcii",           tr: "/kas-ekimi" } },
  { key: "women-transplant",   langs: { en: "/women-hair-transplant-in-turkey", ru: "/peresadka-volos-dla-jenshin-v-turcii", it: "/trapianto-di-capelli-di-donna" } },

  // ── LEGAL ──────────────────────────────────────────────────────────────────
  { key: "privacy-policy", langs: { en: "/privacy-policy" } },

  // ── RU ONLY ────────────────────────────────────────────────────────────────
  { key: "chto-takoe-graft",             langs: { ru: "/chto-takoe-graft" } },
  { key: "finasteride",                  langs: { ru: "/finasteride-dla-volos" } },
  { key: "kak-spat",                     langs: { ru: "/kak-spat-posle-peresadki-volos" } },
  { key: "laminirovaniye-brovey",        langs: { ru: "/laminirovaniye-brovey" } },
  { key: "mezoterapiya-volos",           langs: { ru: "/mezoterapiya-volos" } },
  { key: "norma-vipadenie-volos",        langs: { ru: "/norma-vipadenie-volos" } },
  { key: "oblisenie-u-mujchin",          langs: { ru: "/oblisenie-u-mujchin" } },
  { key: "peresadka-volo-kazan",         langs: { ru: "/peresadka-volo-kazan" } },
  { key: "peresadka-volos-10-let",       langs: { ru: "/peresadka-volos-cherez-10-let" } },
  { key: "peresadka-volos-donorskaya",   langs: { ru: "/peresadka-volos-donorskaya-zona" } },
  { key: "peresadka-volos-ekaterinburg", langs: { ru: "/peresadka-volos-ekaterinburg" } },
  { key: "peresadka-volos-makushku",     langs: { ru: "/peresadka-volos-na-makushku" } },
  { key: "peresadka-volos-mujchin",      langs: { ru: "/peresadka-volos-u-mujchin" } },
  { key: "peresadka-volos-almaty",       langs: { ru: "/peresadka-volos-v-almaty" } },
  { key: "peresadka-volos-antalii",      langs: { ru: "/peresadka-volos-v-antalii" } },
  { key: "peresadka-volos-krasnodare",   langs: { ru: "/peresadka-volos-v-krasnodare" } },
  { key: "peresadka-volos-minske",       langs: { ru: "/peresadka-volos-v-minske" } },
  { key: "peresadka-volos-moskve",       langs: { ru: "/peresadka-volos-v-moskve" } },
  { key: "peresadka-volos-spb",          langs: { ru: "/peresadka-volos-v-spb" } },
  { key: "peresadka-volos-stambule",     langs: { ru: "/peresadka-volos-v-stambule" } },
  { key: "peresadka-volos-forum",        langs: { ru: "/peresadka-volos-v-turcii-forum" } },
  { key: "peresadka-volos-wayne",        langs: { ru: "/peresadka-volos-wayne-rooney" } },
  { key: "pri-kakoi-bolezni",            langs: { ru: "/pri-kakoi-bolezni-silno-vipadayut-volosi" } },
  { key: "rekomendacii-posle",           langs: { ru: "/rekomendacii-posle-peresadki-volos" } },
  { key: "umenshenie-lba",               langs: { ru: "/umenshenie-lba" } },
  { key: "vitamini-protiv-vipadeniya",   langs: { ru: "/vitamini-protiv-vipadeniya-volos" } },
  { key: "xovanskiy-peresadka-borodi",   langs: { ru: "/xovanskiy-peresadka-borodi" } },
  { key: "znamenitosti",                 langs: { ru: "/znamenitosti-sdelavshie-peresadku-volos" } },
  { key: "eminem-beard-transplant",      langs: { en: "/eminem-beard-transplant" } },

  // ── TR ONLY ────────────────────────────────────────────────────────────────
  { key: "basarisiz-sac-ekimi",    langs: { tr: "/basarisiz-sac-ekimi" } },
  { key: "kas-laminasyonu",        langs: { tr: "/kas-laminasyonu" } },
  { key: "kok-hucre-sac-ekimi",    langs: { tr: "/kok-hucre-sac-ekimi" } },
  { key: "murat-boz-sac-ekimi",    langs: { tr: "/murat-boz-sac-ekimi" } },
  { key: "sac-dokulmesine",        langs: { tr: "/sac-dokulmesine-ne-iyi-gelir" } },

  // ── IT ONLY ────────────────────────────────────────────────────────────────
  { key: "chi-siamo",         langs: { it: "/chi-siamo" } },
  { key: "non-categorizzato", langs: { it: "/non-categorizzato" } },
];

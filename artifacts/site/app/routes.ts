import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("blog/:category", "routes/blog-category.tsx"),

  route("fr/*", "routes/lang-pages.tsx", { id: "routes/fr-pages" }),
  route("ru/*", "routes/lang-pages.tsx", { id: "routes/ru-pages" }),
  route("it/*", "routes/lang-pages.tsx", { id: "routes/it-pages" }),
  route("tr/*", "routes/lang-pages.tsx", { id: "routes/tr-pages" }),

  route("*", "routes/en-pages.tsx"),
] satisfies RouteConfig;

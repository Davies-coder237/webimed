import type { Config } from "@react-router/dev/config";
import { getAllPrerenderPaths } from "./app/i18n/prerender";

export default {
  ssr: false,
  async prerender() {
    return getAllPrerenderPaths();
  },
} satisfies Config;

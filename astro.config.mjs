import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://acvlafac.github.io/Portfolio/",
  base: "/Portfolio/",
  integrations: [tailwind(), robotsTxt()],
});

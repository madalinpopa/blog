import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpine from "@astrojs/alpinejs";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://madalinpopa.com",
  integrations: [
    tailwind(),
    alpine({ entrypoint: "/src/entrypoint" }),
    icon(),
    sitemap(),
  ],
});

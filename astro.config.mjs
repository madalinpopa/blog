import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://madalinpopa.com",
  integrations: [alpine(), icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});

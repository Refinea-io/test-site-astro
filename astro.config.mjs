import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://test-site-astro.vercel.app",
  integrations: [sitemap()],
});

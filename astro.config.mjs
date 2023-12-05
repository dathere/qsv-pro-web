import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://dathere.github.io",
    base: "/qsv-pro-web",
    integrations: [react(), tailwind()],
});

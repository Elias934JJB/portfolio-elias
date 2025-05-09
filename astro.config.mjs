import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/portfolio-elias/",
  site: "https://elias934jjb.github.io",
  integrations: [tailwind()],
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: '_assets/[name][extname]'
        }
      }
    }
  }
});

import { defineConfig } from "astro/config";

export default defineConfig({

  site: "https://1407henil.github.io",

  base: "/srgroup-website",

  trailingSlash: "never",

  compressHTML: true,

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },

  build: {
    inlineStylesheets: "auto"
  },

  vite: {
    build: {
      cssCodeSplit: true
    }
  }

});

import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import lit from "@astrojs/lit";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://etalon11.ru',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  // base: '/',
  sitemap: false,
  // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), image(), lit(), react()], // Add renderers to the config
  // This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
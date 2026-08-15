import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://abdulbasitshahid.vercel.app',
  compressHTML: true,
  integrations: [sitemap({
    serialize(item) {
      item.lastmod = new Date().toISOString();
      item.changefreq = 'weekly';
      item.priority = item.url === 'https://abdulbasitshahid.vercel.app/' ? 1.0 : 0.8;
      return item;
    },
  })]
});
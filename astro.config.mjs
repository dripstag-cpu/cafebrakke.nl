// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cafebrakke.nl',
  integrations: [
    sitemap({
      // build.format: 'file' serveert pagina's als /index.html en /menu.html.
      // Laat de sitemap-URL's daarmee overeenkomen (anders wijst /menu naar 404).
      serialize(item) {
        if (item.url === 'https://cafebrakke.nl' || item.url === 'https://cafebrakke.nl/') {
          item.url = 'https://cafebrakke.nl/';
          item.priority = 1.0;
        } else if (item.url.replace(/\/$/, '').endsWith('/menu')) {
          item.url = 'https://cafebrakke.nl/menu.html';
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
});

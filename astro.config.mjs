// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://cafebrakke.nl';

/**
 * build.format:'file' serveert pagina's als /index.html en /menu.html (en /en/index.html
 * + /en/menu.html). De sitemap-URL's moeten daarmee overeenkomen, anders wijst /menu
 * naar een 404. Elke URL krijgt bovendien de hreflang-alternatieven mee, zodat Google
 * de NL- en EN-variant als één cluster ziet.
 */
const CLUSTERS = {
  home: { nl: `${SITE}/`, en: `${SITE}/en/`, priority: 1.0 },
  menu: { nl: `${SITE}/menu.html`, en: `${SITE}/en/menu.html`, priority: 0.8 },
};

/** Welk cluster hoort bij een door Astro gegenereerde URL? */
function clusterFor(url) {
  const clean = url.replace(/\/$/, '');
  if (clean === SITE || clean === `${SITE}/index`) return ['home', 'nl'];
  if (clean === `${SITE}/en` || clean === `${SITE}/en/index`) return ['home', 'en'];
  if (clean.endsWith('/en/menu')) return ['menu', 'en'];
  if (clean.endsWith('/menu')) return ['menu', 'nl'];
  return [null, null];
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      serialize(item) {
        const [key, lang] = clusterFor(item.url);
        if (!key) return item;
        const cluster = CLUSTERS[key];
        item.url = cluster[lang];
        // NL is de hoofdtaal → die houdt de hoogste prioriteit binnen het cluster.
        item.priority = lang === 'nl' ? cluster.priority : cluster.priority - 0.05;
        item.links = [
          { lang: 'nl', url: cluster.nl },
          { lang: 'en', url: cluster.en },
          { lang: 'x-default', url: cluster.nl },
        ];
        return item;
      },
    }),
  ],
  build: {
    /**
     * 'preserve' houdt de mappenstructuur van src/pages aan:
     *   index.astro     → /index.html      (served als /)
     *   menu.astro      → /menu.html       ← bestaande URL blijft intact
     *   en/index.astro  → /en/index.html   (served als /en/)
     *   en/menu.astro   → /en/menu.html
     * Met het oude 'file' werd en/index.astro platgeslagen tot /en.html.
     */
    format: 'preserve',
    inlineStylesheets: 'always',
  },
});

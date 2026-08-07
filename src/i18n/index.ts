/**
 * i18n-kern. Twee talen: nl (root) en en (/en/).
 *
 * De site draait op `build.format:'file'`, dus pagina's zijn `/index.html` en
 * `/menu.html`. De Engelse varianten staan in `/en/` — zelfde patroon als de
 * andere Local Levers-sites (amigogrill.nl/en/).
 */

export const languages = ['nl', 'en'] as const;
export type Lang = (typeof languages)[number];

/** Nederlands is de standaardtaal → die krijgt de root én x-default. */
export const defaultLang: Lang = 'nl';

export const SITE = 'https://cafebrakke.nl';

/** Elke pagina met z'n pad per taal. Eén bron voor nav, hreflang en sitemap. */
export const routes = {
  home: { nl: '/', en: '/en/' },
  menu: { nl: '/menu.html', en: '/en/menu.html' },
} as const;

export type RouteKey = keyof typeof routes;

/** Relatief pad van een pagina in een taal. */
export function path(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Absolute URL van een pagina in een taal (voor canonical/hreflang/OG). */
export function absPath(key: RouteKey, lang: Lang): string {
  return SITE + routes[key][lang];
}

/** De andere taal — voor de NL|EN-switch en de taalbanner. */
export function otherLang(lang: Lang): Lang {
  return lang === 'nl' ? 'en' : 'nl';
}

/** `hreflang`-set die op élke pagina hetzelfde cluster beschrijft. */
export function alternates(key: RouteKey) {
  return [
    { hreflang: 'nl', href: absPath(key, 'nl') },
    { hreflang: 'en', href: absPath(key, 'en') },
    { hreflang: 'x-default', href: absPath(key, defaultLang) },
  ];
}

/** `og:locale`-waarden. */
export const ogLocale: Record<Lang, string> = {
  nl: 'nl_NL',
  en: 'en_US',
};

/**
 * Waarde die per taal kan verschillen. Veel menu-items heten in beide talen
 * hetzelfde (Espresso, Negroni, Jack Daniel's) — dan is een kale string genoeg.
 */
export type I18nValue = string | { nl: string; en: string };

export function t(value: I18nValue, lang: Lang): string;
export function t(value: I18nValue | undefined, lang: Lang): string | undefined;
export function t(value: I18nValue | undefined, lang: Lang): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === 'string' ? value : value[lang];
}

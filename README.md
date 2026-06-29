# Café Brakke — website

Website van **Café Brakke**, bruin café aan de Rozengracht 16 in de Jordaan, Amsterdam.

Gebouwd met [Astro](https://astro.build) (statische output). Twee pagina's: de homepage en de volledige menukaart.

## Lokaal draaien

```bash
npm install
npm run dev      # dev-server op http://localhost:4321
```

## Bouwen

```bash
npm run build    # statische site naar ./dist
npm run preview  # lokaal de productie-build bekijken
```

## Structuur

```
src/
├── layouts/BaseLayout.astro   # gedeelde <head>: meta, Open Graph, JSON-LD, fonts
├── components/                # Nav, Footer
├── pages/                     # index.astro (home) + menu.astro (kaart)
├── styles/                    # home.css, menu.css
└── assets/                    # foto's (geoptimaliseerd via astro:assets)
public/                        # video, poster, robots.txt, llms.txt, _headers, vercel.json
```

## Deploy

Statische host (Vercel of Netlify). `_headers` (Netlify) en `vercel.json` (Vercel) met cache-instellingen staan in `public/`. Domein: `cafebrakke.nl`.

## Contact

Rozengracht 16, 1016 NB Amsterdam · +31 20 320 1657 · hallo@cafebrakke.nl

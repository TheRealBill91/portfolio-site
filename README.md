# billycummings.com

Single-page personal site built with [Astro](https://astro.build) and Tailwind CSS, deployed to Cloudflare.

- Content: `src/data/profile.ts`
- Page: `src/pages/index.astro`
- Styles & color tokens: `src/styles/global.css`
- Link-preview image: `scripts/og/card.html` → `public/og.png` (run `npm run og` after changing your name or title)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then outputs static files to dist/
```

Deploy: connect this repo in Cloudflare (Workers & Pages) with build command `npm run build` and output `dist`, or run `npx wrangler deploy` after building.

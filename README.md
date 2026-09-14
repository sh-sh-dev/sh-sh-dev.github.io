# Shaygan Shokrollahi — Personal Portfolio

Static personal portfolio built with Astro, TypeScript, Tailwind CSS, and content collections. Deployed to GitHub Pages.

**Live site (intended):** https://shaygan-shokrollahi.github.io

## Stack

- Astro (static output)
- TypeScript
- Tailwind CSS v4
- Astro Content Collections (MDX)
- GSAP (subtle motion)
- GitHub Actions → GitHub Pages

## Getting started

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/     # Navigation, Hero, sections, cards
├── content/
│   ├── projects/   # Project MDX entries
│   └── notes/      # Draft note MDX entries
├── data/site.ts    # Site config, nav, social placeholders
├── layouts/
├── pages/
├── scripts/motion.ts
└── styles/global.css
```

## Configuration

- Site URL and optional `base` path: [`astro.config.mjs`](astro.config.mjs)
- Name, description, social placeholders: [`src/data/site.ts`](src/data/site.ts)

Replace `REPLACE_GITHUB`, `REPLACE_LINKEDIN`, and `REPLACE_EMAIL` in `src/data/site.ts` before publishing.

If the GitHub repository is **not** `shaygan-shokrollahi.github.io`, uncomment and set `base` in `astro.config.mjs` (e.g. `base: '/repo-name'`).

## Deploy

Push to `main`. The workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds with `withastro/action` and deploys to GitHub Pages.

In the GitHub repo: **Settings → Pages → Source → GitHub Actions**.

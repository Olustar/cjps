This is a [Next.js](https://nextjs.org) project for Central Jersey Process Service (`njserves.com`).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Cloudflare Pages (Static HTML Export)

Per [Cloudflare’s static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/):

1. Ensure static export is enabled (already set in `next.config.mjs` via `output: "export"`).
2. In the **CJPS** Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Import an existing Git repository**.
3. Select `chernin-dana/njserves.com`.
4. Framework preset: **Next.js (Static HTML Export)** with:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npx next build` |
| Build output directory | `out` |

No Wrangler. No Workers. No OpenNext. No deploy command. Cloudflare Pages builds the site and hosts the `out/` folder as static files.

Do **not** use Direct Upload for this repo if the dashboard complains about build/config files — connect via **Git** instead.

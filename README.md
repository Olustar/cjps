This is a [Next.js](https://nextjs.org) project for Central Jersey Process Service (`njserves.com`).

Repo: [Olustar/cjps](https://github.com/Olustar/cjps)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Cloudflare Pages (Static HTML Export)

Static export is enabled in `next.config.mjs` (`output: "export"` → `out/`).

Per [Cloudflare’s static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/):

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → connect **[Olustar/cjps](https://github.com/Olustar/cjps)**.
2. Use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Deploy command | `npm run deploy` *(only if your project requires a deploy step)* |
| Node.js version | `20` |

Preferred for classic Pages: leave **Deploy command empty** and only set build + `out`.

There is **no** `wrangler.toml` in this repo (Direct Upload rejects it). `npm run deploy` uses `npx wrangler` only to upload the already-built `out/` folder.

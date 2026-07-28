This is a [Next.js](https://nextjs.org) project for Central Jersey Process Service (`njserves.com`).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Cloudflare Pages (Static Site)

This app is a **static HTML export** (`output: "export"`). It does **not** use Workers, OpenNext, or SSR.

Deploy only from the **CJPS Cloudflare account** (not Beunec).

### Git-connected Pages (recommended)

1. In the **CJPS** Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select `chernin-dana/njserves.com`.
3. Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | **Next.js (Static HTML Export)** |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` |

4. Leave **Deploy command empty**. Do **not** use `npx wrangler deploy` or `opennextjs-cloudflare`.

If an existing project was created as a **Worker** with OpenNext, delete it or disconnect Git and create a new **Pages** project with the settings above.

### Later: CLI deploy from the CJPS account

```bash
npx wrangler logout
npx wrangler login   # log into the CJPS Cloudflare account
npm run build
npx wrangler pages deploy out --project-name=njserves-com
```

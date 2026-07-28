This is a [Next.js](https://nextjs.org) project for Central Jersey Process Service (`njserves.com`).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Cloudflare Pages (Static Site)

This app is a **static HTML export** (`output: "export"`). It does **not** use Workers, OpenNext, or SSR.

In Cloudflare (**Workers & Pages** → your project → **Settings** → **Builds**):

| Setting | Value |
| --- | --- |
| Framework preset | **Next.js (Static HTML Export)** |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` (or env `NODE_VERSION=20`) |

Leave the deploy command empty / default for Pages — do **not** use `npx wrangler deploy` or `opennextjs-cloudflare`.

`npm run build` writes static files to `out/`. Cloudflare Pages hosts those files as a static site.

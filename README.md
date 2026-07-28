This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare (Workers / OpenNext)

This repo is configured for Cloudflare’s **Next.js on Workers** build (`opennextjs-cloudflare`), which matches the default Git-connected Workers deploy flow.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build / deploy command | `npx opennextjs-cloudflare build` (or `npm run deploy` from CLI) |
| Wrangler config | `wrangler.jsonc` |

Requires **Node.js 20** (see `.nvmrc`). Local preview: `npm run preview`.

## Deploy on Cloudflare Pages

This app uses [Next.js static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) for Cloudflare Pages.

In the Cloudflare dashboard (**Workers & Pages** → your project → **Settings** → **Build**):

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` (optional; `.nvmrc` is included) |

Framework preset: **Next.js (Static HTML Export)**.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# njserves.com

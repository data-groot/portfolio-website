# krishnamihir.dev

Personal portfolio of **Krishna Mihir Tatavarthi** — ML Engineer / AI Solutions Architect.

**Live:** [krishnamihir.dev](https://krishnamihir.dev)

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals and micro-interactions
- Custom canvas particle field (no Three.js — stays fast)
- Deployed on [Vercel](https://vercel.com)

## Design

Dark editorial look: near-black base (`#0a0a0f`), burnt-orange accent (`#ff5c1f`), Anton display type with Inter body and JetBrains Mono labels, film-grain overlay, asymmetric grids. Respects `prefers-reduced-motion` throughout.

## Development

```bash
npm install
npm run dev
```

All site copy lives in [`src/data/content.ts`](src/data/content.ts) — edit content there without touching components.

Pushes to `main` deploy automatically via Vercel.

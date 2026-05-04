# KC Mobile MVNO Launch Proposal — site

Standalone proposal website for the **Kaizer Chiefs Mobile (KC Mobile) MVNO launch**, prepared by DSG for KC leadership. Three budget tiers (R2.5M · R5M · R9M) with named-supplier media plans, audience research, and a print-to-PDF export.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives (button, card, badge, accordion, tabs, separator, dialog, dropdown-menu)
- ESLint
- pnpm
- `src/` directory layout
- No experimental flags

## Run locally (port 3001)

```bash
pnpm install
pnpm dev
```

Open http://localhost:3001

## Build

```bash
pnpm build
pnpm start
```

## Deployment

Vercel — Framework preset *Next.js*. Build command `pnpm build`, install `pnpm install`, output directory blank. See `docs/DEPLOYMENT.md` for the full setup.

## Project documentation

Full structured docs live in [`/docs`](./docs):

- [`PROJECT_OVERVIEW.md`](./docs/PROJECT_OVERVIEW.md)
- [`ASSUMPTIONS.md`](./docs/ASSUMPTIONS.md)
- [`SCOPE.md`](./docs/SCOPE.md)
- [`STRUCTURE.md`](./docs/STRUCTURE.md)
- [`TRACKING_PLAN.md`](./docs/TRACKING_PLAN.md)
- [`DEPLOYMENT.md`](./docs/DEPLOYMENT.md)

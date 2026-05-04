# Structure

## Folder layout
```
kc-proposal-site/
├── docs/                       # Project documentation (you are here)
├── public/
│   └── images/                 # Static assets used by the site
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 entry + KC theme tokens
│   │   ├── layout.tsx          # Root HTML + metadata
│   │   └── page.tsx            # Single-page proposal — composes all sections
│   ├── components/
│   │   ├── ui/                 # shadcn primitives (button, card, badge, ...)
│   │   ├── sections/           # Proposal sections (Hero, Overview, Tiers, ...)
│   │   ├── chief-mark.tsx      # KC chief brand mark (inline SVG)
│   │   ├── header.tsx          # Sticky header with anchor nav
│   │   └── footer.tsx
│   ├── content/                # Long-form copy fragments (markdown-style)
│   ├── data/
│   │   └── proposal.ts         # Single source of truth: tiers, KPIs, suppliers, etc
│   └── lib/
│       └── utils.ts            # cn() helper (clsx + tailwind-merge)
├── components.json             # shadcn/ui config
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Section composition rules
1. **One concept per section.** Each section answers one question. Don't collapse two ideas into one.
2. **Section components live in `src/components/sections/`** and only consume data from `src/data/proposal.ts`. Sections never own copy directly.
3. **Sections never own colour values.** Use the `--kc-*` CSS variables and shadcn tokens. New tokens go in `globals.css`.
4. **Each section accepts an `id` prop** for the in-page anchor nav, and an optional `className` for spacing tweaks.
5. **No nested data fetching.** This site is fully static; there is no `async` in section components.
6. **Print friendliness.** Every section must remain legible inside `@media print` — avoid load-bearing background gradients without a print fallback.

## Content management approach
- **Source of truth:** `src/data/proposal.ts`. Update copy and numbers there.
- **Versioning:** changes to the proposal numbers must be PR-reviewed by both DSG strategy and KC commercial — see `docs/ASSUMPTIONS.md`.
- **Long-form copy** (paragraphs of editorial-style writing) lives in `src/content/` as `.tsx` fragments imported by sections, so we keep narrative writing readable without breaking the data file.

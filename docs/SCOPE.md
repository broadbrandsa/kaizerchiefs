# Scope

## Pages included
- **Single-page proposal** (`/`) — long-scroll site with anchor navigation. Sections in order:
  1. Hero / cover
  2. Overview / the brief
  3. Audience insights (Nielsen NFI SA Mar 2025)
  4. Strategic pillars
  5. Tier comparison (R2.5M / R5M / R9M, switchable via tabs)
  6. Suppliers (accordion-driven directory)
  7. Phasing / timing framework
  8. Measurement KPIs
  9. Next steps and footer

## Sections included
- Live, navigable section anchors with sticky in-page nav.
- Tier comparison uses **shadcn Tabs** to switch between the three budget tiers without a page reload.
- Supplier directory uses **shadcn Accordion** so each supplier expands to show standout packages.
- Optional "Why this tier" dialog (shadcn Dialog) on each tier card to surface the rationale.
- Print stylesheet for browser-driven PDF export (Cmd/Ctrl + P → Save as PDF).

## Excluded
- **No CMS.** Content is co-located with the code in `src/data/proposal.ts`. Editing the proposal means editing TypeScript and pushing a commit.
- **No authentication / login.** The site is public-by-default behind the Vercel URL; if confidentiality is required, add Vercel Password Protection at the deployment level (Pro feature).
- **No backend / database / forms.** No lead capture, no contact form on initial release.
- **No e-commerce or activation funnel.** Real KC Mobile activations live on `kaizerchiefs.com/kc-mobile` and Vodacom retail; this site links out, it does not transact.
- **No multi-language.** English only on launch.

## Launch milestones
| Milestone | Owner | Target |
|---|---|---|
| First push to GitHub | DSG dev | Day 0 |
| Vercel preview live | DSG dev | Day 0 |
| Internal review (DSG) | DSG strategy | Day 1 |
| KC leadership review | KC + DSG | Day 3 |
| Tier selection | KC leadership | Day 5 |
| Supplier re-quotes | DSG procurement | Days 5–10 |
| Final sign-off + booking | KC + DSG | Day 12 |

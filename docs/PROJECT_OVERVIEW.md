# Project overview

## What this site is
A standalone proposal website for the **Kaizer Chiefs Mobile (KC Mobile) MVNO launch**. It packages the strategy, audience research, three-tier media plan and supplier costings for KC leadership to review and approve.

## Target audience
- **Primary:** Kaizer Chiefs leadership and KC Mobile commercial team. The site is the artefact they review before sign-off on a launch budget.
- **Secondary:** DSG internal stakeholders, sponsors who may co-fund line items (Vodacom, Toyota), and supplier partners who need visibility on the plan.

## Deployment environment
- **Framework:** Next.js 16 (App Router) with TypeScript and Tailwind CSS v4.
- **UI primitives:** shadcn/ui (button, card, badge, accordion, tabs, separator, dialog, dropdown-menu) on top of Radix.
- **Hosting:** Vercel. Default Next.js preset, no `vercel.json`, build via `pnpm build`.
- **Domain:** TBC — initial deploy lives on the auto-generated `*.vercel.app` URL.

## Owner
- **Project owner:** DSG (Digital Strategy Group), `mikee@dsg.co.za`.
- **Codebase owner:** This repository. Pull-requests reviewed by DSG before merge to main.
- **Content owner:** DSG strategy + KC Mobile commercial leads jointly own the proposal copy in `src/data/proposal.ts` — changes to numbers must be ratified before deploy.

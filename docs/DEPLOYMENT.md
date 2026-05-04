# Deployment

## GitHub repo setup
1. Create a private repo: `dsg/kc-proposal-site` (organisation owner: DSG).
2. Default branch: `main`. Enable branch protection (require 1 review before merge).
3. Push the local project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: KC Mobile MVNO Launch Proposal"
   git branch -M main
   git remote add origin git@github.com:dsg/kc-proposal-site.git
   git push -u origin main
   ```

## Vercel project setup
1. Sign in to vercel.com with the DSG account.
2. **New Project → Import Git Repository →** select `dsg/kc-proposal-site`.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: **/** (project root — leave default).
5. Build & output settings — leave at defaults:
   - **Build command:** `pnpm build`
   - **Install command:** `pnpm install`
   - **Output directory:** *(leave blank — Next.js handles this)*
6. **Environment variables:** none required at launch. When GA4 lands, add `NEXT_PUBLIC_GA_ID` for Production and Preview environments.
7. Click **Deploy.** First build typically completes in 60–90 seconds.

## Root directory rules
- The Next.js app lives at the **repo root**. Do not place it under a subfolder unless you also configure Vercel's Root Directory accordingly.
- `src/`-directory layout is enabled — paths are `@/*` aliased to `./src/*` (see `tsconfig.json`).

## Build command
`pnpm build` (which runs `next build`). Vercel detects `pnpm-lock.yaml` and uses pnpm automatically. No custom command required.

## Environment variable management
- **Local development:** create `.env.local` (git-ignored). For example:
  ```
  NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
  ```
- **Vercel:** add the same variables under **Settings → Environment Variables**. Set the scope (Production / Preview / Development) per variable.
- Never commit secret keys. The `NEXT_PUBLIC_*` prefix exposes the value to the browser; do not use it for secrets.

## How to redeploy
- **Automatic:** any push to `main` triggers a production deploy. Pushes to other branches create preview deployments with their own URL.
- **Manual:** in the Vercel dashboard, **Deployments → ⋯ → Redeploy** on the desired build.
- **Rollback:** **Deployments → ⋯ → Promote to Production** on a previous successful build.

## No `vercel.json` required
The framework preset, install command, build command, and routing all work with Next.js defaults. Only add `vercel.json` if a future requirement (custom headers, edge functions, redirects) demands it.

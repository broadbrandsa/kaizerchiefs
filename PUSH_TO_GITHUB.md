# Push to GitHub — `broadbrandsa/kaizerchiefs`

The site has been committed locally. To finish the push to GitHub, run these commands **from your Mac's Terminal** (the sandbox doesn't have your GitHub credentials, so the push has to happen on your machine).

## Option A — fresh init in this folder (recommended)

There's a partial `.git` folder from the sandbox attempt that needs removing first.

```bash
cd "/Users/mikeelmira/Downloads/Kazier Chiefs/KC Mobile Proposal Site"

# Remove the partial sandbox-init (this works on your Mac; it failed in the sandbox)
rm -rf .git

# Fresh init + first commit
git init
git add -A
git commit -m "KC Mobile MVNO Launch Proposal site"
git branch -M main
git remote add origin https://github.com/broadbrandsa/kaizerchiefs.git
git push -u origin main
```

You'll be prompted for GitHub auth — use a Personal Access Token (Settings → Developer settings → Personal access tokens) or have GitHub CLI / SSH set up.

## Option B — clone from the prepared bundle

If you'd rather not re-init, there's a portable git bundle at `~/Downloads/Kazier Chiefs/kc-proposal-site.bundle`. Clone it, swap the remote, and push:

```bash
cd ~/Downloads
git clone "/Users/mikeelmira/Downloads/Kazier Chiefs/kc-proposal-site.bundle" kc-proposal-site-fresh
cd kc-proposal-site-fresh
git remote set-url origin https://github.com/broadbrandsa/kaizerchiefs.git
git push -u origin main
```

Then either continue working in `kc-proposal-site-fresh/` or merge it back into the original folder.

## After the push

```bash
# Connect Vercel
# 1. Go to vercel.com → Add New → Project → Import broadbrandsa/kaizerchiefs
# 2. Framework preset: Next.js (auto-detected)
# 3. Build command: pnpm build
# 4. Install command: pnpm install
# 5. Output directory: leave blank
# 6. Click Deploy

# Subsequent deploys are automatic on every push to main.
```

See `docs/DEPLOYMENT.md` for the full Vercel setup.

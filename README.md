# Optimity website

Operations-first AI consulting. Static marketing site — six pages, no build step, no dependencies.

- **Staging (review) URL:** https://deepakramesh-commits.github.io/optimity-website/
- **Pages:** `index.html` (Home), `how-we-work.html`, `industries.html`, `why-optimity.html`, `about.html`, `contact.html` — plus a branded `404.html` error page
- **Shared partials:** `header.html` / `footer.html`, loaded on every page by `components.js` (nginx SSI in production, fetch fallback locally)
- **Styles:** `styles.css` · **Theme toggle:** `theme.js` · **Design system:** `DESIGN.md`
- **Booking:** inline Calendly embed on the Contact page (`#book`).
- **Discovery layer:** `sitemap.xml`, `robots.txt`, `llms.txt` / `llms-full.txt`, `og-image.png` share card, Schema.org JSON-LD in each page head.
- **Version:** `VERSION` holds the current release (`X.Y.Z.W`); every release gets an entry in `CHANGELOG.md`. Open work lives in `TODOS.md`.

This is staging only. It is **not** wired to the custom domain (optimitytechnologies.com), and no DNS is configured.

## Run locally

It's plain static files — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

(The shared header/footer load via `fetch` when there's no server-side includes, so serve the folder rather than double-clicking a file if the nav looks missing.)

## Production deployment (Docker + nginx, Dokploy-ready)

Production runs the site in an nginx container:

```bash
docker compose up -d --build   # serves on 127.0.0.1:3000
```

- **`Dockerfile`** — `nginx:1.27-alpine`, copies the site files (HTML, CSS, JS, images, the profile PDF, and the txt/xml discovery files) plus `assets/` into the web root (favicons are copied to the root because every page links them there).
- **`nginx.conf`** — clean URLs (`/about` → `about.html`), SSI for the shared header/footer partials, gzip, 30-day static-asset caching, security headers repeated per location block (a location-level `add_header` cancels inheritance), and `404.html` as the error page for unknown paths.
- **`docker-compose.yml`** — binds **localhost only** (`127.0.0.1:3000`); a reverse proxy (Dokploy) terminates TLS and exposes the site publicly. Port 3000 must not be reachable externally.
- **`.dockerignore`** — excludes all Markdown (including the internal `assets/logo/PERMISSIONS.md` ledger) so internal docs are never published to the public web.

## Versioning & changelog

Releases use a four-part version in `VERSION` (`X.Y.Z.W`). Every release gets a dated entry in `CHANGELOG.md` (sections: Added / Changed / Fixed / Removed) describing what changed in user-facing terms. Bump the version and add the entry as part of shipping, not after.

## Review workflow (propose changes via pull request)

`main` is the live staging branch. Don't commit to it directly — make changes on a branch and open a PR so they're reviewed before merging.

```bash
# 1. Get the code
git clone https://github.com/deepakramesh-commits/optimity-website.git
cd optimity-website

# 2. Start a branch for your change
git checkout -b edit/hero-copy        # name it for what you're changing

# 3. Make edits, then commit
git add -A
git commit -m "Tighten hero subhead copy"

# If you touched styles.css, theme.js, or components.js: bump the shared
# `?v=YYYYMMDD-vN` cache-version string everywhere it appears (all pages +
# components.js) — production caches static assets for 30 days.

# 4. Push the branch and open a PR against main
git push -u origin edit/hero-copy
gh pr create --base main --title "Tighten hero subhead copy" --body "What changed and why"
# (or open the PR from the link gh prints / on github.com)
```

The PR is where review happens — comments, requested changes, approval. Nothing reaches the
live staging site until the PR is **merged into `main`**, which triggers a fresh GitHub Pages
build automatically. Merges are a deliberate step; review first.

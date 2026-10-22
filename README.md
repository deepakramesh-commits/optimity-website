# Optimity website

Optimity Technologies is an AI product company that also builds custom AI systems. Its AI takes the routine work off a team: Concierge AI (the lead product family: Move Concierge AI for movers, Trade Concierge AI for home-service trades and Salon Concierge AI for salons), Property Connect AI and Nexus AI, plus custom AI systems. Static marketing site: eleven pages, no build step, no dependencies.

- **Staging (review) URL:** https://deepakramesh-commits.github.io/optimity-website/
- **Pages:** `index.html` (Home), `products.html`, `concierge-ai.html` (the Concierge AI family) with its editions `move-concierge.html` (movers), `trade-concierge.html` (home-service trades) and `salon-concierge.html` (nail and hair salons), `property-connect.html`, `nexus-ai.html`, `custom-ai-systems.html`, `about.html` (team at `#team`), `contact.html` (booking at `#book`) — plus a self-contained `404.html`. The old how-we-work, industries, why-optimity and management-team pages are retired and 301 in `nginx.conf`.
- **Shared partials:** `header.html` / `footer.html`, loaded on every page by `components.js` (nginx SSI in production, fetch fallback locally)
- **Styles:** `styles.css` · **Theme toggle:** `theme.js` · **Page behaviour:** `site.js` (the product stage, Nexus tabs, nav state) · **Design system:** `DESIGN.md`
- **Booking:** inline Calendly embed on the Contact page (`#book`). Every "Book a Demo" links there; product CTAs add `?demo=concierge-ai`, `?demo=move-concierge`, `?demo=trade-concierge`, `?demo=salon-concierge`, `?demo=property-connect`, `?demo=nexus-ai` or `?demo=custom`, which names the product on the page and tags the booking with `utm_content`.
- **Product screens:** labelled placeholders in `assets/products/placeholders/` until real screenshots exist; see `PLACEHOLDERS.md` there for sizes, usage and how to swap one in.
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
- **`nginx.conf`** — clean URLs (`/about` → `about.html`), SSI for the shared header/footer partials, gzip, 30-day static-asset caching, security headers repeated per location block (a location-level `add_header` cancels inheritance), 301s for the four retired pages (relative `Location`, via `absolute_redirect off`, so they work behind the TLS proxy; query strings kept), `Cache-Control: no-cache` on pages, and `404.html` as the error page for unknown paths. `.htaccess` carries the same redirects for Apache hosting; keep the two in step. GitHub Pages staging cannot serve these 301s.
- **`docker-compose.yml`** — binds **localhost only** (`127.0.0.1:3000`); a reverse proxy (Dokploy) terminates TLS and exposes the site publicly. Port 3000 must not be reachable externally.
- **`.dockerignore`** — excludes all Markdown (including the internal `assets/logo/PERMISSIONS.md` ledger and `PLACEHOLDERS.md`) and the HTML sources of rendered images (`assets/products/placeholders/src`, `assets/og-src`), so internal files are never published from the Docker image. GitHub Pages staging publishes the whole repository, these files included.

## Vercel preview (shareable copy)

A copy of the `product-led` site runs on Vercel at https://optimity-website.vercel.app (team "optimity", project `optimity-website`). It is for review only: every response carries `X-Robots-Tag: noindex, nofollow`, and it is not connected to optimitytechnologies.com.

- **`vercel.json`** mirrors `nginx.conf`: clean URLs, the four retired-page redirects, the root favicon paths, security headers and 30-day caching for static files. There is no build step.
- **`.vercelignore`** keeps internal files off Vercel, in step with `.dockerignore`: all Markdown, the mock-up sources, server config, `VERSION`, and the local `.env*` / `.vercel` files that `vercel link` creates.
- **Redeploy:** `vercel deploy --prod --yes --scope optimity` from the repo root.
- The header and footer load through `components.js` there (Vercel has no SSI). Bookings made on the copy go to the real Calendly account.
- Before the real domain ever points at Vercel, remove the `X-Robots-Tag` header from `vercel.json`.

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

# If you touched styles.css, site.js, theme.js, or components.js, or replaced a product
# screenshot in assets/products/placeholders: bump the shared
# `?v=YYYYMMDD-pN` cache-version string everywhere it appears (all pages, including
# the placeholder image URLs, + the partial fetch in components.js) — production caches static assets for 30 days.

# 4. Push the branch and open a PR against main
git push -u origin edit/hero-copy
gh pr create --base main --title "Tighten hero subhead copy" --body "What changed and why"
# (or open the PR from the link gh prints / on github.com)
```

The PR is where review happens — comments, requested changes, approval. Nothing reaches the
live staging site until the PR is **merged into `main`**, which triggers a fresh GitHub Pages
build automatically. Merges are a deliberate step; review first.

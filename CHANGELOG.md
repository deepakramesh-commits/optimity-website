# Changelog

All notable changes to the Optimity Technologies website.

Format: [X.Y.Z.W] - YYYY-MM-DD, sections Added / Changed / Fixed / Removed.

## [1.0.0.0] - 2026-08-09

First tracked release: the full redesigned six-page site under DESIGN.md v3 ("Engineered Confidence for SME Operators" + the Believability Mandate).

### Added
- Trusted-by section with seven permitted client logos (permission ledger in assets/logo/PERMISSIONS.md)
- Deployment log: case studies as labeled composite deployment dossiers (problem → system → deployment → result) with per-row system diagrams
- Before/After Operations Map hero artifact — current-state tool chaos resolving into one operational system
- Multi-page structure: industries, why-optimity, and about pages with shared header/footer components, mobile drawer nav, and dark mode with OS-preference detection
- Real 1200×630 social share card (og-image.png) used across all page metadata
- Docker/nginx deployment (Dokploy-ready) with security headers, gzip, clean URLs, and a branded 404 page
- SEO/discovery layer: sitemap, robots.txt, llms.txt knowledge files, Schema.org JSON-LD, intent-keyword titles and descriptions
- Company profile PDF linked from the About page

### Changed
- Sitewide voice rewritten to the operator register ("We build and deploy the systems your business actually needs."); consulting/platform-pitch language removed, including in llms.txt files
- Six-step methodology (Understand the operation → Design → Build → Integrate → Deploy → Improve) presented editorially under the three stages with margin numerals
- Editorial de-templating: section labels de-pilled, logo wall and step sections de-carded, every diagram redrawn as a static engineer-style flow naming real systems
- All page metadata (titles, OG/Twitter, schema) rewritten with search intent for SME/AI-automation queries

### Fixed
- Favicons and web manifest 404ing in production (files now served from the web root)
- Internal permissions ledger no longer published to the public web (dockerignore nested-path pattern)
- Security headers no longer dropped on static assets; server tokens off; deprecated XSS header disabled; nginx binds localhost-only behind the reverse proxy
- Dark-mode flash on page load (inline head theme script) and dark-mode legibility of client logos
- Stale-cache risk: theme.js/components.js/styles.css share one bumped cache version; partial fetches no longer cache-bust on every view
- Navigation highlighting on clean URLs; dead nav-logic branch removed
- Fraunces ampersand rendering as ® at display sizes; honest labels on all diagrams (no "live"/"engine" overclaims)
- ~330 lines of dead CSS removed; class-name collision that altered nav font weight; mono-label sizes raised to the DESIGN.md legibility floor

🤖 Generated with [Claude Code](https://claude.com/claude-code)

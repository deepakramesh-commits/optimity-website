# Changelog

All notable changes to the Optimity Technologies website.

Format: [X.Y.Z.W] - YYYY-MM-DD, sections Added / Changed / Fixed / Removed.

## [2.0.0.0] - 2026-10-19

Full redesign, built on the `redesign` branch as a new version alongside the current site. Direction "The working system" (DESIGN.md v4): the products doing their job are the picture, on a quiet white engineering page.

### Added
- Nexus AI sample panel on the homepage: pick a question or a source (ERPNext, Odoo, HubSpot, documents, PostgreSQL) and see the answer, the engine it went to, the source rows and a chart. Labelled sample data throughout
- The three practices (AI & Automation, Product Engineering, Enterprise Solutions) named in the homepage's first screen, and as switchable capability bands further down
- Pinned "How it starts" section on the homepage: the Operations Teardown card changes as you read the three steps
- Nexus AI engine picker (DocIntellect AI, SmartOps AI, SQL Database Agent), a sample Move Concierge call with the record it produces, and a Property Connect lead timeline
- How we work: one order traced from WhatsApp to invoice, today versus after (labelled example)
- Industries: a real sector table (systems, where work breaks, what we'd build) and a document-to-record fragment
- About: live clocks for the India, Dallas and UAE offices
- `site.js` for page behaviour; every page reads fully without it

### Changed
- Type: Archivo replaces Fraunces, Geist and Geist Mono. Palette: white, greys and ink, with the logo's orange on actions only. Full dark theme
- Every page rewritten in plain language with the same facts; navigation labels in sentence case; Products menu grouped without the nested fly-out
- Management team page: large portraits and rewritten bios (same facts)
- Calendly colour parameters follow the new palette (`ffffff` / `232323` / `c2410c`); the embed itself is unchanged
- 404 page restyled, still self-contained for any URL depth
- `llms.txt` and `llms-full.txt` rewritten to match, now including the practices, products and leadership
- One cache string (`?v=20261019-r2`) across every page and the partial fetch

### Removed
- Uppercase mono labels, eyebrows, numbered steps, hairline dividers, resting shadows, icon-and-card grids and the decorative system diagrams on industries, about and the homepage

## [1.0.1.0] - 2026-08-10

Homepage revisions from the first stakeholder review of staging (phone, dark mode).

### Changed
- Hero artifact now answers "what do you do": the four capabilities (Operations & ERP intelligence, Customer & CRM systems, Automation & agents, Custom AI platforms) replace the Before/After Operations Map
- The ops map moved into the "systems that work / can't think" section — simplified to phone-legible size — replacing the last abstract diagram on the site

### Removed
- Composite deployment dossiers: fictional companies with fictional results read as fake next to real client logos. The slot returns when the first real, permissioned deployment story lands; the trusted-logos strip is now the sole (fully real) proof

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

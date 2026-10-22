# Changelog

All notable changes to the Optimity Technologies website.

Format: [X.Y.Z.W] - YYYY-MM-DD, sections Added / Changed / Fixed / Removed.

## [2.3.1.0] - 2026-10-21

Custom AI Systems says how the work is agreed and checked, in plainer words.

### Changed
- "Your existing systems stay" now reads "We build around the systems you already run, and agree each connection before we start."
- "A person stays in charge" now reads "Before it goes live, we agree with you where a person needs to check its work."
- The Launch step now reads "We test it against real situations and roll it out with your team."
- llms.txt and llms-full.txt match

## [2.3.0.0] - 2026-10-21

Every product claim now matches what has been confirmed, and the homepage speaks to the buyer.

### Changed
- Homepage: new headline "Optimity builds AI that takes the routine work off your team.", a one-line route per product in the buyer's words, the buyer's three questions (will it work with my setup, can my team take over, can I see what happened) answered product by product, five one-line steps to go live, and a closing band "Let's find the right place to start." with Book a Demo and Discuss a Custom Project
- Hero screen captions sit above the screens, so the three labels line up and none is cut off
- Concierge AI and its editions name Google Calendar as the booking system, include rescheduling, and use one handoff line: when a person needs to follow up, the product sends the details to your team. A price question goes to the team
- Property Connect AI's callback is scoped everywhere: it can call eligible leads back within 60 seconds when they come through connected forms and sources
- Nexus AI lists ERPNext, HubSpot, PostgreSQL and supported document sources, cites supporting documents, and states that source traceability for ERP, CRM and database answers varies by connector and query
- Sample screens, titles, meta descriptions, structured data, the share image and llms.txt / llms-full.txt match the narrowed claims

### Removed
- Claims not yet confirmed by the product team, listed in TODOS.md for confirmation: Move Concierge AI's moving-software, CRM, webhook, SMS, WhatsApp, pre-move checklist, lead-score, daily-summary, multi-location and call-recording claims; Trade Concierge AI's urgent routing and configurable safety message; Salon Concierge AI's consultations and handoff rules; Property Connect AI's named CRMs, portal leads, listing answers, fair-housing review and call recording; Nexus AI's Odoo, vLLM, sandbox, alert, reconciliation and "every answer" claims; Custom AI Systems' ongoing-support and code-ownership lines

## [2.2.0.0] - 2026-10-21

The receptionist family becomes Concierge AI, and the homepage presents the company.

### Changed
- The product family is now Concierge AI: Move Concierge AI (movers, page and URL unchanged), Trade Concierge AI (`trade-concierge.html`, plumbers and home-service trades) and Salon Concierge AI (`salon-concierge.html`). The family overview moved to `concierge-ai.html`. "AI receptionist" is used only as the plain description in each Concierge page's title, meta description and opening line
- The nail salon and hair salon pages are merged into Salon Concierge AI, with both sample calls (a nail client moving her appointment, a new client asking what color costs) on their own screen stages
- Sample screens and their sources renamed (`trade-*`, `salon-nail-*`, `salon-hair-*`) and relabelled with the Concierge names; demo values are now `concierge-ai`, `trade-concierge` and `salon-concierge`
- Homepage rebuilt around the company: a plain sentence about what Optimity builds with screens from three products, "Find what fits" routes for four problems (Concierge AI, Property Connect AI, Nexus AI, Custom AI Systems), what every product has in common, how a product goes live, the team, offices and permitted logos, and a closing call to book a demo or describe a problem
- Homepage title, description, structured data and share image rewritten for the company; llms.txt and llms-full.txt updated to match
- The product stage now follows the scroll position directly, so a jump or a fast scroll lands on the right screen

### Fixed
- Claims checked against each product page: the homepage no longer says every product hands complaints to your team or that every call books, and connections are confirmed per setup
- Salon walkthrough copy now matches its screens, and bookings for three or more people go to the team
- Products stays highlighted in the menu on the products page; the share image URL carries the cache string; the two salon stages have their own labels
- Unused styles removed; PLACEHOLDERS.md, the logo permissions note and DESIGN.md brought up to date

### Removed
- The four AI Receptionist page names; they were only ever on the review copy, so no redirects are needed

## [2.1.0.0] - 2026-10-20

The AI Receptionist joins the site as the lead product family.

### Added
- `ai-receptionist.html`: the AI Receptionist overview. It answers every call day or night, books the appointment into the booking system, logs every call and booking in a dashboard and hands over to a person when it should, with an index of its four editions (movers first)
- Edition pages for home-service trades (`ai-receptionist-home-services.html`), nail salons (`ai-receptionist-nail-salons.html`) and hair salons (`ai-receptionist-hair-salons.html`), sharing one layout with the Move Concierge page: each has its own sample call with a curveball (an urgent leak at night, a reschedule, a price question that becomes a consultation), its own booking and dashboard screens, and its own Book a Demo
- Twelve new sample screens (`ar-*`), listed in PLACEHOLDERS.md
- Booking names for `?demo=ai-receptionist`, `home-services`, `nail-salons` and `hair-salons`, tagged on the Calendly booking like the other products

### Changed
- Products menu (desktop and mobile) and footer: AI Receptionist with its four editions, then Property Connect AI and Nexus AI
- Move Concierge AI is named as the movers edition of the AI Receptionist, on its page, the homepage and the products page
- Products page leads with the AI Receptionist family; sitemap, llms.txt, llms-full.txt and JSON-LD cover the new pages

## [2.0.1.0] - 2026-10-20

Changes from four outside reviews of the product-led site.

### Changed
- Homepage is a three-product overview: "AI for moving companies, real-estate teams and operations", a product index, then one section per product with its outcome headline, a screen and a product-specific Book a Demo. The Move Concierge walkthrough lives on its own page only
- Product pages open on the outcome for their buyer: "The calls your moving company misses, answered", "Every web lead called back within a minute", "Ask your ERP and CRM questions in plain English" (titles match, for ad landing)
- US English throughout, including the sample screens: lead, estimate, elevator, on weekends
- Desktop product screens show whole; the stage fits its screen; the Move Concierge walkthrough has far less empty space; section gaps are smaller
- Phone product screens show whole again
- The "Illustrative" caption under product screens is removed; each screen keeps its "Sample data" tag and fictional names, and alt text starts with "Sample"
- Client logos moved from the homepage to About ("Companies our engineering team has built software for")
- The closing band is light and no longer touches the navy footer; sample screens are dimmed in dark mode; ™ only on first mention and in the footer; Nexus AI's tabs use plain labels

### Removed
- The empty "Security and reliability" commitment and the "Custom code is yours" line from the homepage
- "Schools" from the questions Property Connect AI answers

## [2.0.0.0] - 2026-10-20

Product-led rebuild on the `product-led` branch: Optimity presented as an AI product company with three products and a selective custom AI capability, Move Concierge AI first. Design "Split stage" (DESIGN.md).

### Added
- Products overview (`products.html`) and Custom AI Systems (`custom-ai-systems.html`) pages
- Homepage built around Move Concierge AI: the missed-call scenario and the full call-to-follow-up journey, with a navy stage that shows each step's screen
- Each product page answers who it's for, the problem, how it works, how it fits existing systems (only integrations already named on the old pages) and the next step; each says what stays with people
- "Book a Demo" everywhere: product CTAs pass `?demo=`, the contact page names the product being booked and tags the Calendly booking with `utm_content`; "Discuss a problem our products don't solve" uses the same booking
- Ten labelled product-screen placeholders (HTML sources in `assets/products/placeholders/src/`, rendered PNGs, `PLACEHOLDERS.md` with sizes, usage and replacements)
- Trust section: commitments, a human-oversight and security note limited to documented product behaviour, and the permitted client logos labelled as engineering clients
- Team section on About (`#team`) with Ramesh Sethuraman and Makam Nagendra
- `site.js` for the stage, the Nexus AI tabs and nav state

### Changed
- Navigation: Home · Products · Custom AI Systems · About · Contact, with "Book a Demo"
- Type: Literata and Geist (Fraunces and Geist Mono dropped). Palette: white, navy and charcoal with the logo's orange on buttons. Full dark theme
- All titles, descriptions, JSON-LD, `og-image.png`, `sitemap.xml`, `llms.txt` and `llms-full.txt` rewritten for the product-led positioning
- Move Concierge AI copy no longer promises accurate quotes, never missing an enquiry or "complete analytics"; it states that the product doesn't give binding prices or promise dates
- 404 page restyled, still self-contained; points to the products
- nginx sends relative redirect locations (`absolute_redirect off`); pages are served with `Cache-Control: no-cache` so a cached page never pairs with newer CSS or JS
- Product-screen image URLs carry the shared `?v=` cache string, so a same-name screenshot swap shows after a bump
- The company profile PDF is no longer linked (it described the old services positioning); see TODOS.md

### Fixed
- The sticky product stage keeps its "Illustrative" caption in view on short laptop screens, tracks the step being read when scrolling back up, and swaps instantly under reduced motion
- Without JavaScript the home and Move Concierge pages stack and show each step's own screen
- The mobile menu closes after any menu link (including product links and Book a Demo), after Back/forward, and when the window widens
- `?demo=` only accepts the four known values
- `/header` and `/footer` are no longer served as pages

### Removed
- how-we-work, industries, why-optimity and management-team pages, with 301s (also for the `.html` and trailing-slash forms, query string kept) to custom-ai-systems.html, products.html, about.html and about.html#team, in `nginx.conf` and `.htaccess`
- The "Operations Teardown" name, everywhere
- The `price: 0` Offer in the Nexus AI structured data
- `nexus-demo.js`, which no page loaded

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

# TODOS

## Analytics & Measurement

### Wire GA4 + Search Console
**Priority:** P1
Add the GA4 tag (needs the founder's `G-XXXXXXX` measurement ID) and verify the domain in Google Search Console. Without this, SEO and conversion can't be measured.

## Proof & Content

### Replace the product-screen placeholders with real screenshots
**Priority:** P1
Every product screen on the site is a sample placeholder (tagged "Sample data") (assets/products/placeholders/PLACEHOLDERS.md). Capture real screens from Move Concierge AI first (call log, lead record, estimate booking, the details sent to the team, the dashboard), then Property Connect AI and Nexus AI. A real screen may only show features the pages claim. Same file names and sizes; remove each caption as it is replaced.

### Confirm the claims removed in the 2026-10-21 audit
**Priority:** P1
After the claims audit the pages name only Google Calendar (Concierge AI and its editions) and ERPNext, HubSpot and PostgreSQL (Nexus AI). Everything else was removed until the team confirms it: Move Concierge AI's MoveOps, Supermove, HubSpot, webhooks, SMS summaries, WhatsApp Business, 48-hour checklist, lead scoring, daily summaries, multi-location support and call recording; Trade Concierge AI's urgent routing by night and safety message; Salon Concierge AI's consultations and handoff rules; Property Connect AI's Follow Up Boss, kvCORE, HubSpot, Salesforce, webhooks, portal leads, listing data, named calendars, no-agent fallback, fair-housing review and recording; Nexus AI's Odoo, vLLM, sandboxes, alerts and reconciliation; Custom AI Systems' support and code-ownership lines. Restore an item, with its exact wording, only once the team confirms it.

### Publish the first real anonymized deployment story
**Priority:** P1
No case study is published. The first real one should come from a Move Concierge AI pilot (with the customer's permission, or anonymized by default) and sit in the homepage trust section. Until then the site shows no results, testimonials or customer counts.

## Deploy & Performance

### Add Content-Security-Policy header
**Priority:** P2
nginx.conf has no CSP despite loading assets.calendly.com with full page privileges. Add CSP allowing self + Calendly + Google Fonts; must be verified against the live Calendly widget on staging before enabling.

### Theme the Calendly embed for dark mode
**Priority:** P2
contact.html hardcodes light colors in the Calendly data-url; dark-mode users get a light slab. Build the URL from the active theme (requires widget re-init on toggle).

### Optimize image assets
**Priority:** P2
favicon.svg is 181KB (huge for an icon), logo_darkmode.png is 82KB at 884×282 for a 48px slot, suits.png is 1728×512. Downscale/compress to ~2× display size; consider one SVG brand logo for both themes.

### Self-host fonts
**Priority:** P3
Google Fonts stylesheet is render-blocking and a third-party availability dependency. Self-host the Literata (500) and Geist (400/500/600) woff2 subsets.

### Post-deploy checks
**Priority:** P3
After first production deploy: run the site through LinkedIn Post Inspector (refresh og-image cache), confirm /favicon.ico and /site.webmanifest resolve, confirm /assets/logo/PERMISSIONS.md returns 404, and confirm port 3000 is not reachable externally.

## Code Quality

### Cache-version bump guard
**Priority:** P3
Nothing enforces bumping the `?v=` params when styles.css/site.js/components.js/theme.js change (30-day cache). Add a pre-ship check comparing diff vs. version strings.

### Deduplicate theme-button rendering
**Priority:** P3
components.js initThemeButtons duplicates theme.js apply() label logic ('◑ Light'/'◐ Dark' in two files). Expose one shared function.

### Spacing magic-number sweep
**Priority:** P3
Off-scale spacing values remain in component CSS (14/18/22px gaps and paddings) vs the 8px token scale. Snap or document.

## Completed

### Replace the SEE/REASON/ACT hexagon diagram
The problem section now carries the simplified Before/After ops map (relocated from the hero) — the last abstract-AI visual is gone.
**Completed:** v1.0.1.0 (2026-08-10)

## P1: Legal review of the voice-product copy

Property Connect places outbound AI calls to web leads. Before launch, have counsel confirm the AI-disclosure wording callers hear, consent capture and calling hours for outbound calls (TCPA), and a recording notice if recording is ever claimed again. If the fair-housing review or the custom-work ownership line is restored (see the audit item above), have counsel approve the wording first. There is no privacy page yet; Calendly bookings and call recordings both collect personal data.

## P2: A product-led company profile

`Optimity_Profile_May_2026.pdf` is the old services deck (industries, consulting, a different email). It is no longer linked from About or llms-full.txt. It is still in the repo and served at its old URL, which search engines may have indexed; decide whether to remove it (and 410 the URL) or replace it. Replace it with a product-led profile, then link it again.

## P2: Lighter product screens

Placeholders are 2x PNGs (78–147 KB each). When real screenshots land, add WebP/AVIF and a 720w width through `srcset` (site.js would need to swap `srcset` too).


## P1: Facts the outside reviews asked for (only the company can supply them)

Four outside reviews (2026-10-20) agreed these decide whether a buyer books a demo. Add each to the product pages once it is true and confirmed:
1. A 30–60 second recording of Move Concierge AI (and Property Connect AI) answering a call, real with consent or clearly labelled as a demo.
2. Product status: live customers, pilot, or first customers going live (an honest line beats silence).
3. Pricing model: monthly fee, setup fee or per call, and contract length (no figures needed).
4. How calls reach Move Concierge AI (call forwarding, which phone systems), what callers hear, and whether it says it is an AI.
5. Setup time and support hours, including what happens when the service is down.
6. A company phone number, and the Calendly event renamed from "Deepak Ramesh · 30 Minute Meeting" to an Optimity product demo.

## P1: Concierge AI facts to confirm before launch

The pages say only what the playbook confirms (answers every call, day or night; books and reschedules in Google Calendar; a dashboard of every call and booking; sends the details to the team when a person needs to follow up). Confirm with the product team: how the details reach the team, how price questions behave on the demo lines, and whether callers are told they're talking to an AI. Replace the twelve `trade-*` and `salon-*` sample screens with real ones, and consider an audio clip from each demo line (the number itself stays off the site).


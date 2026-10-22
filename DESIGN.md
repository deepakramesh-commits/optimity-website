# Design System: Optimity Technologies — "Split stage" (product-led)

> v4-product, 2026-10-20. Replaces "Engineered Confidence for SME Operators" (Fraunces / Geist / paper and amber). Chosen by Deepak from three taste-skill directions (split stage, product chapters, quiet instrument) for the product-led site leadership approved: Optimity is an AI product company with three products, Move Concierge AI first, plus a selective custom AI capability. Written in the stitch-skill structure; the taste-skill house rules and the project brief override anything generic below.

## 0. The one test

Before a page ships: **would an operations director believe a serious software company made this?** The answer has to come from the product itself: its screens, the order things happen in, honest limits, and real people. Never from decoration.

## 1. Visual Theme & Atmosphere

Premium B2B software. A white page with navy type and a navy **stage** on which the product's own screens sit, one at a time. Density **balanced (5)**, variance **offset asymmetric (6)**, motion **restrained (3)**.

- **The homepage presents the company, not one product** (ads link straight to each product page). In order:
  - **Company hero:** one plain sentence about what Optimity builds across the full width, a supporting line, Book a Demo and "Find what fits", then a navy panel with a row of three sample screens from different products, each with its product name above it so the three labels line up (`.co-hero`, `.co-screens`).
  - **"Find what fits":** a routing list (`.routes`) of four equal two-column rows. Each row gives the job in the buyer's words, in one short line, and the product links: Concierge AI (with Move, Trade and Salon), Property Connect AI, Nexus AI and Custom AI Systems.
  - **Questions to ask before you choose:** the buyer's three questions (will it work with my setup, can my team take over, can I see what happened), each answered with confirmed behavior and where the products differ.
  - Then how a product goes live (five one-line steps), who you'd work with (team, offices, permitted logos) and a light closing band with Book a Demo and "Discuss a Custom Project".
- **Concierge AI is a product family.** `concierge-ai.html` explains the shared product once (headline beside a navy edition index, "What it does when it answers", one row per edition with Move Concierge AI first, the demo, systems). Its editions are Move Concierge AI™ (movers, its own page and name), Trade Concierge AI (`trade-concierge.html`) and Salon Concierge AI (`salon-concierge.html`, nail and hair salons), which share one layout: outcome headline and dashboard screen, a family line ("An edition of Concierge AI"), who it's for and the problem, the split stage with three steps (the call, the booking, the dashboard; Salon Concierge AI has two such walkthroughs, one per sample call), "What stays with you", systems and Book a Demo. Each edition has its own sample call with a curveball and its own screens; never the same copy with the trade swapped. The sample call is shown as a plain "Sample call" card, not inside the product frame, so it doesn't read as a transcript feature.
- **The signature:** on the Move Concierge AI, Trade Concierge AI and Salon Concierge AI pages the layout splits 44/56. The left column reads the journey (Move Concierge AI: incoming call → conversation → lead → estimate → the team; the other editions: the call → the booking → the dashboard); the right column is a sticky navy stage that shows the screen for the step being read. The stage is sized to the screen it shows, the whole screen is visible, and the headline starts level with it.
- **Hierarchy follows the business.** The Concierge AI family is first in the menu, the footer and the products page, with Move Concierge AI (movers) first among its editions. Move Concierge AI stays the go-to-market priority through its own page and where traffic is sent; its page carries the full call-to-follow-up walkthrough. Each product page is an ad landing page in its own right: it opens on the outcome for that buyer.
- Neighboring sections never share a shape: a full-width company sentence over a row of three product screens; a list of four routes; statement rows; a five-step strip; team and logos side by side; on inner pages a headline beside a navy edition index and alternating product rows; a five-step strip whose first step is filled navy; statement rows beside a surface panel; a light closing band (separated from the navy footer by space, never touching it); Custom AI Systems uses a four-step strip. Inner pages add real tables, a timestamped timeline, tabs and a fit list.
- Light is the default; dark is complete and is how leadership reviews (on a phone).

## 2. Color Palette & Roles

| Role | Light | Dark | Use |
|---|---|---|---|
| **Ground** (`--bg`) | White `#FFFFFF` | Navy-charcoal `#0B1220` | Page background |
| **Surface** (`--surface`) | Mist `#F3F5F8` | Deep slate `#131C2E` | Panels, steps, oversight note, offices |
| **Ink** (`--ink`) | Navy `#0F1B2D` | Cloud `#EEF1F5` | All running text and headings |
| **Muted** (`--muted`) | Slate `#4B5869` | Ash blue `#A3ADBC` | Secondary notes, labels, table headers |
| **Stage** (`--stage`) | Navy `#0F1B2D` | Midnight `#18223A` | The product stage, final band, footer, filled step |
| **Stage ink / muted** | `#EEF1F5` / `#A9B4C4` | same | Text on the stage |
| **Signal Orange** (`--accent`) | `#F2541B` | `#F2541B` | Buttons only (navy text on it, 5.0:1), selection, the current-page underline, bullet marks in product lists |
| **Orange hover** (`--accent-hover`) | `#F46A39` | `#F46A39` | Button hover (navy text 5.7:1) |
| **Calendly primary** | `#C2410C` | — | Calendly's `primary_color` only, so its white button text passes AA |

- Body copy is always full ink (≥ 7:1). Muted is for secondary notes only.
- Orange is never text on white (3.5:1). Banned: gradients, purple/indigo, neon, pure `#000000`.
- Focus rings use `--focus` (ink), switched to stage ink on the stage, the final band and the footer.

## 3. Typography Rules

- **Display: Literata** (Google Fonts, optical sizes, weight 500). Headlines, step titles, product names, statements. Tracking `-0.015em`, leading 1.04–1.2.
- **Text: Geist** (weights 400/500/600). Body, navigation, buttons, tables.
- Steps: small 14px · body 17–18px · lead 19–22px · head 28–44px · display 38–60px (product and overview heroes) and up to 70px on text-only page heroes; the homepage company sentence runs 25–48px because it spans the full width. Product-page heroes carry the outcome headline ("The calls your moving company misses, answered") at 26–50px; the product name with ™ opens the lead sentence.
- Headlines fit two lines from 680px up. Desktop line breaks are authored with `<span class="ln">` / `<span class="nm">` blocks; on phones they wrap naturally (the homepage sentence takes three or four lines at 680px and below).
- Sentence case. No uppercase labels, no letter-spaced captions, no monospace outside real code (`pre.code` in the Nexus SQL tab).
- `™` appears once per page on the product name's first mention (product-page lead, the Concierge AI edition index, products overview) and in the footer, set small (`.tm`). Not in the menu or on Nexus AI's internal engines.

## 4. Component Stylings

- **Buttons:** flat Signal Orange, navy text, 6px radius, 48px (44px small). Hover lightens; press moves 1px. One primary per screen; the second action is a text link with a 2px underline.
- **Header:** logo; Home · Products (link with a dropdown: Concierge AI first with its three editions indented under it (Move, Trade, Salon); the current page is the only tinted row; then Property Connect AI and Nexus AI, each with its buyer) · Custom AI Systems · About · Contact; theme toggle; **Book a Demo**. Under 1040px the links move into the existing `#nav-cb` drawer (theme.js unchanged). Dropdowns close with Escape.
- **Product screens:** PNG placeholders on navy, 10px radius, no shadow, no caption. The one exception is the homepage hero, where each of the three screens carries its product name below it so the visitor knows which product they are looking at. Each screen carries its own "Sample data" tag in its title bar. On the stage the screen is capped to the stage height. On phones the stage gives way to the same screens inline, one per step, shown whole.
- **Tables:** real `<table>` with row rules; on phones each row stacks with `data-label` labels.
- **Tabs (Nexus AI):** `role=tablist`, arrow keys, selected tab filled navy; without JavaScript every panel shows.
- **"What it won't do" / limits panels:** surface panels that state what stays with people. Every product page has one.
- **Footer:** navy, three short columns (Products, Company, Talk to us) and one meta line.

## 5. Layout Principles

- Max width 1600px; margins `clamp(20px, 2.6vw, 40px)`; split 44/56. Section gap `clamp(72px, 8vw, 120px)`.
- Breakpoints: 1180 (tighter nav), 1040 (drawer, splits stack, stage becomes inline screens), 680 (phone composition), 400 and 359 (small phones: the booking button moves into the menu below 360px).
- Touch targets ≥ 44px. No horizontal scroll from 320px up.

## 6. Motion & Interaction

- **Only where it explains a product:** the stage cross-fades to the screen of the step whose top has passed the middle of the window (checked once per frame on scroll, so jumps land on the right screen; 160ms opacity, instant under reduced motion); Nexus AI's engine tabs; the contact page naming the product being booked. No entrance animations, no loops, no "live" labels.
- `prefers-reduced-motion` removes every transition. Every page reads fully without JavaScript: the split stacks and each step shows its own screen.

## 7. Imagery and the placeholder rule

- **Real only:** the logo, the seven permitted client logos (single-colour; labelled "Companies we've built software for… engineering clients, not product customers"), and the two team photographs from `assets/team` (shown at or below native size).
- **Product screens are placeholders until real screenshots exist.** Each is an HTML/CSS mock-up in `assets/products/placeholders/src/`, rendered to PNG at 2x with the gstack browse tool, saved in `assets/products/placeholders/`, and listed in `assets/products/placeholders/PLACEHOLDERS.md` with its pixel size, where it is used and what should replace it.
- **Every placeholder shows a visible "Sample data" tag inside the screen** (in its title bar, never cropped), and its alt text starts with "Sample". The separate "Illustrative" caption was removed at Deepak's request on 2026-10-20; the in-screen tag and the fictional names are the label. Placeholders use fictional businesses ("Sample Moving Co.", "Sample Realty", "Sample Distribution Co."), invoice and enquiry numbers, and hidden phone numbers. They never show a real name, number or phone number, and never look like a real customer deployment.
- A real screenshot replaces a placeholder by using the same file name and pixel size; remove its caption when you do. No AI image generator is used for interface screens. `og-image.png` is rendered the same way from `assets/og-src/og-image.html`.

## 8. Voice

A senior engineer talking to an operations manager: plain, specific, confident. US English for US buyers: lead (not enquiry), estimate (not survey), elevator (not lift), on weekends. Describe what happens before, during and after a lead. Name the systems only where today's product pages already name them.
- Avoid "not X but Y", neat pairs and groups of three as rhetoric, slogans, and: seamless, elevate, unlock, empower, cutting-edge, transform, journey, in motion.
- Never promise every enquiry converts, a revenue figure, or that AI replaces a team. Never claim the voice products quote prices or give estimates: a price question goes to the team. Handoffs use one wording: "When a person needs to follow up, [product] sends the details to your team." For Concierge AI and its editions, never say the product transfers the call, texts or emails anyone, or that a person is always available (Property Connect AI's private briefing, warm handoff to an agent and SMS tour invite are kept). Never promise emergency detection, an arrival time, or that a product replaces emergency services.
- Every CTA is "Book a Demo" or a product-specific version of it; custom work is "Discuss a problem our products don't solve", except the homepage closing band, which says "Discuss a Custom Project". The old "Operations Teardown" name is retired.
- No contract-style phrasing ("where configured", "according to your configured rules"). Optimity is an AI product company that also builds custom AI systems, never a "product studio" or a consultancy.
- No prices anywhere, including structured data.

## 9. Content Integrity (enforced — a design rule, not a suggestion)

This rule is load-bearing for the firm's positioning and survives every redesign:
- **No invented proof.** Never render client names, logos, testimonials, ROI, metrics, customer counts, certifications or integrations that aren't real and permissioned — not even as placeholder/filler. An empty proof slot is acceptable; a fake one is not. Displayed client logos require recorded permission (`assets/logo/PERMISSIONS.md`), and are labelled for what they are.
- **Sample artifacts must be labeled.** Every illustrative product screen, sample call, sample lead or example workflow carries a visible "Sample data" / "sample" marker and uses obviously fictional content (see §7). No control or crop may hide the label.
- **Anonymized-by-default proof.** Real deployment proof is published fully anonymized (sector-only, ranges) unless a client grants named permission.
- **Live systems over slideware.** Favor real working-software screenshots over decorative imagery everywhere; until they exist, labelled placeholders of the real product UI.
- **Only substantiated claims.** Confirmed facts and the internal playbook are the source of truth; anything unconfirmed is narrowed or removed, never strengthened, and a claim removed from a page is removed from its metadata, structured data and the llms files too. Named systems are limited to: Google Calendar (Concierge AI and its editions) and ERPNext, HubSpot, PostgreSQL and supported document sources (Nexus AI). Everything else is "a custom integration we can scope and build". Property Connect AI's callback is always scoped: "can call eligible leads back within 60 seconds when they come through connected forms and sources". Security statements are limited to the confirmed Nexus AI list (team-level and row-level permissions, Clerk enterprise authentication and isolated database partitions, separate knowledge bases, read-only database access for queries, customer-managed infrastructure with self-hosted inference available, approved write actions) and never stretched into broader guarantees. Sample screens follow the same rule: no recordings, transcripts, SMS, email, lead scores or daily summaries where the product doesn't claim them.

## 10. Anti-Patterns (Banned)

Robots, glowing brains, circuit boards, stock businesspeople · fake terminals, fake dashboards, "live" labels · eyebrow labels and small uppercase mono labels · numbered 01/02/03 decoration · icon-card grids and rows of identical cards · gradients, glass, glow · shadows on resting elements (dropdowns excepted) · centred-everything · styled accent words in headlines · pages per technology, model or industry · generic services catalogues · Inter or system-ui as display · Title Case headings · generic names ("John Doe", "Acme") · fake round numbers · AI copy clichés.

## 11. Files

- `styles.css` (tokens, components, responsive) · `site.js` (stage, tabs, nav state) · `theme.js` and `components.js` (unchanged behaviour).
- Cache string: every page and `components.js` share `?v=YYYYMMDD-pN` (currently `20261021-p36`). Bump it whenever styles.css, site.js, theme.js or components.js change, or a placeholder is replaced (image URLs carry it too).
- Retired URLs (how-we-work, industries, why-optimity, management-team) 301 in `nginx.conf` and `.htaccess`, query string kept, to the canonical `.html` pages.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-22 → 2026-08-10 | "Engineered Editorial" and v2/v3 | Superseded by the product-led rebuild |
| 2026-10-20 | Product-led structure: Home · Products · Custom AI Systems · About · Contact; four pages retired with 301s | Leadership-approved positioning; Move Concierge AI is the first go-to-market priority |
| 2026-10-20 | Direction "Split stage" (navy/charcoal/white + logo orange) | Chosen over "Product chapters" and "Quiet instrument": reads as established B2B software, and the stage makes the call-to-follow-up workflow the memorable moment |
| 2026-10-20 | Literata + Geist | Literata approved with the direction; Geist already on the site |
| 2026-10-20 | Placeholder rule (§7) | No real screenshots yet; HTML-rendered, captioned placeholders keep the design honest and swappable |
| 2026-10-20 | "Book a Demo" with `?demo=` routing and Calendly `utm_content` | One booking path, product named on the page and recorded on the booking; Calendly account unchanged |
| 2026-10-20 | Client logos labelled as engineering clients, shown on About only | They are proof of the team, not of the products |
| 2026-10-20 | Integrations listed only as named on the pre-rebuild product pages | Approved by Deepak; nothing new added |
| 2026-10-20 | A receptionist product family added, Move Concierge AI as its movers edition (name, ™, page and URL kept), with editions for home services and salons | Product facts limited to what it does, who it's for and how the demo runs. Urgent calls are passed "to the person you choose", without promising a callback |
| 2026-10-21 | The family is named Concierge AI, with Move, Trade and Salon Concierge AI; nail and hair salons merge into one Salon page | Concierge AI is the brand; "AI receptionist" is only the plain description, used in the Concierge pages' titles, meta descriptions and opening lines. No ™ on the new names until confirmed |
| 2026-10-21 | Client logos also shown on the homepage, beside the team, with the label "They are engineering clients, not product customers." | Supersedes "About only": the homepage now presents the company, and the label keeps them from reading as product proof |
| 2026-10-21 | Claims audit applied across every page, the metadata and the llms files: Concierge AI names only Google Calendar and uses one handoff wording; Move Concierge AI loses its moving-software, messaging, recording, lead-score and daily-summary claims; Trade Concierge AI loses urgent routing and the configurable safety message; Salon Concierge AI loses consultations and handoff rules; Property Connect AI's callback is scoped and its named CRMs removed; Nexus AI keeps only the confirmed list (Odoo, vLLM, sandboxes, alerts removed); Custom AI Systems loses the support and code-ownership promises | Deepak's decisions on the audit; anything unconfirmed is narrowed or removed until the team confirms it |
| 2026-10-21 | Homepage refined: "Optimity builds AI that takes the routine work off your team.", one-line routes, buyer's questions, one-line steps, "Let's find the right place to start." | Copy only; the structure and design stay |
| 2026-10-21 | Homepage presents the company: company hero with screens from three products, "Find what fits" routes, what every product shares, team and logos | Product pages do the selling; Move Concierge AI stays the priority through its page and traffic, not the homepage |
| 2026-10-20 | Homepage becomes a three-product overview; outcome headlines on product pages; US English; walkthrough tightened; phone screens shown whole | Outside reviews (designer, moving-company owner, copy editor, skeptical buyer): vague headline, duplicated Move Concierge content, cut-off phone screens, UK terms. Deepak: ads link to each product page, so the homepage stays about all three |

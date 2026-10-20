# Design System: Optimity Technologies — "Split stage" (product-led)

> v4-product, 2026-10-20. Replaces "Engineered Confidence for SME Operators" (Fraunces / Geist / paper and amber). Chosen by Deepak from three taste-skill directions (split stage, product chapters, quiet instrument) for the product-led site leadership approved: Optimity is an AI product company with three products, Move Concierge AI first, plus a selective custom AI capability. Written in the stitch-skill structure; the taste-skill house rules and the project brief override anything generic below.

## 0. The one test

Before a page ships: **would an operations director believe a serious software company made this?** The answer has to come from the product itself: its screens, the order things happen in, honest limits, and real people. Never from decoration.

## 1. Visual Theme & Atmosphere

Premium B2B software. A white page with navy type and a navy **stage** on which the product's own screens sit, one at a time. Density **balanced (5)**, variance **offset asymmetric (6)**, motion **restrained (3)**.

- **The signature:** on the home and Move Concierge AI pages the layout splits 44/56. The left column reads the journey (incoming call → conversation → enquiry → survey or callback → the team); the right column is a sticky navy stage that shows the screen for the step being read. The screen runs off the stage's right edge so it reads at a useful size, with its "Illustrative" caption in view.
- **Hierarchy follows the business.** Move Concierge AI gets the most space everywhere (hero, the longest section, first in every menu and list). Property Connect AI and Nexus AI are real products shown at a visibly smaller size.
- Neighbouring sections never share a shape: split stage; a 7/5 pair of unequal product blocks; a five-step strip whose first step is filled navy; statement rows beside a surface panel; a logo row; a navy closing band. Inner pages add real tables, a timestamped timeline, tabs and a fit list.
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
- Steps: small 14px · body 17–18px · lead 19–22px · head 28–44px · display 38–60px (hero) and up to 70px on text-only page heroes. Product-page heroes are set smaller (32–54px) so a product name plus "for …" fits two lines.
- Headlines fit two lines at 1440, 1024 and 390. Hero lines and product names are authored with `<span class="ln">` / `<span class="nm">` blocks.
- Sentence case. No uppercase labels, no letter-spaced captions, no monospace outside real code (`pre.code` in the Nexus SQL tab).
- `™` appears in product page headlines, menus, the footer and the products overview, set small (`.tm`).

## 4. Component Stylings

- **Buttons:** flat Signal Orange, navy text, 6px radius, 48px (44px small). Hover lightens; press moves 1px. One primary per screen; the second action is a text link with a 2px underline.
- **Header:** logo; Home · Products (link with a dropdown: Move Concierge AI first on a tinted row, then Property Connect AI, Nexus AI, each with its buyer) · Custom AI Systems · About · Contact; theme toggle; **Book a Demo**. Under 1040px the links move into the existing `#nav-cb` drawer (theme.js unchanged). Dropdowns close with Escape.
- **Product screens:** PNG placeholders on the navy stage, 10px radius, no shadow, each with a figure caption "Illustrative". On the stage the caption sits above the screen and the screen is capped to the stage height, so the caption is never clipped. On phones the stage gives way to the same screens inline, one per step, on full-width navy bands.
- **Tables:** real `<table>` with row rules; on phones each row stacks with `data-label` labels.
- **Tabs (Nexus AI):** `role=tablist`, arrow keys, selected tab filled navy; without JavaScript every panel shows.
- **"What it won't do" / limits panels:** surface panels that state what stays with people. Every product page has one.
- **Footer:** navy, three short columns (Products, Company, Talk to us) and one meta line.

## 5. Layout Principles

- Max width 1600px; margins `clamp(20px, 2.6vw, 40px)`; split 44/56. Section gap `clamp(96px, 11vw, 160px)`.
- Breakpoints: 1180 (tighter nav), 1040 (drawer, splits stack, stage becomes inline screens), 680 (phone composition), 400 and 359 (small phones: the booking button moves into the menu below 360px).
- Touch targets ≥ 44px. No horizontal scroll from 320px up.

## 6. Motion & Interaction

- **Only where it explains a product:** the stage cross-fades to the screen of the step being read (160ms opacity, instant under reduced motion); Nexus AI's engine tabs; the contact page naming the product being booked. No entrance animations, no loops, no "live" labels.
- `prefers-reduced-motion` removes every transition. Every page reads fully without JavaScript: the split stacks and each step shows its own screen.

## 7. Imagery and the placeholder rule

- **Real only:** the logo, the seven permitted client logos (single-colour; labelled "Companies we've built software for… engineering clients, not product customers"), and the two team photographs from `assets/team` (shown at or below native size).
- **Product screens are placeholders until real screenshots exist.** Each is an HTML/CSS mock-up in `assets/products/placeholders/src/`, rendered to PNG at 2x with the gstack browse tool, saved in `assets/products/placeholders/`, and listed in `assets/products/placeholders/PLACEHOLDERS.md` with its pixel size, where it is used and what should replace it.
- **Every placeholder shown on the site carries a visible "Illustrative" caption**, and its alt text starts with "Illustrative". Placeholders use fictional businesses ("Sample Moving Co.", "Sample Realty", "Sample Distribution Co."), invoice and enquiry numbers, and hidden phone numbers. They never show a real name, number or phone number, and never look like a real customer deployment.
- A real screenshot replaces a placeholder by using the same file name and pixel size; remove its caption when you do. No AI image generator is used for interface screens. `og-image.png` is rendered the same way from `assets/og-src/og-image.html`.

## 8. Voice

A senior engineer talking to an operations manager: plain, specific, confident. Describe what happens before, during and after an enquiry. Name the systems only where today's product pages already name them.
- Avoid "not X but Y", neat pairs and groups of three as rhetoric, slogans, and: seamless, elevate, unlock, empower, cutting-edge, transform, journey, in motion.
- Never promise every enquiry converts, a revenue figure, or that AI replaces a team. The voice products don't give binding prices, promise dates or agree to exceptions.
- Every CTA is "Book a Demo" or a product-specific version of it; custom work is "Discuss a problem our products don't solve". The old "Operations Teardown" name is retired.
- No prices anywhere, including structured data.

## 9. Content Integrity (enforced — a design rule, not a suggestion)

This rule is load-bearing for the firm's positioning and survives every redesign:
- **No invented proof.** Never render client names, logos, testimonials, ROI, metrics, customer counts, certifications or integrations that aren't real and permissioned — not even as placeholder/filler. An empty proof slot is acceptable; a fake one is not. Displayed client logos require recorded permission (`assets/logo/PERMISSIONS.md`), and are labelled for what they are.
- **Sample artifacts must be labeled.** Every illustrative product screen, sample call, sample lead or example workflow carries a visible "Illustrative" / "Sample data" / "sample" marker and uses obviously fictional content (see §7). No control or crop may hide the label.
- **Anonymized-by-default proof.** Real deployment proof is published fully anonymized (sector-only, ranges) unless a client grants named permission.
- **Live systems over slideware.** Favor real working-software screenshots over decorative imagery everywhere; until they exist, labelled placeholders of the real product UI.
- **Only substantiated claims.** Integrations are limited to those named on the product pages before this rebuild; security and oversight statements are limited to what the products are documented to do.

## 10. Anti-Patterns (Banned)

Robots, glowing brains, circuit boards, stock businesspeople · fake terminals, fake dashboards, "live" labels · eyebrow labels and small uppercase mono labels · numbered 01/02/03 decoration · icon-card grids and rows of identical cards · gradients, glass, glow · shadows on resting elements (dropdowns excepted) · centred-everything · styled accent words in headlines · pages per technology, model or industry · generic services catalogues · Inter or system-ui as display · Title Case headings · generic names ("John Doe", "Acme") · fake round numbers · AI copy clichés.

## 11. Files

- `styles.css` (tokens, components, responsive) · `site.js` (stage, tabs, nav state) · `theme.js` and `components.js` (unchanged behaviour).
- Cache string: every page and `components.js` share `?v=YYYYMMDD-pN` (currently `20261020-p11`). Bump it whenever styles.css, site.js, theme.js or components.js change, or a placeholder is replaced (image URLs carry it too).
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
| 2026-10-20 | Client logos labelled as engineering clients | They are not Move Concierge customers |
| 2026-10-20 | Integrations listed only as named on the pre-rebuild product pages | Approved by Deepak; nothing new added |

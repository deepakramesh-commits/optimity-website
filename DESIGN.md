# Design System: Optimity Technologies — "The working system"

> v4, 2026-10-19. Replaces "Engineered Confidence for SME Operators" (Fraunces / Geist / paper and amber). Chosen by the founder team from three dealt directions (taste-skill "The product performs"; alternatives were "The practice poster" and "The board"). Written in the stitch-skill structure; the house rules come from taste-skill and override anything generic below.

## 0. The one test

Every page is checked against one question before it ships: **would an operations director at a 50 to 500 person company believe a serious engineering firm made this, and not a template?** The answer has to come from real work on the page: a working interface, a real workflow, a real table, real people. Never from decoration.

## 1. Visual Theme & Atmosphere

A quiet, white engineering document with one working system in the middle of it. Density **balanced (5)**, variance **offset asymmetric (6)**, motion **fluid but rare (4)**.

- Most of the page is white ground, ink type and space. The visual interest comes from **interface fragments of the products doing their job** (Nexus AI answering an ERPNext question, a Move Concierge call, a Property Connect lead) and from **real tables and real workflows**, not from illustration.
- One alignment carries the site: a **rail at 27% from the left edge**. Headlines, section headings and running text sit on it; wide things (bands, tables, the close) run to the margins.
- Neighbouring sections never share a shape. The set of shapes in use: rail hero with a peeking panel; split hero with a fragment; live demo panel with controls; full-bleed sentence bands with switches; pinned statements with a changing card; quiet logo row; people row; real data table; statement rows; two-lane workflow; timeline; orange close with a booking card; ink close; surface close line.
- The light theme is the default; the dark theme is complete and reviewed on a phone (the founder reviews in dark mode on a phone).

## 2. Color Palette & Roles

One ground, one ink, one accent. The accent is the logo's own orange and appears on actions and the home page's closing field only.

| Role | Light | Dark | Use |
|---|---|---|---|
| **Ground** (`--bg`) | Pure White `#FFFFFF` | Off-Black `#141414` | Page background |
| **Surface** (`--surface`) | Paper Grey `#F2F2F0` | Graphite `#1E1E1E` | Fragment panels, statement bands, close line |
| **Stage** (`--stage`) | Stage Grey `#E6E6E3` | Stage Graphite `#282826` | The flat colour behind a fragment, controls column, clocks |
| **Ink** (`--ink`) | Near-Black `#232323` | Bone `#EDEDEB` | All running text, headings |
| **Muted** (`--muted`) | Slate Grey `#5C5C59` | Ash `#A6A6A2` | Secondary notes, labels inside fragments, table headers |
| **Signal Orange** (`--accent`) | `#F2541B` | `#F2541B` | Primary buttons, the home close field, the Nexus query mark. Text on it is `#1A1A1A` (4.9:1) |
| **Calendly orange** (`--accent-deep`) | `#C2410C` | — | Calendly's `primary_color` only, so its white button text passes AA |
| Band tints (`--band-1/2/3`) | `#E8E6E2` `#DFE6E8` `#E7E3EC` | `#2B2721` `#1F292B` `#27232C` | Fill of a switched-on sentence band on the home page |

- Body copy is always full ink (≥ 7:1). Muted is for secondary notes only.
- Surfaces are separated by a tone step, never by a line or a shadow.
- Orange is never used as text colour on white (3.3:1 fails).
- Banned: cream-and-terracotta, purple/indigo, neon, gradients, pure `#000000`.

## 3. Typography Rules

- **One family: Archivo** (Google Fonts, weights 400/500/600). `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&display=swap`. Display stays at regular weight even at 76px; hierarchy comes from size and colour, not boldness.
- **Five steps** (tokens in `styles.css`): small `0.875rem` (14px) · body `clamp(1.0625rem, 1rem + .25vw, 1.1875rem)` (17–19px) · lead `clamp(1.25rem, 1.1rem + .6vw, 1.5rem)` (20–24px) · head `clamp(1.75rem, 1.2rem + 2vw, 2.75rem)` (28–44px) · display `clamp(2.25rem, 1.1rem + 4.2vw, 4.75rem)` (36–76px). Interface fragments use their own true sizes (14–15px) inside `data-ui`.
- Display tracking `-0.028em`, leading `1.02`; heads `-0.02em`, `1.08`; body leading `1.55`, measure ≤ 62ch.
- **Every headline fits in two lines at 1440, 768 and 390.** Hero lines are authored (`.mask` spans), about 20 characters per line, so they survive a phone at 36px.
- Sentence case everywhere. No uppercase labels, no letter-spaced captions.
- Monospace appears only inside real code (`pre.sql` in the Nexus SQL fragment).
- `™` appears once per product name, set small (`.tm`), in the product page headline and engine names.

## 4. Component Stylings

- **Buttons:** flat Signal Orange fill, near-black text, 4px radius, 48px tall (44px small, 52px in cards). Hover darkens one step; press translates 1px. One primary action per screen; the second action is a **text link** with a 2px underline that opens on hover, never a ghost button.
- **Header:** logo, six plain links (two are dropdowns: Products, About us), a text theme toggle and the orange "Book an Operations Teardown" button (short label "Book a teardown" under 1180px). No bar chrome. Under 1040px the links move into a drawer driven by the existing `#nav-cb` checkbox (`theme.js` unchanged).
- **Dropdowns:** the only resting shadow on the site, because they float. Group names inside (Operational intelligence, Client engagement agents) are plain small text.
- **Interface fragments (`data-ui`):** cropped pieces of real product UI at true size: query bar with an orange mark, routed-to line, data table with tabular figures, small bar chart, source toggles, checklists, transcripts, records. Inside a fragment the product's own conventions apply (1px control borders, 6–10px radii). **Every fragment that shows data carries a visible "Sample data" / "Example" / "Sample" label.**
- **Sentence bands with switches (home):** a full-width band per capability; the switch is a real `<button aria-pressed>`; switching on fills the band with a tint and opens the practice it belongs to.
- **Tables:** real `<table>` with header cells and 1px row rules; on phones each row stacks into a labelled block (`data-label`).
- **Statement rows:** a key sentence in the rail column and its explanation from the rail onward; every other row sits on Surface.
- **Cards:** only the booking card (home close) and fragments; never a grid of identical cards.
- **Calendly:** embed markup unchanged; framed on Stage with a white inner panel in both themes; colour parameters `background_color=ffffff&text_color=232323&primary_color=c2410c`.

## 5. Layout Principles

- Page max width 1600px; margins `clamp(20px, 2.6vw, 40px)`; one rail at 27% (`--rail`), collapsing to the margin under 1040px. Grids that start on the rail use `column-gap: 0` so text lands exactly on it.
- Section gap `clamp(96px, 13vw, 184px)`, clearly larger than any gap inside a section.
- Breakpoints: 1180 (header label), 1040 (rail collapses, drawer nav), 680 (phone composition). The phone layout is its own composition, not a squeeze: one column, buttons full width, tables stacked, the pinned teardown card sticky at the top half of the screen.
- Touch targets ≥ 44px everywhere (links in nav and footer included). No horizontal scroll at 390px.
- Each page closes in its own shape: home (orange field + booking card), industries (ink band), the rest (surface close line), contact (offices and email).

## 6. Motion & Interaction

- **Signature move:** hero headline lines rise from behind their baseline on load (pure CSS, 900ms, second line +110ms).
- **Entrances:** headings, rows, list items and fragments rise 24px with opacity as they enter (`site.js`, IntersectionObserver, staggered 80ms by position). Content is visible without JavaScript, and anything already on screen at load is shown immediately.
- **Live things (one per page, from real content):** home — the Nexus AI sample panel (questions and sources switch the answer); sentence switches; the pinned teardown card changing state. Nexus AI — the engine picker. About — live office clocks for India, Dallas and the UAE. Product pages — the call and lead fragments.
- Transform and opacity only. `prefers-reduced-motion` stops everything (CSS kill switch, and `site.js` skips entrances and bar growth).
- No perpetual loops, nothing floats, no "live" indicators. (A deliberate departure from stitch-skill's default of perpetual micro-loops.)

## 7. Imagery

- Real only: the logo, the seven permitted client logos (single-colour treatment: greyscale + multiply in light, invert + screen in dark), the two team photographs (never shown above native size: 400px and 482px), and product interface fragments built in HTML.
- No stock photography, no generated imagery on the site, no illustrations or abstract diagrams. Adding any new image needs the founder's approval first.
- The taste-skill inspector's picture floor (four real pictures per page) is not met on text pages (about, contact, why-optimity) by choice: no new images without approval.

## 8. Voice

A senior engineer explaining it to a business owner: plain, specific, confident.
- Name the systems (ERPNext, Odoo, HubSpot, Salesforce, Excel, WhatsApp), the friction (retyping, chasing, exports) and the outcome.
- Avoid "not X but Y" lines, neat pairs and groups of three as rhetoric, slogans, and: seamless, elevate, unlock, empower, cutting-edge, transform, journey, leverage, next-gen.
- Closing invitations are page-specific and all lead to the Operations Teardown (`contact.html#book`).
- No prices on the site.

## 9. Content Integrity (enforced — a design rule, not a suggestion)

This rule is load-bearing for the firm's positioning and survives every redesign:
- **No invented proof.** Never render client names, logos, or numbers that aren't real and permissioned — not even as placeholder/filler. An empty proof slot is acceptable; a fake one is not. Displayed client logos require recorded permission (`assets/logo/PERMISSIONS.md`).
- **Sample artifacts must be labeled.** Any illustrative deployment, workflow, query or record shown in marketing carries a visible "Sample data" / "Example" / "Sample" marker and uses obviously fictional content (invoice and account numbers, "Sample family clinic"), never a real or known-demo name.
- **Anonymized-by-default proof.** Real deployment proof is published fully anonymized (sector-only, ranges) unless a client grants named permission.
- **Live systems over slideware.** Favor real working-software fragments over decorative imagery everywhere.
- **No overclaiming labels.** Nothing static is labelled "live", "engine" or "real-time" unless it is.
- No composite case studies next to real logos.

## 10. Anti-Patterns (Banned)

Eyebrow labels above headings · monospace outside real code · 01/02/03 index numbering · hairline dividers outside tables and fragments · shadows on resting elements (dropdowns excepted) · gradients · glass/blur · icon-topped feature cards and rows of identical cards · pill badges · emoji · styled accent words in headlines · centred-everything · fake diagrams, fake dashboards, fake "live" labels · stock photos, robots, glowing networks · cream-and-terracotta or purple palettes · `Inter`, system-ui display · Title Case headings · generic names ("John Doe", "Acme", "Nexus" as filler) · fake round numbers · AI copy clichés.

## 11. Files

- `styles.css` — tokens, components, responsive rules. `site.js` — entrances, Nexus sample panel, switches, pinned teardown, engine picker, clocks, dropdown state. `theme.js` and `components.js` — unchanged behaviour (theme toggle, partial loading, nav highlighting).
- Cache string: every page and `components.js` share `?v=YYYYMMDD-rN` (currently `20261019-r2`). Bump it whenever `styles.css`, `site.js`, `theme.js` or `components.js` changes.
- Verification: `taste-skill` `lint.mjs` (0 FAIL) and `inspect.mjs` on every page; screenshots at 1440 / 1024 / 390 in both themes via gstack `/browse`.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-22 | Initial system "Engineered Editorial" | Superseded |
| 2026-08-09 | v2/v3: forward deployment, Believability Mandate | Superseded; the mandate's intent survives as §0 |
| 2026-08-10 | Hero must answer "what do you do" | Stakeholder phone review; the three practices are in the first screen |
| 2026-10-19 | v4 "The working system" (taste-skill "The product performs") | Chosen over "The practice poster" and "The board"; the product doing its job is the most believable thing an engineering firm can show |
| 2026-10-19 | Archivo replaces Fraunces + Geist + Geist Mono | One family; approved with the direction |
| 2026-10-19 | Logo orange `#F2541B` replaces amber `#B8550F` | The subject's own colour; used on actions only |
| 2026-10-19 | Mono labels, eyebrows, numbered steps, hairlines, shadows removed | Generated-page tells (audit 2026-10-19) |
| 2026-10-19 | Industries / about diagrams replaced by a sector table, a document-to-record fragment and live office clocks | The diagrams were decoration, not real systems |
| 2026-10-19 | Calendly primary `#C2410C` | Keeps Calendly's own white button text at AA |

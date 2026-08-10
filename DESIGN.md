# Design System — Optimity

> "Engineered Confidence for SME Operators" (v3). Created by /design-consultation 2026-06-22 as "Engineered Editorial"; v2 2026-08-09 from the founder's forward-deployment direction; v3 same day adds the founder's human/non-AI mandate. Evolution, not rebrand: type, palette, spacing carry over.

## The Believability Mandate (v3 — governs everything below)
**The site must not look AI-generated.** It should read as a small, excellent studio making hundreds of deliberate decisions: editorial design × engineering documentation × premium technology company. If forced to choose between more impressive and more believable, always choose **more believable**. The final feel: *a brilliant engineering team documented their work beautifully* — not a marketing team asking AI to design an engineering company.

Operating rules:
- **Vary section structure.** Never let every section follow headline → paragraph → 3 cards → CTA. Adjacent sections should differ in shape (hairline list, ledger, split, diagram panel, open editorial column).
- **Less UI, more editorial.** No boxes inside boxes. Cards only for a genuine grouping relationship; logo walls, principle lists, and step sequences get typography + thin rules + whitespace, not chrome.
- **Controlled irregularity.** The grid is rigorous; content may deliberately break it — a number in the margin, an artifact wider than its text column, varied section heights, asymmetric image/text splits. Designed, never random.
- **No repetitive pill UI.** Section labels are plain mono text, not repeated bordered chips.
- **Real work is the visual identity.** Diagrams show actual tools and flows (CRM → integration → system → operations), never abstract network/AI visualizations. No fake terminals, fake metrics, fake "live" indicators, decorative code, or animated rings pretending to be technology.
- **Human details, never fabricated ones.** Deployment identifiers, editorial captions, honest labels, footnotes — only where the detail is true. Authenticity > decoration; an empty slot beats an invented one.
- **Motion is rare and reasoned.** A connection appearing, a line drawing itself, a state transitioning — once, on purpose. Nothing loops forever; nothing floats; `prefers-reduced-motion` stops everything including SVG/SMIL.
- **The §18 self-audit before shipping:** could this be a Framer template? same structure every section? too many cards? everything symmetrical? abstract visuals instead of real artifacts? looks like an AI company / consultancy / SaaS template? Any yes → fix that section.

## Product Context
- **What this is:** Marketing site for Optimity, a forward-deployment technology company for SMEs and mid-market companies. Its job is to book "The Operations Teardown."
- **Positioning:** *We build and deploy the systems your business actually needs.* We work directly inside the customer's operation: understand how the business works, find where technology fails or creates friction, build the software/AI/integration layer, deploy it into production.
- **Who it's for:** SME / mid-market founder, CEO, COO, or technology leader (roughly 50–500 people). Sophisticated about technology, not buying a multi-year enterprise transformation. Skeptical, fatigued by AI decks. Global footprint (India / USA / UAE).
- **"Forward Deployment"** is the distinctive name for the methodology. Never lead with the phrase before the visitor understands the value; earn it, then name it.
- **The final design test (the memorable thing):** a founder/COO at a 50–500 person company concludes, in order: "They understand how businesses actually operate." → "They can build the technology." → "They will actually deploy it, not just give me a proposal." Every design choice serves making those three conclusions inevitable.
- **Do NOT optimize for looking like a billion-dollar technology company.** Optimize for looking like the smartest technical team an SME can actually hire. Explicitly rejected: dark Palantir/defense-contractor aesthetic, generic AI agency, enterprise consultancy, SaaS startup.

## Core Design Move (non-negotiable)
**Make the WORK the design — never the technology.** The most visually interesting elements are real representations of systems, workflows, architecture, integrations, interfaces, before/after processes, deployment stages, and operational results. The hero is a **real, legible deployment/teardown artifact** — never abstract imagery, neural-network decoration, or a services matrix. If a deployment story contains a real diagram, screenshot, workflow, or measurable result, that artifact is the visual centerpiece. Decorative illustration is a last resort, not a default.

## Aesthetic Direction
- **Direction:** Engineered confidence for SME operators — the visual language of an engineering notebook / field deployment report, elevated to a premium editorial website.
- **Feel:** technical but human · serious but approachable · premium but not corporate · engineered but not sterile · confident but not intimidating.
- **Decoration level:** minimal-to-intentional. The decoration is working-software artifacts, thin engineering lines, precise grids, generous whitespace. No blobs, no gradients.

## Typography
- **Display/Hero:** Fraunces (variable, opsz) — warm, optically precise serif. Weights 400/500/600.
- **Body / UI:** Geist — engineered, highly legible. Weights 400/500/600.
- **Data/Tables:** Geist with `tabular-nums`.
- **Technical labels:** Geist Mono — **seasoning only.** Tiny uppercase system tags, eyebrows, metadata, deployment labels. Never body, never a full section. Floor: 0.72rem (~11.5px) — never smaller; label text carrying meaning must stay legible.
- **Loading:** Google Fonts — `Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600` + `Geist:wght@400;500;600` + `Geist+Mono:wght@400;500`.
- **Scale (rem):** display clamp(2.6–4.6); h2 clamp(1.8–2.7); h3 1.3; body 1.0625 (17px); small 0.92; mono-label 0.72 (uppercase, letter-spacing .08em). Headlines letter-spacing -0.015em, line-height ~1.08. One scale — no per-instance inline font sizes.
- **Known glyph issue:** Fraunces' display-size ampersand reads as "®". In headings, write "and" or use a styled span fallback — never ship the ambiguous glyph.

## Color
- **Approach:** restrained warm-monochrome + ONE accent. Keep the warm paper / off-white foundation — this is the SME-operator warmth; do not go dark-first.
- **Ink (text):** `#14110E` (warm near-black)
- **Paper (bg):** `#F5F1EA` (warm off-white — paper, not stark white)
- **Surface (cards):** `#FBF8F2`
- **Muted text:** `#6B6256` (warm gray)
- **Hairline:** `#DED7CB` (thin engineering lines — the primary structural device)
- **Accent:** `#B8550F` (deep amber) — **semantic, not decorative.** Marks "where AI/the system changes an outcome" (intervention points, TARGET STATE), the primary CTA, and rare emphasis. Sole accent; do not add green/blue accent families.
- **State color for diagrams:** reuse semantic info `#3A5A8C` for CURRENT STATE / pre-deployment elements when a before/after diagram needs contrast with amber TARGET STATE. No other new colors.
- **Semantic:** success `#2E7D54`, error `#B23A2E`, info `#3A5A8C`. Accent tint `#F3E2D2`.
- **Dark mode:** invert to warm near-black paper `#14110E`, ink `#F2ECE2`, surface `#1D1915`, hairline `#322B23`, muted `#A89D8C`, accent brightens to `#E0853A`. Light is the default; dark is offered and must be complete (no hardcoded light values, third-party embeds themed, logos legible).

## Spacing
- **Base unit:** 8px. **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64). Tokens only — no inline spacing values, no off-scale magic numbers in components.
- **Density:** spacious-editorial sections wrapping dense, legible data zones. Calm around tight tabular/diagram data expresses "clarity on top of complexity."

## Layout
- **Approach:** disciplined grid with editorial moments. Left-aligned, structured, document-like. Not centered-everything.
- **Max content width:** 1180px. Gutters 32px.
- **Breakpoints:** 680 / 920 / 1040 only. No one-off breakpoints.
- **Hero:** two-column on desktop (declaration left, real artifact right), stacks on mobile. Hero headline is a short, direct declaration an SME owner instantly understands — supporting copy explains we work directly with the operation to build, integrate, and deploy.
- **Border radius:** sm 4px (tags, inputs), md 6px (buttons), lg 10–12px (cards/artifact). No bubble-radius-everything.
- **Cards earn their existence.** Logo walls, principle lists, and content that reads as a list use hairline-rule lists (`.diffs`/`.caps` pattern), not bordered hover-lift card grids. No icon-in-box feature grids.

## Voice & Content Style
- **Benchmark:** the how-we-work page ("We start with your operations. Always." / "Five things you won't get from a platform pitch"). All pages speak in this operator voice.
- **Banned:** "engineered for seamless adaptability" · "outcome-driven collaboration" · "transform your business" · "unlock the power of AI" · "drive digital transformation" · "leverage cutting-edge technology" · vision/mission consulting furniture · platform-pitch language.
- **Preferred register:** "We start with the way your business actually works." · "We build the missing system." · "We connect the tools you already use." · "We deploy into production." · "Your team should not have to change how the business works just because the software is badly designed."
- **Specificity beats adjectives.** Name the systems (ERP, CRM, spreadsheets, WhatsApp, accounting software), the friction, the outcome.
- Closing CTAs are page-specific practical invitations ("Bring us the problem." / "Tell us where the work breaks."), all resolving to the low-friction Operations Teardown booking — never a generic sales close, never identical across pages.

## Methodology Presentation
Six steps grouped under the existing three stages (evolution of Understand · Build · Operate):
- **UNDERSTAND:** 01 — Understand the operation · 02 — Design the system
- **BUILD:** 03 — Build · 04 — Integrate
- **OPERATE:** 05 — Deploy · 06 — Improve
Integrate and Deploy are shown explicitly — they are the proof that this is deployment, not proposals.

## Deployment Stories (case-study format)
Structure every proof story as a deployment dossier, not a marketing case study:
- `DEPLOYMENT NN` (mono label) → Client / Industry → **THE PROBLEM** (what was actually broken) → **THE SYSTEM** (what was built) → **THE DEPLOYMENT** (how it connected to the existing business) → **THE RESULT** (concrete measurable outcome where available).
- Show architecture and actual interfaces whenever possible; no decorative illustration when a real artifact exists.
- **Until real permissioned proof exists, dossiers are labeled composites** (see Content Integrity) designed so a real deployment drops into the same format unchanged.

## Show-the-Problem Pattern
The visitor must recognize themselves: a realistic SME environment (CRM, spreadsheets, email, WhatsApp, accounting software, internal tools, people manually moving information) → **Forward Deployment** → one operational system connecting the important pieces. Visually elegant, technically credible, built from the state colors above.

## Technical Labels — allowed vocabulary, honest only
Mono labels like `SYSTEM STATUS` · `DEPLOYMENT 03` · `CURRENT STATE` · `TARGET STATE` · `INTEGRATION` · `PRODUCTION` · `OPERATIONAL RESULT` are on-brand. **Never fake technical complexity:** no labeling a static illustration "LIVE …" or "… ENGINE", no implying functionality that doesn't exist. Overclaiming labels are a Content Integrity violation.

## Navigation
Current approved structure: **How We Work · Industries · Why Optimity · About Us · Contact · [Book an Operations Teardown]** (button). The founder-direction naming (**Work · What We Deploy · How We Work · About**) remains the target for a future restructure once real deployment stories exist to anchor a "Work" page; "Start a Project" register was considered and rejected — the Teardown is the deliberately low-friction wedge. No enterprise mega-nav.

## Motion
- **Approach:** minimal-functional. Fast, precise, no choreography. Motion communicates systems becoming operational (data moving, connections resolving, states changing) — never ambient decoration.
- **Easing:** enter ease-out, exit ease-in, move ease-in-out. **Duration:** micro 50–100ms, short 150–250ms, medium 250–400ms.
- **No perpetual loops competing with content.** At most one restrained signature animation per page (e.g., the hero artifact resolving on load).
- **`prefers-reduced-motion` must stop ALL motion, including SVG/SMIL animations** (CSS kill-switch alone does not stop SMIL — gate or remove SMIL accordingly).

## Content Integrity (enforced — a design rule, not a suggestion)
This rule is load-bearing for the firm's positioning and survives every redesign:
- **No invented proof.** Never render client names, logos, or numbers that aren't real and permissioned — not even as placeholder/filler. An empty proof slot is acceptable; a fake one is not. Displayed client logos require recorded permission.
- **Sample artifacts must be labeled.** Any illustrative deployment/teardown shown in marketing carries a visible "sample · illustrative" / "composite example" marker and uses an obviously-fictional composite company (never a real or known-demo name).
- **Anonymized-by-default proof.** Real deployment proof is published fully anonymized (sector-only, ranges) unless a client grants named permission.
- **Live systems over slideware.** Favor real working-software screenshots over decorative imagery everywhere.
- **No overclaiming labels** (see Technical Labels).

## Anti-slop guardrails (do NOT introduce)
Purple/violet gradients · 3-column icon-in-circle feature grids · giant icon grids · centered-everything · uniform bubble radius · gradient CTA buttons · stock-photo hero · smiling corporate teams · robots/brains/glowing neural networks · abstract 3D shapes · generic SaaS illustrations · fake futuristic interfaces · system-ui/Inter/Space Grotesk as display or body · abstract render as hero · "Built for X" filler copy · corporate consulting imagery.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-22 | Initial system "Engineered Editorial" created | Research of Mechanical Orchard / Palantir / Sierra + memorable thing "these people actually ship, legible to an operator" |
| 2026-06-22 | Hero = real teardown artifact, not imagery | Palantir's show-the-product approach reads most credible; on-thesis with "live systems not slideware" |
| 2026-06-22 | Amber `#B8550F` accent, semantic-only | Dodges AI-green/purple clichés; color marks AI intervention points so it carries meaning |
| 2026-06-22 | Content Integrity section added | User caught fake proof + a known demo-DB name in the preview; rule encoded so builds can't reintroduce invented proof |
| 2026-08-09 | v2: forward-deployment direction, warm foundation KEPT | Founder direction: "engineered confidence for SME operators"; dark Palantir aesthetic explicitly rejected; buyer = SME/mid-market 50–500 |
| 2026-08-09 | "Make the work the design" elevated to core move | Founder principle; also reverses the branch's hero regression (abstract services matrix) |
| 2026-08-09 | Amber stays the sole accent; info blue reused for CURRENT STATE | "Green/blue/orange if appropriate" resolved conservatively — adding accent families is how restrained systems die |
| 2026-08-09 | Deployment-dossier proof format; composites until real proof | Reconciles founder's DEPLOYMENT NN format with Content Integrity (conviction-stage, no permissioned case studies yet) |
| 2026-08-09 | Methodology = 6 steps grouped under 3 stages | Integrate + Deploy shown explicitly as the anti-proposal proof; evolves rather than resets how-we-work |
| 2026-08-09 | Nav CTA stays "Book an Operations Teardown"; "Start a Project" rejected | Teardown is the low-friction wedge offer; raising the commitment bar in the nav would fight the funnel |
| 2026-08-09 | Voice rules encoded; banned-phrase list added | Branch pages (industries/why-optimity/about) shipped platform-pitch copy contradicting how-we-work |
| 2026-08-09 | Trusted-by logos confirmed permitted (all 7) | Founder confirmed real clients + display permission; recorded in assets/logo/PERMISSIONS.md |
| 2026-08-09 | v3: Believability Mandate added | Founder: site must not look AI-generated; editorial variation, de-carding, controlled irregularity, no decorative animation, real artifacts only |
| 2026-08-09 | Kicker de-pilled to plain mono label | Bordered pill on every section = repetitive pill UI, a template signal |
| 2026-08-09 | Diagrams made static + literal | SMIL pulse loops and rotating "AI CORE" ring were fake live indicators / AI-mystical; replaced with precise static flows naming real tools |

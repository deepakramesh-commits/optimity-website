# TODOS

## Analytics & Measurement

### Wire GA4 + Search Console
**Priority:** P1
Add the GA4 tag (needs the founder's `G-XXXXXXX` measurement ID) and verify the domain in Google Search Console. Without this, SEO and conversion can't be measured.

## Proof & Content

### Publish the first real anonymized deployment story
**Priority:** P1
The composite dossiers were removed (2026-08-10 stakeholder feedback — fictional companies read as fake next to real logos). The v2.0 redesign has no case-study section yet: the first REAL story should land on index.html between the client-logo row and "Who leads Optimity", built as a new section in the DESIGN.md v4 language (the old .dlog component was removed with the stylesheet rewrite). Convert one of the seven permitted clients (assets/logo/PERMISSIONS.md) into an anonymized story with a true number. Highest-leverage sales asset on the site.

## Deploy & Performance

### Add Content-Security-Policy header
**Priority:** P2
nginx.conf has no CSP despite loading assets.calendly.com with full page privileges. Add CSP allowing self + Calendly + Google Fonts; must be verified against the live Calendly widget on staging before enabling.

### Theme the Calendly embed for dark mode
**Priority:** P2
contact.html hardcodes light colors in the Calendly data-url (now ffffff / 232323 / c2410c). Since v2.0 the white widget sits in a framed stage panel, so it reads as an embedded tool rather than a stray slab, but it is still light in dark mode. Build the URL from the active theme (requires widget re-init on toggle).

### Optimize image assets
**Priority:** P2
favicon.svg is 181KB (huge for an icon), logo_darkmode.png is 82KB at 884×282 for a 48px slot, suits.png is 1728×512. Downscale/compress to ~2× display size; consider one SVG brand logo for both themes.

### Self-host fonts
**Priority:** P3
Google Fonts stylesheet is render-blocking and a third-party availability dependency. Self-host the Archivo woff2 subsets (400/500/600).

### Post-deploy checks
**Priority:** P3
After first production deploy: run the site through LinkedIn Post Inspector (refresh og-image cache), confirm /favicon.ico and /site.webmanifest resolve, confirm /assets/logo/PERMISSIONS.md returns 404, and confirm port 3000 is not reachable externally.

## Code Quality

### Browser smoke test (no npm)
**Priority:** P2
The v2.0 interactions live in site.js with no automated check: entrances must never leave content hidden (bottom of page, print, reduced motion), every `[data-q]`/`[data-src]` in index.html must match a QUESTIONS entry, engine tabs and the pinned teardown must switch state, and the menu/dropdown aria state must follow the UI under both SSI and fetch. Add a small script run with the gstack browse binary or Playwright CLI against `python3 -m http.server`, kept outside the shipped files.

### Reconcile practice count with the company profile PDF
**Priority:** P2
The site names three practices (AI & Automation, Product Engineering, Enterprise Solutions). Optimity_Profile_May_2026.pdf, linked from the About page, says four and adds IoT & Smart Systems. Update one so they agree.

### Cache-version bump guard
**Priority:** P3
Nothing enforces bumping the `?v=` params when styles.css/site.js/components.js/theme.js change (30-day cache). Add a pre-ship check: `grep -ohE '\?v=[0-9a-z-]+' *.html components.js | sort -u` must print exactly one value, and it must change when those files do.

### Deduplicate theme-button rendering
**Priority:** P3
components.js initThemeButtons duplicates theme.js apply() label logic ('◑ Light'/'◐ Dark' in two files). Expose one shared function.

### Spacing magic-number sweep
**Priority:** P3
The v2.0 stylesheet uses clamp()-based section spacing and component paddings in px (14/18/20/22/24/28). Document the scale in DESIGN.md or snap to tokens.

## Completed

### Replace the SEE/REASON/ACT hexagon diagram
The problem section now carries the simplified Before/After ops map (relocated from the hero) — the last abstract-AI visual is gone.
**Completed:** v1.0.1.0 (2026-08-10)

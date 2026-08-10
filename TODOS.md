# TODOS

## Analytics & Measurement

### Wire GA4 + Search Console
**Priority:** P1
Add the GA4 tag (needs the founder's `G-XXXXXXX` measurement ID) and verify the domain in Google Search Console. Without this, SEO and conversion can't be measured.

## Proof & Content

### Replace one composite deployment with a real anonymized story
**Priority:** P1
The deployment log ships labeled composites. Convert one of the seven permitted clients (assets/logo/PERMISSIONS.md) into a real, anonymized DEPLOYMENT entry with a true number. Highest-leverage sales asset on the site.

### Replace the SEE/REASON/ACT hexagon diagram
**Priority:** P2
index.html problem-section SVG still centers on an abstract "intelligence core" hexagon — the last abstract-AI visual (DESIGN.md v3 believability rule). Redraw as a literal named-system flow in the opsmap/dlog style.

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
Google Fonts stylesheet is render-blocking and a third-party availability dependency. Self-host the used Fraunces/Geist/Geist Mono woff2 subsets.

### Post-deploy checks
**Priority:** P3
After first production deploy: run the site through LinkedIn Post Inspector (refresh og-image cache), confirm /favicon.ico and /site.webmanifest resolve, confirm /assets/logo/PERMISSIONS.md returns 404, and confirm port 3000 is not reachable externally.

## Code Quality

### Cache-version bump guard
**Priority:** P3
Nothing enforces bumping the `?v=` params when styles.css/components.js/theme.js change (30-day cache). Add a pre-ship check comparing diff vs. version strings.

### Deduplicate theme-button rendering
**Priority:** P3
components.js initThemeButtons duplicates theme.js apply() label logic ('◑ Light'/'◐ Dark' in two files). Expose one shared function.

### Spacing magic-number sweep
**Priority:** P3
Off-scale spacing values remain in component CSS (14/18/22px gaps and paddings) vs the 8px token scale. Snap or document.

## Completed

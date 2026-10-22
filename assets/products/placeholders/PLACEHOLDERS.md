# Product screen placeholders

There are no real product screenshots yet. Every product screen on the site is a placeholder, built as an HTML/CSS mock-up in `src/` and rendered to PNG at 2x with the gstack browse tool. Each one uses fictional sample data ("Sample Moving Co.", "Sample Home Services Co.", "Sample Nail Studio", "Sample Hair Studio", "Sample Realty", "Sample Distribution Co.", hidden phone numbers) and US English (lead, estimate, elevator) and shows a **"Sample data"** tag in its title bar. There is no separate caption on the site.

## Swapping in a real screenshot

1. Save the real file under the **same name** and at the **same pixel size** (listed below) in this folder. Pages reference only the file name and size.
2. Bump the shared `?v=` cache string (every page, `components.js`, and the generator if you use it). Image URLs carry it too (`mc-incoming-call.png?v=…`), so returning visitors get the new file instead of a 30-day cached placeholder.
3. A real screenshot has no "Sample data" tag, so nothing else needs removing. Real screenshots must not show real customer names or numbers without permission (step 6).
4. Update the `alt` text and the `data-alt` attribute, which currently start with "Sample".
5. If you replace `trade-dashboard.png`, `pc-lead-record.png` or `nexus-answer-table.png`, re-render `/og-image.png` from `assets/og-src/og-image.html` too (it composites those three screens). Social networks cache share images for days; use their debuggers to refresh.
6. Real screenshots must not show real customer names, numbers or phone numbers unless the customer has agreed (DESIGN.md, Content Integrity).

## The files

| File | Pixel size (CSS size) | Used on | Replace with |
|---|---|---|---|
| `mc-incoming-call.png` | 1440 × 760 (720 × 380) | Move Concierge page: "How it works" step 1 and the stage's first screen | The call log or dashboard view showing an after-hours or busy-line call answered by Move Concierge AI |
| `mc-call.png` | 1440 × 800 (720 × 400) | Move Concierge page: step 2 | A clearly labelled sample or demo call showing the move questions and the price question going to the team (no transcript or recording feature is claimed) |
| `mc-enquiry-record.png` | 1760 × 880 (880 × 440) | Products: Concierge AI row · Move Concierge page: hero and step 3 | The lead record in the dashboard, with the estimate booked in Google Calendar and the questions sent to the team |
| `mc-survey-booked.png` | 1440 × 880 (720 × 440) | Move Concierge page: step 4 | The estimate as it appears in the estimators' Google Calendar |
| `mc-team-handoff.png` | 1440 × 800 (720 × 400) | Move Concierge page: step 5 | The details the team receives when a person needs to follow up (no channel such as email is claimed) |
| `mc-morning-summary.png` | 1440 × 880 (720 × 440) | Move Concierge page: "What you can see" · Concierge AI overview: Move Concierge AI row | The dashboard view of overnight calls, estimates booked and calls sent to the team (no daily summary feature is claimed) |
| `pc-lead-record.png` | 1440 × 840 (720 × 420) | Home: hero · Products: Property Connect row · Property Connect page: hero and "How it works" · also composited into `/og-image.png` | A qualified web lead record with call-back time, pre-approval, timeline and tour |
| `pc-tour-briefing.png` | 1440 × 680 (720 × 340) | Property Connect page: "How it works" | The agent's private briefing and the booked tour |
| `nexus-answer-table.png` | 1440 × 1000 (720 × 500) | Home: hero · Products: Nexus row · Nexus AI page: hero and the ERP and CRM tab · also composited into `/og-image.png` | A SmartOps answer from ERPNext or HubSpot with its table and chart |
| `nexus-doc-answer.png` | 1440 × 640 (720 × 320) | Nexus AI page: the Documents tab | A DocIntellect answer with its cited passage |
| `trade-dashboard.png` | 1440 × 960 (720 × 480) | Home: hero · Trade Concierge AI page: hero · Concierge AI overview: its edition row · also composited into `/og-image.png` | The real Trade Concierge AI dashboard for a home-service business: calls answered, bookings and calls sent to the team |
| `trade-call.png` | 1440 × 680 (720 × 340) | Trade Concierge AI page: "How it works" step 1 and the stage's first screen | A real (consented) or clearly labelled demo call for a home-service business, or an audio recording of the demo line (the number itself stays off the site) |
| `trade-booking.png` | 1440 × 920 (720 × 460) | Trade Concierge AI page: step 2 | The booking as it appears in the business's Google Calendar |
| `trade-call-record.png` | 1440 × 880 (720 × 440) | Trade Concierge AI page: step 3 | The same call's record in the real dashboard |
| `salon-nail-dashboard.png` | 1440 × 960 (720 × 480) | Salon Concierge AI page: hero | The real Salon Concierge AI dashboard for a nail or beauty studio |
| `salon-nail-call.png` | 1440 × 720 (720 × 360) | Salon Concierge AI page: "A nail client moves her appointment" step 1 and that stage's first screen | A real (consented) or clearly labelled demo call for a nail studio, or an audio recording of the demo line (the number itself stays off the site) |
| `salon-nail-booking.png` | 1440 × 800 (720 × 400) | Salon Concierge AI page: nail walkthrough step 2 | The booking as it appears in the salon's Google Calendar |
| `salon-nail-call-record.png` | 1440 × 720 (720 × 360) | Salon Concierge AI page: nail walkthrough step 3 | The same call's record in the real dashboard |
| `salon-hair-dashboard.png` | 1440 × 1000 (720 × 500) | Concierge AI overview: Salon Concierge AI row | The real Salon Concierge AI dashboard for a hair salon or barbershop |
| `salon-hair-call.png` | 1440 × 720 (720 × 360) | Salon Concierge AI page: "A new client asks what color costs" step 1 and that stage's first screen | A real (consented) or clearly labelled demo call for a hair salon, or an audio recording of the demo line (the number itself stays off the site) |
| `salon-hair-booking.png` | 1440 × 800 (720 × 400) | Salon Concierge AI page: price question walkthrough step 2 | The booking as it appears in the salon's Google Calendar |
| `salon-hair-call-record.png` | 1440 × 760 (720 × 380) | Salon Concierge AI page: price question walkthrough step 3 | The same call's record in the real dashboard |

The Database tab on the Nexus AI page shows an example query as text (labelled "Example query"), not an image.

## Re-rendering a placeholder

Serve the repo locally, open `src/<name>.html` in the browse tool with the viewport set to the CSS size above and `--scale 2`, and take a viewport screenshot to `<name>.png`. The size of each source is set by `--w` and `--h` at the top of its file. To find the height of a changed screen, set `--h` to 900px, render, crop to the last row of content and write the new height back: the browse tool scales any screenshot taller than 2000px down, so taller renders give wrong sizes. `src/` and this file are excluded from the Docker image (`.dockerignore`).

# Product screen placeholders

There are no real product screenshots yet. Every product screen on the site is a placeholder, built as an HTML/CSS mock-up in `src/` and rendered to PNG at 2x with the gstack browse tool. Each one uses fictional sample data ("Sample Moving Co.", "Sample Realty", "Sample Distribution Co.", hidden phone numbers) and US English (lead, estimate, elevator) and shows a **"Sample data"** tag in its title bar. There is no separate caption on the site.

## Swapping in a real screenshot

1. Save the real file under the **same name** and at the **same pixel size** (listed below) in this folder. Pages reference only the file name and size.
2. Bump the shared `?v=` cache string (every page, `components.js`, and the generator if you use it). Image URLs carry it too (`mc-incoming-call.png?v=…`), so returning visitors get the new file instead of a 30-day cached placeholder.
3. A real screenshot has no "Sample data" tag, so nothing else needs removing. Real screenshots must not show real customer names or numbers without permission (step 6).
4. Update the `alt` text and the `data-alt` attribute, which currently start with "Sample".
5. If you replace `mc-enquiry-record.png`, re-render `/og-image.png` from `assets/og-src/og-image.html` too (it composites that screen). Social networks cache share images for days; use their debuggers to refresh.
6. Real screenshots must not show real customer names, numbers or phone numbers unless the customer has agreed (DESIGN.md, Content Integrity).

## The files

| File | Pixel size (CSS size) | Used on | Replace with |
|---|---|---|---|
| `mc-incoming-call.png` | 1440 × 840 (720 × 420) | Move Concierge page: "How it works" step 1 and the stage's first screen | The call log or dashboard view showing an after-hours or busy-line call answered by Move Concierge AI |
| `mc-call-transcript.png` | 1440 × 800 (720 × 400) | Home: Move Concierge section · Move Concierge page: step 2 | The transcript view of a real (consented or test) call, showing the move questions and the "no binding price" handling |
| `mc-enquiry-record.png` | 1760 × 1040 (880 × 520) | Products: Move Concierge row · Move Concierge page: hero and step 3 · also composited into `/og-image.png` | The structured enquiry record with the recording attached |
| `mc-survey-booked.png` | 1440 × 880 (720 × 440) | Move Concierge page: step 4 | The survey or callback as it appears in the estimator calendar, plus the SMS or WhatsApp message to the caller |
| `mc-team-handoff.png` | 1440 × 960 (720 × 480) | Move Concierge page: step 5 | The email or CRM record staff receive, ideally one that shows a "needs a person" flag |
| `mc-morning-summary.png` | 1440 × 920 (720 × 460) | Move Concierge page: "What you can see" | The daily summary: enquiries, surveys booked, callbacks due, items passed to a person |
| `pc-lead-record.png` | 1440 × 880 (720 × 440) | Products: Property Connect row · Property Connect page: hero and "How it works" | A qualified web lead record with call-back time, pre-approval, timeline and tour |
| `pc-tour-briefing.png` | 1440 × 760 (720 × 380) | Home: Property Connect section · Property Connect page: "How it works" | The agent's private briefing and the booked tour |
| `nexus-answer-table.png` | 1440 × 1000 (720 × 500) | Products: Nexus row · Nexus AI page: hero and the ERP and CRM tab | A SmartOps answer from ERPNext, Odoo or HubSpot with its table and chart |
| `nexus-doc-answer.png` | 1440 × 640 (720 × 320) | Home: Nexus section · Nexus AI page: the Documents tab | A DocIntellect answer with its cited passage |

The Database tab on the Nexus AI page shows an example query as text (labelled "Example query"), not an image.

## Re-rendering a placeholder

Serve the repo locally, open `src/<name>.html` in the browse tool with the viewport set to the CSS size above and `--scale 2`, and take a viewport screenshot to `<name>.png`. The size of each source is set by `--w` and `--h` at the top of its file. `src/` and this file are excluded from the Docker image (`.dockerignore`).

# Tracking plan

## Google Analytics 4
**Placeholder.** Add the GA4 Measurement ID via `NEXT_PUBLIC_GA_ID` environment variable in Vercel. The `<head>` snippet should be added to `src/app/layout.tsx` once the ID is provisioned. Disabled by default until the ID is set.

## Event tracking — proposed events
| Event | Trigger | Payload |
|---|---|---|
| `tier_view` | User switches a tier tab | `tier: "pilot" | "targeted" | "full"` |
| `tier_select_cta` | User clicks "Choose this tier" | `tier`, `total` |
| `pdf_download` | User clicks Download PDF | `tier_in_view` |
| `supplier_expand` | User opens an accordion item in the supplier directory | `supplier_name` |
| `nav_click` | User clicks a nav anchor in the sticky header | `section_id` |
| `external_click` | User clicks an external link (kaizerchiefs.com, supplier URL) | `target_url` |

These wire into `gtag('event', name, payload)` once GA is on.

## Form submission tracking
**No forms on launch.** When a contact / "register interest" form is added later, it should fire a `form_submit` event with the form name and validation outcome.

## Vercel Analytics
**Optional.** If the project upgrades to Vercel Pro, enable Web Analytics from the Vercel dashboard. No code changes are required — the runtime adds automatic page-view + Core Web Vitals tracking.

## Conversion goals (placeholder)
The site is informational, but proxy conversions to track are:
1. **Tier engagement.** Time-on-tier × tier_select_cta events as a directional intent signal.
2. **PDF download.** Hard signal — the recipient took the artefact away to share.
3. **Supplier expansion depth.** How many of the supplier accordion items get opened in a session.
4. **Scroll depth to "Next steps"** — proxy for full-deck consumption.

These goals are observation-only; the site has no purchase or registration funnel.

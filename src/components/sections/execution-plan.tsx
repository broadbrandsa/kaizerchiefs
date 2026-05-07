"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { SmartText } from "@/components/smart-text";
import { ConversionFunnel } from "@/components/charts/conversion-funnel";
import {
  EXECUTION_PLAN,
  CIDER_POINT_WALLS,
  CIDER_POINT_TOTALS,
} from "@/data/proposal";

/** Per-category accent bar — keeps each card visually distinct */
const CATEGORY_ACCENT: Record<string, string> = {
  "digital-paid-media": "bg-emerald-400",
  "trade-retail": "bg-sky-400",
  "stadium-activation": "bg-fuchsia-400",
  "pr-radio": "bg-indigo-400",
  incentives: "bg-amber-300",
  "branding-kits": "bg-yellow-300",
  "design-production": "bg-orange-400",
  "lifecycle-platform-fieldops": "bg-violet-400",
};

export function ExecutionPlan() {
  const plan = EXECUTION_PLAN;
  return (
    <Section
      id="execution-plan"
      eyebrow="Plan detail"
      title="Plan detail"
    >
      {/* Allocation strip — proportional bar (percentages only) */}
      <div className="mb-10 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-6">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Allocation by category · 100%
        </div>
        <div className="mt-5 flex h-9 w-full overflow-hidden rounded-md border border-[var(--kc-line)]">
          {plan.categories.map((c) => (
            <div
              key={c.key}
              title={`${c.name} · ${c.pct}%`}
              className={`${CATEGORY_ACCENT[c.key] ?? "bg-[var(--kc-gold)]"} flex items-center justify-center text-[17px] font-semibold text-[var(--kc-black)]`}
              style={{ width: `${c.pct}%` }}
            >
              {c.pct}%
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[18px] md:grid-cols-4">
          {plan.categories.map((c) => (
            <div
              key={c.key}
              className="flex items-center gap-2 text-[var(--kc-paper)]/75"
            >
              <span
                className={`inline-block h-2 w-2 shrink-0 rounded-sm ${CATEGORY_ACCENT[c.key] ?? "bg-[var(--kc-gold)]"}`}
              />
              <span className="truncate">{c.name}</span>
              <span className="ml-auto font-mono text-[var(--kc-paper)]/55">
                {c.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion funnel — impressions to activations */}
      <div className="mb-10">
        <ConversionFunnel />
      </div>

      {/* Category cards with line items */}
      <Accordion
        type="single"
        collapsible
        className="space-y-4"
      >
        {plan.categories.map((c) => (
          <AccordionItem
            key={c.key}
            value={c.key}
            className="overflow-hidden rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 px-0"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline">
              <div className="flex w-full items-center gap-4 text-left">
                <span
                  className={`inline-block h-10 w-1 shrink-0 rounded-sm ${CATEGORY_ACCENT[c.key] ?? "bg-[var(--kc-gold)]"}`}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-base font-semibold tracking-tight text-[var(--kc-paper)]">
                      {c.name}
                    </span>
                    <Badge variant="outline" className="text-[17px]">
                      {c.pct}% of plan
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-[var(--kc-paper)]/70">
                    <SmartText>{c.headline}</SmartText>
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <p className="mb-5 max-w-3xl text-sm text-[var(--kc-paper)]/75">
                <SmartText>{c.rationale}</SmartText>
              </p>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {c.lineItems.map((item) => {
                  const isExpandable = item.expandKind === "cider-point-walls";
                  return (
                    <Card
                      key={item.name}
                      className={isExpandable ? "md:col-span-2" : undefined}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold leading-snug text-[var(--kc-paper)]">
                              <SmartText>{item.name}</SmartText>
                            </div>
                            <div className="mt-1 text-[18px] uppercase tracking-wider text-[var(--kc-mute)]">
                              {item.supplier}
                            </div>
                          </div>
                          <div className="shrink-0 text-right">
                            <div className="font-mono text-sm font-semibold text-[var(--kc-gold)]">
                              {Math.round((item.cost / c.total) * 100)}% of category
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-[var(--kc-paper)]/80">
                          <SmartText>{item.detail}</SmartText>
                        </p>
                        {item.reach ? (
                          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--kc-line)] px-2.5 py-0.5 text-[17px] uppercase tracking-wider text-[var(--kc-paper)]/70">
                            Reach · {item.reach}
                          </div>
                        ) : null}
                        {isExpandable ? <CiderPointWallsExpand /> : null}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Per-category footer */}
              <div className="mt-5 flex items-center justify-between border-t border-[var(--kc-line)] pt-4 text-xs">
                <span className="uppercase tracking-wider text-[var(--kc-mute)]">
                  Category share of plan
                </span>
                <span className="font-mono font-semibold text-[var(--kc-paper)]">
                  {c.pct}%
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

/**
 * Cider Point walls — embeddable detail panel rendered inside the township-
 * murals line item card in the Retail & Trade accordion. Surfaces the full
 * 15-site Cider Point Walls Site List (with GPS, traffic counts, LSM, rates)
 * directly inside the Plan Detail dropdown, so the buyer sees both the
 * commercial line and the underlying media schedule together. The 6 walls
 * actually booked at the Yr-1 budget are highlighted; the other 9 are shown
 * as "available — not booked at this budget level" so reviewers can see the
 * full inventory we have access to.
 */
function CiderPointWallsExpand() {
  // Top 6 by traffic — these are the walls the line item actually books.
  const BOOKED_IDS = new Set([
    "cp-mamelodi-west",
    "cp-alex-london",
    "cp-alex-eastbank",
    "cp-atteridgeville",
    "cp-umlazi-mango",
    "cp-kwa-mashu",
  ]);
  const sorted = [...CIDER_POINT_WALLS].sort((a, b) => b.monthlyTraffic - a.monthlyTraffic);

  return (
    <details className="mt-4 rounded-lg border border-[var(--kc-line)]/60 bg-[var(--kc-ink)]/40">
      <summary className="cursor-pointer px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)] hover:text-[var(--kc-paper)]">
        Show full Cider Point 15-site list · GPS · traffic · rates
      </summary>
      <div className="border-t border-[var(--kc-line)]/40 p-4">
        <p className="mb-4 text-[12px] leading-relaxed text-[var(--kc-paper)]/70">
          The full 15-wall Cider Point Media OOH Schedule (Jun–Aug 2026 quoted
          flight). The 6 walls in <span className="text-[var(--kc-gold)] font-semibold">gold</span> are the ones this line item books inside the R4.51M Yr-1 budget — selected by traffic volume.
          The remaining 9 are part of the same supplier inventory and are
          available for an extended flight or higher-budget alternative.
          Combined supplier-claimed traffic across all 15 walls:&nbsp;
          <span className="font-mono font-semibold text-[var(--kc-paper)]">
            {(CIDER_POINT_TOTALS.totalMonthlyTraffic / 1_000_000).toFixed(1)}M cars/month
          </span>.
        </p>

        <div className="overflow-x-auto rounded-md border border-[var(--kc-line)]/50">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 text-left text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Code</th>
                <th className="px-3 py-2">Site</th>
                <th className="px-3 py-2">City</th>
                <th className="px-3 py-2">Size</th>
                <th className="px-3 py-2 text-right">Cars/m</th>
                <th className="px-3 py-2">LSM</th>
                <th className="px-3 py-2 text-right">R/m</th>
                <th className="px-3 py-2 text-right">Production</th>
                <th className="px-3 py-2">GPS</th>
                <th className="px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((w, i) => {
                const isBooked = BOOKED_IDS.has(w.id);
                return (
                  <tr
                    key={w.id}
                    className={
                      isBooked
                        ? "bg-[var(--kc-gold)]/5 border-b border-[var(--kc-gold)]/20"
                        : "border-b border-[var(--kc-line)]/30 last:border-0"
                    }
                  >
                    <td className="px-3 py-2 text-[var(--kc-paper)]/55 font-mono">{i + 1}</td>
                    <td className="px-3 py-2 font-mono text-[var(--kc-paper)]/65">{w.cpmCode}</td>
                    <td className={`px-3 py-2 ${isBooked ? "font-semibold text-[var(--kc-gold)]" : "text-[var(--kc-paper)]"}`}>
                      {w.label}
                    </td>
                    <td className="px-3 py-2 text-[var(--kc-paper)]/80">{w.city}</td>
                    <td className="px-3 py-2 font-mono text-[var(--kc-paper)]/70">{w.size}</td>
                    <td className="px-3 py-2 text-right font-mono text-[var(--kc-paper)]">
                      {w.monthlyTraffic.toLocaleString("en-ZA")}
                    </td>
                    <td className="px-3 py-2 text-[var(--kc-paper)]/70">{w.lsm}</td>
                    <td className="px-3 py-2 text-right font-mono text-[var(--kc-paper)]">
                      R{w.monthlyRate.toLocaleString("en-ZA")}
                    </td>
                    <td className="px-3 py-2 text-right font-mono text-[var(--kc-paper)]/80">
                      R{w.productionCost.toLocaleString("en-ZA")}
                    </td>
                    <td className="px-3 py-2 font-mono text-[10px] text-[var(--kc-paper)]/60">
                      {w.lat.toFixed(3)}, {w.lng.toFixed(3)}
                      <span className="block text-[var(--kc-mute)]">
                        {w.geoSource}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      {isBooked ? (
                        <span className="rounded-full bg-[var(--kc-gold)]/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--kc-gold)]">
                          Booked
                        </span>
                      ) : (
                        <span className="rounded-full border border-[var(--kc-line)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--kc-paper)]/55">
                          Available
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-[var(--kc-charcoal)]/50 font-semibold">
                <td colSpan={5} className="px-3 py-2.5 text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
                  Total · 15 walls · Cider Point full quoted flight
                </td>
                <td className="px-3 py-2.5 text-right font-mono text-[var(--kc-paper)]">
                  {CIDER_POINT_TOTALS.totalMonthlyTraffic.toLocaleString("en-ZA")}
                </td>
                <td className="px-3 py-2.5"></td>
                <td className="px-3 py-2.5 text-right font-mono text-[var(--kc-paper)]">
                  R{CIDER_POINT_TOTALS.monthlyMediaRand.toLocaleString("en-ZA")}
                </td>
                <td className="px-3 py-2.5 text-right font-mono text-[var(--kc-paper)]">
                  R{CIDER_POINT_TOTALS.productionRand.toLocaleString("en-ZA")}
                </td>
                <td className="px-3 py-2.5 font-mono text-[10px] text-[var(--kc-gold)]">
                  R{CIDER_POINT_TOTALS.threeMonthFlightRand.toLocaleString("en-ZA")} ex VAT (3-month flight)
                </td>
                <td className="px-3 py-2.5"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-[var(--kc-paper)]/55">
          Site notes (taxi-route descriptions, landmarks, supplier contact) are
          shown when each wall is hovered on the Strategy chapter Marketing
          Targeting Map. Full per-site dossier — slide-by-slide photos + on-site
          visuals + supplier traffic claims — lives in the original Cider Point
          Walls Site List PPTX in the Annex.
        </p>
      </div>
    </details>
  );
}

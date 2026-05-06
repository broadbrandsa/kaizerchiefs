"use client";

import { useState } from "react";
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
import { EXECUTION_PLAN, GTM_CHANNELS } from "@/data/proposal";
import { formatRand, formatRandFull } from "@/lib/format";

/** Per-category accent bar — keeps each card visually distinct */
const CATEGORY_ACCENT: Record<string, string> = {
  "digital-paid-media": "bg-emerald-400",
  "trade-retail": "bg-sky-400",
  "stadium-activation": "bg-fuchsia-400",
  "pr-radio": "bg-indigo-400",
  incentives: "bg-amber-300",
  "branding-kits": "bg-yellow-300",
  "design-production": "bg-orange-400",
};

export function ExecutionPlan() {
  const plan = EXECUTION_PLAN;
  const [openCategory, setOpenCategory] = useState<string>(
    plan.categories[0].key,
  );

  return (
    <Section
      id="execution-plan"
      eyebrow="Plan detail"
      title="What R9M of marketing executes, line by line"
      intro={
        <>
          The KCM Digital Mobile model V2 above is the financial picture. The full
          plan below shows what KC Mobile gets at the ceiling — every line item,
          every supplier, every spend and reach number behind the budget.
        </>
      }
    >
      {/* Top summary band */}
      <div className="mb-10 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-6">
        <SmartText>{plan.intro}</SmartText>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          <SummaryStat label="Total" value={formatRand(plan.total)} />
          <SummaryStat label="Duration" value={plan.duration} />
          <SummaryStat label="SIM target" value={plan.simTarget} />
          <SummaryStat label="eSIM target" value={plan.esimTarget} />
          <SummaryStat label="Geo" value="National · 9 provinces" />
        </div>

        {/* Pillars */}
        <ul className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2">
          {plan.pillars.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-sm text-[var(--kc-paper)]/85"
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
              <SmartText>{p}</SmartText>
            </li>
          ))}
        </ul>
      </div>

      {/* GTM channel allocation — wholesale-led monthly SIM split */}
      <div className="mb-10 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-6">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          GTM channel allocation · 16,200 SIMs / month
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          How the volume splits across the seven distribution channels
        </h3>
        <p className="mt-3 max-w-3xl text-sm text-[var(--kc-paper)]/75">{GTM_CHANNELS.intro}</p>
        <div className="mt-6 overflow-hidden rounded-xl border border-[var(--kc-line)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--kc-charcoal)]/80 text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Channel</th>
                <th className="px-4 py-3 font-semibold">What ships there</th>
                <th className="px-4 py-3 font-semibold">Lead persona(s)</th>
                <th className="px-4 py-3 text-right font-semibold">Monthly SIM target</th>
              </tr>
            </thead>
            <tbody>
              {GTM_CHANNELS.channels.map((c, i) => (
                <tr
                  key={c.name}
                  className={i % 2 === 0 ? "bg-[var(--kc-charcoal)]/30" : "bg-[var(--kc-charcoal)]/50"}
                >
                  <td className="px-4 py-3 font-semibold text-[var(--kc-paper)]">{c.name}</td>
                  <td className="px-4 py-3 text-[16px] text-[var(--kc-paper)]/85">{c.kit}</td>
                  <td className="px-4 py-3 text-[16px] text-[var(--kc-paper)]/85">{c.personas}</td>
                  <td className="px-4 py-3 text-right font-mono text-[var(--kc-gold)]">
                    {c.monthlyTarget.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-[var(--kc-gold)]/40 bg-[var(--kc-ink)]">
                <td className="px-4 py-3 font-semibold text-[var(--kc-paper)]" colSpan={3}>
                  Total / month
                </td>
                <td className="px-4 py-3 text-right font-mono text-base font-semibold text-[var(--kc-gold)]">
                  {GTM_CHANNELS.channels.reduce((acc, c) => acc + c.monthlyTarget, 0).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Allocation strip — proportional bar */}
      <div className="mb-10 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-6">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Allocation by category · R9M = 100%
        </div>
        <div className="mt-5 flex h-9 w-full overflow-hidden rounded-md border border-[var(--kc-line)]">
          {plan.categories.map((c) => (
            <div
              key={c.key}
              title={`${c.name} · ${formatRand(c.total)} · ${c.pct}%`}
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

      {/* Category cards with line items */}
      <Accordion
        type="single"
        collapsible
        value={openCategory}
        onValueChange={(v) => setOpenCategory(v)}
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
                      {formatRand(c.total)} · {c.pct}% of plan
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
                {c.lineItems.map((item) => (
                  <Card key={item.name}>
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
                            {formatRandFull(item.cost)}
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
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Per-category footer total */}
              <div className="mt-5 flex items-center justify-between border-t border-[var(--kc-line)] pt-4 text-xs">
                <span className="uppercase tracking-wider text-[var(--kc-mute)]">
                  Category total
                </span>
                <span className="font-mono font-semibold text-[var(--kc-paper)]">
                  {formatRandFull(c.total)}
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
        {label}
      </div>
      <div className="mt-1 text-base font-semibold leading-snug text-[var(--kc-paper)]">
        {value}
      </div>
    </div>
  );
}

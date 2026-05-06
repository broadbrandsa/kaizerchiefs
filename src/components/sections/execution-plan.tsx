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
import { EXECUTION_PLAN } from "@/data/proposal";

/** Per-category accent bar — keeps each card visually distinct */
const CATEGORY_ACCENT: Record<string, string> = {
  "digital-paid-media": "bg-emerald-400",
  "trade-retail": "bg-sky-400",
  "stadium-activation": "bg-fuchsia-400",
  "pr-radio": "bg-indigo-400",
  incentives: "bg-amber-300",
  "branding-kits": "bg-yellow-300",
  "township-co-branding": "bg-rose-400",
  "design-production": "bg-orange-400",
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
                    </CardContent>
                  </Card>
                ))}
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

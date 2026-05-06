"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SOURCES_REGISTRY, SOURCE_CATEGORY_LABELS, type SourceCategory } from "@/data/proposal";

/**
 * SourcesPanel — surfaces the canonical reference list so any reviewer can
 * verify every figure on the site. Grouped by category. Designed to sit at
 * the foot of the Overview section as a "where the numbers come from" panel.
 */
export function SourcesPanel() {
  // Group by category
  const grouped = SOURCES_REGISTRY.reduce<
    Record<SourceCategory, typeof SOURCES_REGISTRY>
  >(
    (acc, s) => {
      (acc[s.category] ??= []).push(s);
      return acc;
    },
    {
      financial: [],
      audience: [],
      channels: [],
      supplier: [],
      industry: [],
    },
  );

  const order: SourceCategory[] = [
    "financial",
    "audience",
    "channels",
    "supplier",
    "industry",
  ];

  return (
    <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Sources & methodology
          </div>
          <h3 className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
            Where the numbers come from
          </h3>
          <p className="mt-2 max-w-3xl text-[15px] text-[var(--kc-paper)]/75">
            Every figure on the site is traceable back to one of the {SOURCES_REGISTRY.length} sources below. Open a row to see what each one supplies and where the underlying file lives.
          </p>
        </div>
        <div className="text-right text-[14px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
          {SOURCES_REGISTRY.length} sources
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="mt-6 overflow-hidden rounded-xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/40"
      >
        {order.map((cat) => {
          const items = grouped[cat];
          if (!items?.length) return null;
          return (
            <AccordionItem key={cat} value={cat} className="px-5">
              <AccordionTrigger className="py-4 hover:no-underline">
                <div className="flex w-full flex-wrap items-center gap-3 text-left">
                  <Badge variant="outline" className="text-[13px]">
                    {SOURCE_CATEGORY_LABELS[cat]}
                  </Badge>
                  <span className="flex-1 text-[15px] font-semibold text-[var(--kc-paper)]">
                    {items.length} {items.length === 1 ? "source" : "sources"}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-4">
                  {items.map((s) => (
                    <li
                      key={s.id}
                      className="rounded-lg border border-[var(--kc-line)]/60 bg-[var(--kc-charcoal)]/40 p-4"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="text-[15px] font-semibold text-[var(--kc-paper)]">
                          {s.title}
                        </div>
                        {s.location ? (
                          <code className="rounded bg-[var(--kc-ink)] px-2 py-0.5 font-mono text-[11px] text-[var(--kc-paper)]/70">
                            {s.location}
                          </code>
                        ) : null}
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-[var(--kc-paper)]/80">
                        <span className="font-semibold text-[var(--kc-gold)]">What it provides · </span>
                        {s.detail}
                      </p>
                      <p className="mt-2 text-[13px] leading-relaxed text-[var(--kc-paper)]/65">
                        <span className="font-semibold text-[var(--kc-paper)]/75">Used on the site · </span>
                        {s.usedFor}
                      </p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Section } from "@/components/section";
import { PRODUCT_CVPS } from "@/data/proposal";
import { ChevronDownIcon, InfoIcon } from "lucide-react";

const CVP_ACCENT = [
  "#fbbf24", "#f472b6", "#34d399", "#60a5fa",
  "#fb923c", "#c084fc", "#facc15", "#f87171",
];

type Filter = "all" | "first-in-sa" | "comparable";

const FILTER_LABEL: Record<Filter, string> = {
  all: "All 8 CVPs",
  "first-in-sa": "First-in-SA only · 5",
  comparable: "Comparable upgrades · 3",
};

export function ProductCvps() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openCode, setOpenCode] = useState<string>(PRODUCT_CVPS[0].code);

  const filtered = PRODUCT_CVPS.filter((c) => {
    if (filter === "first-in-sa") return c.firstInSa;
    if (filter === "comparable") return !c.firstInSa;
    return true;
  });

  return (
    <Section
      id="product-cvps"
      eyebrow="Product · 8 non-comparable CVPs"
      title="What KCM actually sells — and why no one else can copy it"
      intro="Connectivity is the entry token. The product is belonging. Below sit the 8 non-comparable Customer Value Propositions that anchor the KCM commercial blueprint. Five of the eight are first-in-SA-market — open territory only KCM can credibly occupy."
    >
      {/* First-in-SA strip */}
      <div className="mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/10 p-4 text-[16px]">
        <span className="font-mono font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
          5 of 8 first-in-SA
        </span>
        <span className="text-[var(--kc-paper)]/85">
          Khosi Sisters Circle · Junior Khosi · Diaspora Khosi · Stadium Mode · Khosi Heritage
        </span>
      </div>

      {/* Budget disclaimer */}
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-4 text-[15px] leading-relaxed text-[var(--kc-paper)]/75">
        <InfoIcon className="mt-0.5 size-4 shrink-0 text-[var(--kc-gold)]" />
        <p>
          <span className="font-semibold uppercase tracking-[0.18em] text-[var(--kc-gold)]">
            Note ·
          </span>{" "}
          The budget for the CVPs is funded from the incentive budget — no
          additional line item is added to the V2 financial model.
        </p>
      </div>

      {/* Filter dropdown */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="text-[14px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
          Filter
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/60 px-3 py-1.5 text-[14px] text-[var(--kc-paper)] transition hover:border-[var(--kc-gold)]/50"
            >
              {FILTER_LABEL[filter]}
              <ChevronDownIcon className="size-4 text-[var(--kc-mute)]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {(Object.keys(FILTER_LABEL) as Filter[]).map((key) => (
              <DropdownMenuItem
                key={key}
                onSelect={() => setFilter(key)}
                className={filter === key ? "text-[var(--kc-gold)]" : ""}
              >
                {FILTER_LABEL[key]}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="ml-auto font-mono text-[13px] text-[var(--kc-mute)]">
          Showing {filtered.length} / {PRODUCT_CVPS.length}
        </span>
      </div>

      {/* CVPs as collapsible accordion — one at a time */}
      <Accordion
        type="single"
        collapsible
        value={openCode}
        onValueChange={(v) => setOpenCode(v)}
        className="space-y-3"
      >
        {filtered.map((c) => {
          const idx = PRODUCT_CVPS.findIndex((x) => x.code === c.code);
          const accent = CVP_ACCENT[idx];
          return (
            <AccordionItem
              key={c.code}
              value={c.code}
              className="overflow-hidden rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 px-0"
            >
              <div
                className="h-1.5 w-full"
                style={{ background: accent }}
              />
              <AccordionTrigger className="px-6 py-5 hover:no-underline">
                <div className="flex w-full flex-wrap items-center gap-3 text-left">
                  <span
                    className="font-mono text-[16px] font-semibold"
                    style={{ color: accent }}
                  >
                    {c.code}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-base font-semibold tracking-tight text-[var(--kc-paper)]">
                        {c.name}
                      </span>
                      <span className="text-[15px] uppercase tracking-wider text-[var(--kc-paper)]/60">
                        {c.tag}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[16px]">
                    {c.primaryPersonas}
                  </Badge>
                  {c.firstInSa ? (
                    <span className="rounded-full border border-[var(--kc-gold)] bg-[var(--kc-gold)]/15 px-2.5 py-0.5 text-[16px] font-semibold uppercase tracking-wider text-[var(--kc-gold)]">
                      First-in-SA
                    </span>
                  ) : null}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="mt-1 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                  {c.promise}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 text-[16px]">
                  <Row label="Mechanic" value={c.mechanic} />
                  <Row label="Why non-comparable" value={c.whyNonComparable} accent />
                  <div className="grid grid-cols-2 gap-3">
                    <Row label="Pricing" value={c.pricingAnchor} />
                    <Row label="KPIs" value={c.kpis} />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Section>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className={accent ? "rounded-lg bg-[var(--kc-gold)]/10 p-3" : ""}>
      <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
        {label}
      </div>
      <p className="mt-1 leading-relaxed text-[var(--kc-paper)]/85">{value}</p>
    </div>
  );
}

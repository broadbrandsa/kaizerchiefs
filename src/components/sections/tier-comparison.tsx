"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Section } from "@/components/section";
import { TIERS, type Tier, type TierKey } from "@/data/proposal";
import { TierAllocationChart } from "@/components/charts/tier-allocation";
import { formatRand, formatRandFull } from "@/lib/format";

export function TierComparison() {
  const [active, setActive] = useState<TierKey>("pilot");

  return (
    <Section
      id="tiers"
      eyebrow="The investment"
      title="Three plans, one strategy"
      intro="Each tier delivers the same strategic frame — wholesale-led, fan-fuelled, mobile-first. The difference is the size of the footprint, the duration, and which channels are switched on. Click a tier to drill into the line items and execution detail."
    >
      {/* Tier summary cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TIERS.map((t) => (
          <TierCard
            key={t.key}
            tier={t}
            active={active === t.key}
            onSelect={() => setActive(t.key)}
          />
        ))}
      </div>

      {/* Tier allocation comparison chart */}
      <div className="mt-10">
        <TierAllocationChart />
      </div>

      {/* Tabs detail */}
      <div className="mt-12">
        <Tabs value={active} onValueChange={(v) => setActive(v as TierKey)}>
          <TabsList className="w-full md:w-auto">
            {TIERS.map((t) => (
              <TabsTrigger key={t.key} value={t.key}>
                {t.name} · {formatRand(t.total)}
              </TabsTrigger>
            ))}
          </TabsList>
          {TIERS.map((t) => (
            <TabsContent key={t.key} value={t.key} className="mt-8">
              <TierDetail tier={t} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  );
}

function TierCard({
  tier, active, onSelect,
}: { tier: Tier; active: boolean; onSelect: () => void }) {
  const isFull = tier.key === "full";
  return (
    <Card
      onClick={onSelect}
      className={[
        "relative cursor-pointer overflow-hidden transition",
        active ? "ring-2 ring-[var(--kc-gold)]" : "ring-1 ring-[var(--kc-line)]",
        isFull ? "bg-[var(--kc-gold)] text-[var(--kc-black)]" : "bg-[var(--kc-charcoal)]/60",
      ].join(" ")}
    >
      <div className="bg-stripes pointer-events-none absolute inset-0 opacity-40" />
      <CardContent className="relative p-7">
        <div className="flex items-center justify-between">
          <div className={`text-[10px] font-semibold uppercase tracking-[0.32em] ${
            isFull ? "text-[var(--kc-black)]/70" : "text-[var(--kc-mute)]"
          }`}>
            Tier · {tier.key === "pilot" ? "01" : tier.key === "targeted" ? "02" : "03"}
          </div>
          <Badge variant={isFull ? "secondary" : "outline"}>
            {tier.durationMonths} months
          </Badge>
        </div>
        <div className={`mt-6 text-3xl font-semibold tracking-tight ${
          isFull ? "text-[var(--kc-black)]" : "text-[var(--kc-paper)]"
        }`}>
          {tier.name}
        </div>
        <div className={isFull ? "mt-3 text-[var(--kc-black)]/75" : "mt-3 text-[var(--kc-paper)]/75"}>
          {tier.positioning}
        </div>
        <div className="mt-8 flex items-end justify-between gap-3">
          <div>
            <div className={`text-[10px] uppercase tracking-[0.2em] ${
              isFull ? "text-[var(--kc-black)]/60" : "text-[var(--kc-mute)]"
            }`}>
              Total investment
            </div>
            <div className={`mt-1 text-4xl font-semibold tracking-tight ${
              isFull ? "text-[var(--kc-black)]" : "text-[var(--kc-paper)]"
            }`}>
              {formatRand(tier.total)}
            </div>
          </div>
          <div className={`text-right text-xs ${
            isFull ? "text-[var(--kc-black)]/70" : "text-[var(--kc-paper)]/70"
          }`}>
            <div>{tier.monthlySimTarget} SIM/mo</div>
            <div>{tier.monthlyEsimTarget} eSIM/mo</div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                variant={isFull ? "secondary" : "outline"}
                onClick={(e) => e.stopPropagation()}
              >
                Why this tier
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{tier.name} — {formatRand(tier.total)}</DialogTitle>
                <DialogDescription>
                  {tier.durationMonths} months · {tier.geoFocus}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-[var(--kc-paper)]/85">{tier.oneLine}</p>
              <div className="mt-2 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  Pillars
                </div>
                <ul className="space-y-1.5 text-sm text-[var(--kc-paper)]/85">
                  {tier.pillars.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-2 text-sm text-[var(--kc-paper)]/85">
                Targets: <strong>{tier.monthlySimTarget}</strong> physical SIMs and{" "}
                <strong>{tier.monthlyEsimTarget}</strong> eSIMs per month.
              </p>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}

function TierDetail({ tier }: { tier: Tier }) {
  return (
    <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            {tier.name} · the plan
          </div>
          <p className="mt-3 text-xl text-[var(--kc-paper)]/90">{tier.oneLine}</p>

          <div className="mt-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Pillars
            </div>
            <ul className="mt-3 space-y-2">
              {tier.pillars.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-[var(--kc-paper)]/85">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
          <KV label="Duration" value={`${tier.durationMonths} months`} />
          <KV label="Geo focus" value={tier.geoFocus} />
          <KV label="SIM target" value={`${tier.monthlySimTarget}/mo`} />
          <KV label="eSIM target" value={`${tier.monthlyEsimTarget}/mo`} />
        </div>
      </div>

      {/* Allocation table */}
      <div className="mt-10">
        <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Allocation by category
        </div>
        <div className="overflow-hidden rounded-xl border border-[var(--kc-line)]">
          <div className="grid grid-cols-1 divide-y divide-[var(--kc-line)]">
            {tier.categories.map((c) => (
              <div key={c.category} className="grid grid-cols-12 items-center gap-3 px-5 py-4">
                <div className="col-span-12 font-medium text-[var(--kc-paper)] md:col-span-3">
                  {c.category}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-[var(--kc-ink)]">
                    <div
                      className="absolute inset-y-0 left-0 bg-[var(--kc-gold)]"
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                </div>
                <div className="col-span-6 text-right text-[var(--kc-mute)] md:col-span-2">
                  {formatRand(c.allocation)}
                </div>
                <div className="col-span-6 text-right font-mono text-xs text-[var(--kc-mute)] md:col-span-1">
                  {c.pct}%
                </div>
              </div>
            ))}
            <div className="grid grid-cols-12 items-center gap-3 bg-[var(--kc-ink)]/40 px-5 py-4">
              <div className="col-span-12 font-semibold text-[var(--kc-gold)] md:col-span-9">Total</div>
              <div className="col-span-6 text-right font-semibold text-[var(--kc-gold)] md:col-span-2">
                {formatRand(tier.total)}
              </div>
              <div className="col-span-6 text-right font-mono text-xs text-[var(--kc-gold)] md:col-span-1">
                100%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Per-category detailed cards (single column for max execution detail) */}
      <div className="mt-12 space-y-6">
        {tier.categories.map((c) => (
          <Card key={c.category}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-[var(--kc-paper)]">
                  {c.category}
                </h3>
                <div className="text-right">
                  <div className="font-mono text-base text-[var(--kc-gold)]">
                    {formatRand(c.allocation)}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
                    {c.pct}% of plan
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                {c.rationale}
              </p>
              {c.lineItems.length > 0 ? (
                <ul className="mt-6 space-y-5 border-t border-[var(--kc-line)] pt-5">
                  {c.lineItems.map((li, idx) => (
                    <li key={`${li.category}-${idx}`}>
                      <div className="flex items-baseline justify-between gap-3">
                        <div>
                          <span className="font-semibold text-[var(--kc-paper)]">
                            {li.category}
                          </span>
                          <span className="ml-2 text-sm text-[var(--kc-mute)]">
                            · {li.supplier}
                          </span>
                        </div>
                        <div className="font-mono text-sm text-[var(--kc-paper)]/85">
                          {formatRandFull(li.cost)}
                        </div>
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-[var(--kc-paper)]/75">
                        {li.detail}
                      </div>
                      {li.reach ? (
                        <div className="mt-1.5 text-[11px] uppercase tracking-wider text-[var(--kc-gold)]/80">
                          Reach · {li.reach}
                        </div>
                      ) : null}
                      {li.execution && li.execution.length > 0 ? (
                        <Accordion
                          type="single"
                          collapsible
                          className="mt-3 rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/60 px-4"
                        >
                          <AccordionItem value="execute" className="border-b-0">
                            <AccordionTrigger className="py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)] hover:text-[var(--kc-gold)] hover:no-underline">
                              How we execute · {li.execution.length} step
                              {li.execution.length === 1 ? "" : "s"}
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 pt-1">
                              <ul className="space-y-1.5">
                                {li.execution.map((e, ei) => (
                                  <li
                                    key={ei}
                                    className="flex gap-2 text-xs leading-relaxed text-[var(--kc-paper)]/85"
                                  >
                                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                                    <span>{e}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/60 p-3">
      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-[var(--kc-paper)]">{value}</div>
    </div>
  );
}

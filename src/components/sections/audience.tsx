"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/section";
import { NIELSEN_INSIGHTS, PERSONAS } from "@/data/proposal";
import { SmartText } from "@/components/smart-text";
import { BarChart, type BarDatum } from "@/components/charts/bar-chart";

const YOY_DATA: BarDatum[] = [
  { label: "Showmax PL Mobile", value: 88.5, display: "+88.5% YoY", sub: "28.8% → 54.3% (2024 → 2025)", retired: true },
  { label: "DStv Compact Stream", value: 50.2, display: "+50.2% YoY", sub: "53.4% → 80.2%" },
  { label: "TikTok (sports content)", value: 37.9, display: "+37.9% YoY", sub: "62.0% → 85.5%" },
  { label: "Google (sports search)", value: 28.2, display: "+28.2% YoY", sub: "72.8% → 93.3%" },
  { label: "WhatsApp (sports content)", value: 24.9, display: "+24.9% YoY", sub: "73.6% → 91.9%" },
  { label: "YouTube (sports content)", value: 21.6, display: "+21.6% YoY", sub: "75.4% → 91.7%" },
  { label: "Sports betting (top-2)", value: 18.4, display: "+18.4% (2yr)", sub: "53.1% (2023) → 62.85% (2025)" },
];

export function Audience() {
  return (
    <Section
      id="audience"
      eyebrow="Audience"
      title="Six insights from the Nielsen Sports SA fan study"
      intro="Nielsen surveyed n=487 self-identified KC fans in March 2025. The numbers below shaped the channel mix more than any other input — they tell us where the Amakhosi base actually lives, listens, and decides."
    >
      {/* Nielsen insights — collapsible (first one open by default) */}
      <Accordion
        type="single"
        collapsible
        defaultValue={NIELSEN_INSIGHTS[0]?.headline}
        className="overflow-hidden rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40"
      >
        {NIELSEN_INSIGHTS.map((insight, i) => (
          <AccordionItem
            key={insight.headline}
            value={insight.headline}
            className="px-6"
          >
            <AccordionTrigger className="py-5 hover:no-underline">
              <div className="flex w-full flex-wrap items-center gap-3 pr-4 text-left">
                <Badge variant="outline">Insight 0{i + 1}</Badge>
                <span className="flex-1 text-base font-semibold leading-snug text-[var(--kc-paper)]">
                  <SmartText>{insight.headline}</SmartText>
                </span>
                <span className="hidden text-[14px] uppercase tracking-[0.2em] text-[var(--kc-mute)] md:inline">
                  NFI · Mar &apos;25
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <p className="text-sm leading-relaxed text-[var(--kc-paper)]/80">
                <SmartText>{insight.detail}</SmartText>
              </p>
              <div className="mt-4 border-t border-[var(--kc-line)] pt-3 text-[14px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                {insight.source}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Year-on-year growth bar chart */}
      <div className="mt-12 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Year-on-year growth — KC fan platform usage
            </div>
            <h3 className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
              The fastest-moving channels in the Amakhosi base
            </h3>
          </div>
          <div className="text-right text-[17px] uppercase tracking-wider text-[var(--kc-mute)]">
            Source · Nielsen NFI SA Mar &apos;25
          </div>
        </div>
        <div className="mt-6">
          <BarChart data={YOY_DATA} max={100} />
        </div>
      </div>

      {/* Headline summary band */}
      <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--kc-gold)]/20 bg-[var(--kc-gold)]/5 p-6 md:grid-cols-4">
        <Headline value="58%" label="KC fans aged 16–34" />
        <Headline value="+38%" label="TikTok usage YoY" />
        <Headline value="63%" label="top-2 sports betting interest" />
        <Headline value="48%" label="attend for camaraderie" />
      </div>

      {/* The 8 personas — drilling into the composite above */}
      <div className="mt-16">
        <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          The breakdown · 8 personas
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-3xl">
          Eight distinct supporters — every campaign creative ladders to one
        </h3>
        <p className="mt-3 max-w-3xl text-[16px] text-[var(--kc-paper)]/75">
          The Nielsen insights above paint the composite KC fan. Below sits the same audience drilled into 8 personas — each with a different problem-set, channel mix and anchor product. Diehard, Sister, Born-Free, Family, Hustler, Diaspora, Junior, Elder.
        </p>

        <PersonasGrid />
      </div>
    </Section>
  );
}

const PERSONA_COLOR: Record<string, string> = {
  P1: "#fbbf24",
  P2: "#f472b6",
  P3: "#34d399",
  P4: "#60a5fa",
  P5: "#fb923c",
  P6: "#c084fc",
  P7: "#facc15",
  P8: "#f87171",
};

function PersonasGrid() {
  const [openCode, setOpenCode] = useState<string>(PERSONAS[0].code);
  const open = PERSONAS.find((p) => p.code === openCode) ?? PERSONAS[0];

  return (
    <div>
      {/* Persona portfolio strip */}
      <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-8">
        {PERSONAS.map((p) => {
          const isOpen = p.code === openCode;
          const color = PERSONA_COLOR[p.code] ?? "var(--kc-gold)";
          return (
            <button
              key={p.code}
              type="button"
              onClick={() => setOpenCode(p.code)}
              className={`rounded-xl border p-3 text-left transition ${
                isOpen
                  ? "border-[var(--kc-gold)] bg-[var(--kc-charcoal)]/70"
                  : "border-[var(--kc-line)] bg-[var(--kc-charcoal)]/30 hover:border-[var(--kc-paper)]/30"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full" style={{ background: color }} />
                <span className="font-mono text-[16px] font-semibold text-[var(--kc-mute)]">{p.code}</span>
              </div>
              <div className="mt-2 text-[16px] font-semibold leading-tight text-[var(--kc-paper)]">{p.name}</div>
              <div className="mt-1 text-[16px] text-[var(--kc-paper)]/65">{p.tag}</div>
              <div className="mt-3 font-mono text-[16px] text-[var(--kc-gold)]">{p.shareOfBase}</div>
            </button>
          );
        })}
      </div>

      {/* Open persona detail */}
      <Card key={open.code} className="mt-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr]">
          <div
            className="relative overflow-hidden p-8"
            style={{
              background: `linear-gradient(135deg, ${PERSONA_COLOR[open.code]}33 0%, var(--kc-charcoal) 60%, var(--kc-ink) 100%)`,
            }}
          >
            <div className="bg-stripes absolute inset-0 opacity-25" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-base font-bold" style={{ color: PERSONA_COLOR[open.code] }}>
                  {open.code}
                </span>
                <Badge variant="outline" className="text-[16px]">{open.shareOfBase} of base</Badge>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[var(--kc-paper)]">{open.name}</h3>
              <div className="mt-1 text-base font-semibold text-[var(--kc-paper)]/85">{open.tag}</div>
              <p className="mt-5 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">{open.snapshot}</p>
              <div className="mt-5 rounded-lg border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/10 p-3">
                <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">Anchor CVP</div>
                <div className="mt-1 text-[16px] font-semibold text-[var(--kc-paper)]">{open.anchorCvp}</div>
              </div>
            </div>
          </div>

          <CardContent className="grid grid-cols-1 gap-4 bg-[var(--kc-ink)]/60 p-8 sm:grid-cols-2">
            <PField label="Archetype" value={open.archetype} />
            <PField label="Telco needs" value={open.needs} />
            <PField label="Motivations" value={open.motivations} />
            <PField label="Barriers" value={open.barriers} />
            <PField label="Success KPI" value={open.successKpi} />
            <PField label="Brief for the agency" value={open.briefForAgency} />
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

function PField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">{label}</div>
      <p className="mt-1 text-[16px] leading-relaxed text-[var(--kc-paper)]/80">{value}</p>
    </div>
  );
}

function Headline({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-semibold tracking-tight text-[var(--kc-gold)] md:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-[var(--kc-paper)]/70">
        {label}
      </div>
    </div>
  );
}

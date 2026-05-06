"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "@/components/section";
import { CUSTOMER_JOURNEY, XANITE } from "@/data/proposal";

const STAGE_COLOR: Record<string, string> = {
  awareness:     "#34d399",
  consideration: "#60a5fa",
  activation:    "#c084fc",
  onboarding:    "#fbbf24",
  active:        "#facc15",
  "at-risk":     "#fb923c",
  churn:         "#f87171",
};

const LAYER_COLOR = ["#34d399", "#60a5fa", "#c084fc", "#fbbf24"];

export function CustomerJourney() {
  const j = CUSTOMER_JOURNEY;
  const x = XANITE;

  return (
    <Section
      id="customer-journey"
      eyebrow="Lifecycle marketing · 1-to-1"
      title="The customer journey, powered by Xanite"
      intro={j.intro}
    >
      {/* Tabbed navigator — one block visible at a time */}
      <Tabs defaultValue="xanite">
        <TabsList className="mb-10 flex w-full flex-wrap">
          <TabsTrigger value="xanite">Xanite engine</TabsTrigger>
          <TabsTrigger value="funnel">7-stage funnel</TabsTrigger>
          <TabsTrigger value="onboarding">First 30 days</TabsTrigger>
          <TabsTrigger value="cdp">CDP hub</TabsTrigger>
          <TabsTrigger value="churn">Churn mechanics</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
        </TabsList>

        {/* ============================================================
            1. XANITE HERO — 4 layer stack as visual blocks
            ============================================================ */}
        <TabsContent value="xanite">
          <Card className="mb-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-[var(--kc-charcoal)] via-[var(--kc-ink)] to-[var(--kc-black)] p-8">
                <div className="bg-stripes absolute inset-0 opacity-30" />
                <div className="relative">
                  <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                    The MVNO Value Engine
                  </div>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-[var(--kc-paper)]">
                    Xanite
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[var(--kc-paper)]/85">
                    {x.oneLiner}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {x.capabilities.map((c) => (
                      <div key={c} className="flex items-start gap-2 text-[16px] leading-snug text-[var(--kc-paper)]/85">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
                    {x.contact.leadName} · {x.contact.leadEmail} · {x.contact.domain}
                  </div>
                </div>
              </div>

              {/* 4 Layers — visual stack */}
              <div className="bg-[var(--kc-ink)]/60 p-8">
                <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                  4-layer architecture · 16 microservices
                </div>
                <div className="mt-6 space-y-3">
                  {x.layers.map((layer, i) => (
                    <div
                      key={layer.num}
                      className="flex items-center gap-4 rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/60 p-4"
                    >
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-mono text-base font-bold text-[var(--kc-black)]"
                        style={{ background: LAYER_COLOR[i] }}
                      >
                        {layer.num}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-base font-semibold text-[var(--kc-paper)]">
                          {layer.name}
                        </div>
                        <div className="mt-1 text-[16px] text-[var(--kc-paper)]/70">
                          {layer.capabilities}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Why Xanite — 3-up cards (compressed from 7) */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {x.whyForKCMobile.slice(0, 3).map((w, i) => (
              <Card key={w.title} className="bg-[var(--kc-charcoal)]/40">
                <CardContent className="p-5">
                  <div className="font-mono text-base font-semibold text-[var(--kc-gold)]">
                    0{i + 1}
                  </div>
                  <h4 className="mt-2 text-base font-semibold leading-snug text-[var(--kc-paper)]">
                    {w.title}
                  </h4>
                  <p className="mt-2 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">
                    {w.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ============================================================
            2. JOURNEY FUNNEL — visual horizontal step chart
            ============================================================ */}
        <TabsContent value="funnel">
          <div>
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              End-to-end flow
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
              7 stages · one record · every step measured
            </h3>

            <div className="mt-8 overflow-x-auto">
              <svg viewBox="0 0 980 220" className="h-auto w-full" style={{ minWidth: 900 }}>
                {/* connecting baseline */}
                <line x1="60" y1="100" x2="920" y2="100" stroke="var(--kc-line)" strokeWidth="2" />
                {j.stages.map((s, i) => {
                  const x = 60 + i * 130;
                  const color = STAGE_COLOR[s.key] ?? "var(--kc-gold)";
                  return (
                    <g key={s.key}>
                      {/* stage circle */}
                      <circle cx={x} cy={100} r={28} fill={color} opacity="0.95" />
                      <text x={x} y={106} fontSize="14" fontWeight="700" fill="var(--kc-black)" textAnchor="middle">
                        {String(i + 1).padStart(2, "0")}
                      </text>
                      {/* stage name */}
                      <text x={x} y={50} fontSize="13" fontWeight="600" fill="var(--kc-paper)" textAnchor="middle">
                        {s.name}
                      </text>
                      <text x={x} y={64} fontSize="9" fill="var(--kc-mute)" textAnchor="middle">
                        {s.window}
                      </text>
                      {/* KPI below */}
                      <foreignObject x={x - 60} y={140} width={120} height={70}>
                        <div className="text-[16px] leading-snug text-[var(--kc-paper)]/75 text-center">
                          <div className="font-semibold text-[var(--kc-gold)]">KPI</div>
                          <div className="mt-0.5">{s.kpi}</div>
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Stage detail cards (compact) */}
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {j.stages.map((s, i) => {
                const color = STAGE_COLOR[s.key] ?? "#e09c2a";
                return (
                  <Card key={s.key} className="bg-[var(--kc-charcoal)]/40">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[16px] font-bold text-[var(--kc-black)]" style={{ background: color }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[16px] font-semibold text-[var(--kc-paper)]">
                          {s.name}
                        </span>
                      </div>
                      <p className="mt-3 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">
                        {s.mechanic}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </TabsContent>

        {/* ============================================================
            3. ONBOARDING TIMELINE — horizontal SVG timeline
            ============================================================ */}
        <TabsContent value="onboarding">
          <div>
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              The first 30 days
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
              7 behavioural touchpoints — sized to halve early-month churn
            </h3>

            {/* Evenly-spaced touchpoint cards — no overlap, no clipping at edges */}
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                {j.onboarding30.map((d, i) => (
                  <div
                    key={d.day}
                    className="group relative rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-4 transition hover:border-[var(--kc-gold)]/50"
                  >
                    {/* Step number ribbon */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--kc-mute)]">
                        Step {String(i + 1).padStart(2, "0")} / 07
                      </span>
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--kc-gold)] font-mono text-[11px] font-bold text-[var(--kc-black)]">
                        {d.day.replace(/\D/g, "")}
                      </span>
                    </div>
                    <div className="mt-3 font-mono text-[12px] font-semibold uppercase tracking-wider text-[var(--kc-gold)]">
                      {d.day}
                    </div>
                    <div className="mt-1 text-[15px] font-semibold leading-snug text-[var(--kc-paper)]">
                      {d.event}
                    </div>
                    <div className="mt-3 inline-block rounded-md bg-[var(--kc-ink)]/70 px-2 py-1 text-[11px] uppercase tracking-wider text-[var(--kc-paper)]/65">
                      {d.channel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual timeline strip beneath — proportional days 0–30 */}
              <div className="relative mt-8 h-12">
                <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[var(--kc-line)]" />
                <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[var(--kc-gold)] to-[var(--kc-gold)]/30" />
                {j.onboarding30.map((d) => {
                  const dayNum = parseInt(d.day.replace(/\D/g, ""), 10) || 0;
                  const pct = (dayNum / 30) * 100;
                  return (
                    <div
                      key={d.day}
                      className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${pct}%` }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-[var(--kc-gold)] bg-[var(--kc-black)]" />
                        <div className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
                          D{dayNum}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* ============================================================
            4. CDP HUB — 14 dimensions visual
            ============================================================ */}
        <TabsContent value="cdp">
          <div>
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              1-to-1 segmentation
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
              Every customer = 14 data dimensions in Xanite
            </h3>

            {/* Compact summary — full grid hidden behind disclosure */}
            <div className="mt-8 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
              <div className="mx-auto max-w-md rounded-2xl border-2 border-[var(--kc-gold)] bg-[var(--kc-ink)] p-5 text-center">
                <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                  Single customer record
                </div>
                <div className="mt-1 text-base font-semibold text-[var(--kc-paper)]">
                  All 14 dimensions, real-time
                </div>
              </div>
              <details className="mt-6">
                <summary className="cursor-pointer text-[14px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)] hover:text-[var(--kc-paper)]">
                  Show all 14 dimensions held in Xanite
                </summary>
                <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-7">
                  {j.segmentation.dimensions.map((d, i) => (
                    <div
                      key={d.label}
                      className="rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/60 p-3"
                    >
                      <div className="font-mono text-[16px] text-[var(--kc-gold)]">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-[16px] font-semibold leading-tight text-[var(--kc-paper)]">
                        {d.label}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </div>

            {/* 5 segments — keep simpler — show 3 most important inline */}
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {j.segmentation.segments.slice(0, 3).map((seg) => (
                <Card key={seg.name} className="bg-[var(--kc-ink)]/60">
                  <CardContent className="p-5">
                    <Badge variant="outline" className="text-[16px]">
                      Segment example
                    </Badge>
                    <h4 className="mt-3 text-[16px] font-semibold leading-snug text-[var(--kc-paper)]">
                      {seg.name}
                    </h4>
                    <p className="mt-2 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">
                      <strong className="text-[var(--kc-paper)]/95">Treatment · </strong>{seg.treatment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ============================================================
            5. CHURN MECHANICS — 3-column visual flow
            ============================================================ */}
        <TabsContent value="churn">
          <div>
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Churn signals → treatments
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
              What we do, when we see the signal — 4 highest-leverage triggers
            </h3>

            <div className="mt-8 space-y-3">
              {j.churnMechanics.slice(0, 4).map((row) => (
                <div
                  key={row.trigger}
                  className="grid grid-cols-1 items-stretch gap-3 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-4 lg:grid-cols-[1.2fr_30px_1.5fr_30px_0.7fr]"
                >
                  <div className="flex items-center">
                    <div>
                      <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-orange-300">
                        Signal
                      </div>
                      <p className="mt-1 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                        {row.trigger}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-[var(--kc-mute)]">
                    <svg width="22" height="22" viewBox="0 0 22 22"><path d="M2 11h16m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-sky-300">
                        Treatment
                      </div>
                      <p className="mt-1 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                        {row.treatment}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-[var(--kc-mute)]">
                    <svg width="22" height="22" viewBox="0 0 22 22"><path d="M2 11h16m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Lift
                      </div>
                      <p className="mt-1 font-mono text-[16px] font-semibold leading-snug text-emerald-200">
                        {row.expectedLift}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[16px] text-[var(--kc-paper)]/60">
              Three more triggers — sentiment-led, app-engagement, bill-shock — fire automatically inside Xanite’s Churn Prevention Flow.
            </p>
          </div>
        </TabsContent>

        {/* ============================================================
            6. KPIs — clean grid
            ============================================================ */}
        <TabsContent value="kpis">
          <div>
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              KPIs · 8 numbers the lifecycle engine is held to
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
              What we measure
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {j.kpis.map((k) => (
                <Card key={k.metric} className="bg-[var(--kc-ink)]/60">
                  <CardContent className="p-4">
                    <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-paper)]/65">
                      {k.metric}
                    </div>
                    <div className="mt-2 font-mono text-base font-bold text-[var(--kc-gold)]">
                      {k.target}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}

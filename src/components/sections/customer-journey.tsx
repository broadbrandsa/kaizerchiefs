import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      {/* ============================================================
          1. XANITE HERO — 4 layer stack as visual blocks
          ============================================================ */}
      <Card className="mb-14 overflow-hidden">
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
      <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3">
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

      {/* ============================================================
          2. JOURNEY FUNNEL — visual horizontal step chart
          ============================================================ */}
      <div className="mb-16">
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

      {/* ============================================================
          3. ONBOARDING TIMELINE — horizontal SVG timeline
          ============================================================ */}
      <div className="mb-16">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          The first 30 days
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          7 behavioural touchpoints — sized to halve early-month churn
        </h3>

        <div className="mt-8 overflow-x-auto">
          <svg viewBox="0 0 980 320" className="h-auto w-full" style={{ minWidth: 900 }}>
            {/* baseline */}
            <line x1="40" y1="160" x2="940" y2="160" stroke="var(--kc-gold)" strokeWidth="3" />

            {j.onboarding30.map((d, i) => {
              const dayNum = parseInt(d.day.replace(/\D/g, ""), 10) || 0;
              // Position on a 0-30 scale
              const x = 40 + (dayNum / 30) * 900;
              const above = i % 2 === 0;
              const labelY = above ? 70 : 220;
              const lineY1 = above ? 100 : 160;
              const lineY2 = above ? 160 : 220;
              return (
                <g key={d.day}>
                  {/* connector */}
                  <line x1={x} y1={lineY1} x2={x} y2={lineY2} stroke="var(--kc-mute)" strokeWidth="1" />
                  {/* day node */}
                  <circle cx={x} cy={160} r="9" fill="var(--kc-gold)" />
                  <circle cx={x} cy={160} r="4" fill="var(--kc-black)" />
                  {/* label box */}
                  <foreignObject x={x - 95} y={labelY - (above ? 60 : 0)} width="190" height={above ? 60 : 90}>
                    <div className={`rounded-lg border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/70 p-2.5 text-center ${above ? "" : ""}`}>
                      <div className="font-mono text-[16px] font-bold text-[var(--kc-gold)]">
                        {d.day}
                      </div>
                      <div className="mt-1 text-[16px] font-semibold leading-snug text-[var(--kc-paper)]">
                        {d.event}
                      </div>
                      <div className="mt-1 text-[16px] text-[var(--kc-paper)]/65">
                        {d.channel}
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ============================================================
          4. CDP HUB — 14 dimensions visual
          ============================================================ */}
      <div className="mb-16">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          1-to-1 segmentation
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Every customer = 14 data dimensions in Xanite
        </h3>

        {/* Hub-and-spoke style */}
        <div className="mt-8 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
          {/* Center pill */}
          <div className="mx-auto mb-6 max-w-md rounded-2xl border-2 border-[var(--kc-gold)] bg-[var(--kc-ink)] p-5 text-center">
            <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Single customer record
            </div>
            <div className="mt-1 text-base font-semibold text-[var(--kc-paper)]">
              All 14 dimensions, real-time
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-7">
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

      {/* ============================================================
          5. CHURN MECHANICS — 3-column visual flow
          ============================================================ */}
      <div className="mb-16">
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

      {/* ============================================================
          6. KPIs — clean grid
          ============================================================ */}
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
    </Section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { NIELSEN_INSIGHTS } from "@/data/proposal";
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {NIELSEN_INSIGHTS.map((insight, i) => (
          <Card key={insight.headline} className="flex flex-col">
            <CardContent className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <Badge variant="outline">Insight 0{i + 1}</Badge>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                  NFI · Mar &apos;25
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug text-[var(--kc-paper)]">
                <SmartText>{insight.headline}</SmartText>
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                <SmartText>{insight.detail}</SmartText>
              </p>
              <div className="mt-6 border-t border-[var(--kc-line)] pt-4 text-[11px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                {insight.source}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Year-on-year growth bar chart */}
      <div className="mt-12 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Year-on-year growth — KC fan platform usage
            </div>
            <h3 className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
              The fastest-moving channels in the Amakhosi base
            </h3>
          </div>
          <div className="text-right text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
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
    </Section>
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

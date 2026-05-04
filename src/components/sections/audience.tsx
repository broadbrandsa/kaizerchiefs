import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { NIELSEN_INSIGHTS } from "@/data/proposal";

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
                {insight.headline}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                {insight.detail}
              </p>
              <div className="mt-6 border-t border-[var(--kc-line)] pt-4 text-[11px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                {insight.source}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { MARKET_CONTEXT } from "@/data/proposal";

export function MarketContext() {
  return (
    <Section
      id="market"
      eyebrow="Market context"
      title="The SA MVNO category is in expansion"
      intro="The plan sits inside a category tailwind. Below is the relevant SA market context — without naming individual operators — that shaped how aggressive we can be on distribution and how lean we have to be on price."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {MARKET_CONTEXT.map((m, i) => (
          <Card key={m.headline}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                  Context · 0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--kc-paper)]">
                {m.headline}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                {m.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

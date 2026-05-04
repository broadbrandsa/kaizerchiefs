import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { MARKET_CONTEXT } from "@/data/proposal";
import { GrowthChart } from "@/components/charts/growth-chart";

const MVNO_REVENUE: { label: string; value: number; display?: string }[] = [
  { label: "2025", value: 505, display: "$505M" },
  { label: "2026", value: 547, display: "$547M" },
  { label: "2027", value: 592, display: "$592M" },
  { label: "2028", value: 641, display: "$641M" },
  { label: "2029", value: 694, display: "$694M" },
  { label: "2030", value: 750, display: "$750M" },
];

const MVNO_SUBS: { label: string; value: number; display?: string }[] = [
  { label: "2025", value: 5.91, display: "5.91M" },
  { label: "2026", value: 6.34, display: "6.34M" },
  { label: "2027", value: 6.81, display: "6.81M" },
  { label: "2028", value: 7.31, display: "7.31M" },
  { label: "2029", value: 7.85, display: "7.85M" },
  { label: "2030", value: 8.45, display: "8.45M" },
];

export function MarketContext() {
  return (
    <Section
      id="market"
      eyebrow="Market context"
      title="The SA MVNO category is in expansion"
      intro="The plan sits inside a category tailwind. Below is the SA market context that shaped how aggressive we can be on distribution and how lean we have to be on price."
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

      {/* Market-growth charts */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              SA MVNO market revenue · 2025 → 2030
            </div>
            <p className="mt-2 text-xs text-[var(--kc-paper)]/65">
              CAGR 8.25% — Mordor Intelligence
            </p>
            <div className="mt-4">
              <GrowthChart
                data={MVNO_REVENUE}
                yMin={400}
                yMax={800}
                caption="USD millions"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              SA MVNO subscribers · 2025 → 2030
            </div>
            <p className="mt-2 text-xs text-[var(--kc-paper)]/65">
              CAGR 7.4% — 2.5 million net new subscribers in the window
            </p>
            <div className="mt-4">
              <GrowthChart
                data={MVNO_SUBS}
                yMin={5}
                yMax={9}
                caption="Subscribers (millions)"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { MultiLineChart } from "@/components/charts/multi-line-chart";
import { runModel, MODEL_DEFAULTS } from "@/lib/financial-model";
import { formatRand, formatRandFull, formatInt } from "@/lib/format";

const MIN_INVEST = 1_500_000;
const MAX_INVEST = 5_000_000;
const STEP_INVEST = 100_000;
const DEFAULT_INVEST = 4_500_000; // KCM model baseline

const MIN_CAC = 30;
const MAX_CAC = 300;
const STEP_CAC = 10;
const DEFAULT_CAC = 150;

const TIMELINE_RANGES = [
  { label: "M1 only", from: 1, to: 1 },
  { label: "M1–3", from: 1, to: 3 },
  { label: "M1–6", from: 1, to: 6 },
  { label: "M1–9", from: 1, to: 9 },
  { label: "M1–12", from: 1, to: 12 },
];

const COLOURS = {
  spend: "#E09C2A",
  reinvest: "#FACC15",
  subs: "#06B6D4",
  profit: "#84CC16",
  net: "#EC4899",
};

export function InvestmentCalculator() {
  const [investment, setInvestment] = useState(DEFAULT_INVEST);
  const [cac, setCac] = useState(DEFAULT_CAC);
  const [rangeIdx, setRangeIdx] = useState(4); // M1-12 default

  const result = useMemo(
    () => runModel(investment, cac),
    [investment, cac],
  );

  const range = TIMELINE_RANGES[rangeIdx];
  const visibleRows = result.rows.filter(
    (r) => r.month >= range.from && r.month <= range.to,
  );
  const labels = visibleRows.map((r) => `M${r.month}`);

  // Totals over the selected range
  const rangeTotals = useMemo(() => {
    const visibleSpend = visibleRows.reduce((s, r) => s + r.totalSpend, 0);
    const visibleReinvested = visibleRows.reduce(
      (s, r) => s + r.reinvestedSpend,
      0,
    );
    const visibleActivations = visibleRows.reduce(
      (s, r) => s + r.newActivations,
      0,
    );
    const lastRow = visibleRows[visibleRows.length - 1];
    return {
      visibleSpend,
      visibleReinvested,
      visibleActivations,
      activeSubs: lastRow ? lastRow.activeSubs : 0,
      cumGrossProfit: lastRow ? lastRow.cumulativeGrossProfit : 0,
      netContribution: lastRow ? lastRow.netContribution : 0,
    };
  }, [visibleRows]);

  return (
    <Section
      id="model"
      eyebrow="Investment model"
      title="The financial picture, sliced by spend, subscriber target and timeline"
      intro="Three sliders drive the model. Move the marketing investment, the cost per new user, and the timeline window to see how the launch plays out month by month — including the 5% of monthly profit that gets reinvested into the next month's marketing. Inputs are anchored to the KCM Digital Mobile model (Final 20260128, EJW 20260312)."
    >
      {/* SLIDER PANEL */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Investment */}
        <Card>
          <CardContent className="p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
              Marketing investment · Y1 base
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-4xl">
              {formatRand(investment)}
            </div>
            <div className="mt-1 text-xs text-[var(--kc-mute)]">
              {formatRandFull(investment)} · before any reinvestment
            </div>
            <input
              type="range"
              min={MIN_INVEST}
              max={MAX_INVEST}
              step={STEP_INVEST}
              value={investment}
              onChange={(e) => setInvestment(parseInt(e.target.value, 10))}
              className="mt-4 w-full accent-[var(--kc-gold)]"
              aria-label="Marketing investment"
            />
            <div className="mt-1 flex justify-between text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
              <span>R1.5M</span>
              <span>R5M</span>
            </div>
          </CardContent>
        </Card>

        {/* CAC */}
        <Card>
          <CardContent className="p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
              Cost per new user (CAC)
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-4xl">
              R{cac}
            </div>
            <div className="mt-1 text-xs text-[var(--kc-mute)]">
              Implied marketing for activations is M1 SIMs × CAC
            </div>
            <input
              type="range"
              min={MIN_CAC}
              max={MAX_CAC}
              step={STEP_CAC}
              value={cac}
              onChange={(e) => setCac(parseInt(e.target.value, 10))}
              className="mt-4 w-full accent-[var(--kc-gold)]"
              aria-label="Cost per new user"
            />
            <div className="mt-1 flex justify-between text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
              <span>R30</span>
              <span>R300</span>
            </div>
          </CardContent>
        </Card>

        {/* Timeline range */}
        <Card>
          <CardContent className="p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
              Timeline window
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-4xl">
              {range.label}
            </div>
            <div className="mt-1 text-xs text-[var(--kc-mute)]">
              Filter the charts and table to a sub-range
            </div>
            <input
              type="range"
              min={0}
              max={TIMELINE_RANGES.length - 1}
              step={1}
              value={rangeIdx}
              onChange={(e) => setRangeIdx(parseInt(e.target.value, 10))}
              className="mt-4 w-full accent-[var(--kc-gold)]"
              aria-label="Timeline window"
            />
            <div className="mt-1 flex justify-between text-[9px] uppercase tracking-wider text-[var(--kc-mute)]">
              {TIMELINE_RANGES.map((r) => (
                <span key={r.label}>{r.label}</span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ASSUMPTIONS FOOTER */}
      <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6 md:grid-cols-4">
        <Assumption label="ARPU" value={`R${MODEL_DEFAULTS.arpuMonthly}/mo`} sub="From the KCM model" />
        <Assumption label="Gross margin" value={`${Math.round(MODEL_DEFAULTS.grossMargin * 100)}%`} sub="From the KCM model" />
        <Assumption label="Monthly churn" value={`${Math.round(MODEL_DEFAULTS.monthlyChurn * 100)}%`} sub="From the KCM model" />
        <Assumption label="Reinvestment" value={`${Math.round(MODEL_DEFAULTS.reinvestmentRate * 100)}%`} sub="Of monthly gross profit" />
      </div>

      {/* SUMMARY TILES */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <SummaryTile
          label={`Active subs at end of ${range.label}`}
          value={formatInt(rangeTotals.activeSubs)}
          sub={`${formatInt(rangeTotals.visibleActivations)} activations in window`}
        />
        <SummaryTile
          label="Cumulative gross profit"
          value={formatRand(rangeTotals.cumGrossProfit)}
          sub={`At ${Math.round(MODEL_DEFAULTS.grossMargin * 100)}% gross margin on R${MODEL_DEFAULTS.arpuMonthly} ARPU`}
        />
        <SummaryTile
          label="Total marketing spend (base + reinvested)"
          value={formatRand(rangeTotals.visibleSpend)}
          sub={`Base + ${formatRand(rangeTotals.visibleReinvested)} reinvested from monthly profit`}
        />
        <SummaryTile
          label="Net contribution"
          value={formatRand(rangeTotals.netContribution)}
          sub={
            result.totals.paybackMonth
              ? `Payback in month ${result.totals.paybackMonth}`
              : "Payback occurs in year 2"
          }
          tone={rangeTotals.netContribution >= 0 ? "positive" : "negative"}
        />
      </div>

      {/* CHARTS */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartCard label="Subscribers" title="Active SIM holders">
          <MultiLineChart
            labels={labels}
            series={[
              {
                label: "Active SIMs",
                colour: COLOURS.subs,
                values: visibleRows.map((r) => r.activeSubs),
                format: (v) => formatInt(v),
                area: true,
              },
            ]}
          />
        </ChartCard>

        <ChartCard label="Monthly marketing spend" title="Base spend vs reinvested profit — independent · y-axis fixed at R0–R500K">
          <MultiLineChart
            labels={labels}
            yMin={0}
            yMax={500_000}
            series={[
              {
                label: "Base spend per month (flat)",
                colour: COLOURS.spend,
                values: visibleRows.map((r) => r.baseSpend),
                format: (v) => formatRand(v),
                area: true,
              },
              {
                label: "Reinvested per month",
                colour: COLOURS.reinvest,
                values: visibleRows.map((r) => r.reinvestedSpend),
                format: (v) => formatRand(v),
              },
            ]}
          />
        </ChartCard>

        <ChartCard
          className="lg:col-span-2"
          label="Profit vs net contribution"
          title="Cumulative gross profit overlaid against profit minus marketing spend — the gap between the two lines is the marketing investment"
        >
          <MultiLineChart
            labels={labels}
            series={[
              {
                label: "Cumulative gross profit",
                colour: COLOURS.profit,
                values: visibleRows.map((r) => r.cumulativeGrossProfit),
                format: (v) => formatRand(v),
                area: true,
              },
              {
                label: "Net contribution (profit − marketing)",
                colour: COLOURS.net,
                values: visibleRows.map((r) => r.netContribution),
                format: (v) => formatRand(v),
              },
            ]}
          />
        </ChartCard>
      </div>

      {/* MONTHLY BREAKDOWN TABLE */}
      <div className="mt-8">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Monthly breakdown · {range.label}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-[var(--kc-line)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--kc-ink)]/60 text-[10px] uppercase tracking-[0.18em] text-[var(--kc-mute)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Month</th>
                <th className="px-4 py-3 text-right font-semibold">Spend (base)</th>
                <th className="px-4 py-3 text-right font-semibold">Reinvested</th>
                <th className="px-4 py-3 text-right font-semibold">New activations</th>
                <th className="px-4 py-3 text-right font-semibold">Active subs</th>
                <th className="px-4 py-3 text-right font-semibold">Monthly profit</th>
                <th className="px-4 py-3 text-right font-semibold">Cum. profit</th>
                <th className="px-4 py-3 text-right font-semibold">Net contribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--kc-line)]">
              {visibleRows.map((r) => (
                <tr key={r.month} className="bg-[var(--kc-charcoal)]/40">
                  <td className="px-4 py-3 font-medium text-[var(--kc-paper)]">M{r.month}</td>
                  <td className="px-4 py-3 text-right font-mono text-xs text-[var(--kc-paper)]/85">
                    {formatRand(r.baseSpend)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-xs text-yellow-300">
                    {r.reinvestedSpend > 0 ? `+${formatRand(r.reinvestedSpend)}` : "—"}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-xs text-cyan-300">
                    {formatInt(r.newActivations)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-xs text-[var(--kc-paper)]">
                    {formatInt(r.activeSubs)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-xs text-lime-300">
                    {formatRand(r.monthlyGrossProfit)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-xs text-[var(--kc-gold)]">
                    {formatRand(r.cumulativeGrossProfit)}
                  </td>
                  <td className={`px-4 py-3 text-right font-mono text-xs ${
                    r.netContribution >= 0 ? "text-emerald-300" : "text-rose-300"
                  }`}>
                    {formatRand(r.netContribution)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </Section>
  );
}



function SummaryTile({
  label, value, sub, tone = "default",
}: { label: string; value: string; sub: string; tone?: "default" | "positive" | "negative" }) {
  const valueClass =
    tone === "positive" ? "text-emerald-300"
    : tone === "negative" ? "text-rose-300"
    : "text-[var(--kc-gold)]";
  return (
    <Card>
      <CardContent className="p-5">
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">{label}</div>
        <div className={`mt-2 text-2xl font-semibold tracking-tight md:text-3xl ${valueClass}`}>{value}</div>
        <div className="mt-2 text-xs text-[var(--kc-paper)]/65">{sub}</div>
      </CardContent>
    </Card>
  );
}

function ChartCard({
  label, title, children, className,
}: { label: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">{label}</div>
        <h3 className="mt-2 text-base font-semibold text-[var(--kc-paper)]">{title}</h3>
        <div className="mt-4">{children}</div>
      </CardContent>
    </Card>
  );
}

function Assumption({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">{label}</div>
      <div className="mt-1 font-mono text-sm text-[var(--kc-paper)]">{value}</div>
      <div className="text-[10px] text-[var(--kc-paper)]/55">{sub}</div>
    </div>
  );
}

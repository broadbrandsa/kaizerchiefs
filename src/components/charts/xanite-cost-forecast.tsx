"use client";

import { XANITE_COST_FORECAST } from "@/data/proposal";

/**
 * XaniteCostForecast — surfaces the 5-year Xanite platform + outbound cost
 * curve. Used in the Customer Journey chapter (operational context) and the
 * Investment Model section (financial-disclosure context). The same numbers
 * also live inside the Plan Detail Lifecycle Platform line item detail text.
 */
export function XaniteCostForecast({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const f = XANITE_COST_FORECAST;
  const isFull = variant === "full";

  return (
    <div className="rounded-2xl border border-violet-400/30 bg-violet-400/5 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Xanite ecosystem cost · 5-year forecast
          </div>
          <h3 className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
            R{(f.fiveYearTotal / 1_000_000).toFixed(1)}M total over 5 years —
            growing with the subscriber base
          </h3>
        </div>
        <span className="rounded-full border border-violet-400/40 bg-violet-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-violet-300">
          Material operating cost
        </span>
      </div>

      <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-[var(--kc-paper)]/80">
        Xanite is the CDP / CVM platform behind every customer-journey
        mechanic in this proposal. Two cost layers, both per-subscriber:
        <strong className="text-[var(--kc-paper)]"> platform fee</strong> at
        R{f.platformRatePerSubPerMonth.toFixed(2)} / active subscriber /
        month (CDP + segmentation + marketing automation + AI service), plus
        <strong className="text-[var(--kc-paper)]"> outbound delivery</strong>{" "}
        at ≈R{f.outboundRatePerSubPerYear.toFixed(2)} / active subscriber /
        year (email, SMS, WhatsApp, push at SA market rates). Both scale
        linearly with the active sub curve.
      </p>

      {/* Forecast table */}
      <div className="mt-5 overflow-x-auto rounded-xl border border-violet-400/20 bg-[var(--kc-ink)]/60">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-violet-400/20 bg-[var(--kc-charcoal)]/50 text-left text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3 text-right">Avg active subs</th>
              <th className="px-4 py-3 text-right">Platform fee</th>
              <th className="px-4 py-3 text-right">Outbound delivery</th>
              <th className="px-4 py-3 text-right">Total Xanite cost</th>
              <th className="px-4 py-3 text-right">% of revenue</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            {f.yearly.map((y, i) => (
              <tr
                key={y.year}
                className={
                  i === 0
                    ? "bg-violet-400/5 border-b border-violet-400/15"
                    : i === f.yearly.length - 1
                    ? "border-t border-violet-400/30 last:border-b-0"
                    : "border-b border-[var(--kc-line)]/30 last:border-b-0"
                }
              >
                <td className="px-4 py-3 font-semibold text-[var(--kc-paper)]">{y.year}</td>
                <td className="px-4 py-3 text-right text-[var(--kc-paper)]/85">
                  {y.avgSubs.toLocaleString("en-ZA")}
                </td>
                <td className="px-4 py-3 text-right text-[var(--kc-paper)]/85">
                  R{(y.platformCost / 1_000).toFixed(0)}K
                </td>
                <td className="px-4 py-3 text-right text-[var(--kc-paper)]/85">
                  R{(y.outboundCost / 1_000).toFixed(0)}K
                </td>
                <td className="px-4 py-3 text-right font-bold text-[var(--kc-gold)]">
                  R{y.totalCost >= 1_000_000
                    ? `${(y.totalCost / 1_000_000).toFixed(2)}M`
                    : `${(y.totalCost / 1_000).toFixed(0)}K`}
                </td>
                <td className="px-4 py-3 text-right text-[var(--kc-paper)]/70">
                  {y.pctOfRevenue.toFixed(2)}%
                </td>
              </tr>
            ))}
            <tr className="bg-violet-400/10 border-t-2 border-violet-400/40">
              <td className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                5-yr total
              </td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3 text-right font-bold text-[var(--kc-paper)]">
                R{(f.yearly.reduce((a, y) => a + y.platformCost, 0) / 1_000_000).toFixed(2)}M
              </td>
              <td className="px-4 py-3 text-right font-bold text-[var(--kc-paper)]">
                R{(f.yearly.reduce((a, y) => a + y.outboundCost, 0) / 1_000_000).toFixed(2)}M
              </td>
              <td className="px-4 py-3 text-right font-bold text-violet-200">
                R{(f.fiveYearTotal / 1_000_000).toFixed(2)}M
              </td>
              <td className="px-4 py-3"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {isFull ? (
        <div className="mt-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Methodology + caveats
          </div>
          <ul className="mt-3 space-y-2 text-[12px] text-[var(--kc-paper)]/75">
            {f.notes.map((n, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-violet-300" />
                <span className="leading-relaxed">{n}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg border border-[var(--kc-line)]/50 bg-[var(--kc-ink)]/30 p-3 text-[11px] leading-relaxed text-[var(--kc-paper)]/65">
            <strong className="text-[var(--kc-paper)]">Outbound mix · </strong>
            {f.outboundMix}
          </div>
        </div>
      ) : null}
    </div>
  );
}

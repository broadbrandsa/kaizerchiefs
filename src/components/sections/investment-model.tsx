"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Section } from "@/components/section";
import { KCM_MODEL } from "@/data/proposal";
import { formatRand, formatRandFull, formatInt } from "@/lib/format";

// ----------------------------------------------------------------------------
// Marketing investment.
// Baseline: R376,242/month flat = R4,514,901/year (R4.5M).
// Reinvestment: % of monthly gross profit feeds back into marketing. The point
// where reinvestment overtakes the R376K baseline is the "self-funding"
// milestone — after that month, marketing pays for itself out of profit. The
// rate is interactive in the UI so stakeholders can stress-test the model.
// ----------------------------------------------------------------------------
const MARKETING_MONTHLY = 376_242;
const DEFAULT_REINVESTMENT_RATE_PCT = 5; // 5% of monthly gross profit

export function InvestmentModel() {
  const m = KCM_MODEL;
  const maxRev = Math.max(...m.monthly.map((r) => r.rev));
  const maxSubs = Math.max(...m.monthly.map((r) => r.subs));
  const maxAbsNp = Math.max(...m.monthly.map((r) => Math.abs(r.np)));

  const [reinvestmentPct, setReinvestmentPct] = useState<number>(DEFAULT_REINVESTMENT_RATE_PCT);
  const reinvestmentRate = reinvestmentPct / 100;

  // Build the marketing-spend series the chart needs.
  const mktgSeries = useMemo(
    () =>
      m.monthly.map((row) => {
        const reinvest = row.gp > 0 ? row.gp * reinvestmentRate : 0;
        const totalMktg = MARKETING_MONTHLY + reinvest;
        const isSelfFunding = reinvest >= MARKETING_MONTHLY;
        return { ...row, mktg: MARKETING_MONTHLY, reinvest, totalMktg, isSelfFunding };
      }),
    [m.monthly, reinvestmentRate],
  );
  // Find the first month reinvestment overtakes the baseline marketing
  const crossoverMonth = mktgSeries.find((r) => r.isSelfFunding)?.m ?? null;
  const totalReinvest = mktgSeries.reduce((acc, r) => acc + r.reinvest, 0);
  // y-axis bound for the marketing chart — biggest of any series
  const maxMktgChart = Math.max(
    ...mktgSeries.map((r) => Math.max(r.totalMktg, r.np, r.reinvest)),
    MARKETING_MONTHLY,
  );

  return (
    <Section
      id="model"
      eyebrow="Investment model · KCM Digital Mobile"
      title="The numbers behind the plan"
      intro={m.intro}
    >
      {/* Fixed assumptions row */}
      <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {m.assumptions.map((a) => (
          <Card key={a.label} className="bg-[var(--kc-charcoal)]/40">
            <CardContent className="p-4">
              <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                {a.label}
              </div>
              <div className="mt-1 font-mono text-base font-semibold leading-tight text-[var(--kc-paper)]">
                {a.value}
              </div>
              <div className="mt-2 text-[16px] leading-snug text-[var(--kc-paper)]/65">
                {a.note}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ============================================================
          R4.5M / R376K marketing baseline + self-funding milestone
          ============================================================ */}
      <Card className="mb-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[var(--kc-gold)] via-[var(--kc-gold-deep)] to-[var(--kc-black)] p-8">
            <div className="bg-stripes absolute inset-0 opacity-25" />
            <div className="relative">
              <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-black)]/75">
                Marketing investment · per the KCM model
              </div>
              <div className="mt-3 font-mono text-6xl font-bold tracking-tight text-[var(--kc-black)]">
                R4.5M
              </div>
              <div className="mt-3 text-base font-semibold text-[var(--kc-black)]/85">
                {formatRandFull(MARKETING_MONTHLY)} per month, flat across the year
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[16px]">
                <div className="rounded-lg border border-[var(--kc-black)]/15 bg-[var(--kc-paper)]/15 p-3">
                  <div className="font-semibold uppercase tracking-[0.2em] text-[var(--kc-black)]/70">
                    Reinvestment rate
                  </div>
                  <div className="mt-1 font-mono text-base font-bold text-[var(--kc-black)]">
                    {reinvestmentPct}% of monthly GP
                  </div>
                  <div className="mt-1 text-[var(--kc-black)]/70">
                    Yr-1 reinvestment total ≈ {formatRand(totalReinvest)}
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--kc-black)]/15 bg-[var(--kc-paper)]/15 p-3">
                  <div className="font-semibold uppercase tracking-[0.2em] text-[var(--kc-black)]/70">
                    Self-funding milestone
                  </div>
                  <div className="mt-1 font-mono text-base font-bold text-[var(--kc-black)]">
                    {crossoverMonth ? `Month ${crossoverMonth}` : "Year 2+"}
                  </div>
                  <div className="mt-1 text-[var(--kc-black)]/70">
                    {crossoverMonth
                      ? `${reinvestmentPct}% of GP overtakes the R376K baseline`
                      : `Reinvestment doesn't cross within Yr-1 at ${reinvestmentPct}%`}
                  </div>
                </div>
              </div>

              {/* Reinvestment-rate slider — drag to stress-test the model */}
              <div className="mt-5 rounded-lg border border-[var(--kc-black)]/20 bg-[var(--kc-paper)]/10 p-3">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-black)]/75">
                    Stress-test the rate
                  </div>
                  <div className="font-mono text-[13px] font-bold text-[var(--kc-black)]">
                    {reinvestmentPct}%
                  </div>
                </div>
                <Slider
                  value={reinvestmentPct}
                  min={0}
                  max={20}
                  step={1}
                  onValueChange={setReinvestmentPct}
                  className="mt-2"
                  aria-label="Reinvestment rate"
                />
                <div className="mt-1 flex justify-between text-[11px] text-[var(--kc-black)]/60">
                  <span>0%</span>
                  <span>5%</span>
                  <span>10%</span>
                  <span>15%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--kc-ink)]/60 p-8">
            <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              How marketing becomes self-funding
            </div>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                <span>
                  <strong className="text-[var(--kc-paper)]">Baseline.</strong>{" "}
                  KCM Mobile commits {formatRandFull(MARKETING_MONTHLY)}/month flat in marketing — R4.5M for the year. This is paid every month, regardless of profit.
                </span>
              </li>
              <li className="flex items-start gap-3 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>
                  <strong className="text-[var(--kc-paper)]">Reinvestment grows with the business.</strong>{" "}
                  {reinvestmentPct}% of monthly gross profit is redirected back into marketing. As GP scales (M1 R{(m.monthly[0].gp / 1_000_000).toFixed(1)}M → M12 R{(m.monthly[11].gp / 1_000_000).toFixed(1)}M), the reinvestment grows from R{Math.round(mktgSeries[0].reinvest / 1000)}K to R{Math.round(mktgSeries[11].reinvest / 1000)}K per month.
                </span>
              </li>
              <li className="flex items-start gap-3 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                <span>
                  <strong className="text-[var(--kc-paper)]">Crossover at {crossoverMonth ? `Month ${crossoverMonth}` : "Yr-2"}.</strong>{" "}
                  This is the month the {reinvestmentPct}% reinvestment exceeds the R376K baseline. From this point on, marketing pays for itself out of profit — KCM Mobile no longer needs to commit cash to the marketing line.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* ============================================================
          Marketing spend vs profit vs reinvestment — chart
          ============================================================ */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Year 1 · marketing baseline vs {reinvestmentPct}% gross-profit reinvestment
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
            {crossoverMonth
              ? `Reinvestment overtakes the R376K baseline at Month ${crossoverMonth} — marketing self-funds from there`
              : "Reinvestment doesn't overtake the R376K baseline within Yr-1"}
          </h3>

          <svg viewBox="0 0 760 340" className="mt-6 h-auto w-full">
            {/* gridlines + y-axis value labels */}
            {[0, 0.25, 0.5, 0.75, 1].map((p) => {
              const y = 40 + 200 * p;
              const value = maxMktgChart * (1 - p);
              return (
                <g key={`gh-${p}`}>
                  <line x1="60" y1={y} x2="720" y2={y} stroke="var(--kc-line)" strokeWidth="1" opacity="0.35" />
                  <text x="55" y={y + 3} fontSize="10" fill="var(--kc-mute)" textAnchor="end">
                    {formatRand(value)}
                  </text>
                </g>
              );
            })}
            <text x="14" y="30" fontSize="11" fill="var(--kc-mute)">
              R per month
            </text>

            {/* Baseline R376K horizontal line */}
            {(() => {
              const yBase = 240 - (MARKETING_MONTHLY / maxMktgChart) * 200;
              return (
                <g>
                  <line
                    x1="60"
                    y1={yBase}
                    x2="720"
                    y2={yBase}
                    stroke="var(--kc-gold)"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                  />
                  <rect x="62" y={yBase - 18} width="170" height="16" rx="3" fill="var(--kc-charcoal)" />
                  <text x="68" y={yBase - 5} fontSize="11" fontWeight="600" fill="var(--kc-gold)">
                    Baseline · {formatRand(MARKETING_MONTHLY)} / mo
                  </text>
                </g>
              );
            })()}

            {/* 5% GP reinvestment line + bars */}
            {mktgSeries.map((row, i) => {
              const x = 60 + i * 55;
              const reinvY = 240 - (row.reinvest / maxMktgChart) * 200;
              const next = mktgSeries[i + 1];
              const isAfterCrossover = crossoverMonth !== null && row.m >= crossoverMonth;
              const fill = isAfterCrossover ? "#34d399" : "#fb923c";
              return (
                <g key={row.m}>
                  {/* Reinvestment bar */}
                  <rect
                    x={x}
                    y={reinvY}
                    width="34"
                    height={Math.max(2, 240 - reinvY)}
                    fill={fill}
                    opacity="0.7"
                    rx="3"
                  />
                  {/* Reinvestment line segment */}
                  {next && (
                    <line
                      x1={x + 17}
                      y1={reinvY}
                      x2={x + 17 + 55}
                      y2={240 - (next.reinvest / maxMktgChart) * 200}
                      stroke={isAfterCrossover ? "#34d399" : "#fb923c"}
                      strokeWidth="2.5"
                    />
                  )}
                  <circle cx={x + 17} cy={reinvY} r="4" fill={fill} />
                  {/* Crossover marker */}
                  {crossoverMonth === row.m ? (
                    <g>
                      <circle cx={x + 17} cy={reinvY} r="9" fill="none" stroke="#34d399" strokeWidth="2" />
                      <line x1={x + 17} y1={reinvY - 12} x2={x + 17} y2="38" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3" />
                      <rect x={x - 35} y={20} width="100" height="18" rx="3" fill="#34d399" />
                      <text x={x + 17} y={33} fontSize="11" fontWeight="700" fill="var(--kc-black)" textAnchor="middle">
                        SELF-FUNDING
                      </text>
                    </g>
                  ) : null}
                  {/* Month label */}
                  <text x={x + 17} y={262} fontSize="10" fill="var(--kc-mute)" textAnchor="middle">
                    M{row.m}
                  </text>
                  {/* Reinvestment value */}
                  <text x={x + 17} y={reinvY - 8} fontSize="9" fill="var(--kc-paper)" textAnchor="middle" opacity="0.85">
                    {Math.round(row.reinvest / 1000)}K
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-[16px] text-[var(--kc-paper)]/75">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1 w-5 rounded bg-[var(--kc-gold)]" /> Baseline marketing · {formatRand(MARKETING_MONTHLY)} flat
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-3 rounded bg-orange-400 opacity-75" /> {reinvestmentPct}% of GP reinvestment (pre-crossover)
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-3 rounded bg-emerald-400 opacity-75" /> {reinvestmentPct}% of GP reinvestment (self-funding)
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Subscribers + Revenue chart */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Year 1 · subscribers + revenue
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
            16K → 147K active subscribers across 12 months
          </h3>

          <svg viewBox="0 0 720 280" className="mt-6 h-auto w-full">
            {/* gridlines */}
            {[0, 0.25, 0.5, 0.75, 1].map((p) => (
              <line key={p} x1="50" y1={40 + 200 * p} x2="700" y2={40 + 200 * p} stroke="var(--kc-line)" strokeWidth="1" />
            ))}
            {/* y-axis label (subscribers) */}
            <text x="50" y="30" fontSize="11" fill="var(--kc-mute)">Subscribers (bars) · Revenue (line)</text>

            {m.monthly.map((row, i) => {
              const x = 60 + i * 54;
              const barH = (row.subs / maxSubs) * 200;
              const lineY = 240 - (row.rev / maxRev) * 200;
              const nextLineY = i < m.monthly.length - 1 ? 240 - (m.monthly[i+1].rev / maxRev) * 200 : null;
              const nextX = 60 + (i+1) * 54;
              return (
                <g key={row.m}>
                  {/* subscribers bar */}
                  <rect x={x} y={240 - barH} width="34" height={barH} fill="var(--kc-gold)" opacity="0.6" rx="3" />
                  {/* revenue line segment */}
                  {nextLineY !== null && (
                    <line x1={x + 17} y1={lineY} x2={nextX + 17} y2={nextLineY} stroke="#34d399" strokeWidth="2.5" />
                  )}
                  {/* revenue dot */}
                  <circle cx={x + 17} cy={lineY} r="4" fill="#34d399" />
                  {/* month label */}
                  <text x={x + 17} y={258} fontSize="10" fill="var(--kc-mute)" textAnchor="middle">M{row.m}</text>
                  {/* subscriber value at top */}
                  <text x={x + 17} y={240 - barH - 4} fontSize="9" fill="var(--kc-paper)" textAnchor="middle" opacity="0.85">
                    {Math.round(row.subs/1000)}K
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="mt-4 flex items-center gap-6 text-[16px] text-[var(--kc-paper)]/75">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-3 rounded bg-[var(--kc-gold)] opacity-60" /> Subscribers (net of 5% churn)
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-0.5 w-4 bg-emerald-400" /> Total revenue
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Profit chart */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Year 1 · gross profit + net profit
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
            Net-profit positive from Month 5
          </h3>

          <svg viewBox="0 0 720 320" className="mt-6 h-auto w-full">
            {/* zero line */}
            <line x1="50" y1="160" x2="700" y2="160" stroke="var(--kc-paper)" strokeWidth="1" opacity="0.5" />
            <text x="50" y="155" fontSize="10" fill="var(--kc-paper)" opacity="0.6">R0</text>

            {/* gridlines (above zero) */}
            {[0.25, 0.5, 0.75, 1].map((p) => (
              <line key={`gp-${p}`} x1="50" y1={160 - 130 * p} x2="700" y2={160 - 130 * p} stroke="var(--kc-line)" strokeWidth="1" opacity="0.4" />
            ))}

            {m.monthly.map((row, i) => {
              const x = 60 + i * 54;
              // Gross profit (always positive in this model from M2)
              const gpY = 160 - (row.gp / maxAbsNp) * 130;
              const npY = 160 - (row.np / maxAbsNp) * 130;
              const next = m.monthly[i + 1];
              return (
                <g key={row.m}>
                  {next && (
                    <>
                      <line x1={x + 17} y1={gpY} x2={x + 17 + 54} y2={160 - (next.gp / maxAbsNp) * 130}
                            stroke="#fbbf24" strokeWidth="2.5" />
                      <line x1={x + 17} y1={npY} x2={x + 17 + 54} y2={160 - (next.np / maxAbsNp) * 130}
                            stroke="#34d399" strokeWidth="2.5" />
                    </>
                  )}
                  <circle cx={x + 17} cy={gpY} r="4" fill="#fbbf24" />
                  <circle cx={x + 17} cy={npY} r="4" fill={row.np >= 0 ? "#34d399" : "#f87171"} />
                  <text x={x + 17} y={300} fontSize="10" fill="var(--kc-mute)" textAnchor="middle">M{row.m}</text>
                </g>
              );
            })}
          </svg>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-[16px] text-[var(--kc-paper)]/75">
            <span className="flex items-center gap-2"><span className="inline-block h-0.5 w-4 bg-amber-400" /> Gross profit</span>
            <span className="flex items-center gap-2"><span className="inline-block h-0.5 w-4 bg-emerald-400" /> Net profit (positive)</span>
            <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-red-400" /> Net profit (loss)</span>
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {m.milestones.map((ms) => (
          <Card key={ms.month} className="bg-[var(--kc-ink)]/60">
            <CardContent className="p-5">
              <div className="font-mono text-base font-semibold text-[var(--kc-gold)]">
                Month {ms.month}
              </div>
              <h4 className="mt-2 text-base font-semibold leading-snug text-[var(--kc-paper)]">
                {ms.label}
              </h4>
              <p className="mt-2 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">
                {ms.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 5-year annual summary table */}
      <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          5-year annual summary
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
              <tr>
                <th className="px-3 py-2 font-semibold">Year</th>
                <th className="px-3 py-2 text-right font-semibold">Revenue</th>
                <th className="px-3 py-2 text-right font-semibold">Gross profit</th>
                <th className="px-3 py-2 text-right font-semibold">Net profit</th>
                <th className="px-3 py-2 text-right font-semibold">KCM share (50%)</th>
              </tr>
            </thead>
            <tbody>
              {m.annual.map((y) => (
                <tr key={y.year} className="border-t border-[var(--kc-line)]/50">
                  <td className="px-3 py-3 font-semibold text-[var(--kc-paper)]">{y.year}</td>
                  <td className="px-3 py-3 text-right font-mono text-[var(--kc-paper)]">{formatRand(y.revenue)}</td>
                  <td className="px-3 py-3 text-right font-mono text-amber-300">{formatRand(y.grossProfit)}</td>
                  <td className="px-3 py-3 text-right font-mono text-emerald-300">{formatRand(y.netProfit)}</td>
                  <td className="px-3 py-3 text-right font-mono text-[var(--kc-gold)]">{formatRand(y.kcmShare)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Yr-1 month-by-month underneath */}
        <details className="mt-6">
          <summary className="cursor-pointer text-[16px] uppercase tracking-wider text-[var(--kc-mute)] hover:text-[var(--kc-paper)]">
            Show Yr-1 month-by-month
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
                <tr>
                  <th className="px-2 py-2 font-semibold">Month</th>
                  <th className="px-2 py-2 text-right font-semibold">Distribution</th>
                  <th className="px-2 py-2 text-right font-semibold">Subs (net)</th>
                  <th className="px-2 py-2 text-right font-semibold">Revenue</th>
                  <th className="px-2 py-2 text-right font-semibold">Gross profit</th>
                  <th className="px-2 py-2 text-right font-semibold">Net profit</th>
                </tr>
              </thead>
              <tbody>
                {m.monthly.map((row) => (
                  <tr key={row.m} className="border-t border-[var(--kc-line)]/40">
                    <td className="px-2 py-2 font-semibold text-[var(--kc-paper)]">M{row.m}</td>
                    <td className="px-2 py-2 text-right font-mono text-[var(--kc-paper)]/85">{formatInt(row.dist)}</td>
                    <td className="px-2 py-2 text-right font-mono text-[var(--kc-paper)]/85">{formatInt(row.subs)}</td>
                    <td className="px-2 py-2 text-right font-mono text-[var(--kc-paper)]/85">{formatRandFull(row.rev)}</td>
                    <td className="px-2 py-2 text-right font-mono text-amber-300">{formatRandFull(row.gp)}</td>
                    <td className={`px-2 py-2 text-right font-mono ${row.np >= 0 ? "text-emerald-300" : "text-red-400"}`}>
                      {formatRandFull(row.np)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </Section>
  );
}

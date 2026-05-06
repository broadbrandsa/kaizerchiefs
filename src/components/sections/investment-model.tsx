import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { KCM_MODEL } from "@/data/proposal";
import { formatRand, formatRandFull, formatInt } from "@/lib/format";

export function InvestmentModel() {
  const m = KCM_MODEL;
  const maxRev = Math.max(...m.monthly.map((r) => r.rev));
  const maxSubs = Math.max(...m.monthly.map((r) => r.subs));
  const maxAbsNp = Math.max(...m.monthly.map((r) => Math.abs(r.np)));

  return (
    <Section
      id="model"
      eyebrow="Investment model · KCM Digital Mobile"
      title="The numbers, exactly as they sit in the model"
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
          5-year annual summary · directly from the model
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
            Show Yr-1 month-by-month (Calculations sheet, rows 5–65)
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

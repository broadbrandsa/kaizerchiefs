"use client";

import { useMemo, useState } from "react";
import { CONVERSION_FUNNEL, type FunnelChannel } from "@/data/proposal";

const GROUP_COLOR: Record<FunnelChannel["group"], string> = {
  digital:         "#34d399",
  "match-day":     "#fbbf24",
  retail:          "#60a5fa",
  "radio-pr":      "#c084fc",
  "player-social": "#f97316",
};

type Filter = "all" | FunnelChannel["group"];

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all",            label: "All channels" },
  { id: "digital",        label: "Digital paid" },
  { id: "match-day",      label: "Match-day" },
  { id: "retail",         label: "Retail / trade · spaza + murals" },
  { id: "radio-pr",       label: "Radio + PR" },
  { id: "player-social",  label: "Player social" },
];

/* ---------- Source-of-truth numbers from the KCM Digital Mobile model ------- */
const KCM_YR1_BUDGET = 4_514_901;
const KCM_YR1_GROSS = CONVERSION_FUNNEL.yr1ActivationTarget; // 192,000
const KCM_YR1_RETENTION_PCT = CONVERSION_FUNNEL.yr1RetentionPct; // 76.6
const KCM_YR1_ACTIVE_END = Math.round(KCM_YR1_GROSS * (KCM_YR1_RETENTION_PCT / 100));

function fmtBig(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return Math.round(n).toLocaleString();
}

function fmtPct(num: number, denom: number): string {
  if (denom <= 0) return "0%";
  const pct = (num / denom) * 100;
  if (pct >= 10) return `${pct.toFixed(0)}%`;
  if (pct >= 1) return `${pct.toFixed(1)}%`;
  return `${pct.toFixed(2)}%`;
}

/** For a channel, derive impressions = activations / convPct */
function channelImpressions(c: FunnelChannel): number {
  if (c.impressionConvPct <= 0) return 0;
  return c.activationsYr1 / (c.impressionConvPct / 100);
}

function compute(channels: FunnelChannel[]) {
  let impressions = 0;
  let activations = 0;
  for (const c of channels) {
    impressions += channelImpressions(c);
    activations += c.activationsYr1;
  }
  const active = Math.round(activations * (KCM_YR1_RETENTION_PCT / 100));
  return { impressions, activations, active };
}

export function ConversionFunnel() {
  const [filter, setFilter] = useState<Filter>("all");

  const channels = useMemo(
    () =>
      filter === "all"
        ? CONVERSION_FUNNEL.channels
        : CONVERSION_FUNNEL.channels.filter((c) => c.group === filter),
    [filter],
  );

  const totals = useMemo(() => compute(channels), [channels]);
  const allTotals = useMemo(() => compute(CONVERSION_FUNNEL.channels), []);

  const sharePct = (totals.activations / KCM_YR1_GROSS) * 100;

  const stages = [
    {
      key: "impressions",
      label: "Impressions",
      value: totals.impressions,
      color: "#9ca3af",
      note: "Annual (Yr-1) reach · derived from activations ÷ industry conversion rate per channel",
    },
    {
      key: "activations",
      label: "SIM activations (Yr-1 gross)",
      value: totals.activations,
      color: "#fbbf24",
      note:
        filter === "all"
          ? "192,000 — KCM model brief target (16,000 new SIMs/m × 12)"
          : `${sharePct.toFixed(1)}% of the 192,000 KCM Yr-1 target`,
    },
    {
      key: "active",
      label: "Active at end of Yr-1 (M12)",
      value: totals.active,
      color: "#34d399",
      note: `KCM model · ${KCM_YR1_RETENTION_PCT}% Yr-1 retention (5% monthly churn compounded)`,
    },
  ];

  // Stage 1 always 100% wide; stages 2-3 scale to stage 1 of CURRENT filter
  const anchor = totals.impressions || 1;

  return (
    <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Conversion funnel · activations → impressions
        </div>
        <span className="rounded-full border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--kc-gold)]">
          Annual · Yr-1
        </span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
        How {filter === "all" ? "the marketing layer" : FILTERS.find((f) => f.id === filter)?.label.toLowerCase()} delivers KC Mobile activations
      </h3>
      <p className="mt-3 max-w-3xl text-sm text-[var(--kc-paper)]/75">{CONVERSION_FUNNEL.intro}</p>

      {/* Source-of-truth callout */}
      <div className="mt-4 grid grid-cols-1 gap-2 rounded-lg border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/5 p-3 text-[12px] text-[var(--kc-paper)]/85 sm:grid-cols-3">
        <div>
          <div className="font-mono uppercase tracking-wider text-[var(--kc-gold)]">KCM Yr-1 budget</div>
          <div className="font-mono">R{KCM_YR1_BUDGET.toLocaleString("en-ZA")}</div>
        </div>
        <div>
          <div className="font-mono uppercase tracking-wider text-[var(--kc-gold)]">Yr-1 gross adds</div>
          <div className="font-mono">{fmtBig(KCM_YR1_GROSS)} ({KCM_YR1_GROSS.toLocaleString("en-ZA")} · 16K/m × 12)</div>
        </div>
        <div>
          <div className="font-mono uppercase tracking-wider text-[var(--kc-gold)]">M12 active subs</div>
          <div className="font-mono">{fmtBig(KCM_YR1_ACTIVE_END)} ({KCM_YR1_ACTIVE_END.toLocaleString("en-ZA")} · {KCM_YR1_RETENTION_PCT}% retained)</div>
        </div>
      </div>

      {/* Filter pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-3 py-1.5 text-[12px] font-medium uppercase tracking-wider transition ${
              filter === f.id
                ? "border-[var(--kc-gold)] bg-[var(--kc-gold)]/15 text-[var(--kc-gold)]"
                : "border-[var(--kc-line)] text-[var(--kc-paper)]/70 hover:border-[var(--kc-paper)]/40"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Funnel */}
      <div className="mt-8">
        {stages.map((stage, i) => {
          const widthPct = i === 0 ? 100 : Math.max(2, (stage.value / anchor) * 100);
          return (
            <div key={stage.key}>
              <div className="relative">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                      Stage {i + 1}
                    </div>
                    <div className="text-base font-semibold text-[var(--kc-paper)]">
                      {stage.label}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-2xl font-bold" style={{ color: stage.color }}>
                      {fmtBig(stage.value)}
                    </div>
                    <div className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                      {i === 0
                        ? `${fmtPct(stage.value, anchor)} of impressions`
                        : i === 1
                          ? `${fmtPct(stage.value, stages[0].value)} of impressions`
                          : `${fmtPct(stage.value, stages[1].value)} of activations`}
                    </div>
                  </div>
                </div>
                <div className="mt-2 h-7 overflow-hidden rounded-md bg-[var(--kc-ink)]/60">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${widthPct}%`,
                      background: stage.color,
                      opacity: 0.85,
                    }}
                  />
                </div>
                <div className="mt-1.5 text-[12px] uppercase tracking-wider text-[var(--kc-paper)]/60">
                  {stage.note}
                </div>
              </div>

              {/* Conversion-rate transition between stages */}
              {i < stages.length - 1 && (
                <div className="my-2 ml-2 flex items-start gap-3 border-l-2 border-[var(--kc-gold)]/40 py-2 pl-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" className="mt-0.5 shrink-0 text-[var(--kc-gold)]" aria-hidden="true">
                    <path d="M7 1v10M3 7l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-base font-bold text-[var(--kc-gold)]">
                        {fmtPct(stages[i + 1].value, stage.value)}
                      </span>
                      <span className="text-[12px] uppercase tracking-wider text-[var(--kc-paper)]/65">
                        {stage.label.split(" (")[0]} → {stages[i + 1].label.split(" (")[0]}
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-[var(--kc-paper)]/55">
                      {i === 0
                        ? `Industry blended impression-to-activation rate. Per-channel benchmarks: paid social 0.05–0.30%, retail/match-day direct 0.5–3%, OOH/murals 0.005–0.05%, radio + PR 0.02–0.15%. Each channel's impressions are calculated as its activation share ÷ its conversion rate.`
                        : `KCM model · 5% monthly churn compounded over 12 months. Net Yr-1 retention = ${KCM_YR1_RETENTION_PCT}%. Earlier-month cohorts retain less (M1 SIMs face 11 churn cycles ≈ 57% retention); later cohorts retain more. Weighted-average result: ${KCM_YR1_GROSS.toLocaleString("en-ZA")} gross adds → ${KCM_YR1_ACTIVE_END.toLocaleString("en-ZA")} active at M12.`}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Methodology */}
      <details className="mt-6 rounded-lg border border-[var(--kc-line)]/60 bg-[var(--kc-ink)]/30 px-4 py-2">
        <summary className="cursor-pointer text-[12px] font-semibold uppercase tracking-wider text-[var(--kc-mute)] hover:text-[var(--kc-paper)]">
          Methodology · how the numbers tie back to the KCM model
        </summary>
        <div className="mt-3 grid grid-cols-1 gap-3 text-[12px] leading-relaxed text-[var(--kc-paper)]/75 md:grid-cols-2">
          <div>
            <div className="font-semibold text-[var(--kc-paper)]">Anchor: KCM Digital Mobile model</div>
            <p className="mt-1">Total Yr-1 SIM activations = 16,000 new SIMs/month × 12 = {KCM_YR1_GROSS.toLocaleString("en-ZA")}. M12 active subscribers = {KCM_YR1_ACTIVE_END.toLocaleString("en-ZA")} (KCM model end-of-Yr-1 figure, after compounding 5% monthly churn = {KCM_YR1_RETENTION_PCT}% retention). These are the same headline numbers used in the Investment Model section and the Hero stats.</p>
          </div>
          <div>
            <div className="font-semibold text-[var(--kc-paper)]">Channel allocation logic</div>
            <p className="mt-1">Each of the 18 channels gets an allocated share of the 192K Yr-1 target, calibrated against the GTM brief (wholesale 6K/m, retail 3.5K/m, hustler 3K/m, stadium 1.5K/m, KC owned 0.8K/m, etc.) plus reasonable splits for sub-channels. The shares sum to 192K (or close, with small rounding) so total stays consistent.</p>
          </div>
          <div>
            <div className="font-semibold text-[var(--kc-paper)]">Impressions back-calculated</div>
            <p className="mt-1">Per-channel impressions = channel activations ÷ industry impression-to-activation conversion rate. Conversion benchmarks: paid social 0.05%, DStv Stream 0.04%, programmatic 0.008%, YouTube + Search 0.10%, in-stadium 4%, retail POS 1%, hustler 1.2%, kappa bundle 2.5%, KC owned 0.5%, refer-a-Khosi 1.2%, township murals 0.01%, radio 0.01%, press PR 0.02%, player paid 0.05%, player organic 0.01%.</p>
          </div>
          <div>
            <div className="font-semibold text-[var(--kc-paper)]">Why activations is the anchor</div>
            <p className="mt-1">Earlier versions of this funnel built impressions from budget × CPM and inferred activations from conversion rates — but that drifted from the model. The reverse approach — anchor activations to the model, derive impressions from industry conversion rates — keeps every number aligned with the KCM source of truth.</p>
          </div>
          <div className="md:col-span-2">
            <div className="font-semibold text-[var(--kc-paper)]">Cross-checks</div>
            <p className="mt-1">Stadium fan-zone: 18,000 activations ÷ 4% conversion = 450,000 impressions, which equals 15 home matches × 30,000 attendance ✓. POS at MTN dealers: 91,000 activations ÷ 1% = 9.1M impressions, which equals 800 stores × 4 waves × ~2,800 visits/store/wave ✓. Township murals: 5,000 activations ÷ 0.01% = 50M impressions, consistent with Back to Front&apos;s 8M weekly per-wall reach × 12 walls deduplicated to annual unique ≈ 50M ✓.</p>
          </div>
        </div>
      </details>

      {/* Per-channel breakdown — shows allocation share + derived impressions */}
      <div className="mt-6">
        <div className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
          {filter === "all"
            ? `Channels in scope · ${CONVERSION_FUNNEL.channels.length} · all-channel total impressions ${fmtBig(allTotals.impressions)}`
            : `Channels in this filter · ${channels.length}`}
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
          {channels.map((c) => {
            const imp = channelImpressions(c);
            return (
              <div
                key={c.key}
                className="rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-3 text-[13px]"
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: GROUP_COLOR[c.group] }}
                  />
                  <span className="min-w-0 flex-1 truncate text-[var(--kc-paper)]/90">
                    {c.label}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
                  <div>
                    <div className="uppercase tracking-wider text-[var(--kc-mute)]">Activations</div>
                    <div className="font-mono text-[var(--kc-paper)]">{fmtBig(c.activationsYr1)}</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-wider text-[var(--kc-mute)]">Conv. rate</div>
                    <div className="font-mono text-[var(--kc-paper)]">{c.impressionConvPct.toFixed(c.impressionConvPct < 1 ? 3 : 1)}%</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-wider text-[var(--kc-mute)]">Impressions</div>
                    <div className="font-mono text-[var(--kc-paper)]">{fmtBig(imp)}</div>
                  </div>
                </div>
              </div>
            );
          })}
          {channels.length === 0 && (
            <div className="text-[13px] text-[var(--kc-mute)]">
              No channels in this filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

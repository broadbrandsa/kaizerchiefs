"use client";

import { useMemo, useState } from "react";
import { CONVERSION_FUNNEL, type FunnelChannel } from "@/data/proposal";

const GROUP_COLOR: Record<FunnelChannel["group"], string> = {
  digital:         "#34d399",
  "match-day":     "#fbbf24",
  retail:          "#60a5fa",
  "radio-pr":      "#c084fc",
  "ooh-walls":     "#fb7185",
  "player-social": "#f97316",
};

type Filter = "all" | FunnelChannel["group"];

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all",            label: "All channels" },
  { id: "digital",        label: "Digital paid" },
  { id: "match-day",      label: "Match-day" },
  { id: "retail",         label: "Retail / trade" },
  { id: "radio-pr",       label: "Radio + PR" },
  { id: "ooh-walls",      label: "Township murals" },
  { id: "player-social",  label: "Player social" },
];

function fmtBig(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return Math.round(n).toLocaleString();
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

  // Aggregate funnel stages from filtered channels
  const totals = useMemo(() => {
    const impressions = channels.reduce((a, c) => a + c.impressions, 0);
    // Two paths: direct (waitlist=0% means impressions go straight into activation)
    // and waitlist-led (impressions × waitlistPct → activation).
    let waitlist = 0;
    let activations = 0;
    let active = 0;
    for (const c of channels) {
      const wlist = c.impressions * (c.toWaitlistPct / 100);
      waitlist += wlist;
      // Direct retail/match-day path: impressions × tiny activation rate (0.5%)
      const directConversionPct = c.toWaitlistPct === 0 ? 0.5 : 0;
      const directAct = c.impressions * (directConversionPct / 100);
      const wlistAct = wlist * (c.waitlistToActivationPct / 100);
      const channelAct = directAct + wlistAct;
      activations += channelAct;
      active += channelAct * (c.activationToActivePct / 100);
    }
    return {
      impressions,
      waitlist,
      activations,
      active,
    };
  }, [channels]);

  // Ratio (compared to impressions, used for bar widths)
  const stages = [
    { label: "Impressions",          value: totals.impressions, color: "#9ca3af", note: "Total annual reach" },
    { label: "Waitlist signups",     value: totals.waitlist,    color: "#60a5fa", note: "Email + WhatsApp opt-in" },
    { label: "SIM activations",      value: totals.activations, color: "#fbbf24", note: "RICA + first top-up" },
    { label: "Active (Day 30+)",     value: totals.active,      color: "#34d399", note: "Retained at Day-30 NPS check" },
  ];
  const max = totals.impressions || 1;

  return (
    <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
      <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
        Conversion funnel · impressions → activations
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
        How {filter === "all" ? "the marketing layer" : FILTERS.find((f) => f.id === filter)?.label.toLowerCase()} translates into active KC Mobile subscribers
      </h3>
      <p className="mt-3 max-w-3xl text-sm text-[var(--kc-paper)]/75">{CONVERSION_FUNNEL.intro}</p>

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

      {/* Funnel — descending bars */}
      <div className="mt-8 space-y-3">
        {stages.map((stage, i) => {
          const widthPct = max > 0 ? Math.max(8, (stage.value / max) * 100) : 0;
          const dropPct =
            i > 0 && stages[i - 1].value > 0
              ? Math.round((stage.value / stages[i - 1].value) * 100)
              : 100;
          return (
            <div key={stage.label} className="relative">
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
                  {i > 0 && (
                    <div className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                      {dropPct}% of prev stage
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-2 h-7 overflow-hidden rounded-md bg-[var(--kc-ink)]/60">
                <div
                  className="flex h-full items-center px-3 text-[11px] uppercase tracking-wider text-[var(--kc-black)] transition-all duration-500"
                  style={{
                    width: `${widthPct}%`,
                    background: stage.color,
                    opacity: 0.85,
                  }}
                >
                  {stage.note}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Per-channel breakdown */}
      <div className="mt-8">
        <div className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
          {filter === "all" ? "Channels in scope · all 16" : "Channels in this filter"}
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
          {channels.map((c) => (
            <div
              key={c.key}
              className="flex items-center gap-3 rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 px-3 py-2 text-[13px]"
            >
              <span
                className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: GROUP_COLOR[c.group] }}
              />
              <span className="min-w-0 flex-1 truncate text-[var(--kc-paper)]/90">
                {c.label}
              </span>
              <span className="shrink-0 font-mono text-[12px] text-[var(--kc-paper)]/60">
                {fmtBig(c.impressions)}
              </span>
            </div>
          ))}
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

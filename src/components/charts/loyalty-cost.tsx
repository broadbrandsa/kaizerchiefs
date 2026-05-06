"use client";

import { LOYALTY_PROGRAMME } from "@/data/proposal";

/**
 * Range bars showing the per-customer per-year cost band of each tier.
 * Parses the existing economics text "≈R8–R15 / customer / year" → {min, max}.
 */
function parseRange(s: string): { min: number; max: number } | null {
  // Matches "≈R8–R15" or "≈R30–R55" (using en-dash) — also handle plain "-"
  const m = s.match(/R(\d+)[–—-]R(\d+)/);
  if (!m) return null;
  return { min: parseInt(m[1], 10), max: parseInt(m[2], 10) };
}

const TIER_COLOUR: Record<string, string> = {
  Bronze: "#E07A3D",
  Silver: "#C0C5CE",
  Gold: "#E09C2A",
};

export function LoyaltyCostChart() {
  const rows = LOYALTY_PROGRAMME.economics.filter(
    (e) => parseRange(e.annualCostPerCustomer) !== null,
  );
  if (rows.length === 0) return null;

  const ceiling = Math.max(
    ...rows.map((r) => parseRange(r.annualCostPerCustomer)!.max),
  );

  return (
    <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
      <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
        Annual cost per customer · range
      </div>
      <h3 className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
        Where each tier sits versus MVNO gross profit
      </h3>
      <p className="mt-3 max-w-2xl text-xs text-[var(--kc-paper)]/70">
        The shaded band shows the typical SA prepaid MVNO gross profit per
        active customer per year (≈ R180–R360, derived from R15–R30/month). All
        tier costs sit inside that envelope.
      </p>

      <div className="relative mt-6">
        {/* Gross-profit envelope band as a backdrop */}
        <div
          className="absolute inset-y-3 rounded-lg border border-[var(--kc-gold)]/30 bg-[var(--kc-gold)]/5"
          style={{
            left: `${(180 / ceiling) * 100 * 0.85}%`,
            right: `0%`,
          }}
          aria-hidden
        />
        <div className="relative space-y-4">
          {rows.map((r) => {
            const { min, max } = parseRange(r.annualCostPerCustomer)!;
            const colour =
              r.tier === "Bronze" || r.tier === "Silver" || r.tier === "Gold"
                ? TIER_COLOUR[r.tier]
                : "#9CA3AF";
            const startPct = (min / ceiling) * 100;
            const endPct = (max / ceiling) * 100;
            return (
              <div key={r.tier} className="relative">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium text-[var(--kc-paper)]">
                    {r.tier}
                  </span>
                  <span className="font-mono text-xs text-[var(--kc-paper)]/85">
                    {r.annualCostPerCustomer}
                  </span>
                </div>
                <div className="mt-1.5 h-2.5 w-full rounded-full bg-[var(--kc-ink)]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      marginLeft: `${startPct * 0.85}%`,
                      width: `${(endPct - startPct) * 0.85}%`,
                      backgroundColor: colour,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Axis labels */}
        <div className="mt-3 flex justify-between text-[17px] uppercase tracking-wider text-[var(--kc-mute)]">
          <span>R0</span>
          <span>R{Math.round(ceiling * 0.4)}</span>
          <span>R{ceiling}</span>
          <span className="text-[var(--kc-gold)]">
            R180–R360 gross profit envelope
          </span>
        </div>
      </div>
    </div>
  );
}

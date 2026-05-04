"use client";

import { TIERS } from "@/data/proposal";
import { formatRand } from "@/lib/format";

/**
 * Side-by-side stacked horizontal bars showing how each tier allocates spend
 * by *grouped* category. The 13 category names that exist across tiers are
 * collapsed into 6 conceptual buckets with a high-contrast palette so the
 * chart reads at a glance.
 */

type GroupKey =
  | "digital"
  | "trade"
  | "stadium"
  | "ooh"
  | "incentives"
  | "branding";

interface Group {
  key: GroupKey;
  label: string;
  /** High-contrast accent for each group on the dark page background */
  colour: string;
  /** Categories from TIERS that belong to this group (lower-cased substring matches) */
  matches: string[];
}

const GROUPS: Group[] = [
  {
    key: "digital",
    label: "Digital Paid Media",
    colour: "#E09C2A", // KC amber — primary
    matches: ["digital paid"],
  },
  {
    key: "trade",
    label: "Trade & Retail",
    colour: "#06B6D4", // teal/cyan
    matches: [
      "in-store / trade",
      "trade & retail",
      "trade partner & retail",
    ],
  },
  {
    key: "stadium",
    label: "Stadium & Match-day Activation",
    colour: "#EC4899", // magenta — fan energy
    matches: [
      "match-day activation",
      "stadium & sponsor activation",
      "stadium & national activations",
    ],
  },
  {
    key: "ooh",
    label: "OOH & Broadcast",
    colour: "#EF4444", // red — high-impact
    matches: ["out-of-home", "pr & media"],
  },
  {
    key: "incentives",
    label: "Customer Incentives",
    colour: "#84CC16", // lime — giveaway feel
    matches: ["customer incentives"],
  },
  {
    key: "branding",
    label: "Production & Branding",
    colour: "#FACC15", // yellow
    matches: [
      "production & creative",
      "promo / branding",
      "production & influencer",
      "branding material",
      "design, production",
    ],
  },
];

function groupOf(category: string): Group | undefined {
  const c = category.toLowerCase();
  return GROUPS.find((g) => g.matches.some((m) => c.includes(m)));
}

export function TierAllocationChart() {
  // Use the largest tier total as the bar reference (R9M)
  const maxTotal = Math.max(...TIERS.map((t) => t.total));

  return (
    <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Allocation across tiers
          </div>
          <h3 className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
            How the spend is split, by category group
          </h3>
        </div>
        <div className="text-right text-xs text-[var(--kc-mute)]">
          Bars scaled against the R9M tier
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {TIERS.map((t) => {
          // Group this tier's categories
          const groupSums: { group: Group; total: number; categories: string[] }[] =
            [];
          for (const c of t.categories) {
            const g = groupOf(c.category);
            if (!g) continue;
            const existing = groupSums.find((x) => x.group.key === g.key);
            if (existing) {
              existing.total += c.allocation;
              existing.categories.push(c.category);
            } else {
              groupSums.push({
                group: g,
                total: c.allocation,
                categories: [c.category],
              });
            }
          }
          // Sort by GROUPS order so bars stack consistently across tiers
          groupSums.sort(
            (a, b) =>
              GROUPS.findIndex((g) => g.key === a.group.key) -
              GROUPS.findIndex((g) => g.key === b.group.key),
          );

          return (
            <div key={t.key}>
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <div className="font-semibold text-[var(--kc-paper)]">
                  {t.name}{" "}
                  <span className="text-[var(--kc-mute)]">
                    · {t.durationMonths} mo
                  </span>
                </div>
                <div className="font-mono text-xs text-[var(--kc-paper)]/90">
                  {formatRand(t.total)}
                </div>
              </div>

              {/* The bar — 6 grouped segments */}
              <div className="mt-2 flex h-9 w-full overflow-hidden rounded-md border border-[var(--kc-line)] bg-[var(--kc-ink)]">
                {groupSums.map(({ group, total, categories }) => {
                  const widthPct = (total / maxTotal) * 100;
                  // Pct of this tier's bar represented by this group (for label)
                  const tierPct = Math.round((total / t.total) * 100);
                  const showLabel = widthPct > 6; // hide on too-thin segments
                  return (
                    <div
                      key={group.key}
                      className="group/seg relative flex items-center justify-center"
                      style={{
                        width: `${widthPct}%`,
                        backgroundColor: group.colour,
                      }}
                      title={`${group.label} — ${formatRand(total)} (${tierPct}% of tier) · ${categories.join(", ")}`}
                    >
                      {showLabel ? (
                        <span className="text-[10px] font-semibold tracking-wider text-[var(--kc-black)]/80">
                          {tierPct}%
                        </span>
                      ) : null}
                    </div>
                  );
                })}
                {/* Spacer — bit not allocated against the R9M ceiling */}
                <div
                  className="bg-transparent"
                  style={{ width: `${(1 - t.total / maxTotal) * 100}%` }}
                  aria-hidden
                />
              </div>

              {/* Per-tier mini-legend with rand values */}
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[var(--kc-paper)]/75">
                {groupSums.map(({ group, total }) => (
                  <span key={group.key} className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-block h-2 w-2 shrink-0 rounded-sm"
                      style={{ backgroundColor: group.colour }}
                    />
                    <span>
                      {group.label} ·{" "}
                      <span className="font-mono">{formatRand(total)}</span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Master legend — 6 groups */}
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[var(--kc-line)] pt-6 md:grid-cols-3 lg:grid-cols-6">
        {GROUPS.map((g) => (
          <div key={g.key} className="flex items-center gap-2">
            <span
              className="inline-block h-3.5 w-3.5 shrink-0 rounded-sm"
              style={{ backgroundColor: g.colour }}
            />
            <span className="text-xs text-[var(--kc-paper)]/85">{g.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

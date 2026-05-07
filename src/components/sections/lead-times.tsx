"use client";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import {
  LEAD_TIMES,
  LEAD_TIME_GROUP_LABELS,
  CRITICAL_PATH_IDS,
  type LeadTimeRow,
} from "@/data/lead-times";

const GROUP_ORDER: LeadTimeRow["group"][] = [
  "platform",
  "supplier-media",
  "stadium-events",
  "creative",
  "field-ops",
  "regulatory",
  "ka-trade",
];

const RISK_TONE: Record<LeadTimeRow["risk"], string> = {
  high:   "bg-rose-500/15 text-rose-300 border-rose-500/40",
  medium: "bg-amber-500/15 text-amber-300 border-amber-500/40",
  low:    "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
};

const RISK_LABEL: Record<LeadTimeRow["risk"], string> = {
  high: "High risk",
  medium: "Medium",
  low: "Low risk",
};

/**
 * LeadTimes — Annex section that explains the work-back schedule. Two views:
 *  • A critical-path strip at the top — 5 things that must start NOW.
 *  • A full table grouped by category, showing every booking lead time and
 *    when each piece has to commit, working back from M0 launch.
 */
export function LeadTimes() {
  const critical = CRITICAL_PATH_IDS
    .map((id) => LEAD_TIMES.find((r) => r.id === id))
    .filter((r): r is LeadTimeRow => Boolean(r));

  const grouped = LEAD_TIMES.reduce<Record<LeadTimeRow["group"], LeadTimeRow[]>>(
    (acc, row) => {
      (acc[row.group] ??= []).push(row);
      return acc;
    },
    {
      platform: [],
      "supplier-media": [],
      "stadium-events": [],
      creative: [],
      "field-ops": [],
      regulatory: [],
      "ka-trade": [],
    },
  );

  const longestLeadWeeks = 16;

  return (
    <Section
      id="lead-times"
      eyebrow="Annex · Lead times & critical path"
      title="What we have to start now to launch on time"
      intro="Some pieces of the plan have long booking lead times — MTN MVNE integration, AmaCoin regulatory consultation, vernacular creative production, stadium permits, DStv Premier League sponsorship inventory. The list below shows every supplier, platform and partner with its booking duration and the month it has to commit. Working back from M0 (the day SIMs go on sale), the longest lead times have to start ~5 months before launch — anything later means slipped activation."
    >
      {/* Critical path strip */}
      <div className="rounded-2xl border-2 border-rose-500/40 bg-rose-500/5 p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-rose-300">
              Critical path · start now
            </div>
            <h3 className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
              {critical.length} items KC Mobile cannot launch without
            </h3>
            <p className="mt-2 max-w-3xl text-[13px] text-[var(--kc-paper)]/70">
              The longest single lead time is{" "}
              <strong className="text-[var(--kc-paper)]">
                {longestLeadWeeks} weeks (MTN MVNE technical integration)
              </strong>
              . That sets the launch clock — the M0 launch date is M-{longestLeadWeeks / 4}+ from MVNE start. Everything below has to be in motion before paid media can fire.
            </p>
          </div>
          <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/40 text-[11px]" variant="outline">
            Highest priority
          </Badge>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {critical.map((row) => (
            <div
              key={row.id}
              className="rounded-lg border border-rose-500/30 bg-[var(--kc-charcoal)]/40 p-4"
            >
              <div className="text-[12px] font-semibold uppercase tracking-wider text-rose-300">
                {row.startMonth}
              </div>
              <div className="mt-1 text-[14px] font-semibold text-[var(--kc-paper)]">
                {row.item}
              </div>
              <div className="mt-1 text-[12px] text-[var(--kc-paper)]/65">
                {row.supplier}
              </div>
              <div className="mt-2 font-mono text-[11px] text-[var(--kc-paper)]/55">
                {row.duration}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full schedule by group */}
      <div className="mt-10 space-y-10">
        {GROUP_ORDER.map((group) => {
          const rows = grouped[group];
          if (!rows?.length) return null;
          return (
            <div key={group}>
              <div className="flex items-baseline justify-between gap-3 border-b border-[var(--kc-line)] pb-3">
                <h3 className="text-[15px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  {LEAD_TIME_GROUP_LABELS[group]}
                </h3>
                <span className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                  {rows.length} {rows.length === 1 ? "item" : "items"}
                </span>
              </div>

              <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--kc-line)]">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 text-left text-[11px] uppercase tracking-wider text-[var(--kc-mute)]">
                      <th className="px-4 py-3">Item</th>
                      <th className="px-4 py-3">Supplier / partner</th>
                      <th className="px-4 py-3">Duration</th>
                      <th className="px-4 py-3">Has to start</th>
                      <th className="px-4 py-3">Goes live</th>
                      <th className="px-4 py-3">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr
                        key={row.id}
                        className={
                          i % 2 === 0
                            ? "border-b border-[var(--kc-line)]/30 last:border-0"
                            : "bg-[var(--kc-ink)]/30 border-b border-[var(--kc-line)]/30 last:border-0"
                        }
                      >
                        <td className="px-4 py-3">
                          <div className="text-[var(--kc-paper)] font-semibold">
                            {row.item}
                          </div>
                          <div className="mt-1 text-[11px] leading-relaxed text-[var(--kc-paper)]/65">
                            {row.why}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-[12px] text-[var(--kc-paper)]/80">
                          {row.supplier}
                        </td>
                        <td className="px-4 py-3 font-mono text-[12px] text-[var(--kc-paper)]/85">
                          {row.duration}
                        </td>
                        <td className="px-4 py-3 font-mono text-[12px] font-semibold text-[var(--kc-gold)]">
                          {row.startMonth}
                        </td>
                        <td className="px-4 py-3 text-[12px] text-[var(--kc-paper)]/80">
                          {row.goLive}
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            className={`${RISK_TONE[row.risk]} text-[10px]`}
                            variant="outline"
                          >
                            {RISK_LABEL[row.risk]}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary callout */}
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--kc-gold)]/30 bg-[var(--kc-gold)]/5 p-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
            Earliest start (M-5)
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-[var(--kc-paper)]">
            12–16 weeks
          </div>
          <div className="mt-2 text-[12px] text-[var(--kc-paper)]/75">
            MTN MVNE technical integration. Without it, no SIMs activate. The single longest dependency in the plan.
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
            Pre-launch window
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-[var(--kc-paper)]">
            M-5 → M0
          </div>
          <div className="mt-2 text-[12px] text-[var(--kc-paper)]/75">
            5 months of pre-launch work for everything from MVNE integration to vernacular creative to dealer merchandising. Waitlist phase (M-2 → M0) is the final 8–12 weeks of that.
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
            High-risk items
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-[var(--kc-paper)]">
            {LEAD_TIMES.filter((r) => r.risk === "high").length}
          </div>
          <div className="mt-2 text-[12px] text-[var(--kc-paper)]/75">
            Items where slip impacts launch readiness. Each needs an explicit owner + weekly status check from M-3 onwards.
          </div>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LaunchTimelineChart } from "@/components/charts/launch-timeline";
import { Section } from "@/components/section";
import { TIMING_FRAMEWORK, TRIBAL_PHASING, WAITLIST_PHASE } from "@/data/proposal";

export function Timing() {
  return (
    <Section
      id="timing"
      eyebrow="Phasing · M-2 → M12"
      title="The full launch arc — from waitlist to lock-in"
      intro="The arc starts 8–12 weeks before the SIM goes on sale (the waitlist phase) and runs through 12 months of football-rhythm marketing."
    >
      {/* === Pre-launch · M-2 → M0 (always visible) === */}
      <div className="mb-10">
        <div className="rounded-2xl border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/5 p-6">
        <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Pre-launch · {WAITLIST_PHASE.duration}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          What we do in the 8–12 weeks before SIM goes on sale
        </h3>
        <p className="mt-3 max-w-3xl text-[16px] text-[var(--kc-paper)]/80">{WAITLIST_PHASE.intro}</p>

        {/* Goal stat */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--kc-gold)] bg-[var(--kc-gold)]/15 px-4 py-1.5">
          <span className="text-[16px] uppercase tracking-wider text-[var(--kc-gold)]">Goal</span>
          <span className="font-mono text-[16px] font-semibold text-[var(--kc-paper)]">{WAITLIST_PHASE.goal}</span>
        </div>

        {/* Pillars + Why-it-matters */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardContent className="p-5">
              <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                Pre-launch pillars
              </div>
              <ul className="mt-3 space-y-3">
                {WAITLIST_PHASE.pillars.map((pi) => (
                  <li key={pi.title}>
                    <div className="text-[16px] font-semibold text-[var(--kc-paper)]">{pi.title}</div>
                    <p className="mt-1 text-[16px] leading-snug text-[var(--kc-paper)]/75">{pi.detail}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                Why pre-launch matters
              </div>
              <ul className="mt-3 space-y-3">
                {WAITLIST_PHASE.whyItMatters.map((w, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                    <p className="text-[16px] leading-snug text-[var(--kc-paper)]/85">{w}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>

      {/* === 6-month launch activation Gantt — primary view === */}
      <div className="mb-10">
        <LaunchTimelineChart />
      </div>

      {/* === Optional deeper views — folded behind disclosure === */}
      <details className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/30">
        <summary className="cursor-pointer px-6 py-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)] hover:text-[var(--kc-paper)]">
          Show 12-month football-rhythm + tribal-phasing detail
        </summary>
        <div className="border-t border-[var(--kc-line)] p-6">
        <div className="mb-6">
        <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          12-month phasing · M0 → M12
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Four football-rhythm waves
        </h3>
      </div>
      {/* Horizontal timeline strip */}
      <div className="mb-10 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          12-month timeline · phase weights
        </div>
        <div className="relative mt-6">
          <div className="flex h-9 w-full overflow-hidden rounded-md border border-[var(--kc-line)]">
            <div
              className="flex items-center justify-center bg-[var(--kc-gold)] text-xs font-semibold text-[var(--kc-black)]"
              style={{ width: "16.66%" }}
            >
              Kickoff · M1–2
            </div>
            <div
              className="flex items-center justify-center bg-[var(--kc-gold)]/75 text-xs font-semibold text-[var(--kc-black)]"
              style={{ width: "25%" }}
            >
              Momentum · M3–5
            </div>
            <div
              className="flex items-center justify-center bg-[var(--kc-gold)]/45 text-xs font-semibold text-[var(--kc-paper)]"
              style={{ width: "25%" }}
            >
              Anchor · M6–8
            </div>
            <div
              className="flex items-center justify-center bg-[var(--kc-gold)]/20 text-xs font-semibold text-[var(--kc-paper)]"
              style={{ width: "33.33%" }}
            >
              Lock-in · M9–12
            </div>
          </div>
          <div className="mt-3 flex w-full justify-between text-[17px] uppercase tracking-wider text-[var(--kc-mute)]">
            <span>M1</span>
            <span>M3</span>
            <span>M6</span>
            <span>M9</span>
            <span>M12</span>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-xs text-[var(--kc-paper)]/65">
          Base marketing spend is split evenly across the year (whatever is
          committed in the V2 model, divided by 12). What shifts between phases
          is the focus — Kickoff owns the launch story, Momentum captures the
          first Soweto Derby and activates engagement mechanics, Anchor leans
          into retention as the base matures, and Lock-in closes the season
          with the Player-Designed Jersey Draw and the opening of Year-2
          retail expansion conversations (PEP / Shoprite explored as
          prospective partners only).
        </p>
      </div>

      {/* Phase detail cards */}
      <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {TIMING_FRAMEWORK.map((p, i) => (
          <Card key={p.phase} className="relative">
            <CardContent className="relative p-6">
              <div className="absolute right-5 top-5 text-5xl font-semibold tracking-tight text-[var(--kc-gold)]/20">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                Phase 0{i + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--kc-paper)]">
                {p.phase.split("—")[1]?.trim() ?? p.phase}
              </h3>
              <div className="mt-3 text-xs uppercase tracking-wider text-[var(--kc-gold)]">
                {p.weight}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                {p.purpose}
              </p>
            </CardContent>
          </Card>
        ))}
      </ol>

      {/* === Tribal phasing nested inside the disclosure === */}
      <div className="mt-10">
          <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Tribal phasing · CVPs come live in waves
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
              A second view — when each persona cluster + CVP set turns on
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-[var(--kc-paper)]/75">
              {TRIBAL_PHASING.intro}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {TRIBAL_PHASING.phases.map((ph) => (
                <div
                  key={ph.num}
                  className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/60 p-5"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--kc-gold)] font-mono text-[16px] font-bold text-[var(--kc-black)]">
                      {ph.num}
                    </span>
                    <div className="text-base font-semibold text-[var(--kc-paper)]">
                      {ph.name}
                    </div>
                  </div>
                  <div className="mt-3 text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
                    {ph.window}
                  </div>
                  <div className="mt-3">
                    <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                      Personas
                    </div>
                    <p className="mt-1 text-[16px] leading-snug text-[var(--kc-paper)]/85">
                      {ph.personas}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                      CVPs live
                    </div>
                    <p className="mt-1 text-[16px] leading-snug text-[var(--kc-paper)]/85">
                      {ph.cvpsLive}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                      Lead KPI
                    </div>
                    <p className="mt-1 text-[16px] leading-snug text-emerald-200">
                      {ph.leadKpi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
        </div>
      </details>
    </Section>
  );
}

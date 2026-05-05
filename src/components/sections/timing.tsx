import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { TIMING_FRAMEWORK } from "@/data/proposal";

export function Timing() {
  return (
    <Section
      id="timing"
      eyebrow="Phasing"
      title="How the plan unfolds across the year"
      intro="The 12-month plan rolls in four rhythm-led waves anchored to the football year — kickoff, the first Soweto Derby, the EPL run-in, and finals season. Marketing investment is flat across the year by default; what shifts is *what* the spend is doing in each window."
    >
      {/* Horizontal timeline strip */}
      <div className="mb-10 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
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
          <div className="mt-3 flex w-full justify-between text-[10px] uppercase tracking-wider text-[var(--kc-mute)]">
            <span>M1</span>
            <span>M3</span>
            <span>M6</span>
            <span>M9</span>
            <span>M12</span>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-xs text-[var(--kc-paper)]/65">
          Base marketing spend is split evenly across the year (whatever the
          slider is set to, divided by 12). What shifts between phases is the
          focus — Kickoff owns the launch story, Momentum captures the first
          Soweto Derby and activates engagement mechanics, Anchor leans into
          retention as the base matures, and Lock-in closes the season with
          the Player-Designed Jersey Draw and the PEP / Shoprite Phase-2
          go-live.
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
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
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
    </Section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { TIMING_FRAMEWORK } from "@/data/proposal";

export function Timing() {
  return (
    <Section
      id="timing"
      eyebrow="Phasing"
      title="How the plan unfolds across the year"
      intro="The R9M plan runs in four phases. The R5M plan compresses Phases 1–2 into 6 months. The R2.5M Pilot is essentially Phase 1 only — heavy in retail, OOH, radio and production at the front."
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
              style={{ width: "25%" }}
            >
              Spark · M1–M3
            </div>
            <div
              className="flex items-center justify-center bg-[var(--kc-gold)]/70 text-xs font-semibold text-[var(--kc-black)]"
              style={{ width: "25%" }}
            >
              Sustain · M4–M6
            </div>
            <div
              className="flex items-center justify-center bg-[var(--kc-gold)]/40 text-xs font-semibold text-[var(--kc-paper)]"
              style={{ width: "25%" }}
            >
              Scale · M7–M9
            </div>
            <div
              className="flex items-center justify-center bg-[var(--kc-gold)]/15 text-xs font-semibold text-[var(--kc-paper)]"
              style={{ width: "25%" }}
            >
              Convert · M10–M12
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
          Spend weight is heaviest at the front (Spark) when launch noise needs
          to land, then tapers as paid digital and trade momentum sustain
          themselves. Scale phase coincides with the SS PSL second half + EPL
          run-in. Convert closes the season with a retention push.
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

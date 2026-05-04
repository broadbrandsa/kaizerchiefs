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

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { WAITLIST_PHASE } from "@/data/proposal";

export function Waitlist() {
  return (
    <Section
      id="waitlist"
      eyebrow="Pre-launch"
      title="The 8–12 weeks before M1"
      intro={WAITLIST_PHASE.intro}
    >
      {/* Headline metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="border-[var(--kc-gold)]/30 bg-[var(--kc-gold)]/5">
          <CardContent className="p-6">
            <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
              Duration
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
              {WAITLIST_PHASE.duration}
            </div>
          </CardContent>
        </Card>
        <Card className="border-[var(--kc-gold)]/30 bg-[var(--kc-gold)]/5">
          <CardContent className="p-6">
            <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
              Goal
            </div>
            <div className="mt-2 text-base font-semibold tracking-tight text-[var(--kc-paper)]">
              {WAITLIST_PHASE.goal}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Six pillars */}
      <div className="mt-10">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Six pillars of the build-up
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          What happens between waitlist open and Kickoff
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WAITLIST_PHASE.pillars.map((p, i) => (
            <Card key={p.title}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 font-mono text-xs font-semibold text-[var(--kc-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Badge variant="outline">Pre-launch</Badge>
                </div>
                <h4 className="mt-4 text-base font-semibold leading-snug text-[var(--kc-paper)]">
                  {p.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[var(--kc-paper)]/85">
                  {p.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why it matters */}
      <div className="mt-12">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Why this layer matters
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Cold launch vs warm launch
        </h3>
        <ul className="mt-6 space-y-4">
          {WAITLIST_PHASE.whyItMatters.map((w, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-lg border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-4"
            >
              <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 font-mono text-xs font-semibold text-[var(--kc-gold)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm leading-relaxed text-[var(--kc-paper)]/85">
                {w}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

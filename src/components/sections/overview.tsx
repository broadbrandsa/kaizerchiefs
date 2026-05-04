import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { BRIEF_HIGHLIGHTS } from "@/data/proposal";

export function Overview() {
  return (
    <Section
      id="overview"
      eyebrow="The Brief"
      title={<>What we&apos;re solving for</>}
      intro="KC Mobile has the brand and the network. What it doesn't yet have is reach into the Amakhosi base, persuasive storytelling, and visible distribution. The plan attacks all three at once."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Current challenges
            </div>
            <ul className="mt-4 space-y-3 text-[var(--kc-paper)]/85">
              {BRIEF_HIGHLIGHTS.challenges.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              What success looks like
            </div>
            <ul className="mt-4 space-y-3 text-[var(--kc-paper)]/85">
              <li>
                <strong className="text-[var(--kc-gold)]">
                  {BRIEF_HIGHLIGHTS.monthlyTargetPhysical.toLocaleString()}
                </strong>{" "}
                physical SIM activations per month
              </li>
              <li>
                <strong className="text-[var(--kc-gold)]">
                  {BRIEF_HIGHLIGHTS.monthlyTargetEsim}
                </strong>{" "}
                eSIM activations per month
              </li>
              <li>{BRIEF_HIGHLIGHTS.goToMarket}</li>
              <li>
                Subscriber retention via incentives, experiences, and the KC
                ecosystem (sponsors + matches + content)
              </li>
              <li>
                Build the data layer — every activation is the start of a
                re-engagement journey
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Primary audience
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              {BRIEF_HIGHLIGHTS.primaryAudience.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-lg bg-[var(--kc-ink)]/60 p-4"
                >
                  <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 text-[var(--kc-gold)]">
                    <Check className="size-4" strokeWidth={2.5} />
                  </div>
                  <div className="text-[var(--kc-paper)]/90">{p}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

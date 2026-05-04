import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { STRATEGIC_PILLARS } from "@/data/proposal";

export function Strategy() {
  return (
    <Section
      id="strategy"
      eyebrow="Strategy"
      title="Four pillars that make the plan run"
      intro="Volume comes from wholesale distribution. Persuasion comes from the Amakhosi voice. The four pillars below sit underneath every line item in the budget — if a tactic doesn't ladder up to one of these, it doesn't make the plan."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {STRATEGIC_PILLARS.map((p, i) => (
          <Card key={p.pillar} className="relative overflow-hidden">
            <div className="bg-stripes absolute inset-0 opacity-50" />
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="text-5xl font-semibold tracking-tight text-[var(--kc-gold)]">
                  0{i + 1}
                </div>
                <Badge variant="secondary">Pillar</Badge>
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-tight text-[var(--kc-paper)]">
                {p.pillar}
              </h3>
              <p className="mt-4 text-[var(--kc-paper)]/85">{p.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/section";
import { MEASUREMENT_KPIS, NEXT_STEPS } from "@/data/proposal";

export function Measure() {
  return (
    <Section
      id="measure"
      eyebrow="Measurement"
      title={<>What we&apos;ll be held to</>}
      intro="A single source of truth — the MVNO core system — is the spine. Every other measurement layer connects back to it. Reporting is weekly with a quarterly review where we reallocate the bottom 20% of channels into the top 20%."
    >
      <div className="overflow-hidden rounded-2xl border border-[var(--kc-line)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--kc-ink)]/60 text-[18px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
            <tr>
              <th className="px-5 py-4 font-semibold">KPI</th>
              <th className="px-5 py-4 font-semibold">Target</th>
              <th className="px-5 py-4 font-semibold">Measure</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--kc-line)]">
            {MEASUREMENT_KPIS.map((k) => (
              <tr key={k.kpi} className="bg-[var(--kc-charcoal)]/40 align-top">
                <td className="px-5 py-4 font-medium text-[var(--kc-paper)]">{k.kpi}</td>
                <td className="px-5 py-4 text-[var(--kc-gold)]">{k.target}</td>
                <td className="px-5 py-4 text-[var(--kc-paper)]/80">{k.measure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Next steps · for sign-off
            </div>
            <Separator className="my-5" />
            <ol className="space-y-4">
              {NEXT_STEPS.map((step, i) => (
                <li key={step} className="flex gap-4 text-[var(--kc-paper)]/85">
                  <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 font-mono text-xs font-semibold text-[var(--kc-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="bg-stripes absolute inset-0 opacity-50" />
          <CardContent className="relative p-6">
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Closing thought
            </div>
            <p className="mt-5 text-lg leading-relaxed text-[var(--kc-paper)]">
              KC Mobile already has the brand, the network deal, and the
              wholesale model. What this plan adds is{" "}
              <span className="text-[var(--kc-gold)]">visibility, voice, and velocity</span> —
              so a MTN shop in Mbombela, a derby fan zone in Soweto, an Ukhozi FM
              breakfast slot, and a TikTok scroll on the supporters&apos; bus all
              point to the same place: the SIM in the supporter&apos;s hand.
            </p>
            <p className="mt-5 text-sm text-[var(--kc-paper)]/70">
              Amakhosi 4 Life · KC Mobile.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

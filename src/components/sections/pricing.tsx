import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { PRICING_PACKAGES, VAS_PACKAGES } from "@/data/proposal";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing · packages & VAS"
      title="Seven packages, one Diaspora travel pack, five VAS add-ons"
      intro="Re-cut to ≥50% gross margin on every base package under the MTN MVNO Q1 2026 wholesale rate card. The entry-tier (Khosi 1.5GB) holds the affordability anchor at R90 incl VAT; the premium tiers (Khosi 5GB, 10GB) and Junior Khosi were repriced to restore margin."
    >
      {/* Base packages table */}
      <div className="mb-10 overflow-hidden rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40">
        <div className="border-b border-[var(--kc-line)] p-5">
          <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Base packages · 7 SKUs
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
            Persona × Package — every SKU has an anchor supporter
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--kc-ink)]/70 text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
              <tr>
                <th className="px-3 py-3 font-semibold">Package</th>
                <th className="px-3 py-3 text-right font-semibold">Price (incl VAT)</th>
                <th className="px-3 py-3 text-right font-semibold">Voice (min)</th>
                <th className="px-3 py-3 text-right font-semibold">Data (MB)</th>
                <th className="px-3 py-3 text-right font-semibold">SMS</th>
                <th className="px-3 py-3 text-right font-semibold">Gross margin</th>
                <th className="px-3 py-3 font-semibold">Anchor persona(s)</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_PACKAGES.map((p) => (
                <tr key={p.code} className="border-t border-[var(--kc-line)]/40 align-top">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-[var(--kc-paper)]">{p.name}</div>
                    <div className="mt-1 text-[16px] text-[var(--kc-paper)]/60">{p.notes}</div>
                  </td>
                  <td className="px-3 py-3 text-right font-mono text-[var(--kc-gold)]">
                    R{p.priceInclVat}
                  </td>
                  <td className="px-3 py-3 text-right font-mono text-[var(--kc-paper)]/85">
                    {p.voiceMin}
                  </td>
                  <td className="px-3 py-3 text-right font-mono text-[var(--kc-paper)]/85">
                    {p.dataMb.toLocaleString()}
                  </td>
                  <td className="px-3 py-3 text-right font-mono text-[var(--kc-paper)]/85">
                    {p.sms}
                  </td>
                  <td className="px-3 py-3 text-right font-mono text-emerald-300">
                    {p.grossMarginPct.toFixed(1)}%
                  </td>
                  <td className="px-3 py-3 text-[16px] text-[var(--kc-paper)]/80">
                    {p.anchorPersonas}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-[var(--kc-line)] bg-[var(--kc-ink)]/40">
                <td className="px-3 py-3 font-semibold text-[var(--kc-paper)]">
                  Diaspora travel eSIM
                  <div className="mt-1 text-[16px] font-normal text-[var(--kc-paper)]/60">
                    Regional packs: UK/EU · Middle East · Australasia · Pan-Africa · US
                  </div>
                </td>
                <td className="px-3 py-3 text-right font-mono text-[var(--kc-gold)]">From R249</td>
                <td className="px-3 py-3 text-right font-mono text-[var(--kc-paper)]/85">Regional</td>
                <td className="px-3 py-3 text-right font-mono text-[var(--kc-paper)]/85">Region-tier</td>
                <td className="px-3 py-3 text-right font-mono text-[var(--kc-paper)]/85">Bundled</td>
                <td className="px-3 py-3 text-right font-mono text-emerald-300">60.7%</td>
                <td className="px-3 py-3 text-[16px] text-[var(--kc-paper)]/80">P6 Diaspora Khosi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* VAS add-ons */}
      <div>
        <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          VAS add-ons · 5 services that lift ARPU
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Each at ≥50% gross margin — every VAS pulls one persona deeper into the tribe
        </h3>

        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {VAS_PACKAGES.map((v) => (
            <Card key={v.name} className="bg-[var(--kc-ink)]/60">
              <CardContent className="p-4">
                <div className="text-[16px] font-semibold leading-tight text-[var(--kc-paper)]">
                  {v.name}
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="font-mono text-base font-bold text-[var(--kc-gold)]">
                    R{v.price}
                  </span>
                  <span className="font-mono text-[16px] text-emerald-300">
                    {v.gmPct.toFixed(1)}% GM
                  </span>
                </div>
                <div className="mt-3 text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
                  Uptake
                </div>
                <div className="mt-1 text-[16px] text-[var(--kc-paper)]/85">
                  {v.uptake}% of base · persona {v.persona}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

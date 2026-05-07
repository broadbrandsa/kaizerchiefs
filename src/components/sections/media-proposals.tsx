"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { CIDER_POINT_WALLS, CIDER_POINT_TOTALS } from "@/data/proposal";

/**
 * MediaProposals — annex section that surfaces the two township-OOH proposals
 * we evaluated (Cider Point and Back to Front). Includes the Cider Point
 * 15-site list with traffic counts so the underlying numbers used in the
 * Plan Detail Retail / Trade line item are fully traceable.
 */
export function MediaProposals() {
  return (
    <Section
      id="media-proposals"
      eyebrow="Annex · Media proposals"
      title="Township OOH — the two suppliers we compared"
      intro="The proposal's township-mural line is anchored to a real supplier quote. We evaluated two providers — Cider Point Media (named-site media buy with traffic data + GPS) and Back to Front Media (production-house capability profile, no specific sites). Cider Point is the chosen supplier; Back to Front is documented here as the cost alternative."
    >
      {/* Headline comparison */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-[var(--kc-gold)]/15 text-[var(--kc-gold)] border-[var(--kc-gold)]/40" variant="outline">
                Chosen
              </Badge>
              <span className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                Township OOH · primary
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--kc-paper)]">
              Cider Point Media & Marketing
            </h3>
            <p className="mt-2 text-[13px] text-[var(--kc-paper)]/70">
              Account manager · John Mokolobetsi Ditshwene · FNB account 63006123028
            </p>

            <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-[var(--kc-paper)]/85">
              <li>
                <strong className="text-[var(--kc-paper)]">15 named wall sites</strong> across Gauteng (11) + KZN (4) — Soweto, Alexandra, Tembisa, Pretoria, Umlazi, Chatsworth, KwaMashu.
              </li>
              <li>
                <strong className="text-[var(--kc-paper)]">Discounted monthly media rate · R14,000</strong> per wall (R20,000 for the 3 Pretoria premium sites). 7% off the R15,000 rate card.
              </li>
              <li>
                <strong className="text-[var(--kc-paper)]">Production · R12,000</strong> per wall once-off (R7,800–R8,000 for Pretoria).
              </li>
              <li>
                <strong className="text-[var(--kc-paper)]">Full quoted 3-month launch flight (Jun–Aug 2026): R780,000 ex VAT</strong> — R588K media + R192K production for all 15 sites.
              </li>
              <li>
                Every wall comes with monthly traffic count (12K–220K cars), LSM 4–7 audience tag, on-site photo, partial GPS — full dossier in the Walls Site List deck.
              </li>
            </ul>

            <div className="mt-5 rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-3 text-[12px] text-[var(--kc-paper)]/65">
              Source files · Cider Point Media OOH Schedule_GAUTENG &amp; KZN.pdf · Cider Point Media Walls Site List with GPS Coordinates GAUTENG &amp; KZN.pptx (21 slides, one per wall)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">Cost alternative</Badge>
              <span className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                Township OOH · backup supplier
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--kc-paper)]">
              Back to Front Media & Events Solutions
            </h3>
            <p className="mt-2 text-[13px] text-[var(--kc-paper)]/70">
              Contact · Thabang Kole · 28 South Carolina Crescent, Roodepoort, Johannesburg · +27 63 267 7124
            </p>

            <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-[var(--kc-paper)]/85">
              <li>
                <strong className="text-[var(--kc-paper)]">Service profile / capability deck</strong> — no specific wall sites quoted. Production-house model where the buyer directs walls.
              </li>
              <li>
                <strong className="text-[var(--kc-paper)]">Production R10,000</strong> per wall once-off (2m × 10m fixed size — smaller than Cider Point's average wall).
              </li>
              <li>
                <strong className="text-[var(--kc-paper)]">Media rental R5,500</strong> per wall per month — roughly <strong>2.5× cheaper</strong> than Cider Point but with no named sites or traffic data.
              </li>
              <li>
                Includes flighting + deflighting + travel + accommodation. 20-day production lead-time post artwork sign-off. Production paid upfront. Sites subject to availability + landlord approval.
              </li>
              <li>
                Wider service catalogue — spazashop / tarven / pub branding (R13,500 small-medium · R15,500+ large), township supermarket, motor spares + warehouse, posters, banners, perspex, chromadex.
              </li>
              <li>
                Track record: SafeLine, Diski Flava (Visa/FNB), Choose Circumcision (PSI), BettaBets, Kellogg's, Ricoffy, Amarula, Nik Naks.
              </li>
            </ul>

            <div className="mt-5 rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-3 text-[12px] text-[var(--kc-paper)]/65">
              Source file · B2FMediaProposal_UpdatedProfile_02102025_120241.pdf (25-slide capability + reference deck)
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 12-month modelled comparison */}
      <div className="mt-8 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
        <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
          Modelled like-for-like · 12 walls × 12 months
        </div>
        <h3 className="mt-3 text-xl font-semibold text-[var(--kc-paper)]">
          Cider Point is ≈2.4× the cost of Back to Front for an equivalent annual run
        </h3>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b border-[var(--kc-line)] text-left text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                <th className="pb-3 pr-4">Cost line</th>
                <th className="pb-3 pr-4 text-right">Back to Front</th>
                <th className="pb-3 text-right">Cider Point</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              <tr className="border-b border-[var(--kc-line)]/50">
                <td className="py-3 pr-4 text-[var(--kc-paper)]/85">Production (12 walls once-off)</td>
                <td className="py-3 pr-4 text-right">R120,000</td>
                <td className="py-3 text-right">R144,000</td>
              </tr>
              <tr className="border-b border-[var(--kc-line)]/50">
                <td className="py-3 pr-4 text-[var(--kc-paper)]/85">Media rental (12 walls × 12 months)</td>
                <td className="py-3 pr-4 text-right">R792,000</td>
                <td className="py-3 text-right">R2,016,000</td>
              </tr>
              <tr className="bg-[var(--kc-gold)]/5">
                <td className="py-3 pr-4 font-semibold text-[var(--kc-paper)]">12-month total (ex VAT)</td>
                <td className="py-3 pr-4 text-right text-[var(--kc-gold)] font-bold">R912,000</td>
                <td className="py-3 text-right text-[var(--kc-gold)] font-bold">R2,160,000</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[var(--kc-paper)]/85">Ratio</td>
                <td className="py-3 pr-4 text-right">1.0×</td>
                <td className="py-3 text-right font-bold text-[var(--kc-gold)]">2.37×</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-[13px] leading-relaxed text-[var(--kc-paper)]/75">
          The plan books <strong className="text-[var(--kc-paper)]">6 walls × 5 months at Cider Point</strong> rates (~R492K) inside the Retail &amp; Trade category — premium accountability on the highest-traffic Cider Point sites, scaled to fit the R4.51M Yr-1 marketing line. Back to Front is documented as the costed alternative if KC ever wants more walls or longer flight inside the same envelope.
        </p>
      </div>

      {/* Cider Point 15 sites — full table */}
      <div className="mt-8">
        <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
          Cider Point — full 15-site schedule
        </div>
        <h3 className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
          Every wall, every traffic count, every coordinate
        </h3>
        <p className="mt-2 max-w-3xl text-[13px] text-[var(--kc-paper)]/70">
          Traffic figures are supplier-claimed (per the Cider Point OOH Schedule). GPS source is "supplier" where the deck supplied a coordinate, "estimated" where we located it from the address description.
        </p>

        <div className="mt-5 overflow-x-auto rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-[var(--kc-line)] bg-[var(--kc-ink)]/40 text-left text-[11px] uppercase tracking-wider text-[var(--kc-mute)]">
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Site</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3">Size</th>
                <th className="px-4 py-3 text-right">Cars / month</th>
                <th className="px-4 py-3 text-right">Monthly rate</th>
                <th className="px-4 py-3 text-right">Production</th>
                <th className="px-4 py-3">GPS source</th>
              </tr>
            </thead>
            <tbody>
              {CIDER_POINT_WALLS.map((w, i) => (
                <tr
                  key={w.id}
                  className={i % 2 === 0 ? "" : "bg-[var(--kc-ink)]/20"}
                >
                  <td className="px-4 py-2.5 font-mono text-[12px] text-[var(--kc-mute)]">{w.cpmCode}</td>
                  <td className="px-4 py-2.5 text-[var(--kc-paper)]">{w.label}</td>
                  <td className="px-4 py-2.5 text-[var(--kc-paper)]/80">{w.city}</td>
                  <td className="px-4 py-2.5 font-mono text-[12px] text-[var(--kc-paper)]/70">{w.size}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-[var(--kc-paper)]">{w.monthlyTraffic.toLocaleString("en-ZA")}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-[var(--kc-paper)]">R{w.monthlyRate.toLocaleString("en-ZA")}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-[var(--kc-paper)]/80">R{w.productionCost.toLocaleString("en-ZA")}</td>
                  <td className="px-4 py-2.5 text-[12px] text-[var(--kc-paper)]/65">{w.geoSource}</td>
                </tr>
              ))}
              <tr className="bg-[var(--kc-gold)]/5 border-t border-[var(--kc-gold)]/30">
                <td colSpan={4} className="px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-[var(--kc-gold)]">
                  Total · 15 sites · 3-month flight
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-[var(--kc-paper)]">{CIDER_POINT_TOTALS.totalMonthlyTraffic.toLocaleString("en-ZA")}</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-[var(--kc-paper)]">R{CIDER_POINT_TOTALS.monthlyMediaRand.toLocaleString("en-ZA")}</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-[var(--kc-paper)]">R{CIDER_POINT_TOTALS.productionRand.toLocaleString("en-ZA")}</td>
                <td className="px-4 py-3 font-mono text-[12px] font-semibold text-[var(--kc-gold)]">R{CIDER_POINT_TOTALS.threeMonthFlightRand.toLocaleString("en-ZA")} ex VAT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Data quality flags */}
      <div className="mt-8 rounded-2xl border border-orange-400/30 bg-orange-400/5 p-6">
        <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange-300">
          Data-quality flags · query before signing
        </div>
        <ul className="mt-3 space-y-2 text-[13px] text-[var(--kc-paper)]/80">
          <li>
            <strong>Cider Point monthly media maths · </strong>
            Schedule footer shows R196,000 monthly = R14,000 × 14 walls, but 15 sites are listed — one site is unbilled in the totals (clarify which).
          </li>
          <li>
            <strong>Cider Point production maths · </strong>
            R192,000 production total = R12,000 × 16 walls, also off by 1 from the 15 listed sites.
          </li>
          <li>
            <strong>VAT line · </strong>
            R0.00 VAT shown on the R780,000 total — confirm whether the quote is genuinely VAT-exempt or VAT was forgotten (15% would be R117,000).
          </li>
          <li>
            <strong>GPS coordinates · </strong>
            5 of 15 site slides have populated GPS values; the other 10 carry a "GPS CO-ORDINATES:" label with no value filled in. We've estimated those from address descriptions.
          </li>
          <li>
            <strong>Contracting entity · </strong>
            The deck branding says "Cider Point Media &amp; Marketing"; the FNB bank account holder is "CIDER POINT MEDIA AND MARKETING". Confirm the legal contracting entity on contract.
          </li>
        </ul>
      </div>
    </Section>
  );
}

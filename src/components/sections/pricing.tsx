"use client";

import { useMemo, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Section } from "@/components/section";
import { PRICING_PACKAGES, VAS_PACKAGES } from "@/data/proposal";

type SortKey = "price-asc" | "price-desc" | "data-desc" | "voice-desc" | "margin-desc";

const SORT_LABEL: Record<SortKey, string> = {
  "price-asc":   "Price · low → high",
  "price-desc":  "Price · high → low",
  "data-desc":   "Data · most generous",
  "voice-desc":  "Voice mins · most generous",
  "margin-desc": "Gross margin · highest",
};

const MIN_PRICE = 0;
const MAX_PRICE = 320; // Khosi 10GB sits at 315 incl VAT — round up to 320 for clean ticks

export function Pricing() {
  const [priceCeiling, setPriceCeiling] = useState<number>(MAX_PRICE);
  const [sort, setSort] = useState<SortKey>("price-asc");

  const filteredSorted = useMemo(() => {
    const filtered = PRICING_PACKAGES.filter((p) => p.priceInclVat <= priceCeiling);
    const sorted = [...filtered].sort((a, b) => {
      switch (sort) {
        case "price-asc":   return a.priceInclVat - b.priceInclVat;
        case "price-desc":  return b.priceInclVat - a.priceInclVat;
        case "data-desc":   return b.dataMb - a.dataMb;
        case "voice-desc":  return b.voiceMin - a.voiceMin;
        case "margin-desc": return b.grossMarginPct - a.grossMarginPct;
        default:            return 0;
      }
    });
    return sorted;
  }, [priceCeiling, sort]);

  const includesDiaspora = priceCeiling >= 249;

  return (
    <Section
      id="pricing"
      eyebrow="Pricing · packages & VAS"
      title="Seven packages, one Diaspora travel pack, five VAS add-ons"
      intro="Re-cut to ≥50% gross margin on every base package under the MTN MVNO Q1 2026 wholesale rate card. The entry-tier (Khosi 1.5GB) holds the affordability anchor at R90 incl VAT; the premium tiers (Khosi 5GB, 10GB) and Junior Khosi were repriced to restore margin."
    >
      {/* Interactive controls — price ceiling slider + sort dropdown */}
      <div className="mb-6 grid grid-cols-1 gap-5 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <div className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
              Price ceiling
            </div>
            <div className="font-mono text-[14px] text-[var(--kc-paper)]">
              ≤ R{priceCeiling}{" "}
              <span className="text-[var(--kc-mute)]">/ R{MAX_PRICE}</span>
            </div>
          </div>
          <Slider
            value={priceCeiling}
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={5}
            onValueChange={setPriceCeiling}
            className="mt-3"
            aria-label="Price ceiling"
          />
          <div className="mt-2 flex justify-between text-[11px] uppercase tracking-wider text-[var(--kc-mute)]">
            <span>R{MIN_PRICE}</span>
            <span>R100</span>
            <span>R200</span>
            <span>R{MAX_PRICE}</span>
          </div>
          <p className="mt-3 text-[12px] text-[var(--kc-paper)]/65">
            Drag to filter the package table to those at or below the ceiling.
            Showing{" "}
            <span className="font-mono text-[var(--kc-gold)]">
              {filteredSorted.length} / {PRICING_PACKAGES.length}
            </span>{" "}
            base SKUs.
          </p>
        </div>

        <div>
          <div className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
            Sort by
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="mt-3 inline-flex w-full items-center justify-between gap-2 rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/60 px-3 py-2 text-[14px] text-[var(--kc-paper)] transition hover:border-[var(--kc-gold)]/50"
              >
                <span>{SORT_LABEL[sort]}</span>
                <ChevronDownIcon className="size-4 text-[var(--kc-mute)]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)]">
              {(Object.keys(SORT_LABEL) as SortKey[]).map((key) => (
                <DropdownMenuItem
                  key={key}
                  onSelect={() => setSort(key)}
                  className={sort === key ? "text-[var(--kc-gold)]" : ""}
                >
                  {SORT_LABEL[key]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

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
              {filteredSorted.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-[14px] text-[var(--kc-mute)]">
                    No packages priced at or below R{priceCeiling}. Drag the slider higher.
                  </td>
                </tr>
              ) : (
                filteredSorted.map((p) => (
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
                ))
              )}
              {includesDiaspora ? (
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
              ) : null}
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

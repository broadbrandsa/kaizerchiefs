"use client";

import { Chapter } from "@/components/chapter";
import { InvestmentModel, ProductCvps, Pricing } from "@/components/sections";

/**
 * Chapter 03 — Product, pricing & the model.
 *
 * Most relevant to: CFO, CEO, commercial. The skim card front-loads the V2
 * KCM Digital Mobile model headline numbers so the CFO can answer "is this
 * sound?" without expanding anything. Investment model is open by default for
 * the same reason — when an exec lands here, the numbers are visible.
 */
export function ChapterProductMoney() {
  return (
    <Chapter
      id="ch-product-money"
      eyebrow="Product · pricing · profit"
      title={<>The financial picture, the products, the prices</>}
      intro="V2 KCM Digital Mobile model numbers — repriced under MTN MVNO Q1 2026 wholesale and tightened to ≥50% gross margin on every package. Eight non-comparable products (5 first-in-SA-market) sit on top."
      audienceHint="CFO · CEO · commercial"
      skimStats={[
        { label: "Yr-1 ARPU (V2)", value: "R116.51" },
        { label: "Gross margin", value: "51–52%" },
        { label: "Yr-1 marketing", value: "R4.51M" },
        { label: "Yr-1 EBIT", value: "R3.6M" },
        { label: "Yr-1 KCM share", value: "R1.8M" },
        { label: "M5", value: "EBIT-positive" },
        { label: "M8", value: "Loan cleared" },
        { label: "M12 active subs", value: "147,085" },
      ]}
      skimSummary={[
        "Self-funding from Month 10 — by then monthly EBIT exceeds the flat R376K marketing line, so future spend comes from operating profit.",
        "8 product CVPs, of which 5 are first-in-SA-market (Travel Diaspora, Sister Circle, Born-Free Creator Fund, Hustler Pay-Day, Junior Safe Family).",
        "7 packages + 1 Diaspora pack + 5 VAS — every SKU at ≥50% gross margin after MTN Q1 2026 wholesale rates.",
      ]}
      subSections={[
        {
          id: "model",
          label: "Investment model — V2 numbers",
          blurb:
            "Monthly subs / revenue / GP / EBIT through M12 · 5-year output · key milestones (M5 EBIT positive · M8 loan cleared · M12 +R1.05M monthly EBIT).",
          readMin: 5,
          defaultOpen: true,
          content: <InvestmentModel />,
        },
        {
          id: "product-cvps",
          label: "Product CVPs — 8 products",
          blurb:
            "The eight customer value propositions, each owned by a persona. Diaspora travel, Sister Circle, Born-Free creator fund, Hustler pay-day, Junior safe family, plus the core 3.",
          readMin: 6,
          content: <ProductCvps />,
        },
        {
          id: "pricing",
          label: "Pricing & packages",
          blurb:
            "Seven core packages + one Diaspora travel pack + five VAS add-ons. Every line at ≥50% gross margin under V2 wholesale.",
          readMin: 4,
          content: <Pricing />,
        },
      ]}
    />
  );
}

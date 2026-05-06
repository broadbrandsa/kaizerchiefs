"use client";

import { Chapter } from "@/components/chapter";
import { CustomerJourney, Loyalty } from "@/components/sections";

/**
 * Chapter 05 — Lifecycle, loyalty & retention.
 *
 * Most relevant to: product, customer ops, CRM owners. The skim numbers tell
 * the retention story at a glance — 5% monthly churn target, 76.6% Yr-1
 * retention, the three-tier ladder. Customer journey is open by default.
 */
export function ChapterLifecycle() {
  return (
    <Chapter
      id="ch-lifecycle"
      eyebrow="After the activation"
      title={<>Lifecycle, loyalty & retention</>}
      intro="Activation is half the work. The other half is the lifecycle programme — 1-to-1 marketing powered by Xanite, the Khosi tier ladder, AmaCoin currency, and the always-on retention mechanics that turn a SIM into a 20-month tenure."
      audienceHint="product · customer ops · CRM owners"
      skimStats={[
        { label: "Monthly churn (floor)", value: "5%" },
        { label: "Monthly churn (target)", value: "3%" },
        { label: "Yr-1 retention", value: "76.6%" },
        { label: "Loyalty tiers", value: "Bronze · Silver · Gold" },
        { label: "Currency", value: "AmaCoin" },
        { label: "Lifecycle stages", value: "5" },
      ]}
      skimSummary={[
        "Day-0 onboarding does the heavy lifting — ~40% of all churn happens in the first 30 days. The journey halves that, lifting average ARPU month from R65 to R116 by Month 4.",
        "Khosi tier ladder is unlock-driven, not spend-driven — every benefit is earned through engagement (matches watched, referrals, content posted), not just topping up.",
        "AmaCoin is the universal reward unit — stadium upgrades, suite draws, content prizes, referral bonuses all use the same currency, making rewards portable across the ecosystem.",
      ]}
      subSections={[
        {
          id: "customer-journey",
          label: "Customer journey — the lifecycle engine",
          blurb:
            "Awareness → Consideration → Acquisition → Activation → Engagement. Trigger-treatment automation via Xanite. CDP architecture. 14-dimension data grid.",
          content: <CustomerJourney />,
        },
        {
          id: "loyalty",
          label: "Loyalty programme — Khosi tier ladder + AmaCoin",
          blurb:
            "Three tiers (Bronze, Silver, Gold). Always-on rewards (Birthday Boost, Refer-a-Khosi). Match-day mechanics. Tier-bonus data wallet — leaving means walking away from value.",
          content: <Loyalty />,
        },
      ]}
    />
  );
}

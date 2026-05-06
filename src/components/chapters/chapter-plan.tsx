"use client";

import { Chapter } from "@/components/chapter";
import {
  ExecutionPlan,
  VoicesAndPlayers,
  SponsorMap,
  ActivationIdeas,
} from "@/components/sections";

/**
 * Chapter 04 — The R4.5M marketing plan.
 *
 * Most relevant to: CMO, marketing director, account leads. Plan detail is
 * open by default because that's the headline — the line-by-line allocation
 * of R4,514,901. Voices, sponsors, and ideas sit collapsed underneath for
 * the audience that wants the channel-and-mechanic depth.
 */
export function ChapterPlan() {
  return (
    <Chapter
      id="ch-plan"
      eyebrow="The R4.5M marketing plan"
      title={<>How the R4,514,901 deploys</>}
      intro="The plan is line-by-line. Seven categories, 18 channels, 23 activation mechanics. Anchored to the KCM Digital Mobile model V2 marketing line — R376,242/month flat, R4,514,901 across the year."
      audienceHint="CMO · marketing director · account leads"
      skimStats={[
        { label: "Yr-1 marketing", value: "R4,514,901" },
        { label: "Monthly", value: "R376,242 flat" },
        { label: "Categories", value: "7" },
        { label: "Channels", value: "18" },
        { label: "Activation ideas", value: "23" },
        { label: "Yr-1 SIM target", value: "192,000" },
      ]}
      skimSummary={[
        "Single canonical execution view — no tier choices, no optional add-ons. The R4.5M is what the V2 model already commits.",
        "Three layers of human reach beyond paid media: KC Legends, current squad (paid + organic), and SA football media (Soccer Laduma, KickOff, Idiski Times, OnsideZA, etc.).",
        "Sponsors stay anchored: MTN (host network), Toyota (matchday + comp legacy), Castle, etc. — KC Mobile sits inside the existing sponsor stack rather than competing with it.",
      ]}
      subSections={[
        {
          id: "execution-plan",
          label: "Plan detail — allocation, funnel, line items",
          blurb:
            "Allocation strip · conversion funnel (impressions → activations → M12 active) · 7 category accordions with every line item, supplier, cost share and reach.",
          content: <ExecutionPlan />,
        },
        {
          id: "voices-and-players",
          label: "Voices & Players — three layers of human reach",
          blurb:
            "KC Legends programme · current squad as paid + organic influencers · SA football media partners (Soccer Laduma, KickOff, Idiski Times, OnsideZA, Bafana Republic).",
          content: <VoicesAndPlayers />,
        },
        {
          id: "sponsors-collab",
          label: "Sponsors — current KC partner map",
          blurb:
            "Where each current KC sponsor (MTN, Toyota, Castle, etc.) sits in relation to KC Mobile — collaboration angles, not competition.",
          content: <SponsorMap />,
        },
        {
          id: "ideas",
          label: "Launch ideas — 23 activation mechanics",
          blurb:
            "Match-day, retail, AmaCoin, CVP-led — every mechanic tagged with persona, channel, sim type, KPI.",
          content: <ActivationIdeas />,
        },
      ]}
    />
  );
}

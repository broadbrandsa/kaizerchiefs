"use client";

import { Chapter } from "@/components/chapter";
import { Audience, Strategy, MarketingTargeting } from "@/components/sections";

/**
 * Chapter 02 — Audience & strategic frame.
 *
 * Most relevant to: CMO, brand director, creative leads. The skim panel
 * captures the 4 numbers most executives need to remember; the accordion
 * gives the audience leadership the full Nielsen breakdown and persona detail.
 */
export function ChapterAudienceStrategy() {
  return (
    <Chapter
      id="ch-audience-strategy"
      eyebrow="Who & how"
      title={<>The audience and the strategic frame</>}
      intro="Six Nielsen insights tell us where Amakhosi actually lives, listens and decides. Eight personas turn the composite fan into specific people. Five strategic pillars hold every line of the plan together."
      audienceHint="CMO · brand director · creative leads"
      skimStats={[
        { label: "KC fans surveyed", value: "n=487" },
        { label: "Personas", value: "8" },
        { label: "Strategic pillars", value: "4" },
        { label: "TikTok YoY (sports)", value: "+37.9%" },
        { label: "Top-2 betting interest", value: "62.85%" },
      ]}
      skimSummary={[
        "The KC base over-indexes Gen-Z (16–25), African-language radio, TikTok, sports betting, and matchday camaraderie — channels English-metro brands rarely buy.",
        "Eight personas (Diehard, Sister, Born-Free, Family, Hustler, Diaspora, Junior, Elder) drive different products and creative — every campaign ladders to a named persona.",
        "Four pillars: Trade muscle, fan voice · Earned camaraderie, not interruption · Mobile-first, vernacular-led · Always-on retail visibility. Every R of the R4.5M plan answers to one of them.",
      ]}
      subSections={[
        {
          id: "audience",
          label: "Audience — Nielsen + the 8 personas",
          blurb:
            "Nielsen Sports SA NFI (n=487, March 2025) plus the 8-persona breakdown. Diehard → Sister → Born-Free → Family → Hustler → Diaspora → Junior → Elder.",
          content: <Audience />,
        },
        {
          id: "strategy",
          label: "Strategy — the 4 pillars",
          blurb:
            "Trade muscle, fan voice · Earned camaraderie, not interruption · Mobile-first, vernacular-led · Always-on retail visibility. Each pillar laddered to the Product CVPs it powers.",
          content: <Strategy />,
        },
        {
          id: "marketing-targeting",
          label: "Marketing targeting map — stadiums, walls & digital halo",
          blurb:
            "1 KC home venue · 15 PSL away venues · 15 Cider Point walls (with GPS, traffic counts, LSM bands) · digital nationwide. Visualised on the SA map.",
          content: <MarketingTargeting />,
        },
      ]}
    />
  );
}

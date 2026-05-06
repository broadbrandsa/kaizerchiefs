"use client";

import { Chapter } from "@/components/chapter";
import { Overview } from "@/components/sections";

/**
 * Chapter 01 — Overview.
 *
 * The "frame" chapter. Always-on for execs of every stripe — sets the brief
 * and hands them the sources panel so anything else they read is verifiable.
 * The Overview component itself already contains the brief, success metrics,
 * primary audience and the Sources panel; we render it here without a heavy
 * skim layer because the section already is the skim.
 */
export function ChapterOverview() {
  return (
    <Chapter
      id="ch-overview"
      eyebrow="The brief"
      title={<>What we&apos;re solving for</>}
      intro="KC Mobile has the brand and the network. What it doesn't yet have is reach into the Amakhosi base, persuasive storytelling, and visible distribution. The plan attacks all three at once."
      audienceHint="every exec, no matter the function — the 2-minute setup."
      subSections={[
        {
          id: "overview",
          label: "Brief, success metrics & sources",
          blurb:
            "The challenges, the success picture, the audience — and the 10 sources every figure on this site is traceable to.",
          content: <Overview />,
        },
      ]}
    />
  );
}

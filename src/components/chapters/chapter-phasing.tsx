"use client";

import { Chapter } from "@/components/chapter";
import { Timing, RetailFuture } from "@/components/sections";

/**
 * Chapter 06 — Phasing & the future.
 *
 * Most relevant to: every exec, GM. Closes the proposal with the timeline
 * (M-2 → M12) plus the Year-2 outlook on retail expansion. Phasing is open
 * by default because it's the part everyone reads.
 */
export function ChapterPhasing() {
  return (
    <Chapter
      id="ch-phasing"
      eyebrow="Phasing & the future"
      title={<>When everything turns on — and what comes next</>}
      intro="The launch arc starts 8–12 weeks before the SIM goes on sale (the waitlist phase) and runs through 12 months of football-rhythm marketing. After M12, Year-2 retail expansion conversations open."
      audienceHint="every exec · GM"
      skimStats={[
        { label: "Pre-launch", value: "M-2 → M0" },
        { label: "Launch arc", value: "M0 → M12" },
        { label: "Football-rhythm waves", value: "4" },
        { label: "Tribal phases", value: "4" },
        { label: "Year-2 retail", value: "Prospective" },
      ]}
      skimSummary={[
        "Pre-launch (M-2 → M0): the waitlist phase. 8–12 weeks of audience capture before any SIM is sold — locks in 30K–50K signups with email + cell + favourite-player data.",
        "Launch arc (M0 → M12) runs in four football-rhythm waves: Kickoff (M1–2), Momentum (M3–5), Anchor (M6–8), Lock-in (M9–12). Spend stays flat; focus shifts.",
        "Year-2 retail expansion is exploratory only — PEP and Shoprite conversations open from M9–12. No current partnership; nothing in Yr-1 budget assumes this.",
      ]}
      subSections={[
        {
          id: "timing",
          label: "Phasing detail — the full launch arc",
          blurb:
            "Pre-launch waitlist (M-2 → M0) · 6-month Gantt (M0 → M6) · 12-month football-rhythm phases · tribal phasing (CVPs come live in waves).",
          content: <Timing />,
        },
        {
          id: "retail-future",
          label: "Retail futures — Year-2 outlook",
          blurb:
            "PEP and Shoprite explored as prospective Year-2 partners. Not in Yr-1 plan. Conversations open M9–12.",
          content: <RetailFuture />,
        },
      ]}
    />
  );
}

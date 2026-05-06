/**
 * Section registry — the canonical ordered list of all sections on the page.
 * Used by the Section primitive ("Chapter N of M"), the side menu, the quick-jump
 * overlay, and the keyboard-shortcut nav (j / k).
 *
 * Read-time estimates are rough (200 wpm body text + 30s for charts/tables).
 */

export type SectionMeta = {
  /** Anchor id (matches the <Section id=...>) */
  id: string;
  /** Short label used in nav UIs */
  label: string;
  /** One-line description used in the quick-jump overlay */
  blurb: string;
  /** Estimated reading time in minutes, rounded up */
  readMin: number;
  /** Visual group — keeps the quick-jump grouped logically */
  group:
    | "frame"      // hero / overview — set the scene
    | "audience"   // who we're talking to
    | "model"      // the financial model
    | "plan"       // the actual plan, line items
    | "channels"   // sponsors, voices, players, ideas
    | "lifecycle"  // loyalty, journey
    | "ops"        // suppliers, retail futures
    | "phasing"    // waitlist, timing, measurement
    | "future";    // year 2
};

export const SECTION_REGISTRY: SectionMeta[] = [
  { id: "overview",          label: "Overview",          blurb: "What this proposal is and how to read it.",                    readMin: 2, group: "frame" },
  { id: "audience",          label: "Audience",          blurb: "Who the KC fan is — Nielsen wave, dual-SIM, fintech-MVNO over-index.", readMin: 4, group: "audience" },
  { id: "strategy",          label: "Strategy",          blurb: "The five strategic pillars holding the plan together.",          readMin: 3, group: "frame" },
  { id: "model",             label: "Investment model",  blurb: "Numbers from the KCM Digital Mobile model — no sliders.",      readMin: 5, group: "model" },
  { id: "execution-plan",    label: "Plan detail",       blurb: "What R9M of marketing executes, line by line.",                readMin: 8, group: "plan" },
  { id: "sponsors-collab",   label: "Sponsors",          blurb: "Current KC sponsors and how each sits with KC Mobile.",         readMin: 3, group: "channels" },
  { id: "earned-voices",     label: "Voices",            blurb: "KC Legends + SA football media — borrowed reach.",              readMin: 3, group: "channels" },
  { id: "player-channel",    label: "Players",           blurb: "Current squad as a paid influencer channel.",                  readMin: 5, group: "channels" },
  { id: "ideas",             label: "Launch ideas",      blurb: "15 activation mechanics — match-day, retail, engagement.",     readMin: 7, group: "channels" },
  { id: "loyalty",           label: "Loyalty",           blurb: "Khosi tier ladder + always-on rewards + retention mechanics.", readMin: 5, group: "lifecycle" },
  { id: "customer-journey",  label: "Customer journey",  blurb: "1-to-1 lifecycle marketing, powered by Xanite.",               readMin: 7, group: "lifecycle" },
  { id: "suppliers",         label: "Suppliers",         blurb: "Rate-card-anchored vendor directory.",                          readMin: 3, group: "ops" },
  { id: "retail-future",     label: "Retail futures",    blurb: "PEP / Shoprite Phase 2 partnership — Year 2 distribution.",     readMin: 3, group: "ops" },
  { id: "waitlist",          label: "Pre-launch",        blurb: "8–12 weeks of waitlist building before SIM goes on sale.",     readMin: 3, group: "phasing" },
  { id: "timing",            label: "Phasing",           blurb: "12-month rhythm + 6-month launch activation timeline.",         readMin: 4, group: "phasing" },
  { id: "measure",           label: "Measurement",       blurb: "What we report on, on what cadence, to whom.",                  readMin: 2, group: "phasing" },
  { id: "year-2",            label: "Year 2",            blurb: "Six themes for the year-2 expansion plan.",                     readMin: 2, group: "future" },
];

export const TOTAL_READ_MIN = SECTION_REGISTRY.reduce((acc, s) => acc + s.readMin, 0);

export function getSectionMeta(id: string): SectionMeta | undefined {
  return SECTION_REGISTRY.find((s) => s.id === id);
}

export function getSectionPosition(id: string): { index: number; total: number } | null {
  const idx = SECTION_REGISTRY.findIndex((s) => s.id === id);
  if (idx < 0) return null;
  return { index: idx, total: SECTION_REGISTRY.length };
}

export function getNextSection(id: string): SectionMeta | null {
  const idx = SECTION_REGISTRY.findIndex((s) => s.id === id);
  if (idx < 0 || idx >= SECTION_REGISTRY.length - 1) return null;
  return SECTION_REGISTRY[idx + 1];
}

export function getPrevSection(id: string): SectionMeta | null {
  const idx = SECTION_REGISTRY.findIndex((s) => s.id === id);
  if (idx <= 0) return null;
  return SECTION_REGISTRY[idx - 1];
}

export const SECTION_GROUP_LABELS: Record<SectionMeta["group"], string> = {
  frame:     "Setting the scene",
  audience:  "Who we're talking to",
  model:     "The financial model",
  plan:      "What the budget executes",
  channels:  "Channels & ideas",
  lifecycle: "Loyalty & lifecycle",
  ops:       "Suppliers & retail",
  phasing:   "Phasing & measurement",
  future:    "What comes next",
};

/**
 * Section / chapter registry.
 *
 * The site now has TWO levels of structure:
 *   • CHAPTER_REGISTRY — the 6 first-level chapters that make up the proposal.
 *     Used by the Chapter primitive ("Chapter N of M") and the side menu.
 *   • SECTION_REGISTRY — the legacy ordered list of sub-sections, kept for
 *     deep-link anchors and so older parts of the site that look up section
 *     metadata (group labels, blurbs) keep working.
 *
 * The Chapter ribbon now displays based on CHAPTER_REGISTRY, not the legacy
 * SECTION_REGISTRY — so sub-sections nested inside a Chapter accordion don't
 * show their own chapter ribbon any more.
 */

export type ChapterMeta = {
  id: string;
  label: string;
  audience: string;
  blurb: string;
  /** ordered list of sub-section ids that live inside this chapter */
  subSectionIds: string[];
};

export const CHAPTER_REGISTRY: ChapterMeta[] = [
  {
    id: "ch-overview",
    label: "Overview",
    audience: "All exco · 2 minutes",
    blurb: "What this proposal is, how to read it, and where every number comes from.",
    subSectionIds: ["overview"],
  },
  {
    id: "ch-audience-strategy",
    label: "Audience & strategic frame",
    audience: "CMO · brand · creative",
    blurb: "Who we're talking to (Nielsen + 8 personas) and the five strategic pillars that hold the plan together.",
    subSectionIds: ["audience", "strategy"],
  },
  {
    id: "ch-product-money",
    label: "Product, pricing & the model",
    audience: "CFO · CEO · commercial",
    blurb: "The financial picture, the 8 product CVPs, and the 7 packages + 1 diaspora pack + 5 VAS — all at ≥50% gross margin.",
    subSectionIds: ["model", "product-cvps", "pricing"],
  },
  {
    id: "ch-plan",
    label: "The R4.5M marketing plan",
    audience: "CMO · marketing director",
    blurb: "How the R4,514,901 Yr-1 marketing budget deploys — line by line, plus the channels and ideas that carry the campaign.",
    subSectionIds: ["execution-plan", "voices-and-players", "sponsors-collab", "ideas"],
  },
  {
    id: "ch-lifecycle",
    label: "Lifecycle, loyalty & retention",
    audience: "Product · customer ops",
    blurb: "What happens after activation — the 1-to-1 customer journey and the Khosi tier ladder + AmaCoin retention engine.",
    subSectionIds: ["customer-journey", "loyalty"],
  },
  {
    id: "ch-phasing",
    label: "Phasing & the future",
    audience: "All exco · GM",
    blurb: "When each piece turns on (M-2 → M12) and what Year-2 retail expansion looks like.",
    subSectionIds: ["timing", "retail-future"],
  },
];

export const TOTAL_CHAPTERS = CHAPTER_REGISTRY.length;

export function getChapterPosition(id: string): { index: number; total: number } | null {
  const idx = CHAPTER_REGISTRY.findIndex((c) => c.id === id);
  if (idx < 0) return null;
  return { index: idx, total: CHAPTER_REGISTRY.length };
}

export function getChapterMeta(id: string): ChapterMeta | undefined {
  return CHAPTER_REGISTRY.find((c) => c.id === id);
}

// ---------------------------------------------------------------------------
// Legacy SECTION_REGISTRY — sub-section metadata, kept so nothing breaks.
// ---------------------------------------------------------------------------

export type SectionMeta = {
  id: string;
  label: string;
  blurb: string;
  readMin: number;
  group:
    | "frame"
    | "audience"
    | "model"
    | "plan"
    | "channels"
    | "lifecycle"
    | "ops"
    | "phasing";
};

export const SECTION_REGISTRY: SectionMeta[] = [
  { id: "overview",            label: "Overview",         blurb: "What this proposal is and how to read it.",                                  readMin: 2, group: "frame" },
  { id: "audience",            label: "Audience",         blurb: "Nielsen composite + the 8-persona breakdown.",                                readMin: 8, group: "audience" },
  { id: "strategy",            label: "Strategy",         blurb: "The five strategic pillars holding the plan together.",                       readMin: 3, group: "frame" },
  { id: "product-cvps",        label: "Product CVPs",     blurb: "8 non-comparable products — 5 of 8 first-in-SA-market.",                       readMin: 6, group: "model" },
  { id: "model",               label: "Investment model", blurb: "V2 KCM Digital Mobile model · ARPU R116.51 · self-funding from M10.",         readMin: 5, group: "model" },
  { id: "pricing",             label: "Pricing",          blurb: "7 packages + 1 Diaspora travel pack + 5 VAS add-ons — all at ≥50% GM.",     readMin: 4, group: "model" },
  { id: "execution-plan",      label: "Plan detail",      blurb: "What R4.5M of marketing executes, line by line (KCM model V2 marketing line).", readMin: 8, group: "plan" },
  { id: "sponsors-collab",     label: "Sponsors",         blurb: "Current KC sponsors and how each sits with KC Mobile.",                       readMin: 3, group: "channels" },
  { id: "voices-and-players",  label: "Voices & Players", blurb: "KC Legends · current squad · SA football media — three layers of human reach.", readMin: 8, group: "channels" },
  { id: "ideas",               label: "Launch ideas",     blurb: "23 activation mechanics — match-day, retail, AmaCoin, CVP-led.",             readMin: 8, group: "channels" },
  { id: "loyalty",             label: "Loyalty",          blurb: "Khosi tier ladder + AmaCoin currency + retention mechanics.",                readMin: 5, group: "lifecycle" },
  { id: "customer-journey",    label: "Customer journey", blurb: "1-to-1 lifecycle marketing, powered by Xanite.",                              readMin: 7, group: "lifecycle" },
  { id: "retail-future",       label: "Retail futures",   blurb: "Prospective Year-2 retail partnerships (PEP / Shoprite explored).",            readMin: 3, group: "ops" },
  { id: "timing",              label: "Phasing",          blurb: "M-2 waitlist → 12-month rhythm → 6-month launch timeline → tribal phasing.",   readMin: 8, group: "phasing" },
];

export const TOTAL_READ_MIN = SECTION_REGISTRY.reduce((acc, s) => acc + s.readMin, 0);

export function getSectionMeta(id: string): SectionMeta | undefined {
  return SECTION_REGISTRY.find((s) => s.id === id);
}

/**
 * Returns the chapter position for a given section id, OR returns null when
 * the id is a sub-section nested inside a chapter (so the Section primitive
 * suppresses the chapter ribbon for nested items). Returns the chapter
 * position only when the id is a top-level chapter id.
 */
export function getSectionPosition(id: string): { index: number; total: number } | null {
  // Only chapters get the ribbon — sub-sections inside accordions don't.
  return getChapterPosition(id);
}

export function getNextSection(id: string): SectionMeta | undefined | null {
  const idx = SECTION_REGISTRY.findIndex((s) => s.id === id);
  if (idx < 0 || idx >= SECTION_REGISTRY.length - 1) return null;
  return SECTION_REGISTRY[idx + 1];
}

export function getPrevSection(id: string): SectionMeta | undefined | null {
  const idx = SECTION_REGISTRY.findIndex((s) => s.id === id);
  if (idx <= 0) return null;
  return SECTION_REGISTRY[idx - 1];
}

export const SECTION_GROUP_LABELS: Record<SectionMeta["group"], string> = {
  frame:     "Setting the scene",
  audience:  "Who we're talking to",
  model:     "The financial model + product",
  plan:      "What the budget executes",
  channels:  "Channels & ideas",
  lifecycle: "Loyalty & lifecycle",
  ops:       "Suppliers & retail",
  phasing:   "Phasing & measurement",
};

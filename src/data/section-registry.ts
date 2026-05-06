/**
 * Section registry — the canonical ordered list of all sections on the page.
 * Used by the Section primitive ("Chapter N of M") and the side menu.
 */

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
  { id: "execution-plan",      label: "Plan detail",      blurb: "What R9M of marketing executes, line by line.",                              readMin: 8, group: "plan" },
  { id: "sponsors-collab",     label: "Sponsors",         blurb: "Current KC sponsors and how each sits with KC Mobile.",                       readMin: 3, group: "channels" },
  { id: "voices-and-players",  label: "Voices & Players", blurb: "KC Legends · current squad · SA football media — three layers of human reach.", readMin: 8, group: "channels" },
  { id: "ideas",               label: "Launch ideas",     blurb: "23 activation mechanics — match-day, retail, AmaCoin, CVP-led.",             readMin: 8, group: "channels" },
  { id: "loyalty",             label: "Loyalty",          blurb: "Khosi tier ladder + AmaCoin currency + retention mechanics.",                readMin: 5, group: "lifecycle" },
  { id: "customer-journey",    label: "Customer journey", blurb: "1-to-1 lifecycle marketing, powered by Xanite.",                              readMin: 7, group: "lifecycle" },
  { id: "retail-future",       label: "Retail futures",   blurb: "PEP / Shoprite Phase 2 partnership — Year 2 distribution.",                    readMin: 3, group: "ops" },
  { id: "timing",              label: "Phasing",          blurb: "M-2 waitlist → 12-month rhythm → 6-month launch timeline → tribal phasing.",   readMin: 8, group: "phasing" },
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

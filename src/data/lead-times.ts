/**
 * LEAD_TIMES — supplier / activation booking lead times.
 * Surfaced in the Annex Lead Times section so reviewers can see exactly when
 * each piece of work has to start, working back from M0 launch (SIM goes on
 * sale).
 */

export type LeadTimeRow = {
  id: string;
  /** What the line is */
  item: string;
  /** Who runs it / supplies it */
  supplier: string;
  /** How long the work takes once it starts */
  duration: string;
  /** Earliest date we have to commit / start, expressed as months before launch */
  startMonth: string;
  /** Whether this kicks in at launch (M0), pre-launch, or staged */
  goLive: string;
  /** What it unlocks / why timing matters */
  why: string;
  /** Risk band — high, medium, low */
  risk: "high" | "medium" | "low";
  /** Group it belongs to */
  group:
    | "platform"
    | "supplier-media"
    | "stadium-events"
    | "creative"
    | "field-ops"
    | "regulatory"
    | "ka-trade";
};

export const LEAD_TIME_GROUP_LABELS: Record<LeadTimeRow["group"], string> = {
  platform:        "Platform & integrations",
  "supplier-media":"Supplier-booked media",
  "stadium-events":"Stadium & match-day",
  creative:        "Creative production",
  "field-ops":     "Field ops & distribution",
  regulatory:      "Regulatory & legal",
  "ka-trade":      "Trade & retail",
};

export const LEAD_TIMES: LeadTimeRow[] = [
  // ---- Platform & integrations (the hard ones — start FIRST) ----
  {
    id: "mtn-mvne",
    item: "MTN MVNE technical integration",
    supplier: "MTN MVNE engineering team",
    duration: "12–16 weeks",
    startMonth: "M-5",
    goLive: "M0 — required for any SIM activation",
    why: "Without MVNE integration there is no SIM. Port-in flow, USSD codes, SIM provisioning, billing, customer service. The single longest-lead-time dependency in the plan.",
    risk: "high",
    group: "platform",
  },
  {
    id: "xanite",
    item: "Xanite CDP + CVM integration",
    supplier: "DSG (Xanite)",
    duration: "6–8 weeks",
    startMonth: "M-3",
    goLive: "M0 — required for activation event tracking + lifecycle journeys",
    why: "Xanite ingests activation events from MTN MVNE, segments customers in real-time, fires the welcome journey + churn-prevention flow. Without Xanite the lifecycle programme has no rails. Has dependency on MVNE integration being live first.",
    risk: "high",
    group: "platform",
  },
  {
    id: "kc-app-zerorated",
    item: "Zero-rate the KC app (carrier whitelisting)",
    supplier: "MTN + KC app team",
    duration: "4 weeks",
    startMonth: "M-2",
    goLive: "M0",
    why: "KC app data flows through MTN MVNE — needs IP whitelisting, carrier aggregation testing, billing-rule configuration so app traffic doesn't decrement customer data balance.",
    risk: "medium",
    group: "platform",
  },
  {
    id: "fieldagent",
    item: "FieldAgent.net (Hustler field-team management)",
    supplier: "FieldAgent.net",
    duration: "2–3 weeks",
    startMonth: "M-2",
    goLive: "M-2 — needs to be live to start recruiting Hustlers",
    why: "Standing up the field-force management system. SaaS, fast to deploy, but agent onboarding and route planning need to be configured before recruiting starts.",
    risk: "low",
    group: "platform",
  },

  // ---- Supplier-booked media ----
  {
    id: "dms-premier-league",
    item: "DMS Premier League Tactical Sponsorship",
    supplier: "DStv Media Sales (DMS)",
    duration: "Booking lead time 6–8 weeks",
    startMonth: "M-2",
    goLive: "M1 (first SS PSL/Premier League broadcast slot)",
    why: "R1.62M line item. SS Premier League sponsorship inventory has to be booked weeks ahead — slots fill on a rolling basis. Late booking = different (less prime) inventory.",
    risk: "high",
    group: "supplier-media",
  },
  {
    id: "dstv-stream",
    item: "DStv Stream LIVE/VOD inventory",
    supplier: "DStv Media Sales",
    duration: "Booking lead time 4–6 weeks",
    startMonth: "M-1.5",
    goLive: "M1",
    why: "Live stream + Catch Up VOD inventory. Booked separately to the broadcast sponsorship.",
    risk: "medium",
    group: "supplier-media",
  },
  {
    id: "cider-point-walls",
    item: "Cider Point Media — 6 named walls",
    supplier: "Cider Point Media & Marketing",
    duration: "14–21 days post-artwork sign-off",
    startMonth: "M-1",
    goLive: "M0–M1",
    why: "6-month flight booked Jun–Aug 2026. Production lead time after artwork is ~3 weeks; landlord approvals and prep included. Mid-flight wall replacement (if a site becomes unavailable) takes another 14–21 days — confirm cancellation/replacement clauses upfront.",
    risk: "medium",
    group: "supplier-media",
  },
  {
    id: "sabc-radio",
    item: "SABC African-language radio",
    supplier: "Ukhozi / Umhlobo / Lesedi / Motsweding",
    duration: "Booking 4 weeks; live reads need 1-week artwork turnaround",
    startMonth: "M-1",
    goLive: "M0",
    why: "12-month always-on. Initial booking confirms slot allocation; weekly creative refresh runs from M0 onwards.",
    risk: "low",
    group: "supplier-media",
  },
  {
    id: "onsideza",
    item: "OnsideZA — full-season title sponsorship",
    supplier: "Mediamark / OnsideZA",
    duration: "Booking 4–6 weeks",
    startMonth: "M-1.5",
    goLive: "Tied to PSL season start (~Aug)",
    why: "Watchalong title sponsor + sponsored live reads. Needs alignment with PSL season opener for maximum impact.",
    risk: "low",
    group: "supplier-media",
  },

  // ---- Stadium & match-day ----
  {
    id: "stadium-permits",
    item: "Stadium fan-zone permits + venue access",
    supplier: "FNB Stadium operator + KC Stadium Ops",
    duration: "6+ weeks for first permit; ~2 weeks/match thereafter",
    startMonth: "M-2",
    goLive: "M1 first home league fixture",
    why: "Stadium permit, gate-crew clearance, venue insurance. The first match takes the longest (template once approved); subsequent matches are faster.",
    risk: "medium",
    group: "stadium-events",
  },
  {
    id: "stadium-kit",
    item: "Stadium fan-zone kit production + delivery",
    supplier: "DSG production",
    duration: "4–6 weeks",
    startMonth: "M-1.5",
    goLive: "M1 first match",
    why: "Branded gazebos, signage, table-throws, activation tablets. Kit refresh per match takes 1–2 days but original kit production is 4–6 weeks.",
    risk: "medium",
    group: "stadium-events",
  },
  {
    id: "soweto-derby",
    item: "Soweto Derby fan-festival",
    supplier: "KC Mobile + MTN co-funded",
    duration: "8 weeks build-up",
    startMonth: "Match-fixture-dependent (work back 8 weeks from derby date)",
    goLive: "Tied to PSL fixture calendar",
    why: "Concert + fan-zone + giveaway. Need to confirm derby date as soon as PSL fixture list is published — venue booking, talent, sponsor co-funding all have lead times.",
    risk: "high",
    group: "stadium-events",
  },

  // ---- Creative production ----
  {
    id: "player-shoot-pre",
    item: "Player shoot — pre-season",
    supplier: "DSG production",
    duration: "1-day shoot + 4-week edit",
    startMonth: "M-2",
    goLive: "M0 (creative ready for M-1 to M0 paid media starts)",
    why: "All hero creative comes from this shoot. Player availability is the constraint — shoot date locks once fixture/training calendar is confirmed.",
    risk: "high",
    group: "creative",
  },
  {
    id: "vernacular-creative",
    item: "Vernacular-led creative production (4 SA languages)",
    supplier: "DSG creative + SA-vernacular freelance pool",
    duration: "8–12 weeks for full production cycle (concept → script → shoot → edit per language)",
    startMonth: "M-3",
    goLive: "M0 (vernacular hero creative ready for SABC + regional)",
    why: "Vernacular at the centre, not the translation — requires writing in each language at source, casting vernacular talent, regional cultural-context direction. 4 languages × parallel production is 12-week work.",
    risk: "medium",
    group: "creative",
  },
  {
    id: "pos-kit",
    item: "POS kit production + dealer install (800 stores, wave 1)",
    supplier: "DSG production + installer network",
    duration: "6 weeks",
    startMonth: "M-1.5",
    goLive: "M0 dealer-shelf-ready",
    why: "Wobblers, riser cards, jersey-week posters, A-frames, table-throws. National install network; covers 800 stores in a coordinated 2-week sweep before launch.",
    risk: "medium",
    group: "creative",
  },

  // ---- Field ops & distribution ----
  {
    id: "hustler-recruit",
    item: "Hustler informal-trade network — recruit + onboard 30–50 agents",
    supplier: "DSG field-ops + FieldAgent.net",
    duration: "6–8 weeks",
    startMonth: "M-2",
    goLive: "M0 (agents in market)",
    why: "Recruit, vet, train and equip 30–50 informal-trade agents (spaza shops, salons, taxi-rank kiosks). Each needs SIM stock, branded materials, mobile-money payout setup and FieldAgent app onboarding.",
    risk: "high",
    group: "field-ops",
  },
  {
    id: "regional-team",
    item: "Regional activation-day team",
    supplier: "KC Mobile regional team",
    duration: "4 weeks recruit + train",
    startMonth: "M-1",
    goLive: "M1",
    why: "48 activation days/year across 9 provinces. Branded car visits township taxi ranks, malls, dealer flagships.",
    risk: "low",
    group: "field-ops",
  },

  // ---- Regulatory & legal ----
  {
    id: "amacoin-sarb",
    item: "AmaCoin SARB consultation (stored-value classification)",
    supplier: "DSG legal + KC Mobile + SARB",
    duration: "8–12 weeks",
    startMonth: "M-3",
    goLive: "M0 (loyalty programme launch)",
    why: "If AmaCoin is classified as a 'stored-value instrument' under SARB rules, KC Mobile needs ITC (Instant Transfer Certificate) coverage or SARB approval. Regulatory clarification before launch is non-negotiable.",
    risk: "high",
    group: "regulatory",
  },
  {
    id: "player-image-rights",
    item: "Player paid-post agreements (personal-channel content)",
    supplier: "KC commercial + player agents",
    duration: "3–4 weeks per player",
    startMonth: "M-2",
    goLive: "M0 (12 senior posts across the season)",
    why: "KC owns image rights for KC-channel content. Personal-channel paid posts require a separate written agreement per player, negotiated through their agents.",
    risk: "medium",
    group: "regulatory",
  },
  {
    id: "popia-consent",
    item: "POPIA consent + event-capture audit",
    supplier: "DSG legal + Xanite",
    duration: "4 weeks",
    startMonth: "M-2",
    goLive: "M0",
    why: "Customer activation events flow through Xanite CDP + outbound to MTN, Meta, TikTok ad platforms. POPIA consent flow needs audit before any data leaves SA. Architecture is POPIA-compliant by design but the consent UX needs sign-off.",
    risk: "medium",
    group: "regulatory",
  },

  // ---- Trade & retail ----
  {
    id: "mtn-dealer-merch",
    item: "MTN dealer in-store merchandising commitment",
    supplier: "MTN retail + KC Mobile commercial",
    duration: "4 weeks (negotiate + lock)",
    startMonth: "M-2",
    goLive: "M0 (KC Mobile SIM in 800 stores)",
    why: "47% of Yr-1 acquisitions come through MTN's dealer footprint. KC Mobile needs written commitment from MTN that the SIM gets shelf placement, in-store rep training, and not de-prioritised vs MTN's own products. Without this, the 102K POS-acquisition target is aspirational.",
    risk: "high",
    group: "ka-trade",
  },
  {
    id: "kappa-bundle",
    item: "Kappa bundle deal — in-store SIM + Kappa kit",
    supplier: "Kappa SA + KC commercial",
    duration: "4 weeks negotiate",
    startMonth: "M-2",
    goLive: "M1",
    why: "Co-funded bundle — Kappa kit + KC Mobile starter SIM at sportswear retail. Needs Kappa SA agreement on co-fund split.",
    risk: "low",
    group: "ka-trade",
  },
];

/**
 * Critical-path summary — the items KC Mobile cannot launch without.
 * Used by the Lead Times section to show "5 things that have to start now".
 */
export const CRITICAL_PATH_IDS = [
  "mtn-mvne",
  "amacoin-sarb",
  "vernacular-creative",
  "mtn-dealer-merch",
  "soweto-derby",
];

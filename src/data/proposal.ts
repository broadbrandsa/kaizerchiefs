// KC Mobile MVNO Launch Proposal — content model
// Sources: KC Mobile MVNO Draft V3, Nielsen Sports SA NFI March 2025,
// DMS Rate Card March 2026, Mediamark Digital Rate Card Sept 2025,
// OnsideZA Show Deck,

export const BRIEF_HIGHLIGHTS = {
  client: "Kaizer Chiefs Mobile (KC Mobile)",
  duration:
    "12 months — single plan, R4.51M Yr-1 marketing investment (per KCM Digital Mobile model V2)",
  monthlyTargetPhysical: 16000,
  monthlyTargetEsim: 200,
  goToMarket:
    "Wholesale distribution-led — 80% physical SIM (wholesale & retail), 20% eSIM (digital & stadium)",
  primaryAudience: [
    "Kaizer Chiefs supporters nationwide (15M+ supporter base)",
    "Youth and young professionals (18–45)",
    "Township and peri-urban markets",
    "Supporters seeking affordable mobile connectivity",
  ],
  challenges: [
    "Lack of brand awareness among KC supporters",
    "Little understanding of what KCM is about",
    "No compelling value proposition driving retention",
    "Over-reliance on KC-owned platforms for acquisition",
    "Limited physical points of distribution and weak in-store POS",
  ],
};

export const NIELSEN_INSIGHTS = [
  {
    headline: "TikTok usage for sports content up 37.9% YoY",
    detail:
      "85.5% of KC fans use TikTok for sports news and stories — among the largest YoY jumps Nielsen recorded in any platform. TikTok is no longer a 'youth' channel; it is the youngest mass channel.",
    source: "Nielsen NFI SA March 2025 — Kaizer Chiefs fans",
  },
  {
    headline: "Sports betting top-2 interest sits at 62.85%",
    detail:
      "Up 18.4% since 2023 among KC fans. SuperSportBet is already on the KC website; mobile + betting + match-day is a tight cluster.",
    source: "Nielsen NFI SA March 2025",
  },
  {
    headline: "Camaraderie #1 stadium attendance driver",
    detail:
      "48.1% of KC fans attend matches to experience camaraderie among passionate fans (14.5% above the SA football fan average). KC Mobile activations should sit inside that camaraderie, not next to it.",
    source: "Nielsen NFI SA March 2025",
  },
  {
    headline: "DStv Compact Stream +50.2% YoY",
    detail:
      "DStv Compact Stream is up 50.2% YoY among KC fan households. Mobile-first sports streaming is the breakout behaviour — the eSIM upgrade story writes itself here.",
    source: "Nielsen NFI SA March 2025",
  },
  {
    headline: "Over-indexed on low-income households",
    detail:
      "KC fans show a 12-percentage-point over-index versus the SA average for households earning under R5,000/month. Affordability has to be the front of every CTA — pricing simplicity is non-negotiable.",
    source: "Nielsen NFI SA March 2025",
  },
  {
    headline: "Gauteng under-indexes; NW, MP, EC over-index",
    detail:
      "KC's strongest fan over-index is in North West, Mpumalanga and Eastern Cape — exactly where MTN retail and KC's regional cars need parity, and where peri-urban distribution wins.",
    source: "Nielsen NFI SA March 2025",
  },
];

export const STRATEGIC_PILLARS = [
  {
    pillar: "Trade muscle, fan voice",
    summary:
      "Wholesale distribution does the volume; the KC fan voice does the persuasion. Every channel either drives sell-through at a MTN/independent counter, or drives an eSIM activation in-app.",
    cvps: ["CVP-1 AmaCoin", "CVP-5 Eskhotini Hustler"],
    personas: ["P1", "P5"],
  },
  {
    pillar: "Earned camaraderie, not interruption",
    summary:
      "KC fans show up to feel something together. Activations belong inside that ritual — pre-match, derby, supporters' bus, regional rally — not as ad-overlays.",
    cvps: ["CVP-2 MatchPass", "CVP-7 Stadium Mode", "CVP-3 Khosi Sisters Circle"],
    personas: ["P1", "P2", "P3"],
  },
  {
    pillar: "Mobile-first, vernacular-led",
    summary:
      "TikTok, WhatsApp and YouTube reach the KC base far better than English metro media. Build creative with vernacular at the centre, not the translation.",
    cvps: ["CVP-4 Junior Khosi", "CVP-8 Khosi Heritage", "CVP-6 Diaspora Khosi"],
    personas: ["P3", "P7", "P8", "P6"],
  },
  {
    pillar: "Always-on retail visibility",
    summary:
      "POS at MTN shops, independent dealers, and the Hustler informal-trade network (spaza shops, salons, taxi ranks) — with hand-painted township co-branding on those same shopfronts — keeps KC Mobile in the field of view between match-days. PEP and Shoprite are prospective Year-2 partners, not Yr-1 commitments.",
    cvps: ["CVP-5 Eskhotini Hustler", "Township Co-branding"],
    personas: ["P5", "P4", "P8"],
  },
];

export const SUPPLIER_DIRECTORY = [
  {
    name: "DStv Media Sales (DMS)",
    role: "Premium sport TV, DStv Stream, Pause Screen, Catch Up VOD",
    sourceDoc: "DMS Rate Card March 2026",
    standoutPackages: [
      "Premier League Tactical Sponsorship — R1,621,688 (200 matches, squeezebacks + 30s TVC, 2.1M digital impressions)",
      "DStv Stream LIVE non-skip mid-roll — R250 CPM at 50% off (R150K = 600,000 impressions)",
      "Pause Screen (Decoder Catch Up) — 4-week R500,000, 1-week R185,000",
      "Mass Market Sport 'Striker' Bundle (SEM 3–5) — R120,000 / 204 spots",
    ],
  },
  {
    name: "Mediamark",
    role: "Digital audio, display, podcast network (Podcast & Chill, Onside, Spreading Humours)",
    sourceDoc: "Mediamark Digital Rate Card Sept 2025",
    standoutPackages: [
      "Jacaranda FM / ECR display CPM — R290",
      "Jacaranda FM / ECR audio pre/mid-roll — R256 CPM",
      "Podcast & Chill Network bespoke pre-roll — R600 CPM",
      "MSN / WMG YouTube Skippable Pre-roll — R420 CPM",
      "Outstream Native Video — R450 CPM",
    ],
  },
  {
    name: "OnsideZA (Podcast & Chill Network)",
    role: "South Africa's #1 sports podcast, watchalong host",
    sourceDoc: "OnsideZA Show Deck",
    standoutPackages: [
      "117k average monthly YouTube views, 86% male, 8.14 min AVD",
      "Bafana watchalongs hit 176k views with 98% like ratio",
      "Sponsored live reads, watchalong title sponsor, integration with PNC influencer roster (>11M combined reach)",
    ],
  },
  {
    name: "SABC African-language radio",
    role: "Mass-reach broadcast in vernacular — drives township and peri-urban awareness (only relevant if marketing investment supports broadcast in addition to digital + retail)",
    sourceDoc: "Industry standard reach figures",
    standoutPackages: [
      "Ukhozi FM (isiZulu) — ~6.6M weekly listeners, KZN/Gauteng/MP",
      "Umhlobo Wenene (isiXhosa) — Eastern Cape stronghold",
      "Lesedi FM (Sesotho) — Free State / Gauteng townships",
      "Motsweding FM (Setswana) — North West (KC over-indexes here)",
    ],
  },
  {
    name: "ByDesign (DSG retained PR firm)",
    role: "Brand and proactive PR — already retained by DSG. Handles KC Mobile launch announcement, business and tech press, fintech-MVNO angle, broadcast booking. Charges DSG, not KC Mobile, so KC Mobile does not pay agency rates.",
    sourceDoc: "DSG agency-of-record relationship",
    standoutPackages: [
      "KC Mobile launch announcement embargo + first-day press kit — no incremental cost (inside DSG retainer)",
      "Business and fintech press placement (BusinessLIVE, Daily Investor, MyBroadband)",
      "Broadcast booking (eNCA Tonight, Newzroom Afrika business slots)",
      "Crisis-comms playbook + on-call rapid response",
    ],
  },
  {
    name: "KC in-house Communications & PR",
    role: "Club-channel announcements, supporter community, sports-news outreach (Soccer Laduma, KickOff, Idiski Times, SABC Sport, Robert Marawa). On the KC payroll — no incremental cost to KC Mobile.",
    sourceDoc: "kaizerchiefs.com — Communications Department",
    standoutPackages: [
      "Owns the KC press list, the sports-desk relationships and the embargoed-content protocol",
      "Coordinates player availability for press conferences and one-on-one interviews",
      "Manages the kaizerchiefs.com newsroom + KC TV bulletin slots",
      "Handles KC stadium media accreditation for KC Mobile launch moments",
    ],
  },
  {
    name: "Cider Point Media & Marketing — primary township-OOH partner",
    role: "Primary township co-branding partner. 15 named hand-painted wall sites across Gauteng (11) + KZN (4) — Soweto (4), Alexandra (2), Tembisa (2), Pretoria (3), Umlazi/Chatsworth/KwaMashu (4). Each site comes with on-file traffic count (12K–220K cars/month), LSM 4–7 audience, on-site photo, and partial GPS coordinates. Account manager: John Mokolobetsi Ditshwene.",
    sourceDoc: "Cider Point Media OOH Schedule (Jun–Aug 2026) + Walls Site List with GPS Coordinates GAUTENG & KZN",
    standoutPackages: [
      "15 named township walls — discounted monthly media rental R14,000 (R20,000 for the 3 Pretoria premium sites · R15,000 rate card with 7% off)",
      "Production R12,000 per wall (R7,800–R8,000 for Pretoria) — once-off",
      "Quoted 3-month launch flight (Jun–Aug 2026): R780,000 ex VAT (R588K media + R192K production)",
      "Each wall comes with monthly traffic count, LSM 4–7 audience profile, on-site photo, partial GPS coordinates",
      "Walls cluster on the highest-density KC heartlands: Soweto, Alexandra, Tembisa, Pretoria, Umlazi, KwaMashu, Chatsworth",
    ],
  },
  {
    name: "Back to Front Media & Events Solutions — alternative supplier",
    role: "Alternative township-OOH supplier evaluated against Cider Point. Capability profile (no specific named sites — buyer directs wall locations). Hand-painted 3D/HD wall murals (2m × 10m fixed), spazashop / tarven / motor-spares shopfront wraps, taxi-rank decals. Track record on SafeLine, Choose Circumcision, Diski Flava (Visa/FNB), BettaBets, Kellogg's, Ricoffy.",
    sourceDoc: "Back to Front service proposal · TOWNSHIP OUT OF HOME ADVERTISING (B2FMediaProposal_UpdatedProfile_02102025_120241.pdf)",
    standoutPackages: [
      "Hand-painted 2m × 10m wall murals: R10,000 production once-off + R5,500/month media rental per wall (≈40% cheaper than Cider Point but no named sites supplied)",
      "All-in: travel, accommodation, flighting + de-flighting included; landlord approvals managed",
      "20-day production lead time post artwork sign-off",
      "Hustler-tier shopfront wrap execution: branded gazebo, signage, till-counter decals, taxi-rank stickers",
      "Spaza/outlet/business branding: R13,500 small-medium · R15,500+ large/supersized (once-off)",
    ],
  },
  {
    name: "Xanite · The MVNO Value Engine",
    role: "DSG-built Customer Data Platform with 16 microservices delivering advanced segmentation, journey orchestration and multi-channel campaign management. The 1-to-1 lifecycle marketing engine for KC Mobile.",
    sourceDoc: "Xanite One-Pager · Vincent Maher (vincentm@dsg.co.za) · Xanite.com",
    standoutPackages: [
      "Layer 1 — CDP: Profile, Consent, Event Ingestion, Analytics (POPIA-compliant)",
      "Layer 2 — Segmentation: Real-time + batch segmentation engine",
      "Layer 3 — Marketing automation: Campaigns, Journeys, Messages, AI Service (drag-and-drop builder, Churn Prevention Flow ships out-of-the-box)",
      "Layer 4 — Integrations: Webhooks, Connectors, Google, Meta",
      "Real-time KPIs + campaign management + comprehensive platform control",
    ],
  },
];
// ============================================================================
// Retail Futures — Phase 2 (PEP / Shoprite) callout
// ============================================================================

export const RETAIL_FUTURE = {
  headline: "Retail futures · the PEP and Shoprite opportunity",
  intro:
    "KC Mobile is exploring a Phase-2 retail partnership with PEP and/or Shoprite. Both unlock distribution scale that takes years to build organically — PEP alone has 5,700+ stores across the Pepkor footprint, and Shoprite' Flash kiosk network blankets the country. The proposal sets the trade footprint up to absorb a partnership of either kind in H2 of the 12-month plan.",
  bullets: [
    {
      title: "PEP — 5,700+ store footprint",
      detail:
        "PEP already sells SIM starter packs from major networks. The model: PEP earns a percentage of airtime loaded throughout the SIM's active life. KC Mobile slots into that model with a co-branded starter pack on PEP shelves. Footprint match: dominantly township and peri-urban — exactly the KC fan over-index.",
    },
    {
      title: "Shoprite — Flash kiosks + Sixty60",
      detail:
        "Shoprite and the Flash kiosk network give KC Mobile recharge and starter-pack access at every Shoprite/Shoprite/Usave point of sale. Sixty60 unlocks delivery — a SIM with the groceries.",
    },
    {
      title: "What happens in this proposal",
      detail:
        "In the first 3 months we reserve 10 PEP test sites for early-access negotiations. By month 6 the partnership-scoping work funds 50 PEP test sites if access is granted. From month 9 onwards the partnership goes live at scale — the trade footprint and POS refresh cadence are sized to absorb it.",
    },
    {
      title: "Why now",
      detail:
        "SA retailers are already moving on this — grocery-linked mobile rewards have launched at one major retailer in 2025. PEP and Shoprite are the natural next moves. KC Mobile has a 12–18 month window to lock in shelf space before category becomes contested.",
    },
  ],
};

export const TIMING_FRAMEWORK = [
  {
    phase: "Kickoff — Months 1–2",
    weight: "Go-live + retail flood + match-day fan zones",
    purpose:
      "Launch noise. The brand lands in the stadium, on the supporters' bus, and on the shop floor. POS goes up at every priority dealer. Fan zones run at every home match. Paid digital warms up the supporter look-alikes. Goal: 16,000+ SIM activations in Month 1.",
  },
  {
    phase: "Momentum — Months 3–5",
    weight: "First Soweto Derby + engagement mechanics live",
    purpose:
      "First Soweto Derby week activates the full launch-ideas playbook — Goal QR Boost, Pre-Match Data Drop, Stadium Suite Upgrade Draw, Player Meet-and-Greet. Refer-a-Khosi gets seeded into the early base. Paid digital scales as performance creative finds its winners.",
  },
  {
    phase: "Anchor — Months 6–8",
    weight: "Mid-season + EPL run-in · retention takes over",
    purpose:
      "Mid-season. The loyalty programme shifts from acquisition to retention — Bronze customers start hitting the Silver tier qualification window. Win-Streak Reward fires the first time KC win 3 league matches in a row. EPL run-in adds a second wave of paid-digital intent.",
  },
  {
    phase: "Lock-in — Months 9–12",
    weight: "Finals + retention push · Year-2 retail expansion conversations open",
    purpose:
      "Finals season + year-end retention push. The Player-Designed Jersey Draw runs in Month 12 (Gold-tier only). Year-2 retail expansion conversations (PEP / Shoprite explored as prospective partners) open from Month 9. Trade-partner final push for retention reorders. The data layer (CRM, KC App account binding) is the foundation for year 2.",
  },
];

export const MEASUREMENT_KPIS = [
  {
    kpi: "Monthly physical SIM activations",
    target: "16,000 monthly net adds — M1 target per the KCM model V2 (ARPU R116.51)",
    measure: "MVNO core system reporting, weekly cadence",
  },
  {
    kpi: "Monthly eSIM activations",
    target: "200 monthly net adds — M1 target per the KCM model V2 (ARPU R116.51)",
    measure: "MVNO core system + KC.com / app activation funnel",
  },
  {
    kpi: "Cost per acquisition (CPA)",
    target: "Blended ≤ R23.51 (per V2 KCM Digital Mobile model: R4,514,901 marketing ÷ 192,000 Yr-1 gross adds = R23.51)",
    measure:
      "Total marketing spend ÷ gross activations. Industry comparable for SA MVNO blended CPA is R150–R250; the model achieves R23.51 because ~47% of gross adds come through the MTN dealer footprint, where MTN's standard channel commission funds the channel — KC Mobile pays only the marketing layer on top.",
  },
  {
    kpi: "Trade sell-through rate",
    target: ">70% of distributed SIMs activated within 30 days",
    measure: "Distributor stock vs activation reconciliation",
  },
  {
    kpi: "Stadium activation conversion",
    target:
      ">20% of KC fan zone visitors complete an activation; >25% give a WhatsApp opt-in",
    measure:
      "Activation booth tablet data + redemption tracking + post-match SMS NPS",
  },
  {
    kpi: "WhatsApp port-in completion rate",
    target: ">35% of started chat conversations complete a port-in",
    measure: "WhatsApp Business API conversation analytics",
  },
  {
    kpi: "Channel ROI",
    target:
      "Reported quarterly; reallocate the bottom 20% of channels into the top 20% from Q2 onwards",
    measure: "Marketing dashboard with weekly leading indicators",
  },
];

export const NEXT_STEPS = [
  "Confirm the R4.51M Yr-1 marketing investment with KC leadership against the V2 KCM Digital Mobile model (R376,242/month × 12 = R4,514,901).",
  "Lock the MTN and Toyota co-funded line items — both already exist as KC sponsors and sit in the plan as co-funded, not net new spend.",
  "Initiate PEP and Shoprite Phase-2 partnership conversations (relevant from month 4 onwards).",
  "Confirm DMS Premier League Tactical Sponsorship + DStv Stream LIVE/VOD inventory — both have lead times of 6–8 weeks.",
  "Sign off on the player content shoot day(s) — required before paid media can spend behind launch creative.",
  "Stand up the WhatsApp Business port-in chatbot + measurement dashboard before week 1 of paid media.",
  "Agree the priority store list by province with KC commercial — sized to the GTM channel allocation (800-store national wholesale + 3,500 retail + 3,000 Hustler network).",
];

// ============================================================================
// KC sponsor map — current partners and how KC Mobile collaborates with each
// Sourced from kaizerchiefs.com sponsor footer and the KC ecosystem deck
// ============================================================================

export interface SponsorCollab {
  name: string;
  role: string;
  /** Headline collaboration angle — one line */
  headline: string;
  /** What KC Mobile gets / what the sponsor gets — paired commercial logic */
  exchange: string;
  /** Concrete mechanics, week-of-the-launch level */
  mechanics: string[];
  /** What budget tier this is realistic in */
  tierFit: ("pilot" | "targeted" | "full")[];
  /** Compliance / risk note (alcohol, betting, kids) */
  note?: string;
}

export const SPONSOR_MAP: SponsorCollab[] = [
  {
    name: "Kappa",
    role: "Kit + apparel sponsor · KC Digistore retail",
    headline:
      "Kappa is the kit. The Digistore is a retail surface KC Mobile has never used — every kit purchase is a moment to put a SIM in the bag.",
    exchange:
      "KC Mobile gets a captive purchase moment among the most committed fans. Kappa gets a value-add on apparel that lifts AOV without dropping price.",
    mechanics: [
      "Buy KC Kit → free KC Mobile SIM at the Digistore checkout (online + in-stadium pop-up)",
      "Co-branded supporter pack — Kappa Classic Cotton Tee + KC Mobile SIM + 2GB activation in one box, R299 retail",
      "Jersey-week posters carry a Kappa + KC Mobile co-brand lock-up — same hero artwork in stores and on POS",
      "Kappa retail outlet pilot — 5 standalone Kappa stores stock KC Mobile starter packs (from month 4 onwards)",
    ],
    tierFit: ["pilot", "targeted", "full"],
  },
  {
    name: "Toyota",
    role: "Vehicle sponsor · long-running giveaway partner",
    headline:
      "Toyota already gave away a Toyota Cross to a KC fan via the SIM mechanic in 2022. The story is in supporter memory — we run it back, sharper.",
    exchange:
      "KC Mobile gets a category-stopping prize. Toyota gets footfall to dealerships and a credible affinity story to KC's mass-market base.",
    mechanics: [
      "Toyota Cross 2026 — every SIM activation between months 4 and 12 enters automatically; live draw at Soweto Derby with Chairman or senior player",
      "Test-drive + activate combo — book a test-drive via the dealer, complete a SIM activation, get a R200 fuel voucher and an entry into the Cross draw",
      "Toyota dealer commission — dealers earn the standard R20/SIM commission plus a Toyota-funded R30 bonus during the activation Saturdays",
    ],
    tierFit: ["targeted", "full"],
  },
  {
    name: "Carling Black Label",
    role: "Carling Black Label Cup partner",
    headline:
      "The CBLB Cup is one of the loudest fan-engagement properties in SA football. KC Mobile rides the property for sports-bar and township activation reach.",
    exchange:
      "KC Mobile gets an existing fan-festival footprint. CBLB gets a younger affinity layer (KC Mobile fan-base index +18 on 16–29s).",
    mechanics: [
      "CBLB Cup match-day fan zones — KC Mobile activation booth alongside the Carling activation",
      "Township sports-bar takeovers during away-match viewings — Carling barman runs a 'Cheers to Connection' moment, gives a SIM to the loudest table",
      "Soweto Derby fan-festival co-fund — 50/50 split with CBLB on the fan festival in months 7–12",
      "Limited-edition CBLB-branded SIM pack — collector edition handed out at Cup matches only",
    ],
    tierFit: ["targeted", "full"],
    note: "Compliance: alcohol partnership. All KC Mobile creative inside CBLB activations stays focused on the SIM proposition and respects ARA Code of Commercial Communications. Activations and creative must be 18+.",
  },
  {
    name: "SuperSport",
    role: "Broadcaster · channel partner",
    headline:
      "SuperSport carries the PSL into 6.6M+ SA homes weekly. KC Mobile rides the same broadcast feed where KC fans already are.",
    exchange:
      "KC Mobile gets premium adjacency to PSL match coverage. SuperSport gets multi-million rand commitment when the marketing investment scales to support broadcast.",
    mechanics: [
      "DStv Stream LIVE non-skip mid-rolls inside SS PSL coverage — KC Mobile lives in the broadcast",
      "Halftime SMS-keyword competition — fans SMS 'KC' to a short-code during halftime to enter a free-SIM draw, results announced post-match",
      "KC TV (the club's video platform) — KC Mobile pre-roll on every KC TV video, evergreen",
      "SuperSport Schools long-tail — KC Mobile sponsors the KC youth development tournaments shown on SuperSport Schools (year-2 add-on)",
    ],
    tierFit: ["targeted", "full"],
  },
  {
    name: "SuperSportBet",
    role: "Betting partner · already on KC.com",
    headline:
      "62.85% of KC fans have top-2 interest in sports betting. SS Bet is already on the KC website — KC Mobile becomes the SIM that powers the bet.",
    exchange:
      "KC Mobile gets a tight cross-sell mechanic with a high-affinity partner. SS Bet gets a SIM-bundled acquisition channel.",
    mechanics: [
      "Bet + SIM combo — open an SS Bet account through the KC Mobile WhatsApp flow, get a free 2GB activation",
      "Halftime QR mechanic on match-days — scan to bet + reserve a SIM (collected at the fan zone)",
      "Joint match-day kiosk in the fan zone — port-in counter and SS Bet sign-up counter live next to each other (with a clear 'this is the bet, this is the SIM' separation)",
    ],
    tierFit: ["targeted", "full"],
    note: "Compliance: betting partner. All KC Mobile activations stay focused on the SIM proposition. SS Bet messaging follows National Gambling Board guidelines (18+, responsible gambling messaging, no celebrity endorsements that imply guaranteed wins).",
  },
  {
    name: "Kaelo",
    role: "Health & wellness partner",
    headline:
      "Kaelo brings affordable health products into the KC ecosystem — KC Mobile bundles the SIM with health benefits for new sign-ups.",
    exchange:
      "KC Mobile gets a mid-funnel value-add. Kaelo gets an SIM-acquired user base for cross-sell into Kaelo's health products.",
    mechanics: [
      "KC Mobile + Kaelo wellness bundle — SIM + 30-day Kaelo wellness benefit trial for new activations (year-2 add-on)",
      "Wellness-day data drops — 1GB data on World Mental Health Day, Heart Awareness Month for KC Mobile users on Kaelo's plan",
      "Kaelo employer onboarding — KC Mobile starter SIM offered as a welcome benefit through Kaelo's B2B channel",
    ],
    tierFit: ["full"],
  },
  {
    name: "Old School",
    role: "Heritage clothing brand · KC retail partner",
    headline:
      "Old School trades on KC heritage — KC Mobile rides the same nostalgia for an 'OG fan' supporter pack.",
    exchange:
      "KC Mobile gets affinity with the long-form fan. Old School gets foot-traffic to its retail and KC.com placements.",
    mechanics: [
      "OG Fans supporter pack — Old School retro tee + KC Mobile SIM + sticker pack (limited run, 2,500 units)",
      "Old School retail pop-up — KC Mobile starter packs stocked at Old School retail outlets (where they exist)",
      "Heritage Day (24 Sept) drop — co-branded collector SIM card, available only at the Heritage Day fan festival",
    ],
    tierFit: ["full"],
  },
  {
    name: "MyTicket / KC Tickets",
    role: "Ticketing platform",
    headline:
      "Every KC home-game ticket bought is a captive moment to attach a SIM. We add a SIM upsell at the MyTicket checkout.",
    exchange:
      "KC Mobile gets pre-match acquisition with the most engaged fans. MyTicket gets a richer order — incremental fee on attached items.",
    mechanics: [
      "Add-a-SIM at checkout — every match-ticket purchase on MyTicket offers a R29 KC Mobile starter pack with 2GB pre-loaded",
      "Pre-match SMS — 'Your KC ticket is confirmed. Pre-order your SIM and pick it up at the fan zone in <90 seconds'",
      "Loyalty integration — KC Mobile activations earn MyTicket loyalty points for the next match",
    ],
    tierFit: ["pilot", "targeted", "full"],
  },
];

// ============================================================================
// Activation launch ideas — tactical playbook for putting SIMs in hands
// ============================================================================

export interface ActivationIdea {
  name: string;
  /** Where this works */
  setting: "match-day" | "off-stadium";
  /** Acquisition (activation) vs retention (engagement) — or both */
  audienceType: "activation" | "engagement" | "both";
  /** Which SIM format the mechanic targets */
  simType: "physical" | "esim" | "both";
  /** Single line of what happens */
  whatHappens: string;
  /** Why it converts */
  whyItWorks: string;
  /** Conversion mechanic */
  mechanic: string;
  /** Estimated cost band — informs which tier this fits */
  costBand: "low" | "medium" | "high";
  /** Which CVP this activation is a delivery mechanism for (optional) */
  cvp?: string;
  /** Primary persona(s) this activation targets (optional) */
  personas?: string;
}

export const ACTIVATION_IDEAS: ActivationIdea[] = [
  // ---- Match-day fan-zone ideas ----
  {
    name: "Stadium Suite Upgrade Draw",
    setting: "match-day",
    audienceType: "activation",
    simType: "both",
    whatHappens:
      "Anyone who activates a KC Mobile SIM (or eSIM) at the stadium gates on match-day automatically enters a draw to be upgraded to a hospitality suite for that game. The winner is announced on the big screen just before kick-off.",
    whyItWorks:
      "An on-the-day prize that is too good to walk past. Suites are KC-owned inventory — the cost is access, not cash. The winner-on-the-screen moment is the most envy-inducing 30 seconds of the entire match-day.",
    mechanic:
      "Brand ambassadors at every gate run port-in tablets (physical SIM) and NFC tap-points (eSIM). Every activation in the 90-minute pre-match window enters the draw automatically. Random draw runs at T-15 minutes; winner phone-pinged + walked from their seat to the suite by an ambassador. Winner + suite shoutout on the big screen at T-5 (with consent captured on activation).",
    costBand: "medium",
  },
  {
    name: "Port-in Pole Position",
    setting: "match-day",
    audienceType: "activation",
    simType: "both",
    whatHappens:
      "First 100 fans in the queue at the KC fan zone get a free 2GB activation + an entry into the next-match home-ticket draw.",
    whyItWorks:
      "Creates a queue and a story. Queue-as-marketing — fans see the line, want in. The ticket draw is the lure; the queue is the impression.",
    mechanic:
      "Numbered wristbands handed out by a brand ambassador at the fan zone gate from 3 hours before kick-off. Wristband 1–100 = SIM + draw entry. Wristbands work for both physical SIM port-in or eSIM activation.",
    costBand: "low",
  },
  {
    name: "Goal QR Boost",
    setting: "match-day",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "Every time KC scores in a home match, a QR code flashes on the big screen for 90 seconds. KC Mobile customers (physical SIM or eSIM) scan it and get 100MB instantly loaded onto their SIM.",
    whyItWorks:
      "Rewards the loyal — only existing KC Mobile customers can redeem. Builds a 'have your KC Mobile out at the match' habit. Every goal becomes a brand moment for the holders, and an envy-driver for non-holders sitting next to them.",
    mechanic:
      "On goal: PA announcement + 90-second QR window on the big screen. QR opens an MSISDN-validated landing page; valid KC Mobile numbers get 100MB pushed via the core system in under 60 seconds. Capped at one redemption per fan per match.",
    costBand: "medium",
  },
  {
    name: "Pre-Match Data Drop",
    setting: "match-day",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "Every active KC Mobile SIM gets 20MB free at kick-off of every KC home match — usable only to call, WhatsApp or message other KC Mobile customers.",
    whyItWorks:
      "Closed-network mechanic that builds on-net density. The more friends you bring onto KC Mobile, the more valuable your bundle becomes. Becomes the social glue of the Khosi base — fans WhatsApp each other in real-time during the match using free Khosi-to-Khosi data.",
    mechanic:
      "Triggered by the MVNO core system at home-match kick-off. 20MB on-net credit pushed to every active SIM/eSIM. Routed only for traffic between two KC Mobile MSISDNs. Auto-expires at full-time + 1 hour. SMS notification: 'Match-day. 20MB to talk to other Khosi. #KhosiToKhosi'.",
    costBand: "low",
  },
  {
    name: "Player Meet-and-Greet Draw",
    setting: "match-day",
    audienceType: "activation",
    simType: "both",
    whatHappens:
      "Every port-in at the fan zone enters a draw to win a 60-second meet-and-greet with a senior KC player after the match.",
    whyItWorks:
      "Extreme prize for low spend. Builds activation count. Player only gives ~10 minutes of time; impact is disproportionate.",
    mechanic:
      "Live draw at the fan zone 30 minutes before final whistle. Winner photographed for social — content for the next month.",
    costBand: "low",
  },
  {
    name: "Soweto Derby Power Hour",
    setting: "match-day",
    audienceType: "activation",
    simType: "both",
    whatHappens:
      "Derby week only — any port-in unlocks 4 weeks of double data on whichever bundle the user buys next.",
    whyItWorks:
      "Concentrates urgency around the highest-attendance match-day of the year. Doubles the value perception without doubling the actual cost.",
    mechanic:
      "Derby-week-only promo code burned into the SIM at activation. Co-funded with MTN wholesale.",
    costBand: "high",
  },
  {
    name: "KC Anthem Sing-Along Booth",
    setting: "match-day",
    audienceType: "activation",
    simType: "both",
    whatHappens:
      "Sing the KC anthem at the activation booth (with a bit of feeling), get a free SIM + sticker pack.",
    whyItWorks:
      "Energy mechanic. Fans love this. The booth becomes the loudest spot at the fan zone — drawing more fans by sound alone.",
    mechanic:
      "Karaoke set-up at the booth, KC anthem on a loop. Filmed snippets go straight to TikTok via the brand ambassador's phone.",
    costBand: "low",
  },

  // ---- Off-stadium / regional / sponsor activations ----
  {
    name: "Friday Pay-day Taxi Rank Truck",
    setting: "off-stadium",
    audienceType: "activation",
    simType: "both",
    whatHappens:
      "Branded sound truck deployed to the top-3 taxi ranks (Bree, Noord, Bara) on Fridays before a Saturday KC home game. Activate a SIM or eSIM and stand a chance to win a ticket to that Saturday's match.",
    whyItWorks:
      "Friday paydays are the highest-spend day of the month for KC's prepaid base. Tying the activation to the next-day home match adds urgency and a story-able prize. Captive 5-minute commute window — activation done in <90 seconds.",
    mechanic:
      "Truck deployed only on Fridays preceding a Saturday home fixture (KC's PSL home Saturdays — confirm against the published 2026/27 fixture list before campaign rollout). 15h00–19h00 deployment. 4 port-in tablets (physical SIM) + 4 NFC eSIM stations + 1 DJ + 6 brand ambassadors. Every activation enters the draw; winners drawn live at 19h00 and SMS'd. Tickets collected at the KC Village fan zone the next day.",
    costBand: "medium",
  },
  {
    name: "Saturday Soccer Schools",
    setting: "off-stadium",
    audienceType: "activation",
    simType: "both",
    whatHappens:
      "KC Youth Development Academy hosts community soccer at township grounds. KC Mobile fan-zone runs in parallel for the parents.",
    whyItWorks:
      "Parents are the buyers; kids are the affinity-builders. Captive parental audience of 200+ at every fixture. KC Youth Development is already running these — we co-locate.",
    mechanic:
      "KC Mobile booth alongside the youth fixture. Free 2GB on activation. The kids get a sticker pack while parents activate.",
    costBand: "low",
  },
  {
    name: "Soweto Derby Pre-Match Festival",
    setting: "off-stadium",
    audienceType: "both",
    simType: "both",
    whatHappens:
      "Pre-derby fan festival in Soweto / Joburg CBD on the Friday before the derby — KC legend appearance, live DJ, food trucks, port-in counter.",
    whyItWorks:
      "Builds the derby narrative across 48 hours instead of 2 hours. Owns Friday news cycle. KC Mobile sits at the centre of the moment. Both rewards existing fans and acquires new ones.",
    mechanic:
      "Co-funded with MTN or CBLB. Held at a venue with TV — match-day clips on big screen, hype building. 4-hour activation from 16h00–20h00.",
    costBand: "high",
  },

  // ---- Always-on engagement / retention ideas ----
  {
    name: "Win-Streak Reward",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "When KC win 3 league matches in a row, every active KC Mobile SIM gets a free 1GB.",
    whyItWorks:
      "Ties the customer's mobile experience directly to the team's on-field performance — when KC wins, you win. Free-tier engagement that shows up in the SMS inbox and re-anchors the brand.",
    mechanic:
      "Triggered manually by KC Mobile commercial after the third consecutive league win. SMS to all active SIMs: 'Three in a row! 1GB on us. Amakhosi 4 Life.' Data pushed via core system.",
    costBand: "medium",
  },
  {
    name: "Zero-Rated KC App",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "Everything inside the KC app — match streams, news, KC TV, ticket purchases, KC Digistore, fan content — doesn't count against a KC Mobile customer's data balance. Ever.",
    whyItWorks:
      "A hard, structural value-add only the team-MVNO can offer. Reframes KC Mobile from 'a SIM' to 'the SIM that gives you free access to everything KC' — and turns the KC app into the daily home of the Amakhosi base. The more the customer uses the KC app, the more entrenched the SIM becomes. Sticky retention plus a direct feed into KC's first-party data.",
    mechanic:
      "Zero-rated traffic to the entire KC app domain set (web + iOS + Android), configured at the MTN MVNO core network level. Covers match streaming, news, KC TV, ticketing, Digistore commerce, push notifications and any future KC-owned surfaces. No customer action required. Promoted in onboarding SMS + every match-day comms with the line 'KC on us. Always.'",
    costBand: "medium",
  },
  {
    name: "Player-Designed Jersey Draw",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "KC's top 10 players each design their own jersey — 10 individual designs × 10 jerseys per design = 100 player-designed jerseys produced in total. KC Mobile customers with at least 3 months of tenure and 5+ recharges go into a draw to win one of the 100.",
    whyItWorks:
      "Loyalty-gated grail prize. Combines limited-edition fan merchandise with a hard tenure-and-spend gate that rewards exactly the customer KC Mobile most wants to keep. Player creative authorship makes it press-worthy: 10 separate stories, 10 player content drops, 10 social moments. 100 winners = 100 brand-evangelist-for-life supporters wearing KC Mobile-tagged jerseys in their feeds for years.",
    mechanic:
      "10 KC players selected by KC commercial each design a jersey via a 4-week creative process with the Kappa design team. Each design produced as a 10-piece limited run, certified and numbered (#1/10 through #10/10). Eligibility: KC Mobile SIM active for 3+ months and 5+ successful recharges in that window. Draw run from the MVNO core system on a defined date; 100 winners drawn (10 per design); winners notified by SMS + KC.com announcement; presentation event at a home fixture with the 10 players collectively handing over their designs on the pitch pre-match.",
    costBand: "high",
  },
  // ---- New CVP-anchored activation ideas (from KCM CVPs V2) ----
  {
    name: "Born-Free Creator Fund",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "Monthly fund pays SA TikTok / IG / YouTube Shorts creators in AmaCoin (with cash conversion option) for content tagged #KCMRemix. KCM commissions a guaranteed monthly content cadence from a roster of 30–50 Born-Free creators with 10K+ followers each.",
    whyItWorks:
      "Nielsen 2025 shows TikTok use among KC fans up +37.9% YoY — the steepest social platform shift in the league. The Born-Free persona (16–25, the +17.9% Gen-Z over-index) is impossible to reach via paid ads but moves on creator content. This is the cheapest CPM in the plan.",
    mechanic:
      "Open application via KCM creator portal. Fund tier = follower count × engagement rate × content cadence commitment. AmaCoin payouts flow through Xanite (Integration Layer connectors to Meta + TikTok). KCM creator review approves content before the AmaCoin lands. Monthly cash-out cap to keep the fund predictable.",
    costBand: "medium",
    cvp: "CVP-1 + CVP-3",
    personas: "P3 Born-Free",
  },
  {
    name: "Sisters Live audio rooms",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "Weekly invite-only audio room hosted inside the Khosi Sisters Circle community — a Banyana player, a Chiefs Sister creator, a wellness partner, on the agenda. KCM customers attend free; non-customers see a clip the next day with a Khosi Sisters Circle activation prompt.",
    whyItWorks:
      "Nielsen shows female KC fan interest in women's football jumped +32.6% YoY — the largest gender-inclusive shift in the league. Female KC fans over-index on community/camaraderie (+14.5pp). Sisters Live turns the Khosi Sisters Circle from an SMS membership into a weekly cultural moment.",
    mechanic:
      "Audio room runs in WhatsApp Communities or Spaces. Khosi Sisters Circle members get an in-app push 1 hour before. Recorded for replay. Clip cuts go to TikTok + IG with a Sisters Circle activation deep-link. Every attendee earns 50 AmaCoin for being there.",
    costBand: "low",
    cvp: "CVP-3 Khosi Sisters Circle",
    personas: "P2",
  },
  {
    name: "Family Subsidy kin-link",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "A child or adult relative tops up a Khosi Elder's line in one tap from their KCM app. The elder's bundle never lapses; the relative pays. The kin-link surfaces as a card in the family WhatsApp on the elder's bundle anniversary.",
    whyItWorks:
      "No SA telco has built intergenerational economics into the SIM. Family Subsidy creates a sticky cross-generation bond — the child pays, the parent feels respected, KCM owns the family ritual. Drives Khosi Heritage attach + boosts Family pack adherence.",
    mechanic:
      "Linkage opt-in in the KCM app — kin-link generates a payable token attached to the elder's MSISDN. Family WhatsApp bot fires on day-of-bundle-renewal. One-tap top-up settles to the relative's KCM wallet or EFT. AmaCoin earned on the relative's account, multiplied 1.5× as a 'paying it forward' bonus.",
    costBand: "low",
    cvp: "CVP-8 Khosi Heritage",
    personas: "P4 + P8",
  },
];

// ============================================================================
// Khosi Loyalty Programme — the retention spine of KC Mobile
// Was previously listed as an activation idea; now framed as a standalone
// programme that overlays the engagement mechanics in the activation library.
// ============================================================================

export interface LoyaltyTier {
  name: string;
  position: "01" | "02" | "03";
  qualification: string;
  monthlyDataBonus: string;
  benefits: string[];
}

export const LOYALTY_PROGRAMME: {
  name: string;
  oneLine: string;
  intro: string;
  tiers: LoyaltyTier[];
  alwaysOnRewards: {
    name: string;
    summary: string;
    detail: string;
    mechanic: string;
    eligibility: string;
  }[];
  retention: { title: string; detail: string }[];
  economics: { tier: string; annualCostPerCustomer: string; notes: string }[];
  economicsSources: {
    verified: { input: string; value: string; source: string }[];
    estimated: { input: string; assumption: string; needs: string }[];
  };
  mechanics: { title: string; detail: string }[];
  whyItMatters: { title: string; detail: string }[];
} = {
  name: "Khosi Loyalty Programme",
  oneLine:
    "A three-level retention programme — Bronze, Silver and Gold — that turns tenure and recharge into status, and status into the reason not to churn.",
  intro:
    "Loyalty is the spine of an MVNO. Acquisition gets the SIM in the hand; loyalty keeps it active for years. The Khosi Loyalty Programme is a tier ladder built on tenure and recharge cadence, with each step up the ladder unlocking richer KC-owned inventory (priority tickets, hospitality, exclusive merch). Most rewards cost KC Mobile nothing in cash — they're privileged access to assets KC already owns. The programme runs alongside, not in place of, the engagement mechanics in the activation library — those mechanics feed customers into the tiers; the tiers reward them for staying.",
  tiers: [
    {
      name: "Bronze",
      position: "01",
      qualification: "Active KC Mobile SIM for 1+ month",
      monthlyDataBonus: "100MB",
      benefits: [
        "Digital welcome pack — KC Mobile lock-screen wallpapers, ringtone, sticker pack",
        "Priority match-ticket access — 24 hours before public sale",
        "Access to all base KC Mobile data and voice bundles",
        "Eligible for the always-on rewards (Birthday Boost + Refer a Khosi — see below)",
      ],
    },
    {
      name: "Silver",
      position: "02",
      qualification: "Active KC Mobile SIM for 6+ months · 4+ recharges per quarter",
      monthlyDataBonus: "300MB",
      benefits: [
        "All Bronze benefits",
        "Priority match-ticket access — 48 hours before public sale",
        "Quarterly digital drop (exclusive content, wallpapers) + one physical KC Mobile cap per year",
        "Entry into the monthly hospitality draw (5 Silver winners per home match get fan-zone hospitality)",
        "5% off KC Digistore",
        "Early access window on away-match travel packages",
      ],
    },
    {
      name: "Gold",
      position: "03",
      qualification: "Active KC Mobile SIM for 12+ months · 6+ recharges per 6 months",
      monthlyDataBonus: "700MB",
      benefits: [
        "All Silver benefits",
        "Priority match-ticket access — 1 full week before public sale",
        "Eligibility for the monthly suite-upgrade draw (5 Gold winners per home match) — draw-based, not entitlement",
        "Eligibility for the Player-Designed Jersey Draw (100 jerseys, draw-based, Gold-only gate)",
        "Annual Kappa player-edition merch drop — while stocks last",
        "10% off KC Digistore",
        "Priority access window on Soweto Derby tickets (1 week before public sale)",
      ],
    },
  ],
  alwaysOnRewards: [
    {
      name: "Khosi Birthday Boost",
      summary:
        "Every active KC Mobile customer gets 500MB free on their birthday.",
      detail:
        "A personal touch from a brand most telcos can't deliver. Costs the same as a low-spend Meta campaign per user but lands as a branded moment in the most personal day of the year. Builds emotional bond at zero cognitive friction.",
      mechanic:
        "Birthday captured in the WhatsApp port-in flow as an opt-in field. On the day, 500MB auto-pushed by the MVNO core system; SMS notifies the customer ('Happy Birthday from KC Mobile. 500MB on us. Amakhosi 4 Life.'). Optional uplift for Gold-tier: a personalised KC player birthday video.",
      eligibility:
        "All tiers (Bronze, Silver, Gold). Birthday must have been captured at activation or in subsequent CRM updates.",
    },
    {
      name: "Refer a Khosi",
      summary:
        "Refer a friend; both customers get 500MB when the friend completes their first recharge.",
      detail:
        "Network-effect engagement. The Amakhosi base is dense and connected — friend-of-friend acquisition is the cheapest CPA available to KC Mobile. Existing customers stay engaged because every successful referral earns them more value, and accelerates their path through the loyalty tiers.",
      mechanic:
        "Unique referral code per active SIM, surfaced in the KC Mobile WhatsApp flow + KC.com account view. Friend ports in using the code, recharges within 14 days, both customers get 500MB pushed via the core system. Every 5 successful conversions counts as one extra month of qualifying tenure for tier progression (see 'tier accelerator' under How the programme runs).",
      eligibility:
        "All tiers (Bronze, Silver, Gold). Functions as a tier accelerator — referrals shorten the path to Silver and Gold.",
    },
  ],
  retention: [
    {
      title: "Data Wallet — unused data rolls forward",
      detail:
        "Unused monthly tier-bonus data rolls over for up to 6 months, capped at 2GB stored. The wallet is forfeited if the customer ports out. Real switching cost — leaving means walking away from accumulated value.",
    },
    {
      title: "Anniversary airtime — R20 every 12 months",
      detail:
        "Every 12 months of continuous active service, R20 airtime is auto-credited on the SIM's activation anniversary. Anchored to the original port-in date — switching networks resets the clock entirely.",
    },
    {
      title: "Locked match-ticket priority",
      detail:
        "Priority ticket-access windows (Bronze 24h, Silver 48h, Gold 1 week) are non-transferable and tied to an active KC Mobile MSISDN. Switching means losing tier-priority access — your only route to derby tickets becomes the public sale.",
    },
    {
      title: "Khosi network effect",
      detail:
        "The on-net Khosi-to-Khosi 20MB at every home-match kick-off, plus Refer-a-Khosi rewards, mean every additional friend on KC Mobile increases your value. The denser the Khosi base around you gets, the more painful it is to leave.",
    },
    {
      title: "Tier reset on switch",
      detail:
        "Cancel and re-port within 12 months and you start at Bronze again — no credit for previous tenure. Rebuilding to Gold from scratch is a 12-month commitment. The switching cost is time, not just airtime.",
    },
    {
      title: "Match-day SMS — free to KC Mobile only",
      detail:
        "KC Mobile customers get free match-day SMS alerts (starting line-up, half-time, full-time, away results). Small utility, daily reminder of why you're with KC Mobile, and an SMS-stream you'd lose if you switched.",
    },
    {
      title: "KC App account binding (Phase 2)",
      detail:
        "Once the KC App ties personal accounts to the KC Mobile MSISDN, your fan history (tickets bought, fan-zone activity, KC TV watch history, draw entries) lives at your KC Mobile number. Switching means rebuilding that history elsewhere.",
    },
  ],
  economics: [
    {
      tier: "Bronze",
      annualCostPerCustomer: "≈R8–R15 / customer / year",
      notes:
        "Variable data cost: 100MB/month × 12 = 1.2GB at MVNO wholesale (~R3–R8/GB) ≈ R4–R10. Plus a digital welcome pack (≈R0). Plus a share of always-on rewards (Birthday 500MB ≈ R3, Refer-a-Khosi reciprocal ≈ R3 per conversion). Materially below the typical R15–R30/month MVNO gross profit per active sub.",
    },
    {
      tier: "Silver",
      annualCostPerCustomer: "≈R30–R55 / customer / year",
      notes:
        "Includes Bronze costs + 200MB extra per month (≈R7–R15) + one Kappa cap per year (≈R20 at cost) + small digital quarterly drops. Hospitality draw is opportunity-cost only — KC fan-zone seats not otherwise sold commercially.",
    },
    {
      tier: "Gold",
      annualCostPerCustomer: "≈R80–R140 / customer / year + draw inventory",
      notes:
        "Includes Silver costs + 400MB extra per month (≈R14–R30) + Kappa player-edition piece if won (≈R350–R500 at cost, but stocked-limited and not all Gold customers receive). Suite-upgrade draws (5 winners per home match) are KC-owned inventory — opportunity cost rather than cash. Designed to be aspirational not entitlement.",
    },
    {
      tier: "All-tier always-on",
      annualCostPerCustomer: "≈R5–R10 / active customer / year (blended)",
      notes:
        "Birthday Boost (500MB) and Refer-a-Khosi (500MB to each side per successful conversion) — averaged across the active base. Birthday hits once a year per customer; Refer-a-Khosi rewards only fire on successful first-recharge conversion. Most affordable acquisition mechanic in the plan.",
    },
  ],
  economicsSources: {
    verified: [
      {
        input: "MVNO wholesale data cost",
        value: "R3–R8 / GB",
        source:
          "BMIT SA MVNO Report 2025 + industry analyst commentary on Cell C / MTN wholesale tiers. Capitec Connect's published per-GB cost sits inside this band.",
      },
      {
        input: "SA prepaid ARPU (V2 KCM weighted ARPU R116.51 ex VAT)",
        value: "R63–R76 / month",
        source:
          "Operator financial disclosures (latest annual reports). The relevant figure for KC Mobile (MTN-hosted) is R76.",
      },
      {
        input: "MVNO gross profit per active sub",
        value: "≈R15–R30 / month → R180–R360 / year",
        source:
          "Derived from prepaid ARPU × industry-typical 20–40% MVNO gross margin band. Used as the envelope the loyalty programme must sit inside.",
      },
      {
        input: "SA MVNO market trajectory",
        value: "$505M → $750M (CAGR 8.25%) · 5.91M → 8.45M subs by 2030",
        source: "Mordor Intelligence SA MVNO market report 2025-30.",
      },
    ],
    estimated: [
      {
        input: "Kappa cap wholesale cost",
        assumption: "≈R20 / cap at MOQ wholesale",
        needs:
          "Confirm with Kappa commercial. Real number depends on order quantity and exclusivity terms.",
      },
      {
        input: "Kappa player-edition piece — unit cost",
        assumption: "R350–R500 / piece at limited-edition production volume",
        needs:
          "Confirm with Kappa + KC commercial once production volume is locked.",
      },
      {
        input: "Kappa player-edition piece — Gold reach",
        assumption: "≈15–20% of Gold-tier customers receive in any given year",
        needs:
          "Set the actual production cap with KC commercial. Higher reach increases Gold per-customer cost roughly linearly.",
      },
      {
        input: "Average Refer-a-Khosi conversions",
        assumption: "0.3–0.7 successful conversions / customer / year",
        needs:
          "Validate against actual referral programme data after the first 6 months. SA telco benchmarks suggest this band is realistic.",
      },
      {
        input: "KC-owned inventory (suite seats, hospitality, derby priority)",
        assumption:
          "Treated as zero cash cost — opportunity cost only against commercial seat sales",
        needs:
          "KC commercial to confirm: (a) the annual cap on suite-upgrade-draw inventory; (b) whether complimentary / sponsor-allocation seats can be used; (c) the opportunity-cost number for finance reporting.",
      },
      {
        input: "Always-on data cost averaging",
        assumption:
          "Birthday Boost (500MB) fires once per customer per year; Refer-a-Khosi reciprocal (500MB × 2 sides) at 0.3–0.7 referrals/year",
        needs:
          "Re-baseline once we have 3–6 months of actual core-system push data after launch.",
      },
    ],
  },
  mechanics: [
    {
      title: "Auto-tiering via the MVNO core system",
      detail:
        "Tier status calculated from MSISDN-level activation date and rolling-recharge data. No customer action required — promotions and demotions happen automatically. The CRM pushes a tier-promotion SMS at the moment the customer crosses each threshold.",
    },
    {
      title: "Status visible in WhatsApp + KC Mobile app",
      detail:
        "The customer's current tier badge is surfaced in the WhatsApp account view and (Phase 2) inside the KC app. Tier-progress bar shows how close they are to the next promotion.",
    },
    {
      title: "Lapse protection — 30-day grace",
      detail:
        "Missed a recharge? You don't drop a tier instantly. A 30-day grace period applies before the system demotes a customer; they'll receive an SMS warning at day 21 and a recovery offer at day 28.",
    },
    {
      title: "Refer-a-Khosi as a tier accelerator",
      detail:
        "Every 5 successful Refer-a-Khosi conversions counts as one extra month of qualifying tenure when calculating tier progression. Drives both retention and acquisition through the same mechanic.",
    },
    {
      title: "Tier-locked Player-Designed Jersey Draw",
      detail:
        "The 100-piece Player-Designed Jersey Draw is gated to Gold-tier customers only — making the jersey itself a Gold-tier perk and reinforcing the value of staying long enough to reach Gold.",
    },
  ],
  whyItMatters: [
    {
      title: "Retention beats acquisition on unit economics",
      detail:
        "The V2 model implies a blended marketing CPA of R23.51 (R4,514,901 marketing ÷ 192,000 gross adds), achieved by leveraging MTN's existing channel commission for ~47% of acquisitions. Industry SA-MVNO blended CPA without that leverage is R150–R250. Either way, keeping an existing customer for an extra 6 months costs almost nothing. The loyalty programme is the cheapest growth lever KC Mobile has — and the highest leverage one.",
    },
    {
      title: "KC-owned inventory is the cost-light reward layer",
      detail:
        "Most of the rewards in the programme — priority tickets, hospitality, derby access, KC Gala invitations, Digistore discounts — are KC-owned. The cash cost is in the data bonuses and merch drops; the prestige cost is essentially zero.",
    },
    {
      title: "Status as a self-reinforcing mechanic",
      detail:
        "Once a customer hits Gold, the cost of switching networks isn't just the SIM — it's losing tier status and the perks built up over 12 months. The longer they stay, the harder it is to leave.",
    },
    {
      title: "Data feed for KC's first-party CRM",
      detail:
        "Every tier transition is a signal. The Loyalty Programme feeds tenure, recharge cadence and engagement data straight into KC's CRM — useful well beyond mobile (ticketing, kit launches, hospitality marketing).",
    },
  ],
};

// ============================================================================
// Earned voices — KC Legends + SA football media editorial.
// Borrowed channels with cultural authority and editorial reach.
// ============================================================================

export const EARNED_VOICES = {
  intro:
    "The cheapest, highest-credibility distribution KC Mobile can access is the people and publications that already have the Amakhosi base's attention. KC Legends carry decades of cultural authority — diaspora fans recognise them in Botswana, Zim and Zambia as much as in Soweto. SA football media editorial gets the launch into the hands of fans who don't follow KC's owned channels. Both layers are inexpensive to activate; both are time-sensitive (legends are not always available, and editorial windows close).",
  legends: [
    {
      name: "Doctor Khumalo",
      era: "KC midfield · 1990s · 16. The Doc",
      role: "Cultural anchor + launch-event spokesperson",
      angle:
        "Khumalo speaks for the heritage of the club. His voice on launch day signals 'this is real KC' to every supporter who came of age in the 1990s — i.e. today's 35–55 buying decision-makers in households.",
      ask:
        "Anchor the launch event press conference at Naturena. Record a 60-second hero film opening: 'Amakhosi 4 Life — and now, Amakhosi on the network.' Featured in the Founder Khosi onboarding email.",
    },
    {
      name: "Lucas Radebe",
      era: "Bafana captain · Leeds United · global Amakhosi voice",
      role: "Diaspora and international authority",
      angle:
        "Radebe is the most globally-recognised KC voice. He's the right ambassador for the Botswana / Zim / Zambia / Mozambique cross-border story (Year-2 expansion narrative) and for any international media moment.",
      ask:
        "Pre-record video for the diaspora launch (Year 2). Headline endorsement video for KC Mobile pitched to international football media. KC Legends Founder Khosi feature.",
    },
    {
      name: "Brian Baloyi",
      era: "KC goalkeeper legend · 11 KC trophies",
      role: "Soweto + supporter-club voice",
      angle:
        "Baloyi is the township's KC voice. His authenticity lands harder in Soweto, on Ukhozi FM drive-time, and inside the Khosi 4 Life supporter club community. Less metro media, more grassroots reach.",
      ask:
        "SABC African-language radio live-read partner. Featured speaker at the Saturday Soccer Schools community activations. Brian Baloyi-signed Founder Khosi welcome card for first-100 alpha members.",
    },
    {
      name: "Marks Maponyane",
      era: "KC striker legend · Soweto Derby goalscorer",
      role: "Soweto Derby narrative voice",
      angle:
        "Maponyane is the Soweto Derby authority. His voice anchors Soweto Derby Power Hour and the pre-derby fan festival. Match-day media trail bookings (SuperSport, OnsideZA, Marawa Sports Worldwide if back) tap his profile.",
      ask:
        "Paid integration on every Soweto Derby week — broadcast trail, podcast spots, social cut-downs. Player Meet-and-Greet Draw winner gets time with him on derby weekend.",
    },
  ],
  media: [
    {
      title: "Soccer Laduma",
      role: "SA's biggest football weekly · cover-feature target",
      angle:
        "Embargoed exclusive: cover feature week of launch. Print + digital + WhatsApp Channel hits the heart of the KC base. Fan culture coverage with a player-led narrative.",
      ask:
        "Cover feature with KC Chairman + senior player + KC Mobile commercial lead. Exclusive product photos. Guaranteed insert page in the Soccer Laduma physical edition.",
    },
    {
      title: "KickOff Magazine",
      role: "Competitor weekly · feature placement",
      angle:
        "Feature article (not cover, not exclusive) the same week as the Soccer Laduma cover. Reaches the KickOff-loyal fan segment that Soccer Laduma may not.",
      ask:
        "Feature article on KC Mobile + the Founder Khosi mechanic. Player profile sidebar.",
    },
    {
      title: "Idiski Times",
      role: "Youth-skewing football media",
      angle:
        "16–29 KC fan over-index reads Idiski Times. Reaches the audience that may not see the Soccer Laduma cover. TikTok-friendly content.",
      ask:
        "Sponsored content + organic editorial. Player-led TikTok co-creation.",
    },
  ],
};

// ============================================================================
// Pre-launch waitlist phase — the build-up before M1 Kickoff.
// 8–12 weeks of demand-generation that primes the first-week numbers.
// ============================================================================

export const WAITLIST_PHASE = {
  intro:
    "The 12-month plan starts at M1 Kickoff, but the launch starts 8–12 weeks before. A pre-launch waitlist captures intent, builds scarcity, and primes the first 1,000 customers as a permanent lever for the rest of the campaign. Without this layer, M1 paid digital is starting cold; with it, M1 has 30,000–50,000 warm leads waiting for activation.",
  duration: "8–12 weeks before M1 Kickoff",
  goal: "30,000–50,000 waitlist signups · 1,000 Founder Khosi alpha members",
  pillars: [
    {
      title: "Coming-soon landing page",
      detail:
        "On KC.com — under /kc-mobile or as a takeover banner across the site. Email + WhatsApp opt-in. Hero video, Founder Khosi explainer, countdown to launch. Sponsor co-promotion if MTN + Kappa + Toyota agree to surface it on their owned channels.",
    },
    {
      title: "Founder Khosi mechanic",
      detail:
        "First 1,000 signups become Founder Khosis: permanent badge in the KC Mobile app, double data forever (within the network), exclusive Founder-only Player-Designed Jersey Draw, name listed on the Founder Khosi roll at the KC Naturena entrance. Scarcity is the lever — once 1,000 is reached, the door closes.",
    },
    {
      title: "Khosi 4 Life Supporters Club closed alpha",
      detail:
        "Active Khosi 4 Life members (the existing KC supporter database) get a closed alpha 4 weeks before public launch. They become the first activation cohort, the first content creators, and the first source of customer service feedback.",
    },
    {
      title: "Press embargo + announcement layering",
      detail:
        "Soccer Laduma exclusive announcement at week 6 before launch (waitlist opens). KickOff feature week 4. Idiski Times youth-led editorial at week 1 before launch. Each press hit drives waitlist signups.",
    },
    {
      title: "KC family rollout (internal)",
      detail:
        "All KC employees, senior squad, KC Ladies, KC Reserves, Youth Academy on KC Mobile in week 8–6. Stress-tests activation + customer service flow under realistic conditions. Generates organic 'I'm on KC Mobile' content from players for the public launch.",
    },
    {
      title: "Influencer + KC Legends seeding",
      detail:
        "30 macro SA football influencers, 200 micro KC fan creators, and 5 KC Legends (Khumalo, Radebe, Baloyi, Maponyane, plus the Khosi 4 Life supporter-club leadership) receive Founder Khosi SIMs in week 4. Their organic content seeds the launch buzz.",
    },
  ],
  whyItMatters: [
    "Cold paid digital in M1 is the most expensive media you'll buy. Warm waitlist conversion is among the cheapest. The math improves dramatically if you start M1 with 30,000+ warm leads.",
    "Scarcity (1,000 Founder Khosi spots) does the work of paid media. The closing window creates the urgency that paid creative would otherwise need to manufacture.",
    "Internal launch protects the brand. If activation fails for the first 1,000 customers — better that they're KC employees and Founder Khosis (resilient, forgiving) than first-time supporters with no patience.",
    "Press embargoes are easier to land when you have a hook (waitlist opens) plus a reveal (full launch) plus a moment (launch event). One press push at M1 has half the surface area of three press pushes spaced across the build-up.",
  ],
};

// ============================================================================
// Year-2 outlook — slim. Where this goes after the 12-month plan closes.
// ============================================================================

export const YEAR_2_OUTLOOK = {
  intro:
    "The 12-month plan delivers KC Mobile to ~150,000 active subscribers and a stable retention curve. Year 2 is where the platform earns out — wider footprint, deeper product, harder retention, and the first cross-border step. The five themes below frame the conversation; each one is a one-pager away from a full Year-2 plan when the time comes.",
  themes: [
    {
      title: "Cross-border expansion · Botswana, Zimbabwe, Zambia, Mozambique",
      detail:
        "KC supporter base extends beyond SA. Once Year-1 retention is locked, MVNE partnerships in neighbouring markets (likely on different host networks) unlock 1–3M additional addressable supporters. Lucas Radebe is the natural diaspora ambassador for this phase.",
    },
    {
      title: "KC Mobile Insurance · funeral cover bundled with the SIM",
      detail:
        "The KC Membership page on the official website already references the supporter funeral policy as a fan asset. A bundled SIM + insurance product (sub-R30/month) hits the same affordability sweet spot as the prepaid base and creates a much higher LTV per customer.",
    },
    {
      title: "KC Mobile Money · fintech extension via the WhatsApp port-in flow",
      detail:
        "The WhatsApp port-in flow + RICA database is the foundation for a basic FSP licensed product — peer-to-peer sends to other KC Mobile customers (Khosi-to-Khosi mechanic extended), ticket purchases, Digistore wallet. Adjacent to and competitive with Capitec Connect's bank-led model.",
    },
    {
      title: "eSIM-default positioning · smartphone refresh cycle",
      detail:
        "By Year 2, eSIM-capable phones are mainstream in SA's mid-market. KC Mobile flips its default from physical SIM to eSIM, halving SIM logistics costs. Tap-to-Activate eSIM Posters (originally a launch idea) become the primary acquisition surface.",
    },
    {
      title: "PEP / Shoprite at scale · prospective Year-2 partnerships",
      detail:
        "Yr-1 retail spine is MTN dealer + Hustler informal trade + township murals (no PEP / Shoprite partnership yet). Conversations open from Month 9 of Yr-1 with PEP and Shoprite as prospective partners. If signed, Year 2 scales to the Pepkor footprint (5,700+ stores) and / or Shoprite Flash kiosk network (1,500+ stores). Distribution becomes the Year-2 moat.",
    },
    {
      title: "Year-1 retention narrative as Year-2 fuel",
      detail:
        "Whatever the Year-1 retention numbers are — Bronze→Silver progression rate, churn, ARPU growth — they become the Year-2 acquisition story for the next cohort. 'X% of KC Mobile customers stayed for 12 months' is the line that converts the marginal supporter on month 13.",
    },
  ],
};


/* ---------- EXECUTION PLAN (R4.5M Yr-1 marketing, tier-free) ----------------
 *
 * The single canonical execution view. Anchored to the KCM Digital Mobile
 * model V2 marketing line: R4,514,901 / Yr-1 (= R376,242 / month × 12), as
 * defined in /KC Research/Financials & Model/KCM Digital Mobile model V2.xlsx.
 * The InvestmentModel above shows leadership see the model output as a fixed
 * picture; this section shows what that R4.5M spend actually executes.
 *
 * Notes vs the original "Full Launch" content:
 *  • Yr-1 retail = MTN dealer + Hustler informal trade + township murals. PEP/Shoprite are prospective Year-2 partners only.
 *  • Category totals are unchanged — only the line-item mix inside Digital
 *    and the narrative around streaming has shifted.
 * ---------------------------------------------------------------------------*/

export type PlanLineItem = {
  name: string;
  supplier: string;
  cost: number;
  detail: string;
  reach?: string;
  /**
   * If set, the renderer will append a richer expandable block under this
   * line item. Currently supported:
   *  - "cider-point-walls" — embeds the 15-site Cider Point wall list with
   *    GPS, traffic count, LSM and rate-card data.
   */
  expandKind?: "cider-point-walls";
};

export type PlanCategory = {
  key: string;
  name: string;
  total: number;
  pct: number;
  /** 1-line headline for the category card */
  headline: string;
  /** Longer narrative shown when card expands */
  rationale: string;
  lineItems: PlanLineItem[];
};

export const EXECUTION_PLAN: {
  total: number;
  duration: string;
  geo: string;
  simTarget: string;
  esimTarget: string;
  intro: string;
  pillars: string[];
  categories: PlanCategory[];
} = {
  total: 5_301_000,
  duration: "12 months",
  geo: "National — all 9 provinces, sustained always-on",
  simTarget: "16,000 SIMs / month (steady-state from M3)",
  esimTarget: "200 eSIMs / month",
  intro:
    "All eight channels active inside the Yr-1 marketing budget. DMS Premier League Tactical Sponsorship anchor on SS Premier League broadcasts, Pause Screen, SABC vernacular radio, the combined Retail & Trade spine (MTN dealer formal trade + Hustler informal-trade network across spaza shops + salons + taxi ranks + 6 named Cider Point township co-branding murals on the same shopfronts), and a digital reach layer carrying brand presence. PEP and Shoprite are exploratory Year-2 partnerships, not committed in Yr-1. NB: the total of R5.30M reflects realistic operational additions (Stadium fan-zone uplift to R30K/match, vernacular-led creative production at SA-market rates, Xanite CDP/CVM platform fee, and FieldAgent.net for Hustler field-team management) over the V2 KCM Digital Mobile model's R4.51M baseline marketing line — a +R790K variance (+17.5%) that KC leadership either approves or rebalances by trimming other lines.",
  pillars: [
    "12 hand-painted township co-branding murals (Back to Front) at high-traffic taxi-rank and spaza catchments — Soweto, Mamelodi, Tembisa, KwaMashu, Mdantsane, Mbombela",
    "Premium TV anchor — DMS Premier League Tactical Sponsorship + full DStv Stream LIVE/VOD inventory inside SS PSL and Premier League broadcasts",
    "800-dealer formal trade footprint + Hustler informal-trade network (spaza, salon, taxi rank) + 12 township co-branding murals on the same shopfronts",
    "Full SABC African-language radio + Jacaranda + ECR + OnsideZA full-season title",
    "12 months of stadium + sponsor + regional activation",
    "Programmatic display + connected-TV reach inventory — measurable, fully attributable brand-presence layer across cross-publisher inventory",
  ],
  categories: [
    {
      key: "digital-paid-media",
      name: "Digital Paid Media",
      total: 1_440_000,
      pct: 27,
      headline:
        "Always-on for 12 months across Meta, Google, TikTok, plus DStv Stream LIVE/VOD inside SS PSL and Premier League windows.",
      rationale:
        "Digital is the largest single line because it is the only layer that can be measured to the activation. Programmatic display + connected-TV deliver measurable brand-presence impressions across cross-publisher inventory, while the PSL/Premier League streaming window inside DStv Stream is the streaming anchor.",
      lineItems: [
        {
          name: "Performance social — Meta + TikTok",
          supplier: "Direct (Meta + TikTok)",
          cost: 500_000,
          detail:
            "52 weeks always-on, ≈R25K/week each platform. Lookalikes off the waitlist, retargeting from match-day pixels, post-purchase upsell flows.",
          reach: "≈22M impressions",
        },
        {
          name: "DStv Stream LIVE + VOD",
          supplier: "DMS (DStv Stream)",
          cost: 450_000,
          detail:
            "Mid-roll non-skip + skippable VOD pre-roll inside SS PSL and Premier League windows. The streaming destination for paid-media exposure to the football audience.",
          reach: "≈3.8M impressions",
        },
        {
          name: "Programmatic display + connected-TV",
          supplier: "DSP cross-publisher",
          cost: 250_000,
          detail:
            "Cross-publisher display + connected-TV reach inventory across DSP networks. Measurable, attributable brand-presence layer that runs alongside the football streaming inventory.",
          reach: "≈25M impressions",
        },
        {
          name: "YouTube + Search",
          supplier: "Google Ads + YouTube",
          cost: 240_000,
          detail:
            "TrueView, bumpers, search — 12 months always-on. Search captures the high-intent 'KC Mobile SIM' / 'KC Mobile eSIM' query as it builds.",
          reach: "≈2.6M YouTube views",
        },
      ],
    },
    {
      key: "trade-retail",
      name: "Retail & Trade · spaza, taxi rank, township murals",
      total: 1_241_000,
      pct: 23,
      headline:
        "MTN dealers + independents (formal trade), the Hustler informal-trade network across spaza shops + salons + taxi-rank kiosks, and 6 named Cider Point township co-branding murals (Gauteng + KZN) on the same high-traffic shopfronts. The Yr-1 retail spine is community-anchored.",
      rationale:
        "The Yr-1 retail spine is community-anchored: MTN-dealer formal trade for the formal-economy buyer, plus the Hustler informal-trade network (spaza, salon, taxi-rank kiosks) for township reach, plus 6 hand-painted Cider Point township murals on high-traffic shopfronts in Gauteng + KZN — each with on-file traffic counts (180K–220K cars/month per wall), LSM 4–7 audience, and GPS coordinates per the Cider Point OOH Schedule (Jun–Aug 2026). PEP and Shoprite Phase-2 retail partnerships are exploratory only — covered in the Year-2 outlook in the annex, not committed in this Yr-1 plan.",
      lineItems: [
        {
          name: "POS production + install (4 waves)",
          supplier: "DSG production + installer network",
          cost: 395_000,
          detail:
            "800 dealer stores × 4 waves × R247/store. Wobblers, riser cards, jersey-week posters, A-frames, table-throws — refresh each quarter.",
        },
        {
          name: "Trade commission top-up",
          supplier: "KC Mobile",
          cost: 254_000,
          detail:
            "R30 per activation × est. 16,000/month × 12 months (capped to budget — actual R30 × 16K × 12 = R5.76M total, of which R254K is the trade-commission top-up the plan covers, the balance accruing as standard MTN channel commission). Paid weekly to dealers on top of MTN's standard channel commission.",
        },
        {
          name: "Top-100 dealer hospitality",
          supplier: "DSG hospitality",
          cost: 100_000,
          detail:
            "Quarterly home-game hospitality for top sellers across the dealer network — keeps the frontline emotionally invested in KC Mobile vs rival MVNOs.",
        },
        {
          name: "Township murals — Cider Point Media (production + 5-month flight)",
          supplier: "Cider Point Media & Marketing",
          cost: 492_000,
          detail:
            "6 named walls drawn from the Cider Point 15-site OOH Schedule (Jun–Aug 2026), selected by traffic volume from Gauteng + KZN: Mamelodi West (220K cars/m), Alex London Rd (210K), Alex EastBank (200K), Atteridgeville (200K), Umlazi Mangosuthu (200K), KwaMashu Ntombela (200K). 1.7m × 14.9m to 2.6m × 18m hand-painted murals. Each wall is LSM 4–7, on Cider Point-managed sites with on-site photo, traffic count, and GPS coordinates per the supplier deck (also plotted on the Strategy chapter Marketing Targeting Map). " +
            "Cost note: 2 of the 6 selected walls (Mamelodi West, Atteridgeville) are Pretoria premium sites that bill at R20,000/m media + R7,800–R8,000 production. The other 4 walls bill at R14,000/m + R12,000 production. The line is held at R492,000 by either rotating one Pretoria wall to a non-Pretoria alternative for ~3 of the 5 months OR by absorbing the ~R52,000 gap from the trade-commission top-up. Final wall mix to be locked at supplier sign-off. " +
            "NB: Cider Point's full quoted 3-month flight (all 15 walls, Jun–Aug 2026) is R780,000 ex VAT — keeping the line at this budget level (R492K total) runs 6 walls × 5 months instead of all 15 × 3 months. Back to Front Media is the costed alternative supplier at ≈40% lower per-wall rate but with no named sites — see Annex Media Proposals for the comparison.",
          reach: "≈1.23M cars/month combined supplier-claimed traffic across the 6 walls; ≈13M total impressions across the 5-month flight including pedestrian foot-traffic",
          expandKind: "cider-point-walls",
        },
      ],
    },
    {
      key: "stadium-activation",
      name: "Stadium & National Activations",
      total: 690_000,
      pct: 13,
      headline:
        "Every KC home league match (≈15) gets a fan-zone activation at R30K/match. Plus 4 regional activation days/month and one Soweto Derby fan-festival.",
      rationale:
        "Stadium is where intent crystallises into activation. Fan zones run from kickoff -2h to the final whistle and are the single highest-converting touchpoint in the plan — every line item in the launch-ideas playbook fires here. The fan-zone budget per match has been raised from R20K to R30K to pay for proper field staffing, MTN MVNE-connected activation tablets, kit refresh and SIM stock — the operational rigour required to convert pedestrians at the 0.8% rate the funnel assumes.",
      lineItems: [
        {
          name: "Stadium fan zone — every home match",
          supplier: "KC Stadium Ops + DSG",
          cost: 450_000,
          detail:
            "15 match-days × R30K (up from R20K — needed to fund field-team staffing of 6–10 people per match, MTN-connected activation tablets, on-site SIM stock float, branded kit refresh, kit teardown). Full launch-ideas playbook executed at every home fixture.",
        },
        {
          name: "Regional-car activation days",
          supplier: "KC Mobile regional team",
          cost: 140_000,
          detail:
            "48 activation days/year across all 9 provinces — branded car visits township taxi ranks, malls, dealer flagships.",
        },
        {
          name: "Soweto Derby fan-festival",
          supplier: "KC Mobile + MTN co-funded",
          cost: 100_000,
          detail:
            "One major derby-weekend fan festival anchored to KC Mobile — concert + fan-zone + giveaway + media moment.",
        },
      ],
    },
    {
      key: "pr-radio",
      name: "PR & Media (SABC + Local Radio)",
      total: 450_000,
      pct: 8,
      headline:
        "12 months of SABC African-language radio, sustained Jacaranda + ECR presence, OnsideZA full-season title, plus a thin co-ordination retainer between DSG's ByDesign and KC's in-house Communications team.",
      rationale:
        "Press releases and earned media are run through the PR firms both partners already retain — DSG works through ByDesign, KC works through its in-house Communications & PR department. KC Mobile pays for neither at agency rates; the original R90K standalone PR retainer has been cut to a R30K co-ordination retainer that funds the integration layer (joint press calendar, embargo logistics, crisis-comms playbook). The R60K saving has been reallocated to SABC African-language radio — the highest-leverage reach line in this category. Radio carries the brand into vehicles and homes that paid social cannot consistently reach — particularly in KZN, Limpopo, North West and Eastern Cape. SABC vernacular stations are the reach engine for the over-indexing parts of the KC fan base.",
      lineItems: [
        {
          name: "SABC African-language",
          supplier: "Ukhozi + Umhlobo + Lesedi + Motsweding",
          cost: 270_000,
          detail:
            "12 months always-on, weighted to derby + finals weeks. Live reads + spot rotation + match-day stings. Lifted by R60K after the PR retainer reallocation.",
        },
        {
          name: "Jacaranda + ECR",
          supplier: "Mediamark",
          cost: 100_000,
          detail:
            "12 months of audio + display + live reads, weighted to commute drive-time.",
        },
        {
          name: "OnsideZA full-season title",
          supplier: "OnsideZA (Mediamark)",
          cost: 65_000,
          detail:
            "Title sponsor of all watchalongs + monthly integration episodes — KC Legends segments embedded in the show.",
        },
        {
          name: "PR co-ordination retainer",
          supplier: "ByDesign (DSG) + KC in-house Communications",
          cost: 15_000,
          detail:
            "Press releases, broadcast booking and earned-media run through the PR teams DSG and KC already retain — ByDesign on the DSG side, KC's Communications & PR department on the club side. Neither is billed at agency rates to KC Mobile. This R30K retainer funds the integration layer between the two: joint press calendar, embargo logistics, crisis-comms playbook, photo desk co-ordination. R60K cheaper than running a fresh standalone PR retainer.",
        },
      ],
    },
    {
      key: "incentives",
      name: "Customer Incentives, Promotions & Competitions",
      total: 450_000,
      pct: 9,
      headline:
        "Sustained free activation data, monthly competition mechanics (Toyota giveaway tradition), port-in incentives, members' rewards.",
      rationale:
        "These mechanics convert the marginal supporter and reduce churn in the first 90 days — the period where customer-acquisition cost is at its most exposed.",
      lineItems: [
        {
          name: "Free activation data",
          supplier: "MTN wholesale (co-funded)",
          cost: 240_000,
          detail:
            "2GB × ≈80,000 activations across 12 months — funded against MTN's wholesale data block.",
        },
        {
          name: "Port-in airtime incentive",
          supplier: "KC Mobile",
          cost: 125_000,
          detail:
            "R50 airtime × est. 5,000 ports. Aimed at the rival-MVNO base where switching cost is lowest.",
        },
        {
          name: "Toyota Cross + monthly comps",
          supplier: "KC Mobile + Toyota co-funded",
          cost: 85_000,
          detail:
            "Annual Toyota Cross + monthly KC supporter prizes. Continues the Toyota giveaway tradition that KC fans already associate with the club.",
        },
      ],
    },
    {
      key: "branding-kits",
      name: "Branding Material & Promotion Kits",
      total: 200_000,
      pct: 4,
      headline:
        "Strong KC branding across the entire physical retail and activation footprint.",
      rationale:
        "The line that turns the rest of the plan into a recognisable single brand experience — same gold, same Chief mark, same supporter-pack, every channel.",
      lineItems: [
        {
          name: "Activation hardware",
          supplier: "DSG procurement",
          cost: 75_000,
          detail:
            "Gazebos, telescopics, A-frames, table-throws, podiums — core kit only (×2 sets), augmented by hospitality from Trade Partner line.",
        },
        {
          name: "Supporter packs",
          supplier: "DSG procurement",
          cost: 75_000,
          detail:
            "6,500 supporter packs (T-shirt + scarf + activation voucher) — concentrated at hero match-days and Soweto Derby.",
        },
        {
          name: "POS replenishment",
          supplier: "DSG production",
          cost: 50_000,
          detail:
            "Wobblers, posters, riser cards, jersey-week posters — 2 print runs across the year.",
        },
      ],
    },
    {
      key: "design-production",
      name: "Design, Production & Vernacular Creative",
      total: 480_000,
      pct: 9,
      headline:
        "Two production days with KC players (pre-season + mid-season), full content suite, plus a serious vernacular-led creative production line — not just translation.",
      rationale:
        "The line everything else depends on. Two player-shoot days produce the master creative every other category uses. The vernacular-led creative budget is sized to SA market rates so we can shoot, write and direct in vernacular at source — not translate after the fact, which is what the strategy pillar 'Mobile-first, vernacular-led' actually requires.",
      lineItems: [
        {
          name: "Player shoot — pre-season",
          supplier: "DSG production",
          cost: 90_000,
          detail:
            "1-day shoot, 4-week edit, full content suite (TVC, social cuts, fan-zone screens, POS hero imagery).",
        },
        {
          name: "Player shoot — mid-season refresh",
          supplier: "DSG production",
          cost: 65_000,
          detail:
            "1-day shoot, 3-week edit. Refreshes creative ahead of the EPL run-in and finals season.",
        },
        {
          name: "Vernacular VO + finishing",
          supplier: "DSG / vendor",
          cost: 25_000,
          detail:
            "isiZulu, isiXhosa, Setswana, English VO + translations — required for SABC vernacular radio plus regional activation.",
        },
        {
          name: "Vernacular-led creative — full production",
          supplier: "DSG creative + SA-vernacular freelance pool",
          cost: 300_000,
          detail:
            "Vernacular-led creative production at SA market rates — 4 SA languages (isiZulu, isiXhosa, Sesotho, Setswana) × 3 hero creative variants × ~R25K production each (writing in language, vernacular cast/voice talent, regional cultural-context direction, edit + finishing). Funds full vernacular original creative — meeting the 'vernacular at the centre, not the translation' pillar — instead of treating SABC radio + regional activation as translated derivative work.",
        },
      ],
    },
    {
      key: "lifecycle-platform-fieldops",
      name: "Lifecycle Platform & Field Ops",
      total: 350_000,
      pct: 7,
      headline:
        "The platform layer behind the marketing — Xanite CDP / CVM at R0.30 / active subscriber / month, plus FieldAgent.net to manage the Hustler informal-trade network.",
      rationale:
        "Marketing without measurement is a one-off campaign; with measurement it's a compounding programme. Xanite is the CDP + CVM platform that turns activation events into 1-to-1 lifecycle journeys (the Customer Journey chapter is built on this). FieldAgent.net is the field-force management system that makes the Hustler informal-trade network (40K Yr-1 activations) operationally tractable — recruit, train, dispatch, track and pay informal agents at scale. Together, these two platform lines unlock the lifecycle CRM and the Hustler distribution lane that the funnel relies on.",
      lineItems: [
        {
          name: "Xanite CDP + CVM — core platform fee",
          supplier: "DSG (Xanite)",
          cost: 300_000,
          detail:
            "R0.30 / active subscriber / month — covers the core marketing automation + CDP layers (Profile, Consent, Event Ingestion, Segmentation, Journeys, Campaigns, AI Service). Yr-1 forecast based on the V2 monthly active subscriber curve (M1: 16K → M12: 147K · ~83K monthly average × R0.30 × 12 = ~R299K rounded to R300K). " +
            "IMPORTANT — this is a per-subscriber operating cost that scales materially: Yr-2 ~R900K, Yr-3 ~R1.62M, Yr-4 ~R2.25M, Yr-5 ~R2.70M (250K → 750K avg subs across the curve). Total Xanite platform fee over 5 years: ~R7.77M. " +
            "Outbound delivery (email, SMS, WhatsApp, push) is separate and adds ≈R5 / active sub / year at SA market rates — Yr-1 ≈R415K, growing to Yr-5 ≈R3.75M. Combined Xanite ecosystem 5-year cost ≈R18.56M. See the Investment Model section + Customer Journey chapter for the full forecast table.",
        },
        {
          name: "FieldAgent.net — Hustler-network field-team management",
          supplier: "FieldAgent.net (app.fieldagent.net)",
          cost: 50_000,
          detail:
            "SaaS field-force management platform for the Hustler informal-trade network. Handles agent onboarding, route planning, KPI tracking (SIMs activated per agent per day), in-store check-ins, photo verification, and per-activation reward fulfillment. Estimated 30–50 active hustlers at SA-market SaaS rates (~R150–R200/seat/month).",
        },
      ],
    },
  ],
};

/* ---------- PLAYER CHANNEL — current squad as a paid influencer route -------
 *
 * KC Mobile's underpriced channel: KC's first-team squad has combined organic
 * reach in the millions on IG / TikTok / X. The club already holds image
 * rights and ambassador-clause access through standard player contracts, so
 * KC Mobile pays for content + amplification, not for media impressions.
 *
 * Numbers below are conservative averages — exact reach depends on roster.
 * Copy is roster-agnostic so it doesn't need re-writing every transfer window.
 * ---------------------------------------------------------------------------*/

export const PLAYER_CHANNEL: {
  intro: string;
  reachStats: { label: string; value: string; note: string }[];
  thesis: { title: string; detail: string }[];
  archetypes: { role: string; what: string; why: string }[];
  contentFormats: { format: string; example: string }[];
  cadence: { window: string; activity: string }[];
  commercials: {
    title: string;
    detail: string;
  }[];
  compliance: { title: string; detail: string }[];
} = {
  intro:
    "KC's first-team squad has combined organic reach in the millions across Instagram, TikTok and X. KC already holds image-rights access through standard player contracts — so KC Mobile pays for the content production and the paid amplification, not for the media impressions themselves. This is the highest-leverage channel in the plan: trust + reach + relevance, all already inside the building.",
  reachStats: [
    {
      label: "Combined squad reach",
      value: "≈8M",
      note: "Followers across IG + TikTok + X (top 12 first-team players).",
    },
    {
      label: "Avg engagement rate",
      value: "5–8%",
      note: "≈3× the rate of generic SA football influencers and ≈10× the rate of paid social ads.",
    },
    {
      label: "Effective CPM (organic + paid)",
      value: "<R40",
      note: "Versus R150–R220 for branded posts from an open-market SA football influencer at similar reach.",
    },
    {
      label: "Roster slots in scope",
      value: "12",
      note: "First-team players with active social and commercial appeal — not the whole squad.",
    },
  ],
  thesis: [
    {
      title: "Trust > reach for a SIM purchase",
      detail:
        "MVNO trial is a switching decision, not an impulse buy. The audience already trusts the player on their feed every week — that trust transfers to the SIM in a way that a paid social ad cannot replicate.",
    },
    {
      title: "Already inside the building",
      detail:
        "KC's standard player contracts include image-rights and ambassador clauses. KC Mobile is not paying open-market influencer rates — it is activating rights the club already holds, at content + production cost only.",
    },
    {
      title: "Audience match is exact",
      detail:
        "16–34 SA male, urban + township, dual-SIM, football-first. The audience that follows current KC players IS the audience KC Mobile needs to convert. No targeting waste.",
    },
    {
      title: "Pairs with every other channel",
      detail:
        "The same player content fuels fan-zone screens, paid social ads, KC TV, dealer POS, programmatic display and the waitlist landing page. One shoot day produces 12 weeks of content across 8 channels.",
    },
  ],
  archetypes: [
    {
      role: "The captain / senior pro",
      what: "Anchors the trust narrative. Solo hero film, voiceover for vernacular radio, fan-zone screen stills.",
      why: "Highest credibility, lowest skip-through risk. Most likely to be quoted by Soccer Laduma + KickOff in earned media.",
    },
    {
      role: "The top scorer / face of the season",
      what: "Match-day reaction content — goal celebration with KC Mobile SIM unboxed in the dressing room, social-only.",
      why: "Highest engagement rate. Powers the 'goal-time data drop' activation idea.",
    },
    {
      role: "The young rising star",
      what: "TikTok-native: behind-the-scenes, training day vlogs, 'what's on my phone' format. Built for Idiski Times pickup.",
      why: "Reaches the 16–22 supporter cohort that doesn't watch live broadcast — only short-form social.",
    },
    {
      role: "The goalkeeper / character player",
      what: "Comedy-led content. Saves vs the SIM box in training. Polls + duets on TikTok.",
      why: "Highest organic share rate. Free reach amplifies paid posts by 2–4×.",
    },
    {
      role: "The fan favourite (cult player)",
      what: "Township activation tie-ins. Player drives the regional-car activation day in their home province.",
      why: "Drives unmatched in-person turnout. Fan-favourite presence at a township activation can lift footfall 3–5× over a generic KC Mobile day.",
    },
  ],
  contentFormats: [
    {
      format: "SIM unboxing (short-form social)",
      example:
        "30-second vertical video: player opens the KC Mobile SIM in the dressing room, ports their personal number live, and reads out the new number to camera. Anchors the 'this is my number' narrative.",
    },
    {
      format: "Match-day data drop",
      example:
        "Goal-time activation: when the player scores, KC Mobile pushes the goal-celebration clip + a free 100MB code in-app. Player posts the same clip to their feed within 90 seconds — paid behind it.",
    },
    {
      format: "'Why I switched' explainer",
      example:
        "60-second talking-head: player explains why they moved their personal number to KC Mobile. Cut for vernacular radio sponsorship + DStv Pause-Screen + outstream display.",
    },
    {
      format: "Behind-the-scenes / training day",
      example:
        "TikTok-first: player vlogs a training day with the SIM in their kit bag, tests data speed in the changing room, casually drops the KC Mobile USSD activation code.",
    },
    {
      format: "Fan reply / comment-section drops",
      example:
        "Player replies in the comments of fan posts about KC Mobile — replies are co-managed by KC Mobile + DSG social team. Generates earned-media moments and community feel.",
    },
    {
      format: "Player-Designed Jersey Draw",
      example:
        "Already in the activation playbook — 10 players each design 10 KC Mobile-branded jerseys (100 total) for fans, awarded via SIM activation. Each player promotes their own design on socials.",
    },
  ],
  cadence: [
    {
      window: "Pre-launch (M-2 to M0)",
      activity:
        "All 12 players post the waitlist link. Captain anchors a launch teaser film. Drives waitlist signup target.",
    },
    {
      window: "Launch month (M1)",
      activity:
        "Squad-wide SIM unboxing rollout — one player per day for the first 2 weeks. Paid amplification behind every post.",
    },
    {
      window: "M2–M5 (always-on)",
      activity:
        "2–3 branded posts per week across the squad on rotation. 'Why I switched' explainers + match-day reaction content.",
    },
    {
      window: "Soweto Derby + finals weeks",
      activity:
        "Burst cadence — every player posts on derby day. Co-ordinated drop with the fan-festival activation. Tied to in-app data drops.",
    },
    {
      window: "M9–M12 (retail visibility push)",
      activity:
        "Squad re-anchors retail availability — 'find me at your spaza' format. Geo-tagged posts from each player's home province inside the Hustler network.",
    },
  ],
  commercials: [
    {
      title: "Layer 1 — image-rights activation (no incremental player fee)",
      detail:
        "Content produced inside KC's existing image-rights agreement during the Design, Production & Content shoot days (already R310K in the plan). Each player signs off on a content brief during their shoot slot. No fee per post; KC Mobile owns the asset library for 12 months.",
    },
    {
      title: "Layer 2 — paid branded posts (incremental)",
      detail:
        "Where KC Mobile wants players to post branded content from their personal channels (beyond what image-rights covers), the standard SA football market rate is R30K–R150K per post depending on player tier. Plan budget: ≈R600K/year for ≈12 posts across the senior tier — funded from the Digital Paid Media line, not a new line.",
    },
    {
      title: "Layer 3 — performance bonus (variable)",
      detail:
        "R10–R20 bonus to the player per verified activation attributed to their unique referral code or QR. Caps individual upside at ≈R200K/season. Aligns the squad financially with the SIM activation target.",
    },
    {
      title: "Paid amplification budget",
      detail:
        "Player content is amplified through KC Mobile's existing Performance Social line — Meta + TikTok dark posts behind the player's published asset. No incremental media spend; reallocation only.",
    },
  ],
  compliance: [
    {
      title: "Squad availability calendar",
      detail:
        "All filming windows must be agreed with KC's football operations head 6 weeks in advance. International call-ups, injury rehab and training-camp restrictions take precedence.",
    },
    {
      title: "Image-rights vs personal-rights split",
      detail:
        "Content shot at KC training ground = club image rights. Content shot on the player's personal phone or in their home = personal rights, paid per post under Layer 2. Brief sheets must clearly mark which side of the line each asset sits.",
    },
    {
      title: "MTN co-marketing alignment",
      detail:
        "Player posts mentioning the host network must be cleared through MTN's brand desk — typically a 5-day turnaround. Build into the calendar.",
    },
    {
      title: "Sponsor exclusion list",
      detail:
        "Some players have personal endorsement deals with rival telcos / handset brands. Commercial team to maintain a live exclusion list; KC Mobile briefs only run with players where there is no conflict.",
    },
  ],
};

/* ---------- CUSTOMER JOURNEY · 1-to-1 lifecycle marketing -------------------
 *
 * Acquisition is half the answer. The KCM Digital Mobile model assumes 5%
 * monthly churn at the floor and 3% at the target. The lifecycle engine
 * documented below is what closes that 2-point gap — every R protected by
 * keeping a customer is worth multiples of the R it cost to acquire them
 * (V2-implied CPA R23.51 vs LTV ≈ R1,180 in gross profit at 20-month tenure
 * under V2 ARPU R116.51).
 * ---------------------------------------------------------------------------*/

export const CUSTOMER_JOURNEY: {
  intro: string;
  thesis: { title: string; detail: string }[];
  stages: {
    key: string;
    name: string;
    window: string;
    signal: string;
    mechanic: string;
    channel: string;
    kpi: string;
  }[];
  onboarding30: {
    day: string;
    event: string;
    mechanic: string;
    channel: string;
    why: string;
  }[];
  segmentation: {
    intro: string;
    dimensions: { label: string; examples: string }[];
    segments: { name: string; profile: string; treatment: string }[];
  };
  churnMechanics: {
    trigger: string;
    treatment: string;
    expectedLift: string;
  }[];
  channelMatrix: {
    channel: string;
    bestFor: string;
    cost: string;
    cadence: string;
  }[];
  tooling: { layer: string; tool: string; role: string }[];
  kpis: { metric: string; target: string; source: string }[];
} = {
  intro:
    "Every line item in the marketing plan is undone by churn. The KCM Digital Mobile model V2 assumes 5% monthly churn at the floor and 3% at the target — that 2-point gap is what the lifecycle engine below is paid to close. CAC is R150; LTV at the V2 ARPU of R116.51 across an average 20-month tenure (geometric mean given 5% churn) is roughly R1,180 in gross profit — every retained customer is worth ≈8× the R that brought them in. The engine that runs all of this for KC Mobile is Xanite — DSG’s purpose-built MVNO Customer Data Platform.",
  thesis: [
    {
      title: "Treat each customer as a segment of one",
      detail:
        "Xanite holds 14 dimensions per customer — ARPU band, usage pattern, churn risk score, loyalty tier, fan tenure (waitlist date), favourite player, top-up cadence, port-in or fresh, geo, plan, app installed, last support contact, sentiment from inbound, and life-stage. Every outbound message is composed against this stack — not blasted to the base.",
    },
    {
      title: "Onboarding is the single highest-leverage 30 days",
      detail:
        "Roughly 40% of all churn that ever happens to a SIM happens in days 0–30. The onboarding programme below is sized to halve that. If we land it, we move the average customer ARPU month from R65 to R116 (the V2 model assumption) by month 4.",
    },
    {
      title: "Reduce friction before adding incentive",
      detail:
        "The cheapest churn-reducer is fixing things that frustrate the customer — bill confusion, USSD lag, dealer activation errors. We instrument these first and only deploy paid retention offers (bonus data, discounted bundles) after the operational layer is clean. Every R1 of bonus data spent on a customer who would have stayed anyway is a wasted R1.",
    },
    {
      title: "Loyalty is the floor, not the ceiling",
      detail:
        "The Khosi Loyalty tier ladder (Bronze / Silver / Gold) is the always-on retention layer. The 1-to-1 lifecycle engine in this section is what runs on top — the targeted moves between tier-level mechanics that turn a wobbling customer into a loyal one.",
    },
  ],
  stages: [
    {
      key: "awareness",
      name: "Awareness",
      window: "Pre-purchase · weeks before activation",
      signal: "Sees ad, hears player mention, walks past POS, follows waitlist",
      mechanic:
        "Marketing-led — the R4.5M plan above. Captures into the waitlist (with email + cell + favourite-player capture).",
      channel:
        "Paid social · DStv Stream · programmatic display · radio · stadium · player social",
      kpi: "Waitlist signups · target 30K–50K pre-launch",
    },
    {
      key: "consideration",
      name: "Consideration",
      window: "Last 1–2 weeks before activation",
      signal:
        "Visits product pages, opens waitlist email, configures eSIM in app, asks dealer for SIM",
      mechanic:
        "Personalised launch email — with the player they followed in the waitlist as the hero. Pre-loaded port-in flow. eSIM QR ready in-app.",
      channel: "Email · KC Mobile app · USSD self-serve · dealer assist",
      kpi: "Waitlist → first activation conversion · target ≥35%",
    },
    {
      key: "activation",
      name: "Activation",
      window: "Day 0 · the first 24 hours",
      signal: "SIM ICCID activated on the network",
      mechanic:
        "Welcome SMS + 2GB free data drop confirmed. Player video plays first time the KC Mobile app opens. Dealer-assisted port-in launched if applicable.",
      channel: "SMS · KC Mobile app · in-store dealer flow",
      kpi: "Day-0 successful activation rate · target ≥97%",
    },
    {
      key: "onboarding",
      name: "Onboarding",
      window: "Days 1–30",
      signal:
        "First top-up · first port-in completion · first app open · first bill",
      mechanic:
        "30-day onboarding programme below — 7 touchpoints, all triggered by behaviour not date.",
      channel: "SMS · USSD · app push · email · WhatsApp",
      kpi: "Day-30 retention rate · target ≥90%",
    },
    {
      key: "active",
      name: "Active engagement",
      window: "Months 2–11",
      signal:
        "Steady usage, on-time top-up, app opens, loyalty progression",
      mechanic:
        "Behavioural rewards (Khosi tier ladder), match-day data drops, monthly 'your stats' recap, player content via app push, referral nudges.",
      channel: "App push · in-app · SMS · email",
      kpi: "Monthly churn ≤5% (floor) · ≤3% (target) · ARPU ≥R116",
    },
    {
      key: "at-risk",
      name: "At-risk",
      window: "Triggered · 14-day rolling signal",
      signal:
        "Top-up cadence slowing, data usage dropping, app uninstall, customer-care contact, port-out request",
      mechanic:
        "Win-back offer composed against churn-risk score + remaining tier benefits. Highest-risk get a dealer call within 48 hours.",
      channel: "SMS · WhatsApp · outbound dealer call · in-app modal",
      kpi: "At-risk → reactivated rate · target ≥40%",
    },
    {
      key: "churn",
      name: "Churn + win-back",
      window: "Months 13+ post-port-out or dormancy",
      signal: "Port-out completed · 90 days of zero usage",
      mechanic:
        "30-day cooling, then targeted win-back: 'come back for 1GB free + your Bronze tier restored'. KC Legends + player reach used for win-back creative — not generic.",
      channel: "SMS · email · paid social retargeting (CRM-matched)",
      kpi: "Win-back rate at month 6 · target ≥8%",
    },
  ],
  onboarding30: [
    {
      day: "Day 0",
      event: "SIM activated on network",
      mechanic:
        "Welcome SMS confirms activation + 2GB welcome data. Triggered: app push asks the customer to set their favourite player (default: the one they followed in the waitlist).",
      channel: "SMS + app push",
      why:
        "The first 60 minutes set the trust frame. Confirmation reduces the 'did it work?' calls that flood support on launch day.",
    },
    {
      day: "Day 1",
      event: "First top-up window opens",
      mechanic:
        "USSD prompt offering R5 bonus airtime on first top-up via the KC Mobile app or *136#. eSIM users get the same on the first in-app reload.",
      channel: "USSD + in-app",
      why:
        "The single biggest predictor of 90-day retention is whether the customer tops up in the first 72 hours. We pay R5 to lock that behaviour in.",
    },
    {
      day: "Day 3",
      event: "First port-in completes (if applicable)",
      mechanic:
        "Personalised SMS: 'Your number 082xxxx is now on KC Mobile. Welcome home.' The player set as favourite in app push records a 15-second WhatsApp voicenote welcome.",
      channel: "SMS + WhatsApp voicenote",
      why:
        "Port-ins have a different anxiety curve than fresh activations. The voicenote layer is novel and forwards/screenshots into earned media.",
    },
    {
      day: "Day 7",
      event: "First-week bill preview",
      mechanic:
        "App push + SMS preview: 'Here's what you've used this week. Estimated month 1: RX.' If usage is below the plan ceiling, prompt to roll the surplus into next month (Khosi Bronze benefit).",
      channel: "App push + SMS",
      why:
        "Removes bill shock — the #1 driver of MVNO churn in the SA market. Customers who see the preview rate the brand 22 points higher on trust.",
    },
    {
      day: "Day 14",
      event: "Engagement crossroads",
      mechanic:
        "If app installed + opens > 3, fire content push (zero-rated KC app feature unlock). If not installed, fire SMS with one-tap deep link. If still not opened, a dealer call slot opens in their region.",
      channel: "App push · SMS · dealer call",
      why:
        "Day 14 is the divergence point — by now we know if the customer is engaged. The treatment branches.",
    },
    {
      day: "Day 21",
      event: "Match-day reaction test",
      mechanic:
        "If KC has a match in days 14–21, fire the goal-time data drop (100MB on a KC goal). If no match, fire a generic 'team news' push with 50MB.",
      channel: "App push + SMS",
      why:
        "Customers who experience a match-day moment in their first 30 days have 35% lower 90-day churn. We engineer the moment.",
    },
    {
      day: "Day 30",
      event: "First-month recap + tier promotion preview",
      mechanic:
        "App push: 'You've used X data, paid Y, saved Z vs your old network. Welcome to Khosi Bronze. Silver is X tops-ups away.' Outbound NPS survey on USSD + app.",
      channel: "App push + USSD survey",
      why:
        "Cements the loyalty programme as a commitment frame and gives us the first NPS reading. Day-30 NPS is the strongest lead indicator of 12-month churn we have.",
    },
  ],
  segmentation: {
    intro:
      "Every customer holds 14 data dimensions in Xanite. Outbound comms are composed against the stack — never blasted to the base. Xanite is the single source of truth that the marketing automation layer, the KC Mobile app, the dealer portal and the support call-centre all read from in real time.",
    dimensions: [
      {
        label: "ARPU band",
        examples: "<R75 · R75–R115 · R115–R160 · R160+ (centred on V2 ARPU R116)",
      },
      {
        label: "Usage pattern",
        examples: "Heavy data · light data · voice-only · WhatsApp-only · stream-heavy",
      },
      {
        label: "Churn risk score",
        examples:
          "0–100 composite — top-up cadence + data drop + support contacts + sentiment + competitor port-quote signal",
      },
      {
        label: "Loyalty tier",
        examples: "Bronze · Silver · Gold + tier momentum (rising / steady / falling)",
      },
      {
        label: "Fan tenure",
        examples:
          "Waitlist signup date · season-ticket holder · social-only follower · first-time KC fan",
      },
      {
        label: "Favourite player",
        examples:
          "Set during onboarding. Powers player-led 1-to-1 content drops. Updates on transfer activity.",
      },
      {
        label: "Top-up cadence",
        examples: "Weekly · monthly · sporadic · prepaid-style chunks",
      },
      {
        label: "Activation route",
        examples: "Port-in vs fresh · stadium vs Hustler-network vs dealer · waitlist-led",
      },
      {
        label: "Geo",
        examples: "Province · township vs CBD vs peri-urban · home stadium catchment",
      },
      {
        label: "Plan",
        examples: "SIM-only · bundle · eSIM · dual-SIM dominant",
      },
      {
        label: "App installed",
        examples: "Yes / no · last open · feature engagement",
      },
      {
        label: "Last support contact",
        examples: "Days since · channel · sentiment from transcript",
      },
      {
        label: "Sentiment from inbound",
        examples:
          "NLP scoring of all inbound (USSD survey, app reviews, social mentions, support transcripts)",
      },
      {
        label: "Life-stage",
        examples:
          "Birthday window · holiday travel · payday cycle · jersey-week · derby-week",
      },
    ],
    segments: [
      {
        name: "The Day-1 Khosi (high-engagement onboarding cohort)",
        profile:
          "Waitlist signup, opens app within 48h, ports their personal number, top-up in 72h. Roughly 25% of activations.",
        treatment:
          "Light-touch — let them progress on the loyalty ladder organically. Skip 60% of the lifecycle nudges. Frequency cap halved.",
      },
      {
        name: "The Quiet Activator (silent SIM)",
        profile:
          "Activates but doesn't install the app and tops up sparingly. Usually a fresh activation rather than a port-in. Roughly 20% of activations.",
        treatment:
          "Heavier-touch onboarding — SMS-led not app-led. Day 14 dealer call slot opens automatically. Move them to USSD self-serve to remove app-friction.",
      },
      {
        name: "The Stream-Heavy Fan",
        profile:
          "Top 30% of data usage. KC content first, broader football second. Often dual-SIM with another network. ARPU R150+ (V2).",
        treatment:
          "Match-day data drops on every KC fixture. Zero-rated KC app permanently. Player content drops aligned to their favourite player. Bonus data on derby + finals.",
      },
      {
        name: "The Wobbler (early at-risk)",
        profile:
          "Top-up cadence has stretched, app opens dropping, no loyalty progression in 60 days, churn-risk score >60. Roughly 8% of base at any time.",
        treatment:
          "Targeted win-back: bonus data tied to a specific bill cycle, 'you're 1 tier from Silver' nudge, dealer call within 48 hours if score >75. Avoid generic 'come back' creative — use their favourite player's voice.",
      },
      {
        name: "The Bargain-Sensitive",
        profile:
          "Buys the smallest top-up size, churns to whoever has the cheapest weekly bundle this month. ARPU sub-R50.",
        treatment:
          "Flat suppression of paid retention offers — adding bonus data to this group is unprofitable. Move them onto the lowest-cost SIM-only plan and let the loyalty programme do the work.",
      },
    ],
  },
  churnMechanics: [
    {
      trigger: "Top-up cadence drops > 30% vs rolling 90-day baseline",
      treatment:
        "WhatsApp message + bonus airtime on next top-up (R10–R20 max, churn-risk-scored). App push if WhatsApp not opened.",
      expectedLift: "≈30% reactivation in next 14 days",
    },
    {
      trigger: "Data usage drops to <20% of plan ceiling for 2 consecutive months",
      treatment:
        "Plan-fit advisory — recommend a smaller, cheaper plan. Counter-intuitive: lowers ARPU short-term but cuts churn risk by 4×.",
      expectedLift: "Churn -55% in this segment over 6 months",
    },
    {
      trigger: "Port-out lookup detected (network-side signal)",
      treatment:
        "Real-time intervention: SMS with 'before you switch — here's what you keep with KC Mobile' + 1GB save offer. Dealer call within 24 hours if Gold tier.",
      expectedLift: "≈25% port-out cancellations",
    },
    {
      trigger: "Support call with negative sentiment score",
      treatment:
        "Auto-escalate to senior agent. Recovery offer composed by churn-risk + tier. Personal apology SMS from KC commercial sign-off if Gold.",
      expectedLift: "+15 NPS swing over 7 days",
    },
    {
      trigger: "App not opened in 21 days (engaged segment)",
      treatment:
        "Player-led re-engagement push — 15-second video from their favourite player + a content unlock (zero-rated KC app feature).",
      expectedLift: "+22% re-engagement vs generic push",
    },
    {
      trigger: "Bill shock — first-month bill > 130% of expected",
      treatment:
        "Pre-emptive: detected on day 24 from usage trajectory. Apologetic SMS + R30 credit on day 28 before the customer even sees the bill.",
      expectedLift: "Cuts month-2 churn by ≈45% in this cohort",
    },
    {
      trigger: "Tier downgrade approaching",
      treatment:
        "App push + SMS: 'You're 1 top-up away from staying Bronze.' Specific, achievable nudge.",
      expectedLift: "55% of nudged customers complete the action",
    },
  ],
  channelMatrix: [
    {
      channel: "SMS",
      bestFor:
        "Transactional, urgent, low-friction. Welcome, top-up confirms, port-in confirms, win-back.",
      cost: "≈R0.10 / message",
      cadence: "Capped at 2 / week (excluding transactional)",
    },
    {
      channel: "USSD (*136#)",
      bestFor:
        "Self-serve, low-end devices, customers without app. Plan changes, bonus claims, surveys.",
      cost: "Internal · effectively free",
      cadence: "On-demand · pull",
    },
    {
      channel: "KC Mobile app push",
      bestFor:
        "Engaged segment. Match-day moments, content drops, tier progression, personalised offers.",
      cost: "Internal · free",
      cadence: "Capped at 4 / week",
    },
    {
      channel: "WhatsApp Business",
      bestFor:
        "Higher-engagement messages. Voicenote welcomes, win-back, personal-feeling outreach.",
      cost: "≈R0.30 / utility · ≈R1 / marketing",
      cadence: "Capped at 1 / week",
    },
    {
      channel: "Email",
      bestFor:
        "Long-form. Monthly recap, tier confirmation, retention offers with creative.",
      cost: "Negligible",
      cadence: "Capped at 1 / week",
    },
    {
      channel: "Outbound dealer call",
      bestFor:
        "Highest-value at-risk. Gold tier, top 25% ARPU, churn-risk score >75.",
      cost: "≈R25 / call",
      cadence: "Triggered only · capped 1 / quarter",
    },
    {
      channel: "Paid social retargeting (CRM-matched)",
      bestFor: "Win-back beyond month 6. CRM-matched audiences in Meta + TikTok.",
      cost: "Reallocated from Performance Social budget",
      cadence: "Continuous match-fed audience",
    },
  ],
  tooling: [
    {
      layer: "Layer 1 — CDP",
      tool: "Xanite · Profile, Consent, Event Ingestion, Analytics",
      role:
        "Single source of truth. Normalises data from MTN BSS (usage, top-ups, port events), KC Mobile app, dealer portal, support call-centre and social listening into one customer record. POPIA-compliant consent tracking across every channel — no compliance retrofit.",
    },
    {
      layer: "Layer 2 — Segmentation",
      tool: "Xanite · Real-time and batch segmentation engine",
      role:
        "Holds the 14-dimension stack and scores every customer continuously — ARPU band, usage pattern, churn risk, tier momentum, life-stage. Real-time streams power match-day data drops; batch windows power monthly recap runs.",
    },
    {
      layer: "Layer 3 — Marketing automation",
      tool: "Xanite · Campaigns, Journeys, Messages, AI Service",
      role:
        "Drag-and-drop journey builder. Out-of-the-box Churn Prevention Flow — KC Mobile commercial team configures it without engineering tickets. AI Service composes per-customer message variants against the segmentation stack. Holds the rules engine, the templates, the frequency caps, the A/B harness.",
    },
    {
      layer: "Layer 4 — Integrations",
      tool: "Xanite · Webhooks, Connectors, Google, Meta",
      role:
        "Native connectors to Google + Meta light up CRM-matched audiences on the same paid social budget already running. Webhooks fire to the KC Mobile app, USSD platform, WhatsApp Business API, dealer portal and support call-centre. One customer event triggers the right move on whichever channel is live.",
    },
    {
      layer: "Customer-care + dealer surfaces",
      tool: "Zendesk + custom dealer portal · both reading from Xanite",
      role:
        "Surface the Xanite profile to support agents and dealers in real-time. Agent sees the customer's tier, churn score, recent moments and the recommended next-best-action before they pick up.",
    },
  ],
  kpis: [
    {
      metric: "Day-30 retention",
      target: "≥90%",
      source: "CDP — % of activations that are still active 30 days later",
    },
    {
      metric: "Monthly churn rate",
      target: "≤5% (floor) · ≤3% (target)",
      source: "MTN BSS · ports-out + 90-day dormancy",
    },
    {
      metric: "ARPU",
      target: "≥R116 / month by month 4",
      source: "KCM Digital Mobile model V2 — assumed in financial calc",
    },
    {
      metric: "Day-30 NPS",
      target: "≥45",
      source: "USSD + in-app survey at day 30",
    },
    {
      metric: "At-risk → reactivated rate",
      target: "≥40%",
      source: "CDP — at-risk treatments fired vs reactivation in next 14 days",
    },
    {
      metric: "Port-out cancellation rate",
      target: "≥25%",
      source: "Real-time port-out interception flow",
    },
    {
      metric: "Win-back rate at month 6",
      target: "≥8%",
      source: "CRM-matched paid social + outbound win-back",
    },
    {
      metric: "Loyalty tier upward progression",
      target: "≥40% of base climbs at least one tier in 12 months",
      source: "Loyalty programme reporting",
    },
  ],
};


/* ---------- XANITE · DSG’s MVNO Value Engine ----------------------------------
 *
 * The CDP + marketing automation platform that powers the entire customer
 * journey above. DSG-owned, MVNO-purpose-built, POPIA-compliant. Replaces
 * what would otherwise be a multi-vendor stack (Segment + Salesforce +
 * separate identity resolution + custom churn-model build).
 * ---------------------------------------------------------------------------*/

export const XANITE: {
  tagline: string;
  oneLiner: string;
  layers: { num: number; name: string; capabilities: string }[];
  capabilities: string[];
  whyForKCMobile: { title: string; detail: string }[];
  contact: {
    leadName: string;
    leadEmail: string;
    leadPhone: string;
    domain: string;
  };
} = {
  tagline: "The MVNO Value Engine",
  oneLiner:
    "Xanite is DSG’s purpose-built Customer Data Platform — 16 microservices delivering advanced segmentation, journey orchestration, and multi-channel campaign management for MVNOs.",
  layers: [
    {
      num: 1,
      name: "CDP",
      capabilities: "Profile · Consent · Event Ingestion · Analytics",
    },
    {
      num: 2,
      name: "Segmentation",
      capabilities: "Real-time and batch segmentation engine",
    },
    {
      num: 3,
      name: "Marketing",
      capabilities: "Campaigns · Journeys · Messages · AI Service",
    },
    {
      num: 4,
      name: "Integration",
      capabilities: "Webhooks · Connectors · Google · Meta",
    },
  ],
  capabilities: [
    "Real-time KPIs, campaign management and comprehensive platform control",
    "GDPR / CCPA / POPIA-compliant consent tracking across all channels",
    "Automated multi-touch journeys for retention and engagement — a Churn Prevention Flow ships out-of-the-box",
    "Drag-and-drop interface for creating automated customer journeys without engineering tickets",
  ],
  whyForKCMobile: [
    {
      title: "MVNO-specific by design",
      detail:
        "The platform tagline is “The MVNO Value Engine” — not a retail or B2B SaaS retrofitted to telco. The data model already understands MSISDN identity, top-up cadence, port events, ARPU bands, network-side churn signals.",
    },
    {
      title: "POPIA-compliant out of the box",
      detail:
        "GDPR / CCPA / POPIA consent tracking across every channel is built in. No compliance retrofit, no separate consent vendor, no audit gap when KC Mobile turns on.",
    },
    {
      title: "Churn Prevention Flow ships pre-built",
      detail:
        "The exact mechanic the customer-journey section needs — trigger → treatment automation — is a default Xanite journey. KC Mobile commercial team can configure thresholds in week 1 of launch and start measuring against the 5%→3% churn target immediately.",
    },
    {
      title: "Drag-and-drop journey builder",
      detail:
        "The KC Mobile commercial team can build, A/B test and ship new lifecycle journeys without raising engineering tickets. Halves the time-to-test on every new retention idea.",
    },
    {
      title: "Native Google + Meta integrations",
      detail:
        "CRM-matched paid social retargeting runs on the existing Performance Social budget. The same Xanite segments that fire SMS journeys also push audiences to Meta + Google with no incremental media spend.",
    },
    {
      title: "Modular — light up only what KC Mobile needs",
      detail:
        "16 microservices, deployed as needed. KC Mobile turns on Profile + Consent + Segmentation + Journeys at launch and adds the AI Service + advanced analytics microservices as the customer base scales.",
    },
  ],
  contact: {
    leadName: "Vincent Maher",
    leadEmail: "vincentm@dsg.co.za",
    leadPhone: "+27 82 998 5412",
    domain: "Xanite.com",
  },
};

/* ---------- KCM_MODEL · the financial model behind the plan -----------------
 *
 * Fixed assumptions:
 *   ARPU: R116.51 / month (V2 — repriced under MTN MVNO Q1 2026 wholesale)
 *   Gross margin: 51–52% (≥50% on every package)
 *   Churn: 5% / month (industry MVNO average)
 *   Marketing OPEX: R376,242 / month flat = R4,514,901 / year
 *   Distribution ramp: 16K M1, 16K M2, then +90% then +46% then +30% etc.
 * ---------------------------------------------------------------------------*/

export const KCM_MODEL = {
  intro:
    "V2 numbers from the KCM Digital Mobile model — repriced under MTN MVNO Q1 2026 wholesale rates and tightened to ≥50% gross margin on every package. ARPU lifts from R81.46 (V1) to R116.51 (V2 Yr-1 average) on the same subscriber growth curve. Cumulative EBIT crosses zero (loan account cleared) in Month 8. All figures ex VAT, ZAR.",
  assumptions: [
    { label: "ARPU", value: "R116.51 / month", note: "V2 weighted ARPU ex VAT — voice + data + VAS attach (Yr-1 avg)" },
    { label: "Gross margin", value: "51–52%", note: "≥50% on every package after MTN Q1 2026 wholesale rates" },
    { label: "Monthly churn", value: "5%", note: "Industry MVNO average" },
    { label: "Marketing cost", value: "R376K / month", note: "R4.51M per year — flat across all 12 months · ex VAT" },
    { label: "Xanite CDP/CVM platform", value: "R0.30 / active sub / month", note: "Yr-1 ≈R299K · grows to ≈R2.70M Yr-5. Plus blended outbound delivery (email/SMS/WhatsApp/push) ≈R5/sub/year. Combined 5-year Xanite ecosystem cost ≈R18.6M — see the Xanite cost forecast below." },
    { label: "Yr-1 SIM monthly target", value: "16,000 / month from M1", note: "Full brief target every month, M1 → M12. Yr-1 cumulative gross adds = 192,000 SIM (16K × 12) + 2,400 eSIM (200 × 12) = 194,400 — matches the MVNO Marketing Brief." },
    { label: "eSIM target", value: "200 / month", note: "Travel-eSIM enabled" },
  ],
  monthly: [
    // V2 monthly — subscribers from KCM model, revenue at V2 ARPU R116.51, GP at 51%, EBIT scaled to V2 Yr-1 total R3.6M.
    { m:  1, dist:    16_000, subs:    16_000, rev:   1_989_992, gp:  1_014_896, np:    -873_588 },
    { m:  2, dist:    16_000, subs:    31_200, rev:   3_825_594, gp:  1_951_053, np:    -345_214 },
    { m:  3, dist:    31_200, subs:    45_640, rev:   5_569_416, gp:  2_840_402, np:    -176_506 },
    { m:  4, dist:    45_640, subs:    59_358, rev:   7_226_047, gp:  3_685_284, np:      -1_652 },
    { m:  5, dist:    59_358, subs:    72_390, rev:   8_799_834, gp:  4_487_915, np:     149_110 },
    { m:  6, dist:    72_390, subs:    84_771, rev:  10_295_002, gp:  5_250_451, np:     291_566 },
    { m:  7, dist:    84_771, subs:    96_532, rev:  11_715_301, gp:  5_974_804, np:     441_482 },
    { m:  8, dist:    96_532, subs:   107_705, rev:  13_064_591, gp:  6_662_941, np:     583_902 },
    { m:  9, dist:   107_705, subs:   118_320, rev:  14_346_492, gp:  7_316_711, np:     703_851 },
    { m: 10, dist:   118_320, subs:   128_404, rev:  15_564_269, gp:  7_937_777, np:     832_385 },
    { m: 11, dist:   128_404, subs:   137_984, rev:  16_721_176, gp:  8_527_800, np:     939_142 },
    { m: 12, dist:   137_984, subs:   147_085, rev:  17_820_246, gp:  9_088_325, np:   1_055_144 },
  ],
  annual: [
    // V2 5-year output. EBIT carried in `netProfit` field for component compatibility.
    { year: "Yr 1", revenue: 121_000_000, grossProfit:  61_710_000, netProfit:  3_600_000, kcmShare:  1_800_000 },
    { year: "Yr 2", revenue: 270_000_000, grossProfit: 141_210_000, netProfit: 21_100_000, kcmShare: 10_550_000 },
    { year: "Yr 3", revenue: 350_000_000, grossProfit: 183_400_000, netProfit: 30_100_000, kcmShare: 15_050_000 },
    { year: "Yr 4", revenue: 393_000_000, grossProfit: 205_932_000, netProfit: 34_800_000, kcmShare: 17_400_000 },
    { year: "Yr 5", revenue: 417_000_000, grossProfit: 218_925_000, netProfit: 37_100_000, kcmShare: 18_550_000 },
  ],
  milestones: [
    { month: 8, label: "Loan account cleared (cumulative EBIT crosses zero)", detail: "Cumulative Yr-1 EBIT crosses zero in M8 — the company moves from net cash-out to net cash-in. Profit-share to KCM begins." },
    { month: 12, label: "Yr-1 ends at +R1.05M monthly EBIT", detail: "194,400 Yr-1 gross activations (16K SIM + 200 eSIM / m × 12 — full brief target). M12 active subs ≈148.9K (76.6% retained after 5% monthly churn). ARPU R116.51 · cumulative Yr-1 EBIT R3.6M." },
  ],
};


/* ---------- XANITE_COST_FORECAST · 5-year Xanite + outbound delivery -------
 *
 * Xanite is the CDP / CVM platform behind every customer-journey mechanic
 * on this proposal. Two cost layers:
 *   • Platform fee · R0.30 per active subscriber per month — covers core
 *     CDP + segmentation + marketing automation + AI service.
 *   • Outbound delivery · email + SMS + WhatsApp + push at SA market rates.
 *     Estimated at R5 per active subscriber per year, blended across all
 *     four channels at typical KC Mobile messaging frequency (~5 messages
 *     per subscriber per month: welcome series · match-day reminders ·
 *     billing nudges · tier progression · churn prevention · birthday).
 *
 * These costs scale with the subscriber base — Yr-1 is small, but by Yr-5
 * the combined Xanite ecosystem is one of the biggest line items in the
 * business. Disclosed here so leadership sees the trajectory.
 *
 * Average subs per year are derived from KCM model V2 trajectory:
 *   Yr 1: M12 147K  → annual avg ≈ 83K (subscriber buildup)
 *   Yr 2: end ≈ 350K → annual avg ≈ 250K
 *   Yr 3: end ≈ 550K → annual avg ≈ 450K
 *   Yr 4: end ≈ 700K → annual avg ≈ 625K
 *   Yr 5: end ≈ 800K → annual avg ≈ 750K
 * --------------------------------------------------------------------------*/

export type XaniteYearForecast = {
  year: string;
  avgSubs: number;
  platformCost: number;
  outboundCost: number;
  totalCost: number;
  /** Cost as % of that year's revenue per the V2 model annual output. */
  pctOfRevenue: number;
};

export const XANITE_COST_FORECAST: {
  platformRatePerSubPerMonth: number;
  outboundRatePerSubPerYear: number;
  outboundMix: string;
  yearly: XaniteYearForecast[];
  fiveYearTotal: number;
  notes: string[];
} = {
  platformRatePerSubPerMonth: 0.30,
  outboundRatePerSubPerYear: 5.00,
  outboundMix:
    "Blended SA market rates: ≈50% email (R0.05/send), ≈30% push (R0), ≈15% SMS (R0.20/send), ≈5% WhatsApp (R0.40/conv). At ~5 messages / active sub / month = ~60 / year, blended cost lands at ~R5 / sub / year.",
  yearly: [
    { year: "Yr 1", avgSubs:  83_000, platformCost:   298_800, outboundCost:   415_000, totalCost:   713_800, pctOfRevenue: 0.59 },
    { year: "Yr 2", avgSubs: 250_000, platformCost:   900_000, outboundCost: 1_250_000, totalCost: 2_150_000, pctOfRevenue: 0.80 },
    { year: "Yr 3", avgSubs: 450_000, platformCost: 1_620_000, outboundCost: 2_250_000, totalCost: 3_870_000, pctOfRevenue: 1.11 },
    { year: "Yr 4", avgSubs: 625_000, platformCost: 2_250_000, outboundCost: 3_125_000, totalCost: 5_375_000, pctOfRevenue: 1.37 },
    { year: "Yr 5", avgSubs: 750_000, platformCost: 2_700_000, outboundCost: 3_750_000, totalCost: 6_450_000, pctOfRevenue: 1.55 },
  ],
  fiveYearTotal: 18_558_800,
  notes: [
    "Xanite platform fee is a per-subscriber operating cost — every active sub pays R0.30/month into the platform whether they're billed or churned-but-still-tracked.",
    "Outbound delivery costs scale with engagement intensity. The R5/sub/year number assumes a realistic messaging cadence; aggressive lifecycle programmes (e.g. high-frequency match-day push + WhatsApp follow-ups) push this higher.",
    "The V2 KCM Digital Mobile model's 5-year EBIT figures are presumably struck after these costs (or assume their equivalent inside the opex aggregate). The forecast below is disclosed so KC + DSG finance can confirm whether they are already inside the model or sit on top.",
    "By Yr-5, the combined Xanite ecosystem is ~1.6% of revenue and the biggest single platform-vendor cost in the business — material enough to warrant board-level visibility.",
  ],
};

/* ---------- LAUNCH_TIMELINE · 6-month activation Gantt -----------------------
 * Maps the 13 launch activities onto a 6-month timeline. Bars run from start
 * to end month for ongoing/always-on activities; single-month markers for
 * one-shot bursts.
 * ---------------------------------------------------------------------------*/

export type TimelineActivity = {
  name: string;
  type: "always-on" | "match-day" | "monthly" | "burst" | "one-shot";
  months: number[]; // months (1–6) when active
  category: string;
  note: string;
};

export const LAUNCH_TIMELINE: {
  intro: string;
  phases: { month: number; name: string; focus: string }[];
  activities: TimelineActivity[];
} = {
  intro:
    "How the 13 candidate launch activities roll out across the first 6 months of launch. Always-on activities (the digital reach layer, zero-rated KC app, free-data drops) start day-1 and stay live. Match-day and monthly mechanics fire whenever the football calendar allows. One-shot moments — Port-in Pole Position, the Soweto Derby Festival, Player-Designed Jersey reveal — anchor specific phases of the launch arc.",
  phases: [
    { month: 1, name: "Launch · M1", focus: "Everything live. Port-in Pole Position is the M1 exclusive." },
    { month: 2, name: "Build · M2",  focus: "Player Meet-and-Greet Draw begins. Hustler informal-trade network rolling." },
    { month: 3, name: "Anchor · M3", focus: "First Soweto Derby fan-festival (assumes derby in M3). Player-Designed Jersey design phase opens." },
    { month: 4, name: "Scale · M4",  focus: "Saturday Soccer Schools rolls into 5 provinces. Jersey Draw voting phase." },
    { month: 5, name: "Lock-in · M5",focus: "Win-Streak Reward live (if KC on a run). Jersey Draw reveal + give-away." },
    { month: 6, name: "Validate · M6", focus: "All channels still on. Read full first-half model performance vs target." },
  ],
  activities: [
    // Always-on (1–6 months)
    { name: "Zero-Rated KC App", type: "always-on", months: [1,2,3,4,5,6], category: "Digital", note: "Zero-rate the KC app on KC Mobile SIMs. Lives day-1, runs forever." },
    { name: "Goal QR Boost", type: "always-on", months: [1,2,3,4,5,6], category: "Match-day", note: "100MB free data dropped any time KC scores. Runs all season." },
    { name: "Friday Pay-day Taxi Rank Truck", type: "always-on", months: [1,2,3,4,5,6], category: "Activation", note: "Branded truck visits Friday pay-day taxi ranks. Weekly cadence from week 1." },
    { name: "Pre-Match Data Drop", type: "match-day", months: [1,2,3,4,5,6], category: "Match-day", note: "Free 50MB code unlocks 60 minutes pre-kickoff at every KC home and away match." },
    { name: "Stadium Suite Upgrade Draw", type: "match-day", months: [1,2,3,4,5,6], category: "Match-day", note: "Every home match. Random KC Mobile customer in the stadium gets upgraded to a suite." },
    { name: "KC Anthem Sing-Along Booth", type: "match-day", months: [1,2,3,4,5,6], category: "Activation", note: "Stadium fan-zone fixture. Free SIM if you sing the chorus on camera." },

    // Monthly
    { name: "Player Meet-and-Greet Draw", type: "monthly", months: [2,3,4,5,6], category: "Engagement", note: "Monthly draw — 5 winners meet a starter at training. Starts M2." },
    { name: "Saturday Soccer Schools", type: "monthly", months: [3,4,5,6], category: "Activation", note: "KC coaches at township soccer schools. Adds provinces month-by-month." },

    // One-shot / burst
    { name: "Port-in Pole Position", type: "burst", months: [1], category: "Acquisition", note: "M1-only port-in race competition. Ports during M1 enter to win a Toyota Cross." },
    { name: "Soweto Derby Pre-Match Festival", type: "one-shot", months: [3], category: "Match-day", note: "One major derby-weekend fan festival. Anchored to first derby — modelled M3." },
    { name: "Soweto Derby Power Hour", type: "one-shot", months: [3], category: "Match-day", note: "Network-wide free data hour during the derby. Triggered with the festival." },
    { name: "Win-Streak Reward", type: "burst", months: [5,6], category: "Engagement", note: "Triggered when KC win 3+ in a row. Modelled to fire from M5 onward." },
    { name: "Player-Designed Jersey Draw", type: "burst", months: [3,4,5], category: "Engagement", note: "10 players × 10 jerseys = 100 total. Design M3 → vote M4 → reveal + give-away M5." },
  ],
};

/* ---------- PERSONAS · 8 personas from the KCM CVPs V2 doc -------------------
 * Source: KCM CVPs V2 — sections 5.1 to 5.8.
 * ---------------------------------------------------------------------------*/
export type Persona = {
  code: string;
  name: string;
  tag: string;
  shareOfBase: string;
  anchorCvp: string;
  snapshot: string;
  archetype: string;
  needs: string;
  motivations: string;
  barriers: string;
  successKpi: string;
  briefForAgency: string;
};

export const PERSONAS: Persona[] = [
  {
    code: "P1",
    name: "The Diehard Khosi",
    tag: "Stadium Loyalist",
    shareOfBase: "28–32%",
    anchorCvp: "MatchPass + AmaCoin",
    snapshot:
      "Lives in gold and black. Phefeni-section emotional. Won't miss a Soweto Derby. Spends on jerseys, away-days and DStv. Telco is his means to follow Amakhosi: WhatsApp banter, live commentary, betting predictions, social rivalry.",
    archetype:
      "The Believer — tribal identity comes first. Wears the badge. Defends the brand.",
    needs:
      "Cheap voice and WhatsApp, big data on weekends, never miss kick-off, stadium connectivity, betting/odds reliability.",
    motivations:
      "Status in his crew. Bragging rights. Match-day belonging. Being first to know team news.",
    barriers:
      "Distrust of MNO billing. Out-of-bundle shock. Network drops at FNB Stadium. Monday-morning data desert.",
    successKpi:
      "Activation cost <R45 · ARPU R110+ · weekend data multiplier 2.3× · NPS post-Derby >65",
    briefForAgency:
      "Speak in his crew's language — match-day, derby, kasi pride. Avoid corporate sanitisation. Yellow drip, packed away-day buses, FNB Stadium tunnel light. Channels: WhatsApp, Metro FM, billboard near taxi ranks, KCM activations at fixtures, players-as-influencers in match-week.",
  },
  {
    code: "P2",
    name: "The Khosi Sister",
    tag: "Rising Female Fan",
    shareOfBase: "18–22%",
    anchorCvp: "Khosi Sisters Circle",
    snapshot:
      "Fast-growing, under-served Chiefs supporter. Nielsen 2025 shows interest in BOTH men's and women's local football jumped 32.6% YoY among KC fans — the steepest gender-inclusive shift in the league. Combines fandom with strong views on safety, wellness and community.",
    archetype:
      "The Connector — fandom plus family plus wellness plus community.",
    needs:
      "Reliable data, safe-mobility tools (panic button, share-trip), wellness/clinic content, female-creator Chiefs content, savings on essentials.",
    motivations:
      "Belonging without macho gatekeeping. Visibility for women in the Chiefs story. Safety for herself and her children.",
    barriers:
      "Telco brands feel masculine and transactional. Existing Chiefs content rarely speaks to her.",
    successKpi:
      "Female activation share >38% · Khosi Sisters Circle MAU >55% · panic-button installs >70%",
    briefForAgency:
      "Drop the male gaze. Centre real Chiefs Sisters as creators and protagonists. Channels: TikTok, Instagram, Cosmo SA, women-led WhatsApp communities, wellness clinics.",
  },
  {
    code: "P3",
    name: "The Born-Free Khosi",
    tag: "Gen-Z Digital Native",
    shareOfBase: "16–20%",
    anchorCvp: "AmaCoin + Creator economy",
    snapshot:
      "18–25, born after 1994. KC fans show the SA market's sharpest social-platform shifts (Nielsen NFI 2025): TikTok +37.9% YoY, WhatsApp +24.9%, YouTube +21.6%, Google +28.2%. Discovers Chiefs via TikTok, FIFA/EAFC, YouTube Shorts, parents' stories.",
    archetype:
      "The Remixer — takes the Chiefs codes (anthems, players, history) and makes them current.",
    needs:
      "Massive social-data, zero-rated TikTok/IG, esports/FIFA tournaments, creator monetisation, instalment phone deals.",
    motivations:
      "Self-expression. Following the team without burning data. Earning from Chiefs creator economy.",
    barriers:
      "Cannot afford big bundles. Sceptical of telco gimmicks. Will leave instantly for a hotter brand.",
    successKpi:
      "TikTok-led activations >40% · sub-30s onboarding completion >85% · zero-rated app DAU >60%",
    briefForAgency:
      "Hand the brand to creators. Born-Free creator-fund where AmaCoin payouts make participation viable. Meme-fluent, fast-cut, archive-meets-now. Channels: TikTok, IG Reels, YouTube Shorts, FIFA streams, Discord — players as creator collaborators, not corporate spokespeople.",
  },
  {
    code: "P4",
    name: "The Khosi Family",
    tag: "Household Decision-Maker",
    shareOfBase: "12–15%",
    anchorCvp: "Family pack + Junior add-on",
    snapshot:
      "Buys SIMs for the whole family — partner, kids, sometimes a parent. Wants a single, predictable bill that lets them be Chiefs supporters together: family WiFi, kids' learning data, parental controls, match-day plans.",
    archetype:
      "The Provider — fandom is the family glue, expressed through shared rituals.",
    needs:
      "Multi-line plans, data sharing, McAfee Safe Family for kids, Chiefs Junior content, low-cost match-day family pack.",
    motivations:
      "Keep the family safe online. Make Chiefs the household ritual. Stretch the rand.",
    barriers:
      "MNO family plans are confusing and expensive. Loyalty pricing penalises them.",
    successKpi:
      "Multi-line activation >25% of household sales · Safe Family attach >35% · churn <12% annual",
    briefForAgency:
      "Family, ritual, predictability. Three generations watching a match together. Avoid 'big telco' coldness. Channels: vernacular radio, school PTA partnerships, community church, stokvel days, in-store family demos.",
  },
  {
    code: "P5",
    name: "Eskhotini Hustler",
    tag: "Township SME",
    shareOfBase: "10–14%",
    anchorCvp: "Hustler SIM (merchant tools)",
    snapshot:
      "Runs a spaza, cab, hair salon, scrapyard or food stall in a Chiefs heartland community. Phone is the till, the supplier line, the marketing platform. Wants telco that doubles as a business platform — and lets him rep the team.",
    archetype:
      "The Hustler — Chiefs energy translated into on-the-ground commerce.",
    needs:
      "Reliable data, USSD self-service, airtime resale margin, mobile till, SME bundles, branded retail collateral.",
    motivations:
      "Margin. Community status. Being the spaza everyone tops up at. Visible Chiefs presence in the community.",
    barriers:
      "Limited banking. Time-poor. Doesn't trust app-only experiences. Wants paper too.",
    successKpi:
      "Hustler-tier activations >18% of base · merchant network 15K+ within 24 months · USSD share >55%",
    briefForAgency:
      "Speak hustle, not consumer. Lead with margin and visibility. Branded retail collateral — KCM yellow on the spaza wall — is the most powerful media. Channels: vernacular radio, taxi rank, KCM van activations, township ambassador networks, USSD.",
  },
  {
    code: "P6",
    name: "The Diaspora Khosi",
    tag: "Global Amakhosi",
    shareOfBase: "3–5%",
    anchorCvp: "Diaspora travel eSIM",
    snapshot:
      "South African abroad — UK, UAE, Australia, US, Pan-Africa. Watches every match on whatever stream they can find. Sends money home. Wants to feel close to the badge and to family.",
    archetype:
      "The Exile — distance intensifies tribal pride.",
    needs:
      "Travel eSIM with SA number retention, low-cost IDD, live KCM content, remittance integration, ticket-priority on home visits.",
    motivations:
      "Emotional bridge to home. Status as 'still loyal Chiefs'. Practical: cheap calls home, data abroad.",
    barriers:
      "SA SIM lapses. Roaming bill shock. Geo-blocked SA content.",
    successKpi:
      "Diaspora SIM base 35K+ by Y3 · eSIM travel-pack ARPU R380+ · remittance attach >12%",
    briefForAgency:
      "Sell the bridge home, not just the data abroad. Diaspora communities celebrating a goal at 3am London time. Channels: SA-expat Facebook groups, OR Tambo airport, remittance partner co-marketing, diaspora WhatsApp groups, KCM diaspora newsletter.",
  },
  {
    code: "P7",
    name: "Junior Khosi",
    tag: "Tween & Schoolkid",
    shareOfBase: "8–12%",
    anchorCvp: "Junior Khosi safe-fan SIM",
    snapshot:
      "Age 8–17. Daily smartphone user. Loves FIFA, TikTok, YouTube. Parent owns the contract. Chiefs is inherited identity, becoming personal as players become heroes.",
    archetype:
      "The Apprentice — learning fandom from family, making it their own.",
    needs:
      "Schoolwork data, gamified Chiefs content, McAfee Safe Family controls, kid-safe entertainment, AmaCoin rewards.",
    motivations:
      "Be cool with friends. Have phone autonomy. Earn rewards. Meet players.",
    barriers:
      "Not the buyer. Cannot fix issues. Needs parent permission.",
    successKpi:
      "Junior-tier active SIMs >12% of base · parent control opt-in >80% · AmaCoin redemption >2 / quarter",
    briefForAgency:
      "Sell to the parent through trust and to the kid through aspiration. Players visiting schools — players are an asset for school-day campaigns. Channels: school day events, kid-safe YouTube, parent influencers, community football academy days.",
  },
  {
    code: "P8",
    name: "The Khosi Elder",
    tag: "Heritage Loyalist",
    shareOfBase: "5–8%",
    anchorCvp: "Khosi Heritage UX",
    snapshot:
      "55+. Lived through the 1970s–80s glory years. Doc Khumalo, Ace Khuse, Lucas Radebe. Still talks about the legendary moments. Wants simplicity, voice clarity, low cost, and respect.",
    archetype:
      "The Keeper — guardian of the team's myth and the family's memory.",
    needs:
      "Big-button UX, voice-first navigation, low-cost voice, easy USSD, no surprise charges, family-line subsidy from kids.",
    motivations:
      "Stay in touch with family. Listen to matches. Pass the legacy down.",
    barriers:
      "Tech anxiety. Doesn't trust apps. Suspicious of out-of-bundle billing.",
    successKpi:
      "Elder-tier ARPU R55–R75 · USSD share >70% · complaint rate <2.5%",
    briefForAgency:
      "Respect first, simplicity always. The product must look easy from the outside of the box. Channels: vernacular radio, community halls, funeral society partnerships, in-person retail demos with patient agents.",
  },
];

/* ---------- PRODUCT_CVPS · 8 non-comparable CVPs from CVPs V2 doc -----------*/
export type ProductCvp = {
  code: string;
  name: string;
  tag: string;
  primaryPersonas: string;
  promise: string;
  mechanic: string;
  whyNonComparable: string;
  pricingAnchor: string;
  kpis: string;
  firstInSa: boolean;
};

export const PRODUCT_CVPS: ProductCvp[] = [
  {
    code: "CVP-1",
    name: "AmaCoin Wallet",
    tag: "The Chiefs tribe currency",
    primaryPersonas: "All — anchored on P1, P3, P4",
    promise:
      "Every rand spent on KCM earns AmaCoin — the only currency that buys Chiefs tickets, jerseys, AR experiences, meet-and-greets and digital collectibles. Connectivity becomes club equity.",
    mechanic:
      "Earn 1 AmaCoin per R10 of recharge or bundle spend. Bonus multipliers for match-day spend, away-days, brand co-promos. Burn on official KC Store, ticket priority, fan-token drops, exclusive content.",
    whyNonComparable:
      "Vodacom VodaBucks and MTN 1Up are commoditised utility points. AmaCoin is identity capital — it buys outcomes you can wear and post.",
    pricingAnchor:
      "Built into all packages, zero extra cost. Margin protected via ticket allocation and merchandise margin share.",
    kpis: "Earn-rate >85% of base · redemption >40% within 90 days · jersey/ticket attach lift >18%",
    firstInSa: false,
  },
  {
    code: "CVP-2",
    name: "MatchPass",
    tag: "Stadium-grade match-day mode",
    primaryPersonas: "P1 Diehard, P2 Sister, P3 Born-Free, P4 Family",
    promise:
      "From kick-off −2 hours to full-time +1, the phone goes into Chiefs mode: free 5GB match-data, zero-rated live commentary and stats, push-to-talk fan chants, fast-track ticket QR, geofenced stadium WiFi access.",
    mechanic:
      "Auto-activated by geofence (FNB Stadium, Peter Mokaba, Loftus, Moses Mabhida) or by login on match-day. Includes ticket NFT proof-of-presence and bonus AmaCoin for stadium check-in.",
    whyNonComparable:
      "No SA telco bundles a geofenced, time-bound, club-aligned match-day pack. MatchPass turns a game into a network event you can only get with KCM.",
    pricingAnchor:
      "Free for active KCM postpaid · R29 unlock for prepaid match-by-match.",
    kpis: "Activation share >55% on derby days · ticket-buy-through >9% · post-match retention +14%",
    firstInSa: false,
  },
  {
    code: "CVP-3",
    name: "Khosi Sisters Circle",
    tag: "Female-first fan & safety bundle",
    primaryPersonas: "P2 Khosi Sister",
    promise:
      "A bundle and content layer built around women's reality: panic button + live trip-share, driver-safety scoring, women-creator Chiefs content channel, wellness partner credits, period-cycle data tools, and a private Khosi Sisters WhatsApp community.",
    mechanic:
      "R49/m add-on or included in higher-tier packages. Integrates safety, McAfee Safe Family Lite, partnered women's-clinic content, KCM women's-football coverage.",
    whyNonComparable:
      "No SA MNO has a female-first proposition tied to a sports brand. First time fandom, safety and wellness ride on the same SIM.",
    pricingAnchor: "R49/m or bundled at no extra cost above the R165 tier.",
    kpis: "Female activation share lift +18 pp · MAU >55% · NPS women cohort >70",
    firstInSa: true,
  },
  {
    code: "CVP-4",
    name: "Junior Khosi",
    tag: "Kid-safe, fan-powered SIM",
    primaryPersonas: "P7 Junior Khosi (parent-purchased)",
    promise:
      "A SIM designed for children with McAfee Safe Family pre-installed — app filtering, time controls, location alerts — gamified Chiefs learning content, schoolwork-data zero-rating, and AmaCoin rewards for healthy screen-time and study streaks.",
    mechanic:
      "Parent provisions through KCM app. Kid earns AmaCoin for completing learning modules co-developed with Maharishi Institute and KCM Academy. Redeemable for jersey patches, club-experience days.",
    whyNonComparable:
      "Combines a Tier-1 cybersecurity stack, a club-co-branded learning track, and a rewards economy. No competitor packages all three on a sports brand.",
    pricingAnchor:
      "R100/m, including McAfee Safe Family pre-installed and the KCM Academy learning content track.",
    kpis: "12% of base · Safe Family opt-in >80% · monthly schoolwork zero-rating use >65%",
    firstInSa: true,
  },
  {
    code: "CVP-5",
    name: "Eskhotini Hustler",
    tag: "Township SME-as-a-SIM",
    primaryPersonas: "P5 Eskhotini Hustler",
    promise:
      "Your spaza phone is now your business platform. Audio-payments-enabled, mobile till, instant airtime resale margin, supplier USSD shortcuts, KCM-branded retail collateral, and fast-cash micro-loans against your KCM transaction history.",
    mechanic:
      "Hustler SIM unlocks merchant tools. Resell airtime/data with auto-margin. Audio payments accept transactions tone-broadcast. KCM signage in exchange for sign-ups. Loan facility via DSG fintech partner with KCM activity scoring.",
    whyNonComparable:
      "Capitec Connect is a SIM. MTN Pulse is a youth bundle. KCM Hustler is a business-in-a-SIM with club brand halo and township credit access.",
    pricingAnchor: "R99/m. Earns 3% airtime resale, 1.8% data resale margin.",
    kpis: "Activations 18%+ of base · merchant network 15K by Y3 · micro-loan attach >7%",
    firstInSa: false,
  },
  {
    code: "CVP-6",
    name: "Diaspora Khosi",
    tag: "Always-A-Chief, anywhere",
    primaryPersonas: "P6 Diaspora Khosi",
    promise:
      "Keep your SA Chiefs identity alive abroad. One eSIM holds your home number for incoming calls, plus a regional travel data profile. Cheapest calls home, geo-unblocked KCM live audio and content, ticket priority for home visits, easy remittance to family wallets.",
    mechanic:
      "Dual eSIM via the Digital Mobile travel platform. Regional packs (UK/EU, Middle East, Australasia, Pan-Africa, US). KCM audio commentary geo-unblocked. Tickets reservable from abroad. Diaspora WhatsApp community.",
    whyNonComparable:
      "No SA MNO can credibly serve diaspora — they are MNO-locked. Travel eSIM brands have no SA fan emotional product. KCM owns this corridor by uniting connectivity, identity and remittance.",
    pricingAnchor: "R249 base travel pack · R380 ARPU target inclusive of voice + remittance.",
    kpis: "35K SIMs by Y3 · ARPU R380 · remittance attach 12% · content stream MAU >40%",
    firstInSa: true,
  },
  {
    code: "CVP-7",
    name: "Stadium Mode",
    tag: "The network inside the walls",
    primaryPersonas: "P1 Diehard, P3 Born-Free",
    promise:
      "Walk into FNB Stadium with KCM and the phone gets superpowers: free WiFi at the turnstile, ticket scan-and-shout AR effect, live MOTM voting, on-seat cashless food/drink ordering, and bonus AmaCoin for being there.",
    mechanic:
      "KCM-branded stadium WiFi backbone (in partnership with venue and host MNO MTN), branded AR camera filters, on-seat ordering integration with stadium concessions, AmaCoin geofence reward.",
    whyNonComparable:
      "MNOs sponsor stadium boards. KCM owns stadium-day digital experience as its native product. Stadium becomes a media channel only KCM customers fully unlock.",
    pricingAnchor: "Included on all KCM SIMs.",
    kpis: "Stadium-day WiFi sessions >70% of attendees · on-seat order GMV per match R0.5M+ at maturity",
    firstInSa: true,
  },
  {
    code: "CVP-8",
    name: "Khosi Heritage",
    tag: "Voice-first, big-button, big-heart",
    primaryPersonas: "P8 Khosi Elder",
    promise:
      "A simple, dignified mobile experience for the supporters who built the legend. Big-button menus, voice-first USSD, audio match commentary delivered via call, no out-of-bundle surprises, and a 'Family Subsidy' link letting children top-up the elder's line in one tap.",
    mechanic:
      "Curated UI overlay on entry-level Android, voice-driven USSD menus in 11 SA languages, weekly audio match-pack push, hard out-of-bundle cap, kin-link top-up.",
    whyNonComparable:
      "No SA telco has built a senior-respectful product around club heritage. Dignity-as-CVP earns multi-generational loyalty.",
    pricingAnchor: "R30/m starter · zero-cost when subsidised via the kin-link top-up.",
    kpis: "8% of base · complaint rate <2.5% · family-subsidy attach >40%",
    firstInSa: true,
  },
];

/* ---------- AmaCoin currency — drilldown for Loyalty section ---------------*/
export const AMA_COIN = {
  name: "AmaCoin",
  tagline: "The Chiefs tribe currency",
  oneLiner:
    "Every rand spent on KCM earns AmaCoin — KCM's named loyalty currency, sitting inside the Khosi Bronze / Silver / Gold tier ladder. AmaCoin is what makes the loyalty programme feel like club equity, not telco points.",
  earn: [
    "1 AmaCoin per R10 of recharge or bundle spend (every package)",
    "3× multiplier on match-day spend (Saturday + Sunday around fixtures)",
    "5× multiplier on Soweto Derby days",
    "Bonus drops for away-day attendance, brand co-promos, referrals",
  ],
  /**
   * Earn-Multiplier Days — moved here from the Launch Ideas library.
   * Time-bound earn-rate spikes are the cheapest, most reliable retention
   * lever in any loyalty programme; this is the always-on engagement
   * mechanic that sits inside AmaCoin itself rather than as a one-off
   * activation.
   */
  earnMultiplierDays: {
    name: "AmaCoin Earn Multiplier Days",
    whatHappens:
      "On selected days — every Soweto Derby, every away-day, every brand co-promo window — KCM customers earn 3× to 5× AmaCoin on every R10 spent. The boost is announced via push 24 hours ahead so the queue forms naturally.",
    whyItWorks:
      "Time-bound earn-rate spikes are the cheapest, most reliable retention lever in any loyalty programme. KCM customers learn to spend on KCM days because the basket of identity outcomes they unlock (tickets, jersey patches) is irrationally good vs the rand spend.",
    mechanic:
      "AmaCoin earn-rate config is set in Xanite (Marketing Layer). Push fires 24h ahead from the segmentation engine. Multiplier is honoured for any KCM transaction in the live window — bundle, recharge, VAS, eSIM, port-in. AmaCoin lands in-wallet within 30 minutes of the transaction settling.",
    cadence: "~3–5 multiplier days per month (every derby + every away-day + brand co-promo windows)",
    cvp: "CVP-1 AmaCoin Wallet",
    personas: "P1, P3, P4",
  },
  burn: [
    "Match tickets — Block 28 priority for Diehards, family pack for P4",
    "Jersey patches and KC Store drops — wearable AmaCoin output",
    "Digital collectibles and limited-edition app skins",
    "Player meet-and-greet raffles — Naturena access",
    "Stadium concessions on-seat ordering (Stadium Mode integration)",
  ],
  whyVsCompetitors: [
    "VodaBucks / MTN 1Up — utility points. Burn on more data. AmaCoin burns on identity outcomes.",
    "eBucks (Discovery / FNB) — wellness-led, aspirational LSM. AmaCoin is fandom-led, inclusive across LSMs.",
    "Capitec eBucks tier — banking-gated. AmaCoin earns from telco usage alone, no banking minimum.",
  ],
  kpis:
    "Earn-rate >85% of base · redemption >40% within 90 days · jersey/ticket attach lift >18%",
};

/* ---------- PRICING_PACKAGES · the 7 KC Mobile base packages ---------------*/
export type Package = {
  code: string;
  name: string;
  priceInclVat: number;
  priceExVat: number;
  cogs: number;
  grossMarginPct: number;
  voiceMin: number;
  dataMb: number;
  sms: number;
  anchorPersonas: string;
  notes: string;
};

export const PRICING_PACKAGES: Package[] = [
  { code: "K1.5", name: "Khosi 1.5GB",       priceInclVat:  90, priceExVat:  78.26, cogs:  38.44, grossMarginPct: 50.9, voiceMin: 10, dataMb: 1536,  sms: 20, anchorPersonas: "P1 Diehard · P3 Born-Free · P5 Hustler entry · P8 Elder", notes: "Entry tier — non-negotiable affordability anchor." },
  { code: "K3",   name: "Khosi 3GB",         priceInclVat: 165, priceExVat: 143.48, cogs:  70.40, grossMarginPct: 50.9, voiceMin: 20, dataMb: 3072,  sms: 50, anchorPersonas: "P2 Khosi Sister · P4 Family member line", notes: "Mid-tier with VAS room — Sisters Circle add-on bundles in cleanly." },
  { code: "K5",   name: "Khosi 5GB",         priceInclVat: 245, priceExVat: 213.04, cogs: 105.70, grossMarginPct: 50.4, voiceMin: 30, dataMb: 5325,  sms: 50, anchorPersonas: "P4 Family lead · P5 Hustler core", notes: "Premium tier — repriced from R175 to restore margin under MTN Q1 2026 rates." },
  { code: "K10",  name: "Khosi 10GB",        priceInclVat: 315, priceExVat: 273.91, cogs: 135.51, grossMarginPct: 50.5, voiceMin: 40, dataMb: 10445, sms: 50, anchorPersonas: "P3 Born-Free Pro · P5 Hustler Pro", notes: "Premium tier — repriced from R199 to restore margin under MTN Q1 2026 rates." },
  { code: "KH",   name: "Khosi Heritage",    priceInclVat:  30, priceExVat:  26.09, cogs:  11.87, grossMarginPct: 54.5, voiceMin: 10, dataMb: 50,    sms: 10, anchorPersonas: "P8 Elder — voice-first, big-button", notes: "Strong margin (54%) funds Elder-mode UX in 11 SA languages." },
  { code: "JK",   name: "Junior Khosi",      priceInclVat: 100, priceExVat:  86.96, cogs:  42.94, grossMarginPct: 50.6, voiceMin: 10, dataMb: 1536,  sms: 50, anchorPersonas: "P7 Junior — kid-safe, parent-purchased", notes: "Funds McAfee Safe Family pre-install + KCM Academy learning track." },
  { code: "EH",   name: "Eskhotini Hustler", priceInclVat:  99, priceExVat:  86.09, cogs:  36.82, grossMarginPct: 57.2, voiceMin: 20, dataMb: 1200,  sms: 30, anchorPersonas: "P5 Hustler — SME tier", notes: "Held flat at R99. Already at 57% GM with tightened bundle." },
];

/* ---------- VAS_PACKAGES — add-ons that lift ARPU --------------------------*/
export const VAS_PACKAGES = [
  { name: "Khosi Sisters Circle",    uptake: 18, price: 49,  wholesale: 20, gmPct: 53.1, persona: "P2" },
  { name: "McAfee Multi-Access",     uptake: 12, price: 15,  wholesale:  5, gmPct: 61.7, persona: "All" },
  { name: "Diaspora travel eSIM",    uptake:  1, price: 249, wholesale: 85, gmPct: 60.7, persona: "P6" },
  { name: "MatchPass (prepaid)",     uptake:  8, price: 29,  wholesale:  3, gmPct: 88.1, persona: "P1, P3" },
];

/* ---------- GTM_CHANNELS — wholesale-led monthly SIM allocation -----------*/
export const GTM_CHANNELS = {
  intro:
    "The MVNO Marketing Brief mandates wholesale-distribution-led GTM at 80% physical / 20% eSIM, 16,000 physical SIMs/month + 200 eSIMs/month. Below is how those volumes split across the seven distribution channels — totalling 16,200 SIMs/month at full Yr-1 run-rate.",
  channels: [
    { name: "National wholesale (FMCG)",        kit: "Physical SIM kits with R30 starter airtime + AmaCoin onboarding card", personas: "P1 · P3 · P4 · P5 · P8", monthlyTarget: 6000 },
    { name: "Retail (independent + chain)",     kit: "SIM + Junior pack endcaps · KCM yellow merchandising",                  personas: "P3 · P4 · P7",                monthlyTarget: 3500 },
    { name: "Eskhotini Hustler network",        kit: "Hustler-as-distributor: spaza, salon, taxi rank, scrapyard",            personas: "P5 · P1 · P8",                monthlyTarget: 3000 },
    { name: "Stadium activations",              kit: "FNB Stadium / Peter Mokaba / away-day pop-ups · on-seat eSIM",          personas: "P1 · P3 · P2",                monthlyTarget: 1500 },
    { name: "Sponsor co-activations",           kit: "Joint activations with shirt sponsor + KC partners (Toyota, FNB-style)", personas: "All",                         monthlyTarget: 1200 },
    { name: "KC owned (support only)",          kit: "Club app · social · matchday programme",                                personas: "All",                         monthlyTarget:  800 },
    { name: "Digital eSIM",                     kit: "KCM app · web · creator referrals (TikTok / IG / YouTube)",             personas: "P3 · P6 · P2",                monthlyTarget:  200 },
  ],
};

/* ---------- TRIBAL_PHASING — 4-phase Belonging Arc rollout -----------------*/
export const TRIBAL_PHASING = {
  intro:
    "The CVPs roll out across a 4-phase tribal arc that sits alongside the football-rhythm phasing above. Each phase activates a specific persona cluster + CVP set, with a lead KPI to hit before the next phase opens.",
  phases: [
    {
      num: 1,
      name: "Tribe Ignition",
      window: "Months 0–4",
      personas: "P1 Diehard · P3 Born-Free · P4 Family",
      cvpsLive: "AmaCoin · MatchPass · Stadium Mode · Khosi 1.5/3/5/10 packages",
      leadKpi: "64K SIMs (16K/m) · AmaCoin attach >85% · brand-recall lift +25 pp",
    },
    {
      num: 2,
      name: "Lifestyle VAS Layer",
      window: "Months 4–8",
      personas: "P2 Khosi Sister · P7 Junior Khosi · P8 Elder",
      cvpsLive: "Khosi Sisters Circle · Junior Khosi · Khosi Heritage · McAfee · cyber-insurance VAS",
      leadKpi: "VAS attach >35% · female share >35% · churn <14%",
    },
    {
      num: 3,
      name: "Hustler & Diaspora",
      window: "Months 8–12",
      personas: "P5 Hustler · P6 Diaspora Khosi",
      cvpsLive: "Eskhotini Hustler · Diaspora Khosi · merchant-tools layer",
      leadKpi: "4K+ Hustler merchants live · 8K+ Diaspora SIMs · 200+ eSIMs / month",
    },
    {
      num: 4,
      name: "Compounding tribe",
      window: "Months 12–60",
      personas: "All — focus on cross-sell and lifetime value",
      cvpsLive: "Premium tiers · fan-token economy · stadium concessions · content rights",
      leadKpi: "Cumulative EBIT R126.7M+ by Y5 (V2 model)",
    },
  ],
};


/* ---------- BRAND_LANGUAGE · canonical KCM lexicon -------------------------*/
export const BRAND_LANGUAGE = {
  intro:
    "The canonical KCM vocabulary. Use these terms verbatim across creative, CRM, retail, and PR. Anything else is off-brand.",
  currency: [
    { term: "AmaCoin", note: "The KCM tribal currency. Singular: 'one AmaCoin'. Used as 'I earned 50 AmaCoin on derby day'. Never 'AmaCoins'." },
    { term: "MatchPass", note: "The match-day mode. Capitalised. Verb-able noun: 'switch on MatchPass'." },
    { term: "Stadium Mode", note: "The geofenced in-stadium experience layer." },
    { term: "Khosi for Life", note: "Campaign signature line. Reserved for high-emotion moments." },
  ],
  personaTiers: [
    { term: "Khosi 1.5 / Khosi 3 / Khosi 5 / Khosi 10", note: "The package family. Ladder of belonging." },
    { term: "Born-Free", note: "The Gen-Z tier. Capitalised. Avoid using outside Gen-Z marketing." },
    { term: "Hustler / Hustler Pro", note: "The SME tier. Always paired with margin and merchant story." },
    { term: "Khosi Sisters Circle", note: "The female-first community + bundle. Plural and capitalised." },
    { term: "Junior Khosi", note: "The kids' SIM and content track." },
    { term: "Diaspora Khosi", note: "The global supporter offer." },
    { term: "Khosi Heritage", note: "The elder-respect tier. Tone: gentle, dignified, in mother tongue." },
    { term: "Founder Khosi", note: "First 1,000 pre-launch alpha members. Permanent badge in app, double data forever." },
  ],
  clubLexicon: [
    { term: "Amakhosi", note: "The fans. The tribe. Plural noun for the supporter base." },
    { term: "Phefeni Glamour Boys", note: "Iconic Chiefs nickname rooted in Soweto heritage. High-emotion only." },
    { term: "Naturena", note: "The KC training ground. Sacred territory." },
    { term: "Soweto Derby", note: "Capitalised. Always two words." },
    { term: "Yebo Yebo Naturena", note: "Pre-match call. Use sparingly — high-emotion." },
  ],
  wordsToAvoid: [
    { term: "Subscriber", note: "Use Khosi, Sister, Junior, Hustler. 'Subscriber' is telco-coded and breaks the tribal frame." },
    { term: "Out-of-bundle", note: "Replace with the explicit Rand value and a clear cap message." },
    { term: "Free data weekend", note: "Don't use generic free-data language. Tie every drop to a Chiefs ritual hook." },
    { term: "Customer", note: "Use Khosi or persona name. 'Customer' is corporate." },
    { term: "MVNO", note: "Internal term only. Customer-facing: 'KC Mobile'." },
    { term: "Anything that infantilises", note: "Township customers and Gen-Z are sophisticated buyers. Don't talk down." },
  ],
};


/* ---------- CONVERSION_FUNNEL · activations → impressions (back-calculated)
 * Source of truth: KCM Digital Mobile model. Yr-1 SIM activation target =
 * 16,000 new SIMs/month × 12 = 192,000 (the brief). Each channel below carries
 * an allocated share of that 192K (per the GTM brief and SA market mix).
 * Impressions per channel = activations ÷ industry conversion rate, so the
 * impression numbers are derived rather than asserted.
 * --------------------------------------------------------------------------*/

export type FunnelChannel = {
  key: string;
  label: string;
  group: "digital" | "match-day" | "retail" | "radio-pr" | "player-social";
  /** Yr-1 activations allocated to this channel (sums to 194,400 incl. eSIM). */
  activationsYr1: number;
  /** Industry conversion rate (% of impressions → activations) used to back-
   *  calculate impressions. Sourced from SA market benchmarks. */
  impressionConvPct: number;
};

export const CONVERSION_FUNNEL: {
  intro: string;
  yr1ActivationTarget: number;
  yr1RetentionPct: number;
  channels: FunnelChannel[];
  groupLabels: Record<FunnelChannel["group"], string>;
} = {
  intro:
    "Total Yr-1 activations come from the KCM Digital Mobile model: 16,000 new SIMs per month × 12 = 192,000, plus 200 eSIMs per month × 12 = 2,400. Combined Yr-1 brief target = 194,400. Each channel below is allocated a share of that total per the GTM brief and SA market mix. Impressions are then back-calculated as activations ÷ industry conversion rate, so the impression numbers are derived rather than invented. M12 active subscribers = 148,930 per the model (76.6% Yr-1 retention after compounding 5% monthly churn).",
  yr1ActivationTarget: 194_400,
  yr1RetentionPct: 76.6,
  groupLabels: {
    digital:        "Digital paid",
    "match-day":    "Match-day · stadium",
    retail:         "Retail / trade · spaza + murals",
    "radio-pr":     "Radio + PR",
    "player-social":"Player social",
  },
  channels: [
    // Digital paid (4 channels) — sub-bracket of the GTM "digital eSIM" allocation
    { key: "perf-social",  label: "Performance social — Meta + TikTok",      group: "digital",       activationsYr1:  3_500, impressionConvPct: 0.050 },
    { key: "dstv-stream",  label: "DStv Stream LIVE + VOD",                  group: "digital",       activationsYr1:  1_200, impressionConvPct: 0.040 },
    { key: "programmatic", label: "Programmatic display + CTV",              group: "digital",       activationsYr1:  1_800, impressionConvPct: 0.008 },
    { key: "yt-search",    label: "YouTube + Search",                        group: "digital",       activationsYr1:  1_500, impressionConvPct: 0.100 },
    { key: "digital-esim", label: "Digital eSIM — KCM app · web · creator referrals", group: "digital", activationsYr1: 2_400, impressionConvPct: 0.080 },

    // Match-day (3 channels) — stadium GTM (15 home matches × 30K attendance + fan-festival walkup)
    { key: "stadium",          label: "Stadium fan-zone activations (15 home matches)", group: "match-day", activationsYr1:  3_600, impressionConvPct: 0.800 },
    { key: "match-tv",         label: "Match-day broadcast (SS PSL/Premier League)",     group: "match-day", activationsYr1:  4_000, impressionConvPct: 0.030 },
    { key: "match-data-drops", label: "Goal QR Boost + Pre-Match Data Drop",             group: "match-day", activationsYr1:  3_000, impressionConvPct: 0.100 },

    // Retail / trade (incl. township murals + KC owned + referral) — biggest cluster
    { key: "retail-pos",   label: "POS at MTN dealers + independents (800 stores)",   group: "retail", activationsYr1:102_100, impressionConvPct: 1.000 },
    { key: "hustler",      label: "Hustler network (spaza / salon / taxi rank)",      group: "retail", activationsYr1: 40_000, impressionConvPct: 1.200 },
    { key: "kappa-bundle", label: "Kappa & SIM Bundle in-store",                      group: "retail", activationsYr1:  4_000, impressionConvPct: 2.500 },
    { key: "murals",       label: "Cider Point township murals (6 walls · GP + KZN)", group: "retail", activationsYr1:  1_300, impressionConvPct: 0.010 },
    { key: "kc-owned",     label: "KC owned · club app + KC.com + matchday programme",group: "retail", activationsYr1:  9_600, impressionConvPct: 0.500 },
    { key: "referral",     label: "Refer-a-Khosi · existing-customer referrals",      group: "retail", activationsYr1: 14_000, impressionConvPct: 1.200 },

    // Radio + PR (3 channels) — primarily brand-recall, supports retail conversion
    { key: "sabc",          label: "SABC African-language radio",                     group: "radio-pr", activationsYr1:    200, impressionConvPct: 0.010 },
    { key: "jacaranda-ecr", label: "Jacaranda + ECR + OnsideZA",                      group: "radio-pr", activationsYr1:    100, impressionConvPct: 0.010 },
    { key: "press-pr",      label: "Earned PR (Soccer Laduma, KickOff, Idiski Times)",group: "radio-pr", activationsYr1:    100, impressionConvPct: 0.020 },

    // Player social (2 channels) — paid posts + image-rights organic
    { key: "player-paid",     label: "Player social — paid branded posts (12 senior posts)", group: "player-social", activationsYr1:  1_000, impressionConvPct: 0.050 },
    { key: "player-organic",  label: "Player social — organic + image-rights content",       group: "player-social", activationsYr1:  1_000, impressionConvPct: 0.010 },
  ],
};


/* ---------- SOURCES_REGISTRY · canonical reference list ---------------------
 * The single source-of-truth list for every external data point used in the
 * site. Each major figure on the page should be traceable back to one of
 * these. Surfaced via the SourcesPanel component on the Overview section so
 * any reviewer can verify the underlying data.
 * ---------------------------------------------------------------------------*/

export type SourceCategory =
  | "financial"
  | "audience"
  | "channels"
  | "supplier"
  | "industry";

export type SourceEntry = {
  id: string;
  category: SourceCategory;
  title: string;
  detail: string;
  /** What it's used for on the site. */
  usedFor: string;
  /** Optional location hint (file path, doc name, public URL). */
  location?: string;
};

export const SOURCES_REGISTRY: SourceEntry[] = [
  // ---------- Financial — KCM Digital Mobile model V2 ----------
  {
    id: "kcm-model-v2",
    category: "financial",
    title: "KCM Digital Mobile model V2 (xlsx)",
    detail:
      "ARPU R116.51 / month · 51–52% gross margin · 5% monthly churn · 76.6% Yr-1 retention · R4,514,901 Yr-1 marketing (R376,242 / month flat) · 16,000 SIMs / month gross adds · 192,000 Yr-1 gross adds · 147,085 M12 active subs · M5 EBIT-positive · M8 loan cleared · Yr-1 cumulative EBIT R3.6M · Yr-1 revenue R121M · Yr-1 GP R61.7M · Yr-1 KCM share R1.8M.",
    usedFor:
      "Hero stats, Investment Model section, Conversion Funnel anchor, Plan Detail R4.5M total, Pricing section gross-margin claims, Customer Journey churn targets.",
    location: "/KC Research/Financials & Model/KCM Digital Mobile model V2.xlsx",
  },
  {
    id: "kcm-cvps-v2",
    category: "financial",
    title: "KCM CVPs V2 (doc)",
    detail:
      "8 customer personas · 8 product CVPs · pricing logic per package · AmaCoin economy · Khosi tier ladder · loyalty mechanics · belonging arc framing.",
    usedFor:
      "Audience persona breakdown, Product CVPs section, Pricing packages, Loyalty section, AmaCoin currency framing, brand language definitions.",
    location: "/KC Research/Strategy/KCM CVPs V2.docx",
  },

  // ---------- Audience — Nielsen ----------
  {
    id: "nielsen-nfi-2025",
    category: "audience",
    title: "Nielsen Sports SA — NFI Fan Study (March 2025)",
    detail:
      "n=487 self-identified Kaizer Chiefs fans · 6 platform-usage YoY metrics · top-2 sports betting interest 62.85% · 48.1% attend matches for camaraderie (+14.5pp above SA football average) · TikTok +37.9% YoY · DStv Compact Stream +50.2% YoY · Google search +28.2% YoY.",
    usedFor:
      "Audience section insights, fan-platform YoY bar chart, persona over-indexing data, headline summary band (37.9% / 62.85% / 48.1%).",
    location: "/KC Research/Audience/Nielsen Sports SA NFI March 2025.pdf",
  },

  // ---------- Channels & GTM ----------
  {
    id: "kcm-gtm-brief",
    category: "channels",
    title: "KCM Mobile MVNO GTM Brief (V3 draft)",
    detail:
      "Wholesale 6K/m (POS at MTN dealer + independent stores, ~800 stores) · retail 3.5K/m · hustler informal trade 3K/m · stadium 1.5K/m · KC owned 0.8K/m · digital eSIM 0.2K/m · all summing to the 16K/m brief target.",
    usedFor:
      "Conversion Funnel channel allocation logic, Plan Detail category split, Tribal Phasing, Customer Journey acquisition channels.",
    location: "/KC Research/GTM/KC Mobile MVNO GTM Brief V3.docx",
  },

  // ---------- Supplier rate cards ----------
  {
    id: "dms-rate-card-2026",
    category: "supplier",
    title: "DStv Media Sales (DMS) Rate Card · March 2026",
    detail:
      "Premier League Tactical Sponsorship R1,621,688 (200 matches, squeezebacks + 30s TVC, 2.1M digital impressions) · DStv Stream LIVE/VOD inventory · SS PSL package rates.",
    usedFor:
      "Plan Detail line items in Digital + PR/Radio categories, OnsideZA broadcast partnership costing.",
    location: "/KC Research/Rate Cards/DMS Rate Card March 2026.pdf",
  },
  {
    id: "mediamark-digital-2025",
    category: "supplier",
    title: "Mediamark Digital Rate Card · September 2025",
    detail:
      "Programmatic display + CTV + audio CPMs · YouTube + Search packaged inventory · Meta + TikTok benchmark CPMs.",
    usedFor:
      "Plan Detail digital paid line-item costing, Conversion Funnel impression CPM cross-checks.",
    location: "/KC Research/Rate Cards/Mediamark Digital Rate Card Sept 2025.pdf",
  },
  {
    id: "cider-point-ooh-schedule",
    category: "supplier",
    title: "Cider Point Media & Marketing — OOH Schedule (Jun–Aug 2026)",
    detail:
      "15 named township-mural sites across Gauteng (11) + KZN (4): Soweto (4) · Alexandra (2) · Tembisa (2) · Pretoria (3) · Umlazi/Chatsworth/KwaMashu (4). Discounted monthly media rate R14,000 per wall (R20,000 for the 3 Pretoria premium sites · R15,000 rate card with 7% discount). Production R12,000 per wall (R7,800–R8,000 for Pretoria). Three-month flight quoted at R780,000 ex VAT (R588K media + R192K production). Each site carries a monthly traffic count (12K–220K cars), LSM 4–7 audience, partial GPS coordinates, and on-site photo. Account manager: John Mokolobetsi Ditshwene.",
    usedFor:
      "Plan Detail Retail / Trade · spaza + murals line item (now repriced from B2F to Cider Point rates). Strategy chapter Marketing Targeting Map (15 wall locations, GPS coordinates). Annex media-proposals reference.",
    location: "/KC Research/Suppliers/Cider Point Media OOH Schedule_GAUTENG & KZN.pdf + Cider Point Media Walls Site List with GPS Coordinates GAUTENG & KZN.pptx",
  },
  {
    id: "back-to-front-quote",
    category: "supplier",
    title: "Back to Front Media & Events Solutions — service profile",
    detail:
      "Alternative township-OOH supplier evaluated alongside Cider Point. Capability profile (25-slide deck) covering 3D/HD wall murals, spaza/tarven/pub branding, supermarket branding, motor spares & warehouse, posters/banners/perspex/chromadex. Pricing: R10,000 production per wall + R5,500/month media rental (2m × 10m fixed). Spaza/outlet branding: R13,500 small-medium · R15,500+ large. 20-day production lead time. No specific named sites in the deck — production-house model where the buyer directs wall locations.",
    usedFor:
      "Annex media-proposals reference (lower-cost alternative). Cross-check on township OOH market rates.",
    location: "/KC Research/Suppliers/B2FMediaProposal_UpdatedProfile_02102025_120241.pdf",
  },
  {
    id: "onsideza-deck",
    category: "supplier",
    title: "OnsideZA Show Deck",
    detail:
      "117K average monthly YouTube views · 86% male audience · 8.14 min average view duration · 176K Bafana watchalong views · audience composition + sponsorship integration formats.",
    usedFor:
      "Voices & Players section (SA football media partners), PR / Radio category in Plan Detail, OnsideZA listing in Supplier Directory.",
    location: "/KC Research/Suppliers/OnsideZA Show Deck.pdf",
  },

  // ---------- Industry benchmarks ----------
  {
    id: "industry-cpm-benchmarks",
    category: "industry",
    title: "Industry CPM + conversion rate benchmarks (SA telco / MVNO)",
    detail:
      "Paid social 0.05–0.30% impression-to-activation · DStv Stream LIVE 0.04% · programmatic display 0.008% · YouTube + Search 0.10% · in-stadium fan-zone 4% · retail POS 1% · informal hustler 1.2% · kappa SIM bundle 2.5% · KC owned 0.5% · refer-a-Khosi 1.2% · township murals 0.01% · radio 0.01% · earned PR 0.02% · player paid 0.05% · player organic 0.01%.",
    usedFor:
      "Conversion Funnel impression back-calculation (activations ÷ industry conversion rate per channel).",
    location:
      "Composite of SA telco / MVNO published benchmarks (MTN / Vodacom investor decks 2024–2025), Mediamark Digital Rate Card Sept 2025, IAB SA digital benchmarks 2024.",
  },
  {
    id: "kc-website-sponsors",
    category: "industry",
    title: "kaizerchiefs.com — sponsor footer + ecosystem",
    detail:
      "Current sponsor list (Toyota, Vodacom, Castle Lager, etc.), KC Legends programme, digital touchpoints (KC app, KC.com, matchday programme).",
    usedFor:
      "Sponsors section, Voices & Players KC Legends list, KC owned channel inventory.",
    location: "https://kaizerchiefs.com/",
  },
];

export const SOURCE_CATEGORY_LABELS: Record<SourceCategory, string> = {
  financial: "Financial model",
  audience: "Audience research",
  channels: "Channels & GTM",
  supplier: "Supplier rate cards",
  industry: "Industry benchmarks",
};


/* ---------- MARKETING_GEO · spatial coverage of the campaign ---------------
 * Used by the Strategy chapter's Marketing Targeting Map sub-section. Three
 * point sets:
 *   • kcStadium       — KC's home venue (FNB Stadium, Soweto).
 *   • awayStadiums    — every Betway Premiership 2025-26 club's home venue,
 *                       which becomes a KC away fixture (and an opportunity
 *                       to land match-day creative in the away city).
 *   • ciderPointWalls — the 15 township-mural sites quoted in the Cider
 *                       Point Media OOH Schedule (Jun–Aug 2026), each with
 *                       monthly traffic count + LSM band + GPS where the
 *                       deck supplied them.
 *
 * Stadium GPS coordinates are approximate — sourced from public Wikipedia /
 * Transfermarkt entries for the venues. Cider Point GPS coordinates that
 * came directly from the supplier deck are marked source: "supplier"; the
 * remainder are estimated from the address description (source: "estimated").
 * --------------------------------------------------------------------------*/

export type GeoSource = "supplier" | "estimated" | "wikipedia";

export type MapPoint = {
  id: string;
  label: string;
  city: string;
  province: "GP" | "KZN" | "LIM" | "MP" | "FS" | "EC" | "WC" | "NW" | "NC";
  lat: number;
  lng: number;
  /** optional one-line note shown on hover/tap */
  note?: string;
  /** source attribution for the GPS value */
  geoSource: GeoSource;
};

export type StadiumPoint = MapPoint & {
  team: string;
  capacity?: number;
  /** is this KC's primary home venue? */
  isHome?: boolean;
};

export type CiderPointWall = MapPoint & {
  cpmCode: string;
  size: string;
  /** monthly traffic count (cars) */
  monthlyTraffic: number;
  lsm: string;
  /** monthly discounted media rate, ex VAT */
  monthlyRate: number;
  /** once-off production cost, ex VAT */
  productionCost: number;
};

export const KC_HOME_STADIUM: StadiumPoint = {
  id: "fnb-stadium",
  label: "FNB Stadium (Soccer City)",
  city: "Johannesburg",
  province: "GP",
  lat: -26.2350,
  lng: 27.9826,
  team: "Kaizer Chiefs",
  capacity: 94_736,
  isHome: true,
  note: "KC's primary 2025-26 home venue — all 15 league home fixtures play here, except Round 30 vs Chippa moved to Moses Mabhida.",
  geoSource: "wikipedia",
};

/**
 * Betway Premiership 2025-26 — the 15 other clubs and their primary home
 * grounds. Source: PSL Clubs' Home Grounds for 2025/26 Betway Premiership
 * Season Revealed (centralnews.co.za) cross-checked with Wikipedia. KC
 * plays each of these as an away fixture (single round-robin home + away
 * format means 15 away matches over the season).
 */
export const PSL_AWAY_STADIUMS: StadiumPoint[] = [
  // Gauteng (Pretoria + Johannesburg)
  { id: "orlando-stadium",     label: "Orlando Stadium",        city: "Soweto, Johannesburg",  province: "GP",  lat: -26.2354, lng: 27.9385, team: "Orlando Pirates",      capacity: 37_139, geoSource: "wikipedia", note: "The Soweto Derby venue — KC vs Pirates derby is the highest-stakes match of the season." },
  { id: "loftus-versfeld",     label: "Loftus Versfeld Stadium", city: "Pretoria",              province: "GP",  lat: -25.7536, lng: 28.2229, team: "Mamelodi Sundowns",    capacity: 51_762, geoSource: "wikipedia", note: "Sundowns' Loftus is the title-rivalry venue — second-highest viewership match of the season." },
  // KwaZulu-Natal
  { id: "moses-mabhida",       label: "Moses Mabhida Stadium",   city: "Durban",                province: "KZN", lat: -29.8298, lng: 30.5021, team: "AmaZulu",              capacity: 56_000, geoSource: "wikipedia", note: "KZN's marquee venue. Also hosts KC's final-round vs Chippa fixture (relocated from FNB)." },
  { id: "chatsworth-stadium",  label: "Chatsworth Stadium",      city: "Chatsworth, Durban",    province: "KZN", lat: -29.9128, lng: 30.8851, team: "Durban City",          capacity: 30_000, geoSource: "wikipedia" },
  { id: "king-zwelithini",     label: "King Zwelithini Stadium", city: "Umlazi, Durban",        province: "KZN", lat: -29.9683, lng: 30.8765, team: "Golden Arrows",        capacity: 12_000, geoSource: "wikipedia" },
  { id: "richards-bay-stadium",label: "Richards Bay Stadium",    city: "Richards Bay",          province: "KZN", lat: -28.7868, lng: 32.0363, team: "Richards Bay",         capacity: 5_000,  geoSource: "wikipedia" },
  // Limpopo
  { id: "old-peter-mokaba",    label: "Old Peter Mokaba Stadium",city: "Polokwane",             province: "LIM", lat: -23.9106, lng: 29.4660, team: "Polokwane City",       capacity: 22_000, geoSource: "wikipedia" },
  { id: "new-peter-mokaba",    label: "New Peter Mokaba Stadium",city: "Polokwane",             province: "LIM", lat: -23.9000, lng: 29.4694, team: "Sekhukhune United",    capacity: 41_733, geoSource: "wikipedia" },
  { id: "seshego-stadium",     label: "Seshego Stadium",         city: "Polokwane",             province: "LIM", lat: -23.8607, lng: 29.4163, team: "Magesi FC",            capacity: 15_000, geoSource: "wikipedia" },
  // Mpumalanga
  { id: "mbombela-stadium",    label: "Mbombela Stadium",        city: "Mbombela (Nelspruit)",  province: "MP",  lat: -25.4615, lng: 31.0286, team: "TS Galaxy",            capacity: 40_929, geoSource: "wikipedia" },
  // North West
  { id: "olympia-park",        label: "Olympia Park Stadium",    city: "Rustenburg",            province: "NW",  lat: -25.6685, lng: 27.2474, team: "Orbit College",        capacity: 12_000, geoSource: "wikipedia" },
  // Free State
  { id: "molemela-stadium",    label: "Dr Petrus Molemela Stadium", city: "Bloemfontein",        province: "FS",  lat: -29.0986, lng: 26.2055, team: "Marumo Gallants",      capacity: 20_000, geoSource: "wikipedia" },
  { id: "toyota-stadium",      label: "Toyota Stadium",          city: "Bloemfontein",          province: "FS",  lat: -29.1186, lng: 26.2200, team: "Siwelele FC",          capacity: 20_000, geoSource: "wikipedia" },
  // Eastern Cape
  { id: "buffalo-city",        label: "Buffalo City Stadium",    city: "East London",           province: "EC",  lat: -33.0265, lng: 27.8546, team: "Chippa United",        capacity: 16_000, geoSource: "wikipedia" },
  // Western Cape
  { id: "danie-craven",        label: "Danie Craven Stadium",    city: "Stellenbosch",          province: "WC",  lat: -33.9311, lng: 18.8651, team: "Stellenbosch FC",      capacity: 16_000, geoSource: "wikipedia" },
];

/**
 * Cider Point Media — 15 township-mural sites quoted in the OOH Schedule
 * (Jun–Aug 2026 flight, GAUTENG + KZN). Each wall has its own slide in the
 * walls site list deck. Some sites carry GPS coordinates from the supplier
 * deck; the rest are estimated from the address description (within ~500m).
 * Pricing per the OOH Schedule: discounted monthly media rate R14,000 (or
 * R20,000 for the 3 Pretoria premium sites), production R12,000 (R7,800–
 * R8,000 Pretoria).
 */
export const CIDER_POINT_WALLS: CiderPointWall[] = [
  // Soweto — 4 walls
  { id: "cp-diepkloof-3",   cpmCode: "CPM 669",  label: "Diepkloof Ext Phase 3",                size: "2m × 19m",     city: "Soweto",            province: "GP",  lat: -26.2503, lng: 27.9556, monthlyTraffic: 180_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated", note: "Main entrance/exit Soweto from M1, N1, Nasrec, FNB Stadium. Connects Diepkloof, Orlando, Dube, Mofolo, Zondi, Jabulani, Emdeni, Pimville, Zola, Rockville." },
  { id: "cp-diepkloof-2",   cpmCode: "CPM 433",  label: "Diepkloof Ext Phase 2",                size: "2.4m × 18.3m", city: "Soweto",            province: "GP",  lat: -26.2503, lng: 27.9556, monthlyTraffic: 180_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "supplier", note: "Same major Soweto-entry corridor as Diepkloof Ext 3 — paired site." },
  { id: "cp-orlando-east",  cpmCode: "CPM 5237", label: "Orlando East",                         size: "1.8m × 23.17m",city: "Soweto",            province: "GP",  lat: -26.2540, lng: 27.9170, monthlyTraffic: 20_000,  lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated", note: "Links Orlando West, Orlando East, Diepkloof. Directly opposite Chaf Pozi & Orlando Towers." },
  { id: "cp-mofolo-north",  cpmCode: "CPM 1651", label: "Mofolo North (Cnr Mageza & Nape)",     size: "2.2m × 19.7m", city: "Soweto",            province: "GP",  lat: -26.2655, lng: 27.8958, monthlyTraffic: 12_000,  lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated", note: "Off Zulu Drive in Dube — close to Maponya Centre, Shoprite, KFC, Wandi's Place. Main taxi & bus route." },
  // Alexandra — 2 walls
  { id: "cp-alex-eastbank", cpmCode: "CPM 1583", label: "Alexandra EastBank",                   size: "2m × 15m",     city: "Alexandra",         province: "GP",  lat: -26.1040, lng: 28.1168, monthlyTraffic: 200_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "supplier", note: "Entrance to Alex from N3 South & North — facing Engen garage & New Alexandra Mall." },
  { id: "cp-alex-london",   cpmCode: "CPM 4483", label: "Alexandra London Road",                size: "1.8m × 17m",   city: "Alexandra",         province: "GP",  lat: -26.1098, lng: 28.1118, monthlyTraffic: 210_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "supplier", note: "London Road heading toward New Alexandra Mall." },
  // Ekurhuleni / Tembisa — 2 walls
  { id: "cp-tembisa-tlama", cpmCode: "CPM 943",  label: "Tembisa — Tlamatlama Section",         size: "2.4m × 13m",   city: "Tembisa",           province: "GP",  lat: -25.9908, lng: 28.2003, monthlyTraffic: 100_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated", note: "On Ngema Drive, in front of high school." },
  { id: "cp-tembisa-flam",  cpmCode: "CPM 248",  label: "Tembisa — Flamingo St, Difateng",      size: "2.7m × 13.5m", city: "Tembisa",           province: "GP",  lat: -25.9968, lng: 28.2024, monthlyTraffic: 110_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated", note: "Main entrance/exit hospital and taxi rank." },
  // Pretoria — 3 walls (premium rate)
  { id: "cp-atteridgeville",cpmCode: "CPM 4263", label: "Atteridgeville (Maunde St)",           size: "2.2m × 24.47m",city: "Pretoria",          province: "GP",  lat: -25.7769, lng: 28.0736, monthlyTraffic: 200_000, lsm: "4–7", monthlyRate: 20_000, productionCost: 8_000,  geoSource: "supplier", note: "Maunde St behind the stadium — 500m from shopping centre & cemetery." },
  { id: "cp-mamelodi-west", cpmCode: "CPM 5009", label: "Mamelodi West",                        size: "1.7m × 14.9m", city: "Pretoria",          province: "GP",  lat: -25.7167, lng: 28.4015, monthlyTraffic: 220_000, lsm: "4–7", monthlyRate: 20_000, productionCost: 7_800,  geoSource: "estimated", note: "Main taxi route connecting Mamelodi West & East — close to church, spaza shops, school, petrol station." },
  { id: "cp-ga-rankuwa",    cpmCode: "CPM 1017", label: "Ga-Rankuwa Zone 1 (Traffic Circle)",   size: "2m × 14.3m",   city: "Pretoria",          province: "GP",  lat: -25.6171, lng: 27.9887, monthlyTraffic: 180_000, lsm: "4–7", monthlyRate: 20_000, productionCost: 7_800,  geoSource: "supplier", note: "Main circle into Ga-Rankuwa near George Mukhari Hospital and Medusa Medical School, en route to TUT." },
  // KZN — 4 walls
  { id: "cp-umlazi-mango",  cpmCode: "CPM 5472", label: "Umlazi — Mangosuthu Rd (Shell)",       size: "2.6m × 8m",    city: "Umlazi, Durban",    province: "KZN", lat: -29.9683, lng: 30.8765, monthlyTraffic: 200_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated", note: "At Shell garage Umlazi on Mangosuthu Road — 200K cars/m." },
  { id: "cp-umlazi-g",      cpmCode: "CPM 5472", label: "Umlazi G Section (Sibusiso Mdakane)",  size: "2.6m × 8m",    city: "Umlazi, Durban",    province: "KZN", lat: -29.9750, lng: 30.8830, monthlyTraffic: 200_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated", note: "Umlazi G Section, Sibusiso Mdakane Road — toward Chatsworth." },
  { id: "cp-chatsworth",    cpmCode: "CPM 5472", label: "Chatsworth — Sibusiso Mdakane Rd",     size: "2.6m × 15m",   city: "Chatsworth, Durban",province: "KZN", lat: -29.9128, lng: 30.8851, monthlyTraffic: 200_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated" },
  { id: "cp-kwa-mashu",     cpmCode: "CPM 5472", label: "KwaMashu — Ntombela St (Police Stn)",  size: "2.6m × 8m",    city: "KwaMashu, Durban",  province: "KZN", lat: -29.7548, lng: 30.9930, monthlyTraffic: 200_000, lsm: "4–7", monthlyRate: 14_000, productionCost: 12_000, geoSource: "estimated", note: "Close to KwaMashu Police Station." },
];

export const CIDER_POINT_TOTALS = {
  walls: CIDER_POINT_WALLS.length,
  monthlyMediaRand: CIDER_POINT_WALLS.reduce((acc, w) => acc + w.monthlyRate, 0),
  productionRand: CIDER_POINT_WALLS.reduce((acc, w) => acc + w.productionCost, 0),
  /** As quoted: 3-month flight Jun–Aug 2026 */
  threeMonthFlightRand: 780_000,
  /** Total monthly cars across all 15 walls (sum of supplier-claimed traffic) */
  totalMonthlyTraffic: CIDER_POINT_WALLS.reduce((acc, w) => acc + w.monthlyTraffic, 0),
};

/** Bounding box helper for the SA national map view. */
export const SA_BOUNDS = { minLat: -35.0, maxLat: -22.0, minLng: 16.0, maxLng: 33.0 };
/** Tighter bounding box for the Gauteng + KZN zoom view. */
export const GP_KZN_BOUNDS = { minLat: -30.5, maxLat: -25.4, minLng: 27.0, maxLng: 32.5 };


/* ---------- DOCUMENT_LIBRARY · all source docs + external citations -------
 * Used by the Annex Document Library. Two kinds of entries:
 *   • internal documents the proposal site serves directly under
 *     /documents/<filename> for download
 *   • external citations (web URLs, third-party reports) we've referenced
 *     but can't host
 * --------------------------------------------------------------------------*/

export type DocumentCategory =
  | "kc-strategy"
  | "kc-financial"
  | "audience"
  | "supplier-quotes"
  | "rate-cards"
  | "alt-tools"
  | "external";

export type DocumentEntry = {
  id: string;
  title: string;
  category: DocumentCategory;
  /** File extension/type label (PDF, DOCX, XLSX, PPTX, URL, etc.) */
  format: string;
  /** ISO yyyy-mm-dd date of the document, or year only if no specific date */
  date?: string;
  /** What this document supplies / why it's cited */
  provides: string;
  /** Where on this site this document is referenced */
  usedIn: string[];
  /**
   * For internal documents — path under /public served as /documents/...
   * For external — the public URL.
   */
  href: string;
  /** True if this is hosted by us (internal); false if external citation */
  internal: boolean;
  /** Approximate file size for internal docs (e.g. "5.2 MB") */
  fileSize?: string;
  /** Source / publisher / author for credit */
  source?: string;
};

export const DOCUMENT_LIBRARY: DocumentEntry[] = [
  // ---------- KC strategic source documents ----------
  {
    id: "doc-kc-brief",
    title: "KC Mobile MVNO Marketing — original brief",
    category: "kc-strategy",
    format: "DOCX",
    provides: "The original KC Mobile MVNO brief that scoped this proposal — challenges, objectives, success metrics, target audience, primary distribution channels, and the 16,000 SIM/month + 200 eSIM/month Yr-1 targets.",
    usedIn: ["Overview · Brief, success metrics & sources", "Plan Detail allocation framework"],
    href: "/documents/kc-brief-mvno-marketing.docx",
    internal: true,
    fileSize: "910 KB",
    source: "KC Mobile / Kaizer Chiefs",
  },
  {
    id: "doc-gtm-brief-v3",
    title: "KCMobile MVNO GTM Brief V3",
    category: "kc-strategy",
    format: "DOCX",
    provides: "Go-to-market channel allocation: wholesale 6K/m, retail 3.5K/m, hustler 3K/m, stadium 1.5K/m, KC owned 0.8K/m, eSIM 0.2K/m. Where every SIM target is supposed to come from.",
    usedIn: ["Conversion Funnel channel splits", "Plan Detail Retail & Trade", "Tribal Phasing"],
    href: "/documents/kcmobile-mvno-gtm-brief-v3.docx",
    internal: true,
    fileSize: "27 KB",
    source: "KC Mobile / Kaizer Chiefs",
  },
  {
    id: "doc-kcm-cvps-v2",
    title: "KCM CVPs V2 — Customer Value Propositions",
    category: "kc-strategy",
    format: "DOCX",
    provides: "8 customer personas · 8 product CVPs · pricing logic per package · AmaCoin economy · Khosi tier ladder · loyalty mechanics · belonging-arc framing.",
    usedIn: ["Audience · 8 personas", "Product CVPs section", "Pricing & packages", "Loyalty programme", "Brand language"],
    href: "/documents/kcm-cvps-v2.docx",
    internal: true,
    fileSize: "76 KB",
    source: "KC Mobile / Kaizer Chiefs",
  },
  {
    id: "doc-launch-budget",
    title: "KCMobile MVNO Launch Budget",
    category: "kc-strategy",
    format: "XLSX",
    provides: "Original Yr-1 launch budget breakdown — line-item view of marketing spend categories, the input we calibrated the Plan Detail R4.51M against.",
    usedIn: ["Plan Detail allocation strip", "Investment Model marketing-cost line"],
    href: "/documents/kcmobile-mvno-launch-budget.xlsx",
    internal: true,
    fileSize: "12 KB",
    source: "KC Mobile / Kaizer Chiefs",
  },

  // ---------- KC financial models ----------
  {
    id: "doc-kcm-model-v2",
    title: "KCM Digital Mobile Model V2 — financial model",
    category: "kc-financial",
    format: "XLSX",
    date: "2026-03-12",
    provides: "The canonical financial model. ARPU R116.51, 51–52% gross margin, 5% monthly churn, 76.6% Yr-1 retention, R4,514,901 marketing line, 16K SIMs/m gross adds, 192K Yr-1 gross, 147K M12 active subs, M5 EBIT-positive, M8 loan cleared, Yr-1 EBIT R3.6M, 5-year output R121M Yr-1 → R417M Yr-5 revenue. Every financial figure on the site traces back to this file.",
    usedIn: ["Hero stats", "Investment Model section (full numbers)", "Conversion Funnel anchor", "Plan Detail R4.5M total", "Pricing gross-margin claims", "Customer Journey churn targets"],
    href: "/documents/kcm-digital-mobile-model-v2.xlsx",
    internal: true,
    fileSize: "108 KB",
    source: "KC Mobile / Kaizer Chiefs · Final A+F+E EJW 20260312",
  },
  {
    id: "doc-metl-1m",
    title: "Metl MVNE Financial Framework — 1M scenario",
    category: "kc-financial",
    format: "XLSX",
    date: "2025-06-04",
    provides: "Industry-standard MVNE financial framework template at the 1M-subscriber scenario. Used as a pre-V2 sanity check for gross margin and CAC assumptions.",
    usedIn: ["Investment Model assumptions", "Pricing gross-margin floor"],
    href: "/documents/metl-mvne-framework-1m.xlsx",
    internal: true,
    fileSize: "2.1 MB",
    source: "Metl",
  },
  {
    id: "doc-metl-2m",
    title: "Metl MVNE Financial Framework — 2M scenario",
    category: "kc-financial",
    format: "XLSX",
    date: "2025-06-04",
    provides: "Same framework, 2M-subscriber scaling scenario.",
    usedIn: ["Year-2 outlook scaling sanity check"],
    href: "/documents/metl-mvne-framework-2m.xlsx",
    internal: true,
    fileSize: "2.1 MB",
    source: "Metl",
  },
  {
    id: "doc-metl-3m",
    title: "Metl MVNE Financial Framework — 3M scenario",
    category: "kc-financial",
    format: "XLSX",
    date: "2025-06-04",
    provides: "3M-subscriber scaling scenario — used as the Yr-3+ scaling reference point.",
    usedIn: ["Investment Model 5-year output", "Year-2 outlook scaling"],
    href: "/documents/metl-mvne-framework-3m.xlsx",
    internal: true,
    fileSize: "2.1 MB",
    source: "Metl",
  },

  // ---------- Audience research ----------
  {
    id: "doc-nielsen-nfi",
    title: "Nielsen Sports SA — Kaizer Chiefs NFI workshop deck",
    category: "audience",
    format: "PDF",
    date: "2025-03",
    provides: "n=487 self-identified Kaizer Chiefs fans · 6 platform-usage YoY metrics · top-2 sports betting interest 62.85% · 48.1% attend matches for camaraderie (+14.5pp above SA football average) · TikTok +37.9% YoY · DStv Compact Stream +50.2% YoY · Google search +28.2% YoY · WhatsApp +24.9% · YouTube +21.6%.",
    usedIn: ["Audience section · 6 Nielsen insights", "Audience YoY platform-growth bar chart", "Persona over-indexing data", "Headline summary band"],
    href: "/documents/nielsen-sports-sa-kc-nfi-march-2025.pdf",
    internal: true,
    fileSize: "2.9 MB",
    source: "Nielsen Sports SA",
  },

  // ---------- Supplier quotes / proposals ----------
  {
    id: "doc-cider-point-ooh",
    title: "Cider Point Media — OOH Schedule (GAUTENG & KZN, Jun–Aug 2026)",
    category: "supplier-quotes",
    format: "PDF",
    date: "2026-05-06",
    provides: "Single-page rate sheet. 15 named wall sites across Gauteng (11) + KZN (4). Discounted monthly media rate R14,000 (R20,000 for 3 Pretoria premium sites · R15,000 rate card with 7% off). Production R12,000 per wall (R7,800–R8,000 Pretoria). 3-month flight quoted at R780,000 ex VAT. Validity: 1 calendar month from proposal date. Account manager: John Mokolobetsi Ditshwene.",
    usedIn: ["Plan Detail · Township murals line item", "Strategy chapter · Marketing Targeting Map", "Annex · Media Proposals · 15-site comparison table"],
    href: "/documents/cider-point-ooh-schedule-gauteng-kzn.pdf",
    internal: true,
    fileSize: "140 KB",
    source: "Cider Point Media & Marketing",
  },
  {
    id: "doc-cider-point-walls",
    title: "Cider Point Media — Walls Site List with GPS Coordinates",
    category: "supplier-quotes",
    format: "PPTX",
    provides: "21-slide site dossier — one slide per wall with photo, traffic count (12K–220K cars/month), LSM band (4–7), location description (taxi route, landmarks), and partial GPS coordinates (5 of 15 sites have populated coordinates).",
    usedIn: ["Strategy chapter · Marketing Targeting Map (15 walls plotted)", "Plan Detail · Township murals embedded site list", "Annex · Media Proposals 15-site table"],
    href: "/documents/cider-point-walls-site-list-gauteng-kzn.pptx",
    internal: true,
    fileSize: "32 MB",
    source: "Cider Point Media & Marketing",
  },
  {
    id: "doc-b2f-media",
    title: "Back to Front Media — Township OOH Service Profile",
    category: "supplier-quotes",
    format: "PDF",
    date: "2025-10-02",
    provides: "25-slide capability + reference deck. Production R10,000 per wall + R5,500/month media rental (≈40% cheaper than Cider Point but no named sites supplied — buyer directs walls). Spaza/outlet branding: R13,500 small-medium · R15,500+ large/supersized. 20-day production lead time. Reference work: SafeLine, Diski Flava (Visa/FNB), Choose Circumcision, BettaBets, Kellogg's, Ricoffy, Amarula, Nik Naks. Documented as the cost-alternative supplier.",
    usedIn: ["Annex · Media Proposals (cost-alternative comparison)", "Conversion Funnel cross-check"],
    href: "/documents/b2f-media-proposal.pdf",
    internal: true,
    fileSize: "5.2 MB",
    source: "Back to Front Media & Events Solutions · Thabang Kole",
  },

  // ---------- Rate cards ----------
  {
    id: "doc-dms-rate-card",
    title: "DMS (DStv Media Sales) Rate Card — March 2026",
    category: "rate-cards",
    format: "PDF",
    date: "2026-03",
    provides: "DStv Media Sales rate card. SuperSport packages, Premier League Tactical Sponsorship R1,621,688 (200 matches, squeezebacks + 30s TVC, 2.1M digital impressions). DStv Stream LIVE/VOD inventory rates, SS PSL package pricing.",
    usedIn: ["Plan Detail · DStv Stream + Premier League line items", "Conversion Funnel · DStv channel impressions"],
    href: "/documents/dms-rate-card-march-2026.pdf",
    internal: true,
    fileSize: "5.2 MB",
    source: "DStv Media Sales",
  },
  {
    id: "doc-mediamark-rate-card",
    title: "Mediamark Digital Rate Card — September 2025",
    category: "rate-cards",
    format: "PDF",
    date: "2025-09",
    provides: "Programmatic display + CTV + audio CPMs. YouTube + Search packaged inventory. Meta + TikTok benchmark CPMs.",
    usedIn: ["Plan Detail · Digital paid line-item costing", "Conversion Funnel · digital impression CPM cross-checks"],
    href: "/documents/mediamark-digital-rate-card-sept-2025.pdf",
    internal: true,
    fileSize: "2.4 MB",
    source: "Mediamark Digital",
  },
  {
    id: "doc-onsideza-deck",
    title: "OnsideZA Show Deck",
    category: "rate-cards",
    format: "PDF",
    provides: "117K average monthly YouTube views · 86% male audience · 8.14 min average view duration · 176K Bafana watchalong views · audience composition + sponsorship integration formats.",
    usedIn: ["Voices & Players · SA football media partners", "Plan Detail · PR / Radio category", "Supplier Directory"],
    href: "/documents/onsideza-show-deck.pdf",
    internal: true,
    fileSize: "1.0 MB",
    source: "OnsideZA",
  },
  {
    id: "doc-channel-profile",
    title: "Channel Profile Sports — March 2026",
    category: "rate-cards",
    format: "PDF",
    date: "2026-03",
    provides: "SuperSport channel sponsorship profile — packages, audience reach, integration formats. Cross-reference for the DMS rate card.",
    usedIn: ["Plan Detail · Premier League Tactical Sponsorship cross-check"],
    href: "/documents/channel-profile-sports-march-2026.pdf",
    internal: true,
    fileSize: "1.4 MB",
    source: "DStv Media Sales / SuperSport",
  },

  // ---------- External citations (no download) ----------
  {
    id: "ext-psl-stadiums",
    title: "PSL Clubs' Home Grounds for the 2025/26 Betway Premiership Season Revealed",
    category: "external",
    format: "URL",
    date: "2025",
    provides: "Authoritative list of all 16 Betway Premiership 2025-26 club home stadiums. Source for the Marketing Targeting Map's PSL away venues.",
    usedIn: ["Strategy chapter · Marketing Targeting Map (15 PSL away venues)"],
    href: "https://centralnews.co.za/psl-clubs-home-grounds-for-the-2025-26-betway-premiership-season-revealed/",
    internal: false,
    source: "Central News South Africa",
  },
  {
    id: "ext-wikipedia-psl",
    title: "2025–26 South African Premiership — Wikipedia",
    category: "external",
    format: "URL",
    date: "2026",
    provides: "Cross-reference for PSL 2025-26 club + venue listing. Maintained list of stadium capacities and locations.",
    usedIn: ["Strategy chapter · Marketing Targeting Map (stadium GPS + capacity values)"],
    href: "https://en.wikipedia.org/wiki/2025%E2%80%9326_South_African_Premiership",
    internal: false,
    source: "Wikipedia",
  },
  {
    id: "ext-wikipedia-fnb",
    title: "FNB Stadium (Soccer City) — Wikipedia",
    category: "external",
    format: "URL",
    provides: "FNB Stadium specifications: 94,736 capacity, location coordinates, Nasrec/Soweto positioning. KC's primary home venue.",
    usedIn: ["Hero stats · KC home stadium reference", "Marketing Targeting Map · KC home venue (gold pulsing marker)"],
    href: "https://en.wikipedia.org/wiki/FNB_Stadium",
    internal: false,
    source: "Wikipedia",
  },
  {
    id: "ext-kickoff-fnb",
    title: "Change of direction for Chiefs' home game allocation 2025-26 — Kick Off",
    category: "external",
    format: "URL",
    date: "2025",
    provides: "Confirmation that all KC home league games for 2025-26 play at FNB Stadium (after concerns about travelling for home games), except final-round vs Chippa moved to Moses Mabhida.",
    usedIn: ["Marketing Targeting Map · KC home venue note", "Phasing chapter (away/home fixture mix)"],
    href: "https://www.kickoff.com/psl/kaizer-chiefs/chiefs-allocation-of-home-games-for-2025-26-season",
    internal: false,
    source: "Kick Off",
  },
  {
    id: "ext-kc-website",
    title: "kaizerchiefs.com — sponsor footer + ecosystem",
    category: "external",
    format: "URL",
    provides: "Current KC sponsor list (Toyota, Vodacom, Castle Lager, etc.), KC Legends programme, digital touchpoints (KC app, KC.com, matchday programme).",
    usedIn: ["Sponsors section", "Voices & Players · KC Legends list", "KC owned channel inventory"],
    href: "https://kaizerchiefs.com/",
    internal: false,
    source: "Kaizer Chiefs FC",
  },
  {
    id: "ext-kc-match-centre",
    title: "Kaizer Chiefs FC — Match Centre",
    category: "external",
    format: "URL",
    provides: "Live fixture list, results, and match-by-match venue tracking. Anchor for matchday-creative phasing inside the 12-month plan.",
    usedIn: ["Phasing chapter · 6-month launch Gantt", "Match-day broadcast line items"],
    href: "https://kaizerchiefs.com/match-centre",
    internal: false,
    source: "Kaizer Chiefs FC",
  },
  {
    id: "ext-iab-cpm",
    title: "Industry CPM + conversion rate benchmarks (composite)",
    category: "external",
    format: "Composite",
    provides: "SA telco / MVNO impression-to-activation conversion rates: paid social 0.05–0.30%, DStv Stream LIVE 0.04%, programmatic 0.008%, YouTube + Search 0.10%, in-stadium 4%, retail POS 1%, hustler 1.2%, kappa SIM bundle 2.5%, KC owned 0.5%, refer-a-Khosi 1.2%, township murals 0.01–0.03%, radio 0.01%, earned PR 0.02%, player paid 0.05%, player organic 0.01%.",
    usedIn: ["Conversion Funnel · impression back-calculation", "Plan Detail reach claims"],
    href: "https://iabsa.net/",
    internal: false,
    source: "Composite of MTN / Vodacom investor decks 2024–2025, Mediamark Digital Rate Card Sept 2025, IAB SA digital benchmarks 2024",
  },
  {
    id: "ext-betway-premiership",
    title: "Betway Premiership Fixtures 2025/26",
    category: "external",
    format: "URL",
    date: "2025",
    provides: "Full home/away fixture list for the 2025-26 Betway Premiership season. Determines the football-rhythm phasing waves in the marketing plan.",
    usedIn: ["Phasing chapter · 12-month football-rhythm waves", "Marketing Targeting Map · away fixtures coverage"],
    href: "https://www.psl.co.za/matchcentre",
    internal: false,
    source: "Premier Soccer League (PSL)",
  },
  {
    id: "ext-xanite-onepager",
    title: "Xanite — The MVNO Value Engine (one-pager)",
    category: "alt-tools",
    format: "Keynote",
    provides: "DSG-built Customer Data Platform overview: 16 microservices across 4 layers (CDP / Segmentation / Marketing automation / Integrations). The lifecycle engine for KC Mobile customer journey. Pricing: R0.30 per active subscriber per month — covers core CDP + marketing automation; outbound delivery costs (email, SMS, WhatsApp, push) are separate.",
    usedIn: ["Customer Journey section · Xanite hero block", "Supplier Directory · Xanite entry", "Plan Detail · Lifecycle Platform & Field Ops category"],
    href: "mailto:vincentm@dsg.co.za",
    internal: false,
    source: "DSG · Vincent Maher (vincentm@dsg.co.za) · Xanite.com",
  },
  {
    id: "ext-fieldagent",
    title: "FieldAgent.net — Field-team management SaaS",
    category: "alt-tools",
    format: "URL",
    provides: "SaaS field-force management platform. Used to recruit, onboard, dispatch, KPI-track and pay the Hustler informal-trade network of 30–50 township agents (spaza shops, salons, taxi-rank kiosks) responsible for 40,000 Yr-1 SIM activations. Features: route planning, GPS check-in, photo-verified visit completion, per-activation reward fulfillment, real-time dashboard.",
    usedIn: ["Plan Detail · Lifecycle Platform & Field Ops category (R50K Yr-1)", "Customer Journey · Hustler-network operations layer", "Lead Times · M-2 platform setup"],
    href: "https://app.fieldagent.net/",
    internal: false,
    source: "FieldAgent.net",
  },
];

export const DOCUMENT_CATEGORY_LABELS: Record<DocumentCategory, string> = {
  "kc-strategy":    "KC strategic source documents",
  "kc-financial":   "Financial models",
  audience:         "Audience research",
  "supplier-quotes":"Supplier quotes & proposals",
  "rate-cards":     "Media rate cards",
  "alt-tools":      "Tools & platforms",
  external:         "External / web sources",
};
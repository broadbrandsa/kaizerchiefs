// KC Mobile MVNO Launch Proposal — content model
// Sources: KC Mobile MVNO Draft V3, Nielsen Sports SA NFI March 2025,
// DMS Rate Card March 2026, Mediamark Digital Rate Card Sept 2025,
// OnsideZA Show Deck,

export const BRIEF_HIGHLIGHTS = {
  client: "Kaizer Chiefs Mobile (KC Mobile)",
  duration:
    "12 months — single plan, R2.5M committed marketing investment",
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
  },
  {
    pillar: "Earned camaraderie, not interruption",
    summary:
      "KC fans show up to feel something together. Activations belong inside that ritual — pre-match, derby, supporters' bus, regional rally — not as ad-overlays.",
  },
  {
    pillar: "Mobile-first, vernacular-led",
    summary:
      "TikTok, WhatsApp and YouTube reach the KC base far better than English metro media. Build creative with vernacular at the centre, not the translation.",
  },
  {
    pillar: "Always-on retail visibility",
    summary:
      "POS at MTN shops, independent dealers, and (Phase 2) PEP / Shoprite keeps KC Mobile in the field of view between match-days. The product needs to be reachable on a Tuesday afternoon, not just on a derby night.",
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
    name: "Back to Front Media & Events Solutions",
    role: "Township co-branding partner — hand-painted 3D/HD wall murals (2m × 10m), spazashop / tarven / motor-spares shopfront wraps, taxi-rank decals. Track record on SafeLine, Choose Circumcision, Diski Flava (Visa/FNB), BettaBets, Kellogg's, Ricoffy.",
    sourceDoc: "Back to Front service proposal · TOWNSHIP OUT OF HOME ADVERTISING",
    standoutPackages: [
      "Hand-painted 2m × 10m wall murals: R10,000 production once-off + R5,500/month media rental per wall",
      "All-in: travel, accommodation, flighting + de-flighting included; landlord approvals managed",
      "20-day production lead time post artwork sign-off",
      "Hustler-tier shopfront wrap execution: branded gazebo, signage, till-counter decals, taxi-rank stickers",
      "Township supermarket + spazashop full-shop branding (Kellogg's-style takeover)",
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
    weight: "Finals + retention push · PEP / Shoprite Phase-2 go-live",
    purpose:
      "Finals season + year-end retention push. The Player-Designed Jersey Draw runs in Month 12 (Gold-tier only). PEP / Shoprite Phase-2 goes live nationally if commercial terms close in the prior phase. Trade-partner final push for retention reorders. The data layer (CRM, KC App account binding) is the foundation for year 2.",
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
    target: "Blended < R150 across all channels",
    measure:
      "Total spend ÷ activations, segmented by channel where attribution allows",
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
  "Confirm the R2.5M Yr-1 marketing investment with KC leadership against the V2 KCM Digital Mobile model.",
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
  {
    name: "Kappa & SIM Bundle",
    setting: "match-day",
    audienceType: "activation",
    simType: "physical",
    whatHappens:
      "In-stadium Digistore pop-up — buy a KC kit, get a free KC Mobile SIM + 2GB activation in the bag.",
    whyItWorks:
      "Captive audience at the moment of highest brand commitment. Lifts kit AOV; gives KC Mobile its highest-affinity acquisitions.",
    mechanic:
      "Digistore till operator scans the kit and the SIM as a bundled SKU; checkout journey is one transaction.",
    costBand: "medium",
  },

  // ---- Off-stadium / regional / sponsor activations ----
  {
    name: "Spaza Shop Pole-Pack",
    setting: "off-stadium",
    audienceType: "activation",
    simType: "physical",
    whatHappens:
      "Branded pole + A-frame on top of high-traffic spaza shops in fan-dense townships. SIMs sold across the counter.",
    whyItWorks:
      "Spaza shops are the daily-touch retail in townships. KC fans walk past one twice a day. POS visibility is the best low-cost reach available.",
    mechanic:
      "DSG field-force installs the poles and trains the spaza owner. SIMs supplied on consignment. R20/SIM commission; weekly Friday cash-up.",
    costBand: "low",
  },
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
    name: "AmaCoin Earn Multiplier Days",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "On selected days — every Soweto Derby, every away-day, every brand co-promo window — KCM customers earn 3× to 5× AmaCoin on every R10 spent. The boost is announced via push 24 hours ahead so the queue forms naturally.",
    whyItWorks:
      "Time-bound earn-rate spikes are the cheapest, most reliable retention lever in any loyalty programme. KCM customers learn to spend on KCM days because the basket of identity outcomes they unlock (tickets, jersey patches, AR) is irrationally good vs the rand spend.",
    mechanic:
      "AmaCoin earn-rate config is set in Xanite (Marketing Layer). Push fires 24h ahead from the segmentation engine. Multiplier is honoured for any KCM transaction in the live window — bundle, recharge, VAS, eSIM, port-in. AmaCoin lands in-wallet within 30 minutes of the transaction settling.",
    costBand: "low",
    cvp: "CVP-1 AmaCoin Wallet",
    personas: "P1, P3, P4",
  },
  {
    name: "Hustler Yellow Wrap",
    setting: "off-stadium",
    audienceType: "activation",
    simType: "physical",
    whatHappens:
      "Every Eskhotini Hustler who signs up to a Hustler-tier SIM gets a yellow-and-black KCM shopfront wrap installed within 7 days — branded gazebo, signage panel, KCM decals on the till counter, taxi rank stickers — at zero direct cost to the Hustler. The wrap is the deal.",
    whyItWorks:
      "It turns every Hustler into a physical KCM billboard in their township. The Hustler gets visible community status (yellow on their shopfront = Chiefs status). KCM gets thousands of distributed branded retail surfaces in the highest-trust nodes of every Chiefs heartland community.",
    mechanic:
      "Sign-up at the KCM van or regional rep visit triggers a wrap order. Local installer team ships and fits within 7 days. Hustler agrees to keep the wrap up for 12 months minimum and to display KCM SIM-availability signage. Any Hustler hitting their first 50 SIM resales unlocks a 'Hustler Pro' wrap upgrade with Soundpays speaker + larger gazebo.",
    costBand: "medium",
    cvp: "CVP-5 Eskhotini Hustler",
    personas: "P5",
  },
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
    name: "Diaspora Live weekly show",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "esim",
    whatHappens:
      "30-minute weekly show streamed on KCM's diaspora channel — match recap, country chapter spotlight, remittance partner offers, 'home visit' ticket priority drops. Geo-unblocked for KCM Diaspora eSIM holders worldwide.",
    whyItWorks:
      "Diaspora is the unmonetised corridor in SA telco — every MNO is locked to SA borders and remittance brands have no fan layer. Diaspora Khosi customers crave the bridge home; a regular content beat keeps the SIM emotionally active even when usage is low. Lifts both retention and remittance attach.",
    mechanic:
      "Streamed live via KCM app on Saturday after-match window (UK 7pm / UAE 11pm / AU dawn). Shoulder content cut for IG and YouTube. Country chapter ambassador rotates each week. Sponsor slot for one remittance partner. AmaCoin attendance reward + ticket-priority drop in last 60 seconds.",
    costBand: "low",
    cvp: "CVP-6 Diaspora Khosi",
    personas: "P6",
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
  {
    name: "Stadium AR celebration filters",
    setting: "match-day",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "Walk through any FNB Stadium turnstile with KCM and the camera unlocks four exclusive AR celebration filters — Goal Roar, Tunnel Light, Phefeni Glamour Boys, Soweto Derby Champion. Filters work for the duration of the match and 60 minutes after.",
    whyItWorks:
      "MNO sponsorship buys boards. Stadium Mode owns the supporter's screen. AR filters are the most shared piece of KCM content possible — every selfie posts to socials with a built-in KCM watermark. Earned media at scale, zero CPM.",
    mechanic:
      "Geofence around FNB Stadium triggers MatchPass mode. AR filters served via Snap Camera Kit / Spark AR licensed templates with KCM creative. Shareable to all socials. AmaCoin bonus for posting one filter to public socials with #KCMatchPass.",
    costBand: "medium",
    cvp: "CVP-7 Stadium Mode",
    personas: "P1, P3",
  },
  {
    name: "Khosi Sisters Spotlight reels",
    setting: "off-stadium",
    audienceType: "engagement",
    simType: "both",
    whatHappens:
      "Weekly KCM-produced IG / TikTok reel celebrating one Khosi Sister who has referred 2+ Sisters into the Sisters Circle. The Sister is the hero. KCM is the platform, not the protagonist.",
    whyItWorks:
      "Nielsen confirms female KC fans over-index on community visibility. Spotlight reels make the Khosi Sister an active recruiter inside her own network — the most efficient acquisition vector for the Khosi Sister persona. Each spotlight typically nets 3–5 subsequent sign-ups in the spotlight Sister's local community.",
    mechanic:
      "Sisters Circle members earn 'Sister Captain' status after 2 verified referrals. KCM social team produces a 30-second portrait reel monthly. Spotlight Sister gets 1,000 AmaCoin + Sister Captain badge inside the Sisters Circle community. Reel runs on KCM social channels with a deep-link to the Sisters Circle activation flow.",
    costBand: "low",
    cvp: "CVP-3 Khosi Sisters Circle",
    personas: "P2",
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
        "Acquiring a new SIM costs ~R150 blended CPA in this plan. Keeping an existing customer for an extra 6 months costs almost nothing. The loyalty programme is the cheapest growth lever KC Mobile has — and the highest leverage one.",
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
      title: "PEP / Shoprite at scale · 800+ stores national",
      detail:
        "Year-1 PEP / Shoprite Phase-2 is a partnership pilot in months 9–12. Year 2 scales it to the full Pepkor (5,700+ stores) + Shoprite (1,500+ stores) footprint. Distribution becomes the moat.",
    },
    {
      title: "Year-1 retention narrative as Year-2 fuel",
      detail:
        "Whatever the Year-1 retention numbers are — Bronze→Silver progression rate, churn, ARPU growth — they become the Year-2 acquisition story for the next cohort. 'X% of KC Mobile customers stayed for 12 months' is the line that converts the marginal supporter on month 13.",
    },
  ],
};


/* ---------- EXECUTION PLAN (full R9M, tier-free) ----------------------------
 *
 * The single canonical execution view. The InvestmentModel above shows
 * leadership see the V2 KCM Digital Mobile model output as a fixed picture; this
 * section shows what the spend actually executes when set at the ceiling.
 *
 * Notes vs the original "Full Launch" content:
 *  • PEP / Shoprite Phase 2 retail partnership is the H2 distribution lever.
 *  • Category totals are unchanged — only the line-item mix inside Digital
 *    and the narrative around streaming has shifted.
 * ---------------------------------------------------------------------------*/

export type PlanLineItem = {
  name: string;
  supplier: string;
  cost: number;
  detail: string;
  reach?: string;
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
  total: 9_000_000,
  duration: "12 months",
  geo: "National — all 9 provinces, sustained always-on",
  simTarget: "16,000 SIMs / month",
  esimTarget: "200 eSIMs / month",
  intro:
    "All eight channels active. DMS Premier League Tactical Sponsorship anchor on SS Premier League broadcasts, full Pause Screen, full SABC vernacular radio, 800-store retail footprint primed for the PEP / Shoprite Phase-2 launch in months 9–12, a heavy digital reach layer carrying the brand-presence load, and 12 hand-painted township co-branding murals at high-traffic taxi-rank and spaza catchments.",
  pillars: [
    "12 hand-painted township co-branding murals (Back to Front) at high-traffic taxi-rank and spaza catchments — Soweto, Mamelodi, Tembisa, KwaMashu, Mdantsane, Mbombela",
    "Premium TV anchor — DMS Premier League Tactical Sponsorship + full DStv Stream LIVE/VOD inventory inside SS PSL and Premier League broadcasts",
    "800-store national trade footprint, primed for PEP / Shoprite Phase 2 in H2",
    "Full SABC African-language radio + Jacaranda + ECR + OnsideZA full-season title",
    "12 months of stadium + sponsor + regional activation",
    "Programmatic display + connected-TV reach inventory — measurable, fully attributable brand-presence layer across cross-publisher inventory",
  ],
  categories: [
    {
      key: "digital-paid-media",
      name: "Digital Paid Media",
      total: 2_880_000,
      pct: 32,
      headline:
        "Always-on for 12 months across Meta, Google, TikTok, plus DStv Stream LIVE/VOD inside SS PSL and Premier League windows.",
      rationale:
        "Digital is the largest single line because it is the only layer that can be measured to the activation. Programmatic display + connected-TV deliver measurable brand-presence impressions across cross-publisher inventory, while the PSL/Premier League streaming window inside DStv Stream is the streaming anchor.",
      lineItems: [
        {
          name: "Performance social — Meta + TikTok",
          supplier: "Direct (Meta + TikTok)",
          cost: 1_000_000,
          detail:
            "52 weeks always-on, ≈R25K/week each platform. Lookalikes off the waitlist, retargeting from match-day pixels, post-purchase upsell flows.",
          reach: "≈22M impressions",
        },
        {
          name: "DStv Stream LIVE + VOD",
          supplier: "DMS (DStv Stream)",
          cost: 900_000,
          detail:
            "Mid-roll non-skip + skippable VOD pre-roll inside SS PSL and Premier League windows. The streaming destination for paid-media exposure to the football audience.",
          reach: "≈3.8M impressions",
        },
        {
          name: "Programmatic display + connected-TV",
          supplier: "DSP cross-publisher",
          cost: 500_000,
          detail:
            "Cross-publisher display + connected-TV reach inventory across DSP networks. Measurable, attributable brand-presence layer that runs alongside the football streaming inventory.",
          reach: "≈25M impressions",
        },
        {
          name: "YouTube + Search",
          supplier: "Google Ads + YouTube",
          cost: 480_000,
          detail:
            "TrueView, bumpers, search — 12 months always-on. Search captures the high-intent 'KC Mobile SIM' / 'KC Mobile eSIM' query as it builds.",
          reach: "≈2.6M YouTube views",
        },
      ],
    },
    {
      key: "trade-retail",
      name: "Trade Partner & Retail POS",
      total: 1_570_000,
      pct: 17,
      headline:
        "800 priority stores, 4 POS refresh waves, 12 months of dealer commission top-up, top-100 dealer hospitality.",
      rationale:
        "The 800-store footprint is sized to absorb the PEP / Shoprite Phase-2 partnership in H2 (months 9–12) — see Retail Futures. Dealer commission top-up keeps frontline staff actively recommending KC Mobile over rival MVNOs.",
      lineItems: [
        {
          name: "POS production + install (4 waves)",
          supplier: "DSG production + installer network",
          cost: 790_000,
          detail:
            "800 stores × 4 waves × R247/store. Wobblers, riser cards, jersey-week posters, A-frames, table-throws — refresh each quarter.",
        },
        {
          name: "Trade commission top-up",
          supplier: "KC Mobile",
          cost: 580_000,
          detail:
            "R30 per activation × est. 16,000/month × 12 months (capped to budget). Paid weekly to dealers on top of MTN's standard channel commission.",
        },
        {
          name: "Top-100 dealer hospitality",
          supplier: "DSG hospitality",
          cost: 200_000,
          detail:
            "Quarterly home-game hospitality for top sellers across the dealer network — keeps the frontline emotionally invested in KC Mobile vs rival MVNOs.",
        },
      ],
    },
    {
      key: "stadium-activation",
      name: "Stadium & National Activations",
      total: 1_080_000,
      pct: 12,
      headline:
        "Every KC home league match (≈15) gets a fan-zone activation. Plus 4 regional activation days/month and one Soweto Derby fan-festival.",
      rationale:
        "Stadium is where intent crystallises into activation. Fan zones run from kickoff -2h to the final whistle and are the single highest-converting touchpoint in the plan — every line item in the launch-ideas playbook fires here.",
      lineItems: [
        {
          name: "Stadium fan zone — every home match",
          supplier: "KC Stadium Ops + DSG",
          cost: 600_000,
          detail:
            "15 match-days × R40K (kit owned, multi-year contracts). Full launch-ideas playbook executed at every home fixture.",
        },
        {
          name: "Regional-car activation days",
          supplier: "KC Mobile regional team",
          cost: 280_000,
          detail:
            "48 activation days/year across all 9 provinces — branded car visits township taxi ranks, malls, dealer flagships.",
        },
        {
          name: "Soweto Derby fan-festival",
          supplier: "KC Mobile + MTN co-funded",
          cost: 200_000,
          detail:
            "One major derby-weekend fan festival anchored to KC Mobile — concert + fan-zone + giveaway + media moment.",
        },
      ],
    },
    {
      key: "pr-radio",
      name: "PR & Media (SABC + Local Radio)",
      total: 900_000,
      pct: 10,
      headline:
        "12 months of SABC African-language radio, sustained Jacaranda + ECR presence, OnsideZA full-season title, plus a thin co-ordination retainer between DSG's ByDesign and KC's in-house Communications team.",
      rationale:
        "Press releases and earned media are run through the PR firms both partners already retain — DSG works through ByDesign, KC works through its in-house Communications & PR department. KC Mobile pays for neither at agency rates; the original R90K standalone PR retainer has been cut to a R30K co-ordination retainer that funds the integration layer (joint press calendar, embargo logistics, crisis-comms playbook). The R60K saving has been reallocated to SABC African-language radio — the highest-leverage reach line in this category. Radio carries the brand into vehicles and homes that paid social cannot consistently reach — particularly in KZN, Limpopo, North West and Eastern Cape. SABC vernacular stations are the reach engine for the over-indexing parts of the KC fan base.",
      lineItems: [
        {
          name: "SABC African-language",
          supplier: "Ukhozi + Umhlobo + Lesedi + Motsweding",
          cost: 540_000,
          detail:
            "12 months always-on, weighted to derby + finals weeks. Live reads + spot rotation + match-day stings. Lifted by R60K after the PR retainer reallocation.",
        },
        {
          name: "Jacaranda + ECR",
          supplier: "Mediamark",
          cost: 200_000,
          detail:
            "12 months of audio + display + live reads, weighted to commute drive-time.",
        },
        {
          name: "OnsideZA full-season title",
          supplier: "OnsideZA (Mediamark)",
          cost: 130_000,
          detail:
            "Title sponsor of all watchalongs + monthly integration episodes — KC Legends segments embedded in the show.",
        },
        {
          name: "PR co-ordination retainer",
          supplier: "ByDesign (DSG) + KC in-house Communications",
          cost: 30_000,
          detail:
            "Press releases, broadcast booking and earned-media run through the PR teams DSG and KC already retain — ByDesign on the DSG side, KC's Communications & PR department on the club side. Neither is billed at agency rates to KC Mobile. This R30K retainer funds the integration layer between the two: joint press calendar, embargo logistics, crisis-comms playbook, photo desk co-ordination. R60K cheaper than running a fresh standalone PR retainer.",
        },
      ],
    },
    {
      key: "incentives",
      name: "Customer Incentives, Promotions & Competitions",
      total: 900_000,
      pct: 10,
      headline:
        "Sustained free activation data, monthly competition mechanics (Toyota giveaway tradition), port-in incentives, members' rewards.",
      rationale:
        "These mechanics convert the marginal supporter and reduce churn in the first 90 days — the period where customer-acquisition cost is at its most exposed.",
      lineItems: [
        {
          name: "Free activation data",
          supplier: "MTN wholesale (co-funded)",
          cost: 480_000,
          detail:
            "2GB × ≈80,000 activations across 12 months — funded against MTN's wholesale data block.",
        },
        {
          name: "Port-in airtime incentive",
          supplier: "KC Mobile",
          cost: 250_000,
          detail:
            "R50 airtime × est. 5,000 ports. Aimed at the rival-MVNO base where switching cost is lowest.",
        },
        {
          name: "Toyota Cross + monthly comps",
          supplier: "KC Mobile + Toyota co-funded",
          cost: 170_000,
          detail:
            "Annual Toyota Cross + monthly KC supporter prizes. Continues the Toyota giveaway tradition that KC fans already associate with the club.",
        },
      ],
    },
    {
      key: "branding-kits",
      name: "Branding Material & Promotion Kits",
      total: 400_000,
      pct: 4,
      headline:
        "Strong KC branding across the entire physical retail and activation footprint.",
      rationale:
        "The line that turns the rest of the plan into a recognisable single brand experience — same gold, same Chief mark, same supporter-pack, every channel.",
      lineItems: [
        {
          name: "Activation hardware",
          supplier: "DSG procurement",
          cost: 150_000,
          detail:
            "Gazebos, telescopics, A-frames, table-throws, podiums — core kit only (×2 sets), augmented by hospitality from Trade Partner line.",
        },
        {
          name: "Supporter packs",
          supplier: "DSG procurement",
          cost: 150_000,
          detail:
            "6,500 supporter packs (T-shirt + scarf + activation voucher) — concentrated at hero match-days and Soweto Derby.",
        },
        {
          name: "POS replenishment",
          supplier: "DSG production",
          cost: 100_000,
          detail:
            "Wobblers, posters, riser cards, jersey-week posters — 2 print runs across the year.",
        },
      ],
    },
    {
      key: "township-co-branding",
      name: "Township Co-branding",
      total: 912_000,
      pct: 11,
      headline:
        "12 hand-painted 2m × 10m wall murals at high-traffic township catchments — Soweto, Mamelodi, Tembisa, KwaMashu, Mdantsane, Mbombela. Hustler-tier shopfront wraps execute on top of this layer.",
      rationale:
        "Township co-branding is community-anchored brand presence — closer to retail in-store branding than to traditional media. Each 2m × 10m mural is a hand-painted KC Mobile asset on a community wall, in front of the same audience that walks past the same wall on the same commute every day for 12 months. Hustler-tier shopfront wraps and Spaza Shop Pole-Pack visuals execute on the same supplier infrastructure — Back to Front delivers the artwork, KCM gets community-anchored brand presence at township-budget cost.",
      lineItems: [
        {
          name: "12 hand-painted hero murals — production",
          supplier: "Back to Front Media & Events Solutions",
          cost: 120_000,
          detail:
            "12 walls × R10,000 production (once-off). 2m × 10m hand-painted 3D/HD murals. Includes colour sourcing, stencil production, KC Mobile creative airbrush execution. 20-day lead time per wall post artwork sign-off.",
          reach: "≈8M weekly impressions (taxi rank + commuter foot-traffic)",
        },
        {
          name: "12 hero murals — 12-month media rental",
          supplier: "Back to Front Media & Events Solutions",
          cost: 792_000,
          detail:
            "12 walls × R5,500 / month × 12 months. Includes flighting + de-flighting, landlord approvals, travel + accommodation. Walls sit in priority KC heartlands across Gauteng, KZN, Mpumalanga, Eastern Cape and Limpopo.",
        },
      ],
    },
    {
      key: "design-production",
      name: "Design, Production & Content",
      total: 360_000,
      pct: 4,
      headline:
        "Two production days with KC players (pre-season + mid-season), full content suite, vernacular VO recording.",
      rationale:
        "The smallest line by spend but the line everything else depends on — every other category uses the assets from these two production days.",
      lineItems: [
        {
          name: "Player shoot — pre-season",
          supplier: "DSG production",
          cost: 180_000,
          detail:
            "1-day shoot, 4-week edit, full content suite (TVC, social cuts, fan-zone screens, POS hero imagery).",
        },
        {
          name: "Player shoot — mid-season refresh",
          supplier: "DSG production",
          cost: 130_000,
          detail:
            "1-day shoot, 3-week edit. Refreshes creative ahead of the EPL run-in and finals season.",
        },
        {
          name: "Vernacular VO + finishing",
          supplier: "DSG / vendor",
          cost: 50_000,
          detail:
            "isiZulu, isiXhosa, Setswana, English VO + translations — required for SABC vernacular radio plus regional activation.",
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
      window: "M9–M12 (PEP / Shoprite Phase 2 launch)",
      activity:
        "Squad re-anchors retail availability — 'find me in PEP / Shoprite' format. Geo-tagged posts from each player's home province.",
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
 * keeping a customer is worth roughly 3× the R it cost to acquire them
 * (CAC R150 vs LTV ≈ R1,180 in gross profit at 20-month tenure under V2 ARPU R116.51).
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
        "Marketing-led — the R9M plan above. Captures into the waitlist (with email + cell + favourite-player capture).",
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
        examples: "Port-in vs fresh · stadium vs PEP/Shoprite vs dealer · waitlist-led",
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
    "V2 numbers from the KCM Digital Mobile model — repriced under MTN MVNO Q1 2026 wholesale rates and tightened to ≥50% gross margin on every package. ARPU lifts from R81.46 (V1) to R116.51 (V2 Yr-1 average) on the same subscriber growth curve. The model becomes EBIT-positive in Month 5 and clears the loan account in Month 8.",
  assumptions: [
    { label: "ARPU", value: "R116.51 / month", note: "V2 weighted ARPU ex VAT — voice + data + VAS attach (Yr-1 avg)" },
    { label: "Gross margin", value: "51–52%", note: "≥50% on every package after MTN Q1 2026 wholesale rates" },
    { label: "Monthly churn", value: "5%", note: "Industry MVNO average" },
    { label: "Marketing cost", value: "R376K / month", note: "R4.51M per year — flat across all 12 months" },
    { label: "Yr-1 SIM monthly target", value: "16,000", note: "Per the KC brief" },
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
    { month: 4, label: "EBIT ≈ break-even", detail: "First month at zero net loss" },
    { month: 5, label: "EBIT-positive", detail: "+R149K EBIT, scaling from here" },
    { month: 8, label: "Loan account cleared", detail: "Cumulative EBIT covers Yr-1 setup loan; profit-share to KCM begins" },
    { month: 12, label: "Yr-1 ends at +R1.05M monthly EBIT", detail: "147K active subscribers · ARPU R116.51 · cumulative Yr-1 EBIT R3.6M" },
  ],
};

/* ---------- LAUNCH_TIMELINE · 6-month activation Gantt -----------------------
 * Maps the 15 activation ideas onto a 6-month timeline. Bars run from start
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
    "How the 15 activation ideas roll out across the first 6 months of launch. Always-on activities (the digital reach layer, zero-rated KC app, free-data drops) start day-1 and stay live. Match-day and monthly mechanics fire whenever the football calendar allows. One-shot moments — Port-in Pole Position, the Soweto Derby Festival, Player-Designed Jersey reveal — anchor specific phases of the launch arc.",
  phases: [
    { month: 1, name: "Launch · M1", focus: "Everything live. Port-in Pole Position is the M1 exclusive." },
    { month: 2, name: "Build · M2",  focus: "Kappa & SIM Bundle drops in time for new-season jerseys. Player Meet-and-Greet Draw begins." },
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
    { name: "Spaza Shop Pole-Pack", type: "monthly", months: [2,3,4,5,6], category: "Trade", note: "Branded SIM-and-snack pack rolls into spaza shop network. Expands monthly." },
    { name: "Saturday Soccer Schools", type: "monthly", months: [3,4,5,6], category: "Activation", note: "KC coaches at township soccer schools. Adds provinces month-by-month." },

    // One-shot / burst
    { name: "Port-in Pole Position", type: "burst", months: [1], category: "Acquisition", note: "M1-only port-in race competition. Ports during M1 enter to win a Toyota Cross." },
    { name: "Kappa & SIM Bundle", type: "burst", months: [2,3,4,5,6], category: "Trade", note: "Bundle at Kappa stores from M2. New-season jersey + SIM combo, ongoing." },
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
  burn: [
    "Match tickets — Block 28 priority for Diehards, family pack for P4",
    "Jersey patches and KC Store drops — wearable AmaCoin output",
    "AR celebration filters and digital collectibles",
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

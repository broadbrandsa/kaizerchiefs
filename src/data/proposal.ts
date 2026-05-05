// KC Mobile MVNO Launch Proposal — content model
// Sources: KC Mobile MVNO Draft V3, Nielsen Sports SA NFI March 2025,
// DMS Rate Card March 2026, Mediamark Digital Rate Card Sept 2025,
// OnsideZA Show Deck, Polygon Network DOOH inventory,

export const BRIEF_HIGHLIGHTS = {
  client: "Kaizer Chiefs Mobile (KC Mobile)",
  duration:
    "12 months — single plan with marketing investment slider from R1.5M to R5M",
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
    headline: "Showmax Premier League Mobile +88.5% YoY",
    detail:
      "DStv Compact Stream is up 50.2% and Showmax PL Mobile is up 88.5% YoY among KC fans. Mobile-first sports streaming is the breakout behaviour — the eSIM upgrade story writes itself here.",
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
    role: "Premium sport TV, DStv Stream, Showmax EPL, Pause Screen, Catch Up VOD",
    sourceDoc: "DMS Rate Card March 2026",
    standoutPackages: [
      "Premier League Tactical Sponsorship — R1,621,688 (200 matches, squeezebacks + 30s TVC, 2.1M digital impressions)",
      "Showmax EPL Season Pass — R1,089,000 (3.6M impressions across 12 months on Showmax + DStv Stream)",
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
    name: "Polygon Network (DOOH)",
    role: "Out-of-home digital screens — taxi ranks, gyms, hotels, in-vehicle minibus, malls",
    sourceDoc: "Polygon Network screen list (Sport Nodes / Emerging Investor Corridors)",
    standoutPackages: [
      "1,400+ screens nationwide grouped by Sport Nodes (proximity to stadiums)",
      "High-impact KC catchments: Bree, Noord, Bara taxi ranks (Soweto/Joburg CBD), Mbombela, Bloem Central, Polokwane",
      "In-vehicle minibus screens across Durban (Straat KZN fleet) and Cape Town (Tafelsig/Grassy Park)",
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
    target: "16,000 monthly net adds — M1 target per the KCM model, scales with the marketing investment slider",
    measure: "MVNO core system reporting, weekly cadence",
  },
  {
    kpi: "Monthly eSIM activations",
    target: "200 monthly net adds — M1 target per the KCM model, scales with the marketing investment slider",
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
  "Confirm the preferred Y1 marketing investment with KC leadership using the interactive model (R1.5M–R5M slider).",
  "Lock the MTN and Toyota co-funded line items — both already exist as KC sponsors and sit in the plan as co-funded, not net new spend.",
  "Initiate PEP and Shoprite Phase-2 partnership conversations (relevant from month 4 onwards).",
  "Confirm DMS (Showmax EPL Season Pass, PSL Tactical) and Polygon DOOH bookings — both have lead times of 6–8 weeks.",
  "Sign off on the player content shoot day(s) — required before paid media can spend behind launch creative.",
  "Stand up the WhatsApp Business port-in chatbot + measurement dashboard before week 1 of paid media.",
  "Agree the priority store list by province with KC commercial — sized to the marketing investment chosen on the model slider (200 stores at the floor, 500 in the middle, 800+ at the ceiling).",
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
        input: "SA prepaid ARPU",
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


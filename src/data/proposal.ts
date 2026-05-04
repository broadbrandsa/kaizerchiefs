// KC Mobile MVNO Launch Proposal — content model
// Sources: KC Mobile MVNO Draft V3, Nielsen Sports SA NFI March 2025,
// DMS Rate Card March 2026, Mediamark Digital Rate Card Sept 2025,
// OnsideZA Show Deck, Polygon Network DOOH inventory,
// SA MVNO market context (industry trade press, 2025).

export type TierKey = "pilot" | "targeted" | "full";

export interface LineItem {
  category: string;
  supplier: string;
  detail: string;
  cost: number;
  reach?: string;
  /** How this line is actually delivered — week-by-week, daily, mechanic, KPI */
  execution?: string[];
}

export interface CategoryBudget {
  category: string;
  allocation: number;
  pct: number;
  rationale: string;
  lineItems: LineItem[];
}

export interface Tier {
  key: TierKey;
  name: string;
  total: number;
  durationMonths: number;
  positioning: string;
  monthlySimTarget: string;
  monthlyEsimTarget: string;
  geoFocus: string;
  oneLine: string;
  /** Three or four headline pillars for this tier */
  pillars: string[];
  categories: CategoryBudget[];
}

export const BRIEF_HIGHLIGHTS = {
  client: "Kaizer Chiefs Mobile (KC Mobile)",
  duration:
    "12 months (R9M tier) / 6 months (R5M tier) / 3 months (R2.5M tier)",
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

// SA MVNO market context — informs the plan without naming specific competitors
export const MARKET_CONTEXT = [
  {
    headline: "SA MVNO market is $505M USD in 2025 → $750M by 2030",
    detail:
      "5.91M MVNO subscribers in 2025 growing to 8.45M by 2030 (CAGR 7.4%). The category is in expansion mode and the prepaid segment dominates volume. KC Mobile sits inside a tailwind, not a headwind.",
  },
  {
    headline: "The winning MVNO playbook is distribution + simplicity",
    detail:
      "The leading SA MVNOs aren't winning on data price — they're winning on shelf space, transparent bundles, and effortless port-in. The lesson for KC Mobile: out-execute on retail and onboarding, not on cents-per-meg.",
  },
  {
    headline: "Prepaid ARPU sits at R63–R76",
    detail:
      "Across the major networks, prepaid ARPU sits at R63–R76. The Amakhosi base over-indexes on prepaid. KC Mobile's pricing logic must work at this ARPU — bundles, recharge cadence, and retention mechanics all design around it.",
  },
  {
    headline: "Retail-rewards models are emerging fast",
    detail:
      "Other SA retailers are now bundling mobile data with grocery and clothing purchases. PEP and Checkers represent the same strategic option for KC Mobile — see the Retail Futures section.",
  },
];

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
      "POS at MTN shops, independent dealers, and (Phase 2) PEP / Checkers keeps KC Mobile in the field of view between match-days. The product needs to be reachable on a Tuesday afternoon, not just on a derby night.",
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
    role: "Mass-reach broadcast in vernacular — drives township and peri-urban awareness (Tier 3 only)",
    sourceDoc: "Industry standard reach figures",
    standoutPackages: [
      "Ukhozi FM (isiZulu) — ~6.6M weekly listeners, KZN/Gauteng/MP",
      "Umhlobo Wenene (isiXhosa) — Eastern Cape stronghold",
      "Lesedi FM (Sesotho) — Free State / Gauteng townships",
      "Motsweding FM (Setswana) — North West (KC over-indexes here)",
    ],
  },
];

const ZAR = (n: number) => Math.round(n);

// ============================================================================
// TIERS — restructured per direction:
// Tier 1 (Pilot): Digital + In-store + Match-day are the three big buckets.
//   No OOH, no Radio. Production + Incentives are supporting.
// Tier 2 (Targeted): No Radio. Everything else expanded.
// Tier 3 (Full): Everything in, plus an explicit nod to PEP / Checkers under
//   the Trade Partner & Retail POS line (Phase 2 — see RETAIL_FUTURE).
// ============================================================================

export const TIERS: Tier[] = [
  {
    key: "pilot",
    name: "Pilot Spark",
    total: 2_500_000,
    durationMonths: 3,
    positioning:
      "Three months. Three channels. Three high-density KC catchments. Prove the sell-through model before scaling.",
    monthlySimTarget: "2,500–4,000",
    monthlyEsimTarget: "≈50",
    geoFocus: "Gauteng + Mpumalanga + KZN concentrated burst",
    oneLine:
      "A 90-day proof-of-model focused on three engines: high-conversion paid digital, dense in-store activation in priority MTN and independent dealers, and full match-day fan-zone activation at every KC home game in the window.",
    pillars: [
      "Digital paid — supporter look-alikes + WhatsApp port-in flow",
      "In-store activation — 200 priority dealers, R20/SIM dealer top-up, brand-ambassador rotation",
      "Match-day activation — full KC fan-zone at 5 home games with port-in tablets",
    ],
    categories: [
      {
        category: "Digital Paid Media",
        allocation: ZAR(900_000),
        pct: 36,
        rationale:
          "The biggest single bucket. Always-on Meta + TikTok + Google for 12 weeks, geo-fenced to Gauteng/MP/KZN, with KC supporter look-alikes seeded off the KC.com newsletter consent list and warm KC social followers. Direct-response creative pointed at the eSIM activation funnel and a 'find a store' locator. WhatsApp click-to-chat builds the start of the CRM list.",
        lineItems: [
          {
            category: "Meta (Facebook + Instagram) Ads",
            supplier: "Direct buy via Meta Ads Manager",
            detail:
              "12 weeks always-on. Reach + frequency phase weeks 1–2; performance phase weeks 3–10; retargeting + LAL build weeks 11–12.",
            cost: 280_000,
            reach: "≈4.5M impressions / 1.0M unique reach (GP/MP/KZN)",
            execution: [
              "Audience: KC supporter look-alikes built off the KC.com newsletter consent list, warm Facebook/Instagram followers of @kaizerchiefs, plus interest layer for 'PSL', 'Showmax', 'SuperSportBet'",
              "Creative: 4 × 9:16 hero videos (15s) shot with KC players in vernacular; 6 × 1:1 statics (jersey-week, port-in, eSIM, FAQ); WhatsApp click-to-chat ads on weeks 5–12",
              "CTA: QR code + WhatsApp deep-link → 'Chat to KC Mobile' → automated port-in flow",
              "Geo: GP/MP/KZN province targeting + 5km radius around 200 priority MTN shops",
              "Reporting: weekly CPM, CPL, CPA, ROAS in a single dashboard. Bottom-quartile creative killed every Friday.",
            ],
          },
          {
            category: "TikTok Ads",
            supplier: "Direct buy via TikTok Ads Manager",
            detail:
              "12-week always-on with creator partnerships. Heaviest weight against 18–29 KC fan affinity.",
            cost: 280_000,
            reach: "≈3.0M impressions / 700K unique reach",
            execution: [
              "Spark Ads boosting KC players' organic posts about the SIM (3 player partnerships included via Production line)",
              "5 × Spark variants — handheld, vernacular hooks (e.g. \"Yebo Khosi, sim entsha\"), 3-second hook test",
              "Hashtag #KCMobile2026 launched with 2 lead creators from PNC roster",
              "Mid-burst in week 6: TopView one-day takeover during a Soweto Derby week",
            ],
          },
          {
            category: "Google Ads (Search + YouTube)",
            supplier: "Direct buy via Google Ads",
            detail:
              "Search defends 'KC Mobile', 'Kaizer Chiefs SIM', 'port to KC Mobile'. YouTube TrueView and 6s bumpers tied to KC match windows.",
            cost: 220_000,
            reach: "≈600K YouTube views / branded search top spot",
            execution: [
              "Search: 4 ad groups — brand defence, port-in intent, eSIM intent, store locator",
              "YouTube: 15s skippable + 6s bumpers seeded onto KC TV channel and PSL highlight content",
              "Custom-intent audiences targeting users who've searched for 'PSL', 'Soweto Derby', 'eSIM activation'",
              "Negative keyword list excludes content/reseller traffic",
            ],
          },
          {
            category: "WhatsApp Business + CRM",
            supplier: "Yalo / MessageBird + DSG dev",
            detail:
              "WhatsApp is the #1 reach platform for KC fans (+24.9% YoY usage for sports). Spend is split between platform fees and the chatbot flow that completes a port-in.",
            cost: 120_000,
            execution: [
              "WhatsApp Business API setup + green-tick verification",
              "Conversational port-in flow: greeting → ID number → SIM ICCID → confirmation in <90 seconds",
              "Auto-response template messages for 24/7 lead handling",
              "CRM list piped into Tier 2 retargeting + email/SMS journeys",
              "Spend: R60K platform fees + R60K dev/integration",
            ],
          },
        ],
      },
      {
        category: "In-Store / Trade Activation",
        allocation: ZAR(900_000),
        pct: 36,
        rationale:
          "The other 36% goes to physical visibility. 200 priority stores in GP/MP/KZN get a full KC Mobile takeover: A2 jersey-week posters, riser cards, wobblers, branded SIM holders, dealer cheat-sheets, and a R20/SIM commission top-up paid weekly to drive dealer push. A DSG-managed field force of 8 brand ambassadors rotates through 50 stores per week with photo-evidence reporting.",
        lineItems: [
          {
            category: "Priority store footprint setup",
            supplier: "DSG account team + KC Mobile commercial",
            detail:
              "200 priority stores selected on foot-traffic weight: 140 MTN shops + 50 indie dealers + 10 Pep test sites (subject to PEP early-access negotiation — see Retail Futures).",
            cost: 350_000,
            execution: [
              "Store-grade audit: foot-traffic by hour, KC fan density (proxied by Soweto Derby ticket sales by ward), competitor SIM share-of-shelf",
              "200 stores ranked A/B/C — A-tier gets full POS suite + window decals, B/C gets riser + wobbler",
              "Per-store activation log set up: daily sell-through reporting, weekly dealer call",
              "Cost includes 2 round-trips of an account manager per province for relationship-building",
            ],
          },
          {
            category: "POS material — production + install",
            supplier: "DSG production + 3rd-party installer network",
            detail:
              "Riser cards, wobblers, A2 jersey-week posters, KC-branded SIM holders, dealer cheat-sheet flip-cards.",
            cost: 250_000,
            execution: [
              "POS suite v1 designed in week 1, printed week 2, installed weeks 3–4",
              "Refresh wave at week 8 — derby-week creative + new champion-of-the-week dealer leaderboard",
              "All POS includes a unique QR code per store so we can attribute eSIM activations back to dealer",
              "Photo-evidence library — every store visit logs a before/after image into Slack-bot",
            ],
          },
          {
            category: "Dealer commission top-up",
            supplier: "KC Mobile / DSG-managed",
            detail:
              "R20 per activation paid weekly (not monthly) — speed-of-cash drives dealer push. Estimated 10,000 activations × R20.",
            cost: 200_000,
            execution: [
              "Weekly Friday payout cycle directly to dealer banking",
              "Top-3 dealer leaderboard published every Monday in the dealer WhatsApp group",
              "Bonus tier: any dealer hitting >100 SIMs in a month gets a R1,500 gift card",
              "All payouts reconciled against KC Mobile core-system activation feed",
            ],
          },
          {
            category: "Field-force activation days",
            supplier: "DSG field-force (8 brand ambassadors)",
            detail:
              "8 ambassadors in pairs, cycling through 50 stores/week with branded T-shirts. Daily reporting via app, photo evidence of POS, on-the-spot training of dealer staff.",
            cost: 100_000,
            execution: [
              "Pair-based deployment Mon–Sat, focused on Thurs/Fri/Sat (highest foot-traffic)",
              "30-minute dealer staff micro-training: KC Mobile FAQ, port-in steps, how to use the activation tablet",
              "Daily check-ins via the field-force app — geofenced clock-in/out, photo of POS, count of activations",
              "Each ambassador carries 2 portable activation tablets and a vuvuzela / supporter-pack stash for in-store giveaways",
            ],
          },
        ],
      },
      {
        category: "Match-day Activation",
        allocation: ZAR(500_000),
        pct: 20,
        rationale:
          "5 KC home games during the 3-month burst (based on the published fixture list). Each match-day gets a full fan-zone activation: gazebo, branded counter, 4 port-in tablets, branded merch, prize draws for KC home tickets, music. Pre-match, half-time and post-match windows all monetised. Match-days are also our richest data-capture moment for the CRM list that fuels Tier 2.",
        lineItems: [
          {
            category: "Fan-zone setup × 5 matches",
            supplier: "KC Stadium Ops + DSG activation team",
            detail:
              "Per-match stack: gazebo + branded counter + 4 port-in tablets + 8 brand ambassadors + DJ + prize draw stock + concession fee. R85K per match.",
            cost: 425_000,
            reach: "≈25,000 fans engaged across 5 match-days",
            execution: [
              "Pre-match (3 hours before kick-off): KC Village fan zone goes live with port-in tablets at every gate. Wristbands handed out for the Port-in Pole Position queue — first 100 activations get free 2GB and an entry into the next-match ticket draw",
              "KC Anthem Sing-Along Booth opens at the activation booth — sing the KC anthem, walk away with a SIM and a sticker pack. Becomes the loudest point at the fan zone",
              "Kappa & SIM Bundle pop-up at the in-stadium Digistore — every kit purchase gets a free KC Mobile SIM + 2GB activation in the bag",
              "Kick-off — every activation in the 90-minute pre-match window enters the Stadium Suite Upgrade Draw; one winner per match announced on the big screen at T-5. Pre-Match Data Drop auto-pushes 20MB of Khosi-to-Khosi on-net data to every active KC Mobile SIM at kick-off",
              "When KC scores: Goal QR Boost flashes on the big screen for 90 seconds — existing KC Mobile customers scan, get 100MB instantly via the MVNO core system. PA announcement fronts the moment",
              "Half-time: in-stadium PA reads + big-screen ad. Live draw for the Player Meet-and-Greet prize among port-in entrants",
              "Post-match: continued activation as fans exit; supporter-pack queue",
              "Activation target: 800–1,200 SIM activations + 150–250 eSIMs per match. Conversion target: ≥20% of fan-zone visitors complete an activation; ≥25% opt-in to WhatsApp",
              "Daily report: activation count, NPS via post-match SMS survey, eSIM scan-rate, Goal QR Boost redemptions",
            ],
          },
          {
            category: "Match-day activation kit (one-off, re-used into Tier 2/3)",
            supplier: "DSG procurement",
            detail:
              "Branded gazebo, telescopics, table-throws, podiums, tablet docking stations. Owned not rented — amortised across all future tiers and seasons.",
            cost: 75_000,
            execution: [
              "2 × 3m × 3m branded gazebos (MTN yellow + KC gold + black)",
              "6 × telescopic banners (Soweto / GP / MP / KZN provincial variants)",
              "4 × tablet docking stations with chargers",
              "4 × portable Bluetooth speakers + microphones",
              "Stored at KC Naturena HQ between match-days, transported by KC ops",
            ],
          },
        ],
      },
      {
        category: "Production & Creative",
        allocation: ZAR(150_000),
        pct: 6,
        rationale:
          "One light shoot day with 2 KC players plus a 4-week edit. The output feeds every Digital line above and the in-store POS. Vernacular voice-over (isiZulu, isiXhosa, Setswana) baked in from day one — not added as a translation layer at the end.",
        lineItems: [
          {
            category: "Player content shoot",
            supplier: "DSG production",
            detail:
              "1-day shoot at KC Village with 2 senior players + 1 ladies-team player. Hero film + vertical cut-downs + POS hero photography.",
            cost: 80_000,
            execution: [
              "Pre-production: scripts + storyboards locked 1 week before shoot",
              "Shoot: 9-hour day, 4 setups: jersey-up (action), in-Sandton-flat (everyday), with-the-fans (community), port-in (mechanic explainer)",
              "Player rights agreed on a 12-month assignable basis",
            ],
          },
          {
            category: "Edit + finishing",
            supplier: "DSG creative team",
            detail:
              "4-week post: 1 × 30s hero, 6 × 9:16 cut-downs, 4 × 1:1 statics, 1 × 60s long-form, full POS hero artwork.",
            cost: 50_000,
            execution: [
              "Week 1: rough cuts → KC stakeholder review",
              "Week 2: V2 + colour-grade + sound design",
              "Week 3: vernacular VO recording (isiZulu, isiXhosa, Setswana)",
              "Week 4: master delivery to Meta / TikTok / Google + POS print-ready files",
            ],
          },
          {
            category: "Vernacular VO + finishing",
            supplier: "DSG / vendor",
            detail:
              "isiZulu, isiXhosa, Setswana voice-over recording + lip-sync where needed.",
            cost: 20_000,
          },
        ],
      },
      {
        category: "Customer Incentives",
        allocation: ZAR(50_000),
        pct: 2,
        rationale:
          "Removes friction at the moment of activation. Free 2GB on activation (co-funded with MTN wholesale) plus 50 KC home-game tickets as the prize pool for fan-zone draws. Tight at this tier — incentives scale up materially in Tier 2 / 3.",
        lineItems: [
          {
            category: "Free activation data (DSG-paid portion)",
            supplier: "MTN wholesale (co-funded)",
            detail:
              "2GB at wholesale cost × est. 3,000 activations during the burst. Gross cost ≈R130K — the line below shows the DSG-funded portion only; the balance is MTN co-fund.",
            cost: 30_000,
            execution: [
              "2GB credit pushed automatically on activation via the MVNO core system",
              "Validity: 30 days — drives recharge by day 30",
              "Co-fund agreement: KC Mobile and MTN split the cost of the data 50/50 against agreed activation thresholds",
              "Pilot also activates the always-on rewards from day one: Khosi Birthday Boost (500MB on birthday) and Refer a Khosi (500MB to each side on successful conversion). Both fire automatically through the MVNO core system",
              "Engagement layer: Pre-Match Data Drop (20MB Khosi-to-Khosi at kick-off) and Goal QR Boost (100MB on big-screen QR scan) live in stadium from day one",
            ],
          },
          {
            category: "Match-day prize pool",
            supplier: "KC Tickets",
            detail:
              "50 home-game tickets (R400 face value) used as fan-zone activation prize draws across 5 matches.",
            cost: 20_000,
            execution: [
              "10 tickets per match-day, drawn live at the KC fan zone half-time",
              "Entry: every port-in/SIM activation enters the draw automatically",
              "Tickets distributed via SMS QR + collected at the next-match Khosi Passion gate",
            ],
          },
        ],
      },
    ],
  },
  {
    key: "targeted",
    name: "Targeted National",
    total: 5_000_000,
    durationMonths: 6,
    positioning:
      "Six months, national footprint, with the proven Pilot mechanics scaled and supplemented by SuperSport PSL on-air, OnsideZA watchalong sponsorship, and Polygon DOOH expanded to 350+ screens.",
    monthlySimTarget: "8,000–10,000",
    monthlyEsimTarget: "≈120",
    geoFocus: "All 9 provinces, weighted to Gauteng/MP/KZN/EC/NW",
    oneLine:
      "Take what worked in the Pilot national. Add premium broadcast inventory inside the SS PSL window, a Soweto Derby watchalong title sponsorship with OnsideZA, the Polygon DOOH expansion to 350+ screens, and PEP / Checkers Phase-2 partnership scoping.",
    pillars: [
      "Digital paid + DStv Stream LIVE inside SS PSL coverage",
      "500-store national trade footprint with twin POS-refresh waves",
      "10 home-game fan zones + 4 sponsor co-activations + regional cars in MP & EC",
      "OOH (Polygon DOOH) — 350+ screens including taxi-rank and minibus fleet",
      "PEP / Checkers retail-partnership scoping (Phase 2 prep)",
    ],
    categories: [
      {
        category: "Digital Paid Media",
        allocation: ZAR(1_300_000),
        pct: 26,
        rationale:
          "Always-on for the full 6 months across Meta, TikTok and Google. Adds DStv Stream LIVE non-skip mid-rolls inside SS PSL coverage to bridge brand and performance, plus Outstream native and Showmax EPL placements for KC fans on streaming.",
        lineItems: [
          {
            category: "Performance social — Meta + TikTok",
            supplier: "Direct (Meta + TikTok)",
            detail:
              "26-week always-on. R30K/week each platform. Heavier TikTok weight (where KC fans are growing fastest).",
            cost: 600_000,
            reach: "≈8M impressions / 1.6M unique reach",
            execution: [
              "Audience expanded nationally with provincial weighting (GP/MP/KZN/EC/NW) — each province gets its own creative cluster",
              "Spark Ads scaled to 6 KC players + 4 PNC creators",
              "WhatsApp click-to-chat retained as primary CTA — flow now multilingual",
              "Mid-burst week 8 + week 16: TopView TikTok takeover for derby weekends",
            ],
          },
          {
            category: "YouTube + Search",
            supplier: "Google Ads + YouTube",
            detail:
              "Search defence + custom-intent. YouTube TrueView + bumpers + masthead test on Soweto Derby week.",
            cost: 280_000,
            reach: "≈900K YouTube views",
            execution: [
              "Custom-intent audiences expanded to PSL second-screen behaviour",
              "TrueView for Action used to drive eSIM signup directly",
              "Masthead test: 1-day desktop + mobile takeover on YouTube SA homepage on Derby Saturday",
            ],
          },
          {
            category: "DStv Stream LIVE non-skip mid-roll",
            supplier: "DMS (DStv Stream LIVE)",
            detail:
              "30s non-skip mid-roll inside SS PSL channels at R250 CPM (50% off rate-card per March 2026).",
            cost: 150_000,
            reach: "600,000 impressions",
            execution: [
              "Inventory: SS PSL + SS Premier League + SS Variety 1 mid-rolls between 17h00–22h00 weekdays + match windows weekends",
              "Creative: 30s hero film cut-down with end-card eSIM CTA",
              "Reporting: DMS impressions report + matched-customer audience extension where available",
            ],
          },
          {
            category: "Showmax EPL mid-rolls",
            supplier: "DMS (Showmax)",
            detail:
              "Mid-rolls during EPL match streams on Showmax mobile (high mobile-first KC fan index).",
            cost: 120_000,
            reach: "≈350K impressions",
            execution: [
              "Inventory: Showmax EPL Mobile package — partial allocation",
              "Frequency cap: 3/week per user to avoid fatigue",
              "End-card CTA: install KC Mobile WhatsApp port-in deep-link",
            ],
          },
          {
            category: "Outstream native video (Mediamark)",
            supplier: "Mediamark (MSN + ECR + WMG network)",
            detail:
              "Outstream + native at R450 CPM × ~220K impressions.",
            cost: 100_000,
            reach: "≈220K video views",
            execution: [
              "Premium SA editorial environments — MSN news, sport sections",
              "Native in-feed on East Coast Radio + Jacaranda FM digital properties",
              "Outstream auto-play with sound-off; sound-on on tap",
            ],
          },
          {
            category: "WhatsApp Business + CRM",
            supplier: "Yalo / MessageBird",
            detail:
              "Scale the WhatsApp port-in chatbot, multilingual, plus retention / re-engagement journeys for the Pilot CRM list.",
            cost: 50_000,
            execution: [
              "Add isiZulu, isiXhosa, Setswana flows to the chatbot",
              "Re-engagement journey for users who started but didn't complete a port-in (24h, 72h, 7d touches)",
              "Win-back template messages for low-recharge users in the CRM list",
            ],
          },
        ],
      },
      {
        category: "In-Store / Trade & Retail POS",
        allocation: ZAR(1_300_000),
        pct: 26,
        rationale:
          "500 priority stores nationwide, twin POS-refresh waves, dealer-incentive trip for top sellers, and a dedicated PEP / Checkers partnership-scoping budget that funds the discovery work needed before any commercial agreement (Phase 2).",
        lineItems: [
          {
            category: "Store footprint expansion",
            supplier: "DSG account team",
            detail:
              "500 priority stores nationwide: 320 MTN + 130 indie + 50 PEP test sites (subject to early-access agreement).",
            cost: 600_000,
            execution: [
              "Province-weighted footprint: GP 180 / KZN 90 / EC 70 / MP 60 / NW 50 / Limpopo 30 / WC 10 / FS 10",
              "Quarterly dealer roundtable per province with KC Mobile commercial",
              "PEP test sites used to validate the Phase-2 retail partnership case (see Retail Futures)",
            ],
          },
          {
            category: "POS production + 2 install waves",
            supplier: "DSG production + installer network",
            detail:
              "500 stores × 2 refresh waves × R750/store install + production.",
            cost: 400_000,
            execution: [
              "Wave 1: launch creative (week 1)",
              "Wave 2: derby + finals creative refresh (week 13)",
              "Each wave: A2 poster, riser, wobbler, jersey-week leaderboard sticker",
              "QR codes per store retained for sell-through attribution",
            ],
          },
          {
            category: "Dealer commission top-up",
            supplier: "KC Mobile",
            detail:
              "R20 per activation × ~17,500 activations across 6 months.",
            cost: 200_000,
            execution: [
              "Weekly Friday payouts retained",
              "Bonus structure: top-25 dealers nationally get hospitality at a KC home game (see line below)",
              "Mid-month league table published in the dealer WhatsApp group",
            ],
          },
          {
            category: "Top-25 dealer hospitality trip",
            supplier: "DSG hospitality",
            detail:
              "Top-25 sellers + a partner each travel to a KC home game with VIP hospitality. Loyalty mechanic for the field force.",
            cost: 100_000,
            execution: [
              "Hospitality suite at FNB Stadium for the Soweto Derby weekend",
              "Travel + accommodation + match tickets included for out-of-province dealers",
              "Photo opportunity with KC players + brand-ambassador-of-the-quarter award",
            ],
          },
        ],
      },
      {
        category: "Stadium & Sponsor Activation",
        allocation: ZAR(900_000),
        pct: 18,
        rationale:
          "Every KC home game in the 6-month window (≈10 matches) gets a fan-zone activation, plus 4 sponsor co-activations (MTN + Toyota days) and the regional-car activation programme rolled out to MP and EC provinces.",
        lineItems: [
          {
            category: "Stadium fan zone × 10 matches",
            supplier: "KC Stadium Ops + DSG",
            detail:
              "Match-day stack as Tier 1, scaled to 10 home games. Kit owned not rented, R45K per match average.",
            cost: 450_000,
            execution: [
              "Full launch-ideas playbook on every match: Port-in Pole Position queue at the gate, KC Anthem Sing-Along Booth, Kappa & SIM Bundle Digistore pop-up, Stadium Suite Upgrade Draw, Pre-Match Data Drop at kick-off, Goal QR Boost on every goal, Player Meet-and-Greet half-time draw",
              "Add: scan-to-win mechanic on a 60-second hold-and-watch SMS-keyword game during half-time",
              "Soweto Derby home fixture: switch on Soweto Derby Power Hour — derby-week port-ins unlock 4 weeks of double data on the next bundle, co-funded with MTN wholesale",
              "Big-screen ad inventory negotiated separately with KC commercial; Goal QR Boost gets a guaranteed 90-second window on every score",
            ],
          },
          {
            category: "Sponsor co-activations",
            supplier: "MTN + Toyota co-funded",
            detail:
              "4 dealership / MTN shop activation Saturdays — KC players make appearances; SIM activation booth lives inside.",
            cost: 200_000,
            execution: [
              "1 × MTN flagship activation per province (4 total)",
              "Players signed up via KC commercial — typically 1 senior player + 1 reserve",
              "Joint social content live during activation — KC + MTN + KC Mobile co-branded",
              "Toyota Cross test-drive booth alongside (replicates the 2022 mechanic)",
            ],
          },
          {
            category: "Regional cars — MP and EC",
            supplier: "KC Mobile regional team",
            detail:
              "2 branded vehicles + activation kit, deployed to Mpumalanga and Eastern Cape on a monthly rotation.",
            cost: 250_000,
            execution: [
              "Monthly route: Mbombela → White River → KaNyamazane (MP); East London → Mthatha → Bisho (EC)",
              "Activation at taxi ranks, Saturday markets, dealer driveways",
              "Each region car runs 8 activation days/month",
              "Vehicles wrapped in KC Mobile + MTN co-branded livery",
            ],
          },
        ],
      },
      {
        category: "Out-of-Home (Polygon DOOH)",
        allocation: ZAR(500_000),
        pct: 10,
        rationale:
          "Polygon expanded from 120 (Pilot would have, if used) to 350+ screens nationwide for 6 months. Adds the Cape Town Tafelsig/Grassy Park minibus fleet, Planet Fitness gyms, and a tactical billboard burst around derby and finals weekends.",
        lineItems: [
          {
            category: "Polygon DOOH — 350+ screens",
            supplier: "Polygon Network",
            detail:
              "26 weeks across 350+ screens — Sport Nodes + Emerging Investor Corridors + minibus fleet.",
            cost: 380_000,
            reach: "≈42M plays",
            execution: [
              "Heavy-up windows: pre-derby Mondays, kick-off Saturdays, finals weeks",
              "Dynamic creative: scoreboard on derby day; player/match-up creative pre-game",
              "Coverage: Bree, Noord, Bara, Polokwane, Bloem Central, Mbombela, KZN minibus, Tafelsig fleet",
              "Daily play-out logs reconciled against Polygon API",
            ],
          },
          {
            category: "Tactical billboards",
            supplier: "Outdoor Network (or equivalent)",
            detail:
              "4-week burst in FNB Stadium / Soweto / Mamelodi catchments around derby weeks.",
            cost: 120_000,
            execution: [
              "8 × prime-position digital billboards on M1, N1, N3 corridors during derby fortnight",
              "Creative: KC + KC Mobile co-branded with strict 3-second message limit",
              "Booking lead-time: minimum 4 weeks — confirm in Vercel deploy week",
            ],
          },
        ],
      },
      {
        category: "Customer Incentives & Competitions",
        allocation: ZAR(400_000),
        pct: 8,
        rationale:
          "Free activation data + a port-in airtime incentive + a major prize-pool competition mechanic ('travel-with-the-team'). The competition is the headline; the incentives are the engine.",
        lineItems: [
          {
            category: "Free activation data",
            supplier: "MTN wholesale (co-funded)",
            detail:
              "2GB × est. 25,000 activations over 6 months. DSG-funded portion shown.",
            cost: 200_000,
          },
          {
            category: "Port-in airtime incentive",
            supplier: "KC Mobile",
            detail:
              "R50 airtime credit when porting from another network × est. 2,000 ports.",
            cost: 100_000,
            execution: [
              "Port-completion bonus pushed within 24h of port",
              "Used to unlock first recharge (drives day-30 retention)",
            ],
          },
          {
            category: "Travel-with-the-team competition",
            supplier: "KC Mobile + Toyota co-funded",
            detail:
              "Headline competition: one supporter + family travel with the squad to an away match.",
            cost: 100_000,
            execution: [
              "Entry: every SIM activation between week 4 and week 20 enters automatically",
              "Promoted across all paid channels + match-day fan zones (Port-in Pole Position queue, Stadium Suite Upgrade Draw, Friday Pay-day Taxi Rank Truck)",
              "Live draw at Soweto Derby with KC Chairman or senior player — same match-day as the Soweto Derby Pre-Match Festival",
              "Post-trip content captured for organic + earned reuse in Tier 3",
            ],
          },
        ],
      },
      {
        category: "Promo / Branding kits",
        allocation: ZAR(350_000),
        pct: 7,
        rationale:
          "Replenishes match-day kits, adds vehicle branding for the regional cars, and produces 5,000 supporter packs for activations.",
        lineItems: [
          {
            category: "Supporter packs",
            supplier: "DSG procurement",
            detail:
              "5,000 supporter packs × R55 average (T-shirt + scarf + 2GB activation voucher + sticker pack).",
            cost: 275_000,
          },
          {
            category: "Match-day kit replenishment",
            supplier: "DSG procurement",
            detail:
              "Replacement gazebos, table-throws, telescopics for nationwide rotation.",
            cost: 75_000,
          },
        ],
      },
      {
        category: "Production & Influencer Creative",
        allocation: ZAR(250_000),
        pct: 5,
        rationale:
          "One full shoot day with 3 KC players + 1 ladies-team player, plus paid integration with PNC creators across 8 episodes. The shoot covers brand and performance variants for tier 2's national push.",
        lineItems: [
          {
            category: "Player content shoot — full",
            supplier: "DSG production",
            detail:
              "1-day shoot × 4 players. Full content suite + radio reads (held in reserve until Tier 3 radio is on).",
            cost: 180_000,
          },
          {
            category: "Influencer integration (PNC + Onside)",
            supplier: "PNC Network via Mediamark",
            detail:
              "Sponsored reads on 8 episodes across OnsideZA + Spreading Humours. KC Mobile mention + watchalong title sponsorship for 2 watchalongs.",
            cost: 70_000,
            execution: [
              "Live reads scripted by DSG, performed by hosts in their voice",
              "Watchalong title sponsor card + 30s mid-stream takeover",
              "Reuse rights on YouTube cut-downs for 90 days",
            ],
          },
        ],
      },
    ],
  },
  {
    key: "full",
    name: "Full Launch",
    total: 9_000_000,
    durationMonths: 12,
    positioning:
      "The brief in full — 12 months always-on national across every channel. Hits the 16,000 monthly physical SIM target, opens the door for the PEP / Checkers retail partnership at scale.",
    monthlySimTarget: "16,000",
    monthlyEsimTarget: "200",
    geoFocus: "National — all 9 provinces, sustained always-on",
    oneLine:
      "All eight channels active. Premier League Tactical Sponsorship anchor on SS Premier League, Showmax EPL Season Pass, full Pause Screen, full SABC vernacular radio, 800-store retail footprint primed for PEP / Checkers Phase 2 launch in months 9–12.",
    pillars: [
      "Premium TV / streaming anchor — DMS Premier League Tactical + Showmax EPL Season Pass",
      "800-store national trade footprint, primed for PEP / Checkers Phase 2 in H2",
      "Full SABC African-language radio + Jacaranda + ECR + OnsideZA full-season title",
      "12 months of stadium + sponsor + regional activation",
      "Polygon DOOH 600+ screens + tactical billboard bursts",
    ],
    categories: [
      {
        category: "Digital Paid Media",
        allocation: ZAR(1_980_000),
        pct: 22,
        rationale:
          "Always-on for 12 months across Meta, Google, TikTok, plus DStv Stream LIVE/VOD inside SS PSL and SS Premier League broadcasts. Showmax EPL Season Pass anchors the streaming layer.",
        lineItems: [
          {
            category: "Performance social — Meta + TikTok",
            supplier: "Direct (Meta + TikTok)",
            detail: "52 weeks always-on, R20K/week each platform.",
            cost: 800_000,
            reach: "≈18M impressions",
          },
          {
            category: "YouTube + Search",
            supplier: "Google Ads + YouTube",
            detail: "TrueView, bumpers, search — 12 months always-on.",
            cost: 380_000,
            reach: "≈2M YouTube views",
          },
          {
            category: "DStv Stream LIVE + VOD",
            supplier: "DMS (DStv Stream)",
            detail:
              "Mid-roll non-skip + skippable VOD pre-roll inside SS PSL/Premier League windows.",
            cost: 380_000,
            reach: "≈1.6M impressions",
          },
          {
            category: "Showmax EPL Season Pass (partial)",
            supplier: "DMS",
            detail:
              "Per rate card: full season exposure across 200+ live games. Cost split with PR/Media line.",
            cost: 363_000,
          },
          {
            category: "Outstream + native (Mediamark)",
            supplier: "Mediamark",
            detail:
              "MSN, WMG, ECR network outstream video for sustained mid-funnel pressure.",
            cost: 57_000,
          },
        ],
      },
      {
        category: "Trade Partner & Retail POS",
        allocation: ZAR(1_980_000),
        pct: 22,
        rationale:
          "800 priority stores nationwide, 4 POS refresh waves, dealer commission top-up for 12 months, top-100 dealer hospitality programme. The footprint is sized to absorb the PEP / Checkers Phase-2 partnership in H2 (months 9–12) — see Retail Futures.",
        lineItems: [
          {
            category: "POS production + install (4 waves)",
            supplier: "DSG production + installer network",
            detail: "800 stores × 4 waves × R600/store",
            cost: 1_200_000,
            execution: [
              "Wave 1 (M1): launch creative",
              "Wave 2 (M4): derby refresh",
              "Wave 3 (M7): mid-season player refresh",
              "Wave 4 (M10): finals + PEP / Checkers Phase-2 launch creative",
            ],
          },
          {
            category: "Trade commission top-up",
            supplier: "KC Mobile",
            detail:
              "R30 per activation × est. 16,000/month × 12 months (capped to budget).",
            cost: 580_000,
          },
          {
            category: "Top-100 dealer hospitality",
            supplier: "DSG hospitality",
            detail:
              "Quarterly home-game hospitality for top sellers across the network.",
            cost: 200_000,
          },
        ],
      },
      {
        category: "Stadium & National Activations",
        allocation: ZAR(1_080_000),
        pct: 12,
        rationale:
          "Every KC home league match (≈15) gets a fan-zone activation. 4 nationwide regional-car activation days/month. One major Soweto Derby fan-festival anchored to KC Mobile.",
        lineItems: [
          {
            category: "Stadium fan zone — every home match",
            supplier: "KC Stadium Ops + DSG",
            detail:
              "15 match-days × R40K (kit owned, multi-year contracts). Full launch-ideas playbook executed at every home fixture.",
            cost: 600_000,
            execution: [
              "Every match: Port-in Pole Position queue, KC Anthem Sing-Along Booth, Kappa & SIM Bundle Digistore pop-up, Stadium Suite Upgrade Draw, Pre-Match Data Drop, Goal QR Boost, Player Meet-and-Greet draw",
              "Soweto Derby home fixtures: Soweto Derby Power Hour active for the full derby week",
              "Gold-tier customers eligible for the monthly suite-upgrade draw (5 winners per home match) — sourced from KC complimentary inventory",
              "Always-on engagement layer: Pre-Match Data Drop (20MB on-net) auto-pushed at every kick-off; Goal QR Boost (100MB) on every score; Win-Streak Reward (1GB to all active SIMs after 3 league wins in a row) triggered manually by KC commercial",
            ],
          },
          {
            category: "Regional-car activation days",
            supplier: "KC Mobile regional team",
            detail:
              "48 activation days/year across all 9 provinces.",
            cost: 280_000,
          },
          {
            category: "Soweto Derby fan-festival",
            supplier: "KC Mobile + MTN co-funded",
            detail:
              "One major derby-weekend fan festival anchored to KC Mobile.",
            cost: 200_000,
          },
        ],
      },
      {
        category: "Out-of-Home",
        allocation: ZAR(900_000),
        pct: 10,
        rationale:
          "Polygon DOOH at full 600+ screen footprint for 12 months, supplemented by Outdoor Network billboards in Soweto/Mamelodi/Mbombela/Durban CBD for derby and finals weeks.",
        lineItems: [
          {
            category: "Polygon DOOH — full footprint",
            supplier: "Polygon Network",
            detail:
              "12 months across 600+ screens (taxi ranks, gyms, hotels, minibus fleet, malls).",
            cost: 650_000,
            reach: "≈110M plays",
          },
          {
            category: "Tactical billboards",
            supplier: "Outdoor Network",
            detail:
              "8 weeks of bursts in derby + finals windows (Soweto, Mamelodi, Mbombela, Durban CBD).",
            cost: 250_000,
          },
        ],
      },
      {
        category: "PR & Media (SABC + Local Radio)",
        allocation: ZAR(900_000),
        pct: 10,
        rationale:
          "12 months of SABC African-language radio, Jacaranda/ECR sustained presence, OnsideZA full-season title, balance of Showmax EPL Season Pass, plus a PR retainer for ongoing earned media.",
        lineItems: [
          {
            category: "SABC African-language",
            supplier: "Ukhozi + Umhlobo + Lesedi + Motsweding",
            detail:
              "12 months always-on, weighted to derby + finals weeks.",
            cost: 480_000,
          },
          {
            category: "Jacaranda + ECR",
            supplier: "Mediamark",
            detail:
              "12 months of audio + display + live reads.",
            cost: 200_000,
          },
          {
            category: "OnsideZA full-season title",
            supplier: "OnsideZA (Mediamark)",
            detail:
              "Title sponsor of all watchalongs + monthly integration episodes.",
            cost: 130_000,
          },
          {
            category: "PR retainer",
            supplier: "Specialist PR partner (TBC)",
            detail:
              "12-month retainer for press releases, broadcast booking, crisis comms.",
            cost: 90_000,
          },
        ],
      },
      {
        category: "Customer Incentives, Promotions & Competitions",
        allocation: ZAR(900_000),
        pct: 10,
        rationale:
          "Sustained free activation data, monthly competition mechanics (Toyota giveaway tradition), port-in incentives, members' rewards.",
        lineItems: [
          {
            category: "Free activation data",
            supplier: "MTN wholesale (co-funded)",
            detail:
              "2GB × ~80,000 activations across 12 months.",
            cost: 480_000,
          },
          {
            category: "Port-in airtime incentive",
            supplier: "KC Mobile",
            detail:
              "R50 airtime × est. 5,000 ports.",
            cost: 250_000,
          },
          {
            category: "Toyota Cross + monthly comps",
            supplier: "KC Mobile + Toyota co-funded",
            detail:
              "Annual Toyota Cross + monthly KC supporter prizes.",
            cost: 170_000,
          },
        ],
      },
      {
        category: "Branding Material & Promotion Kits",
        allocation: ZAR(900_000),
        pct: 10,
        rationale:
          "Strong KC branding across the entire physical retail and activation footprint.",
        lineItems: [
          {
            category: "Activation hardware",
            supplier: "DSG procurement",
            detail:
              "Gazebos, telescopics, A-frames, table-throws, podiums (×4 sets nationwide).",
            cost: 350_000,
          },
          {
            category: "Supporter packs",
            supplier: "DSG procurement",
            detail:
              "15,000 supporter packs (T-shirt + scarf + activation voucher).",
            cost: 350_000,
          },
          {
            category: "POS replenishment",
            supplier: "DSG production",
            detail:
              "Wobblers, posters, riser cards, jersey-week posters — 4 print runs.",
            cost: 200_000,
          },
        ],
      },
      {
        category: "Design, Production & Content",
        allocation: ZAR(360_000),
        pct: 4,
        rationale:
          "Two production days with KC players (pre-season + mid-season), full content suite, vernacular VO recording.",
        lineItems: [
          {
            category: "Player shoot — pre-season",
            supplier: "DSG production",
            detail:
              "1-day shoot, 4-week edit, full content suite.",
            cost: 180_000,
          },
          {
            category: "Player shoot — mid-season refresh",
            supplier: "DSG production",
            detail:
              "1-day shoot, 3-week edit.",
            cost: 130_000,
          },
          {
            category: "Vernacular VO + finishing",
            supplier: "DSG / vendor",
            detail:
              "isiZulu, isiXhosa, Setswana, English VO + translations.",
            cost: 50_000,
          },
        ],
      },
    ],
  },
];

// ============================================================================
// Retail Futures — Phase 2 (PEP / Checkers) callout
// ============================================================================

export const RETAIL_FUTURE = {
  headline: "Retail futures · the PEP and Checkers opportunity",
  intro:
    "KC Mobile is exploring a Phase-2 retail partnership with PEP and/or Checkers. Both unlock distribution scale that takes years to build organically — PEP alone has 5,700+ stores across the Pepkor footprint, and Checkers' Flash kiosk network blankets the country. The proposal sets the trade footprint up to absorb a partnership of either kind in H2 of the Full Launch.",
  bullets: [
    {
      title: "PEP — 5,700+ store footprint",
      detail:
        "PEP already sells SIM starter packs from major networks. The model: PEP earns a percentage of airtime loaded throughout the SIM's active life. KC Mobile slots into that model with a co-branded starter pack on PEP shelves. Footprint match: dominantly township and peri-urban — exactly the KC fan over-index.",
    },
    {
      title: "Checkers — Flash kiosks + Sixty60",
      detail:
        "Checkers and the Flash kiosk network give KC Mobile recharge and starter-pack access at every Shoprite/Checkers/Usave point of sale. Sixty60 unlocks delivery — a SIM with the groceries.",
    },
    {
      title: "What happens in this proposal",
      detail:
        "Tier 1 (Pilot) reserves 10 PEP test sites for early-access negotiations. Tier 2 (Targeted) funds the partnership-scoping work and launches 50 PEP test sites if access is granted. Tier 3 (Full) absorbs the partnership at scale in months 9–12 — the 800-store footprint and 4 POS refresh waves are sized to take it on.",
    },
    {
      title: "Why now",
      detail:
        "SA retailers are already moving on this — grocery-linked mobile rewards have launched at one major retailer in 2025. PEP and Checkers are the natural next moves. KC Mobile has a 12–18 month window to lock in shelf space before category becomes contested.",
    },
  ],
};

export const TIMING_FRAMEWORK = [
  {
    phase: "Phase 1 — Spark (Months 1–3)",
    weight: "60% Trade POS, 70% Production, 50% Stadium",
    purpose:
      "Generate launch noise. Heavy in physical visibility (POS + match-day) so distributors see the brand pull immediately. Production weight up-front because creative needs to land before paid digital can scale behind it.",
  },
  {
    phase: "Phase 2 — Sustain (Months 4–6)",
    weight: "40% Digital, 30% Trade POS, 25% Stadium",
    purpose:
      "Maintain visibility while paid digital takes over the daily heavy-lifting. Sponsor co-activations (MTN + Toyota) roll out across other clubs' fixtures. Refresh POS to avoid fatigue. Begin PEP / Checkers Phase-2 scoping.",
  },
  {
    phase: "Phase 3 — Scale (Months 7–9)",
    weight: "30% Digital, 25% Stadium, 35% Customer Incentives",
    purpose:
      "Scale what's working. Push competition mechanics during the SS PSL second half + EPL run-in. Lean into derby weeks. Initiate PEP / Checkers Phase-2 store fit-out.",
  },
  {
    phase: "Phase 4 — Convert & Lock (Months 10–12)",
    weight: "25% Digital, 25% Stadium, 25% Trade POS, PEP / Checkers go-live",
    purpose:
      "Convert latent intent into volume in the run-up to season-end. Trade-partner final push for retention reorders. PEP / Checkers Phase-2 goes live nationally. Prepare ground for year 2 with a new shelf-space partner in the network.",
  },
];

export const MEASUREMENT_KPIS = [
  {
    kpi: "Monthly physical SIM activations",
    target: "16,000 (Full) · 8,000 (Targeted) · 3,000 (Pilot)",
    measure: "MVNO core system reporting, weekly cadence",
  },
  {
    kpi: "Monthly eSIM activations",
    target: "200 (Full) · 120 (Targeted) · 50 (Pilot)",
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
  "Confirm preferred budget tier with KC leadership (Pilot R2.5M / Targeted R5M / Full R9M).",
  "Lock the MTN and Toyota co-funded line items — both already exist as KC sponsors and sit in the plan as co-funded, not net new spend.",
  "Initiate PEP and Checkers Phase-2 partnership conversations (relevant in Tier 2 and Tier 3).",
  "Confirm DMS (Showmax EPL Season Pass, PSL Tactical) and Polygon DOOH bookings — both have lead times of 6–8 weeks.",
  "Sign off on the player content shoot day(s) — required before paid media can spend behind launch creative.",
  "Stand up the WhatsApp Business port-in chatbot + measurement dashboard before week 1 of paid media.",
  "Agree the 200-store (Pilot) / 500-store (Targeted) / 800-store (Full) priority lists by province with KC commercial.",
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
      "Kappa retail outlet pilot — 5 standalone Kappa stores stock KC Mobile starter packs (Tier 2/3)",
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
      "Soweto Derby fan-festival co-fund — 50/50 split with CBLB on the Tier 3 fan festival in months 7–12",
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
      "KC Mobile gets premium adjacency to PSL match coverage. SuperSport gets multi-million rand commitment in the Tier 2/3 buys.",
    mechanics: [
      "DStv Stream LIVE non-skip mid-rolls inside SS PSL coverage — KC Mobile lives in the broadcast",
      "Halftime SMS-keyword competition — fans SMS 'KC' to a short-code during halftime to enter a free-SIM draw, results announced post-match",
      "KC TV (the club's video platform) — KC Mobile pre-roll on every KC TV video, evergreen",
      "SuperSport Schools long-tail — KC Mobile sponsors the KC youth development tournaments shown on SuperSport Schools (Tier 3)",
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
      "KC Mobile + Kaelo wellness bundle — SIM + 30-day Kaelo wellness benefit trial for new activations (Tier 3)",
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
    "A three-tier retention programme that turns tenure and recharge into status — and status into the reason not to churn.",
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
        value: "R63 (Vodacom) – R76 (MTN) / month",
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


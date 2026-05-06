"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "@/components/section";
import { LOYALTY_PROGRAMME, AMA_COIN } from "@/data/proposal";

const TIER_TONE: Record<string, { ring: string; text: string; bg: string; chip: string }> = {
  Bronze: {
    ring: "ring-1 ring-orange-400/30",
    text: "text-[var(--kc-paper)]",
    bg: "bg-gradient-to-br from-orange-900/30 via-[var(--kc-charcoal)]/60 to-[var(--kc-charcoal)]/60",
    chip: "border-orange-400/40 text-orange-200 bg-orange-400/10",
  },
  Silver: {
    ring: "ring-1 ring-slate-300/30",
    text: "text-[var(--kc-paper)]",
    bg: "bg-gradient-to-br from-slate-500/20 via-[var(--kc-charcoal)]/60 to-[var(--kc-charcoal)]/60",
    chip: "border-slate-300/40 text-slate-200 bg-slate-400/10",
  },
  Gold: {
    ring: "ring-2 ring-[var(--kc-gold)]",
    text: "text-[var(--kc-black)]",
    bg: "bg-[var(--kc-gold)]",
    chip: "border-transparent bg-[var(--kc-black)]/15 text-[var(--kc-black)]",
  },
};

export function Loyalty() {
  return (
    <Section
      id="loyalty"
      eyebrow="Loyalty"
      title={LOYALTY_PROGRAMME.name}
      intro={LOYALTY_PROGRAMME.intro}
    >
      {/* Three-tier ladder */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {LOYALTY_PROGRAMME.tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>

      {/* AmaCoin — the named loyalty currency */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--kc-gold)]/40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[var(--kc-gold)] via-[var(--kc-gold-deep)] to-[var(--kc-black)] p-8">
            <div className="bg-stripes absolute inset-0 opacity-30" />
            <div className="relative">
              <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-black)]/75">
                {AMA_COIN.tagline}
              </div>
              <div className="mt-3 font-mono text-5xl font-bold tracking-tight text-[var(--kc-black)]">
                {AMA_COIN.name}
              </div>
              <p className="mt-4 text-base leading-relaxed text-[var(--kc-black)]/85">
                {AMA_COIN.oneLiner}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 bg-[var(--kc-ink)]/60 p-8 sm:grid-cols-2">
            <div>
              <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                Earn
              </div>
              <ul className="mt-3 space-y-2">
                {AMA_COIN.earn.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2 text-[16px] leading-snug text-[var(--kc-paper)]/85"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                Burn
              </div>
              <ul className="mt-3 space-y-2">
                {AMA_COIN.burn.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[16px] leading-snug text-[var(--kc-paper)]/85"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2 rounded-lg bg-[var(--kc-charcoal)]/60 p-4">
              <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                KPIs
              </div>
              <p className="mt-1 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                {AMA_COIN.kpis}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed view of secondary loyalty blocks */}
      <div className="mt-14">
        <Tabs defaultValue="always-on">
          <TabsList className="mb-8 flex w-full flex-wrap">
            <TabsTrigger value="always-on">
              Always-on rewards · {LOYALTY_PROGRAMME.alwaysOnRewards.length}
            </TabsTrigger>
            <TabsTrigger value="retention">
              Stay with KC · {LOYALTY_PROGRAMME.retention.length}
            </TabsTrigger>
            <TabsTrigger value="how-it-runs">How the programme runs</TabsTrigger>
            <TabsTrigger value="why-matters">Why loyalty matters</TabsTrigger>
          </TabsList>

          {/* Always-on rewards */}
          <TabsContent value="always-on">
            <div>
              <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                Always-on rewards · open to every tier
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
                Two mechanics that run alongside the tier ladder
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-[var(--kc-paper)]/75">
                These reward existing KC Mobile customers without any tier gate — they
                fire automatically and feed both retention and acquisition.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                {LOYALTY_PROGRAMME.alwaysOnRewards.map((r) => (
                  <Card key={r.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <Badge variant="outline">Always-on</Badge>
                        <span className="text-[17px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                          {r.eligibility.split(".")[0]}
                        </span>
                      </div>
                      <h4 className="mt-4 text-xl font-semibold leading-snug text-[var(--kc-paper)]">
                        {r.name}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--kc-paper)]/85">
                        {r.summary}
                      </p>
                      <div className="mt-4 space-y-3">
                        <div>
                          <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                            Why it works
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/75">
                            {r.detail}
                          </p>
                        </div>
                        <div className="rounded-lg bg-[var(--kc-ink)]/60 p-3">
                          <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                            Mechanic
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/85">
                            {r.mechanic}
                          </p>
                        </div>
                        <div className="text-[18px] uppercase tracking-wider text-[var(--kc-mute)]">
                          Eligibility · {r.eligibility}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Stay-with-KC retention mechanics */}
          <TabsContent value="retention">
            <div>
              <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                Stay with KC · retention mechanics
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
                What makes leaving KC Mobile expensive
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-[var(--kc-paper)]/75">
                Loyalty isn&apos;t just rewarding people for staying — it&apos;s
                building real reasons not to leave. Each mechanic below adds a
                switching cost that is hard to recreate on another network.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {LOYALTY_PROGRAMME.retention.map((r, i) => (
                  <Card key={r.title}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 font-mono text-xs font-semibold text-[var(--kc-gold)]">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                          Retention mechanic
                        </div>
                      </div>
                      <h4 className="mt-4 text-base font-semibold leading-snug text-[var(--kc-paper)]">
                        {r.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                        {r.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* How the programme runs */}
          <TabsContent value="how-it-runs">
            <Card>
              <CardContent className="p-6">
                <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                  How the programme runs
                </div>
                <ul className="mt-5 space-y-5">
                  {LOYALTY_PROGRAMME.mechanics.map((m, i) => (
                    <li key={m.title} className="flex gap-4">
                      <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 font-mono text-xs font-semibold text-[var(--kc-gold)]">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="font-medium text-[var(--kc-paper)]">
                          {m.title}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                          {m.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Why loyalty matters */}
          <TabsContent value="why-matters">
            <Card className="relative overflow-hidden">
              <div className="bg-stripes absolute inset-0 opacity-40" />
              <CardContent className="relative p-6">
                <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                  Why loyalty matters here
                </div>
                <ul className="mt-5 space-y-5">
                  {LOYALTY_PROGRAMME.whyItMatters.map((w) => (
                    <li key={w.title}>
                      <div className="font-medium text-[var(--kc-paper)]">
                        {w.title}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                        {w.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}

function TierCard({
  tier,
}: {
  tier: {
    name: string;
    position: string;
    qualification: string;
    monthlyDataBonus: string;
    benefits: string[];
  };
}) {
  const tone = TIER_TONE[tier.name];
  const isGold = tier.name === "Gold";
  return (
    <Card className={`relative overflow-hidden ${tone.ring} ${tone.bg}`}>
      <div className="bg-stripes pointer-events-none absolute inset-0 opacity-30" />
      <CardContent className="relative p-7">
        <div className="flex items-center justify-between">
          <span
            className={`rounded-full border px-2 py-0.5 text-[17px] font-semibold uppercase tracking-[0.2em] ${tone.chip}`}
          >
            Tier · {tier.position}
          </span>
          <Badge variant={isGold ? "secondary" : "outline"}>
            +{tier.monthlyDataBonus}/mo
          </Badge>
        </div>
        <div className={`mt-6 text-3xl font-semibold tracking-tight ${tone.text}`}>
          {tier.name}
        </div>
        <div
          className={`mt-3 text-xs uppercase tracking-wider ${
            isGold ? "text-[var(--kc-black)]/65" : "text-[var(--kc-mute)]"
          }`}
        >
          Qualification
        </div>
        <div
          className={`mt-1 text-sm ${
            isGold ? "text-[var(--kc-black)]/85" : "text-[var(--kc-paper)]/85"
          }`}
        >
          {tier.qualification}
        </div>

        <div
          className={`mt-6 border-t pt-5 ${
            isGold ? "border-[var(--kc-black)]/15" : "border-[var(--kc-line)]"
          }`}
        >
          <div
            className={`text-[17px] font-semibold uppercase tracking-[0.2em] ${
              isGold ? "text-[var(--kc-black)]/70" : "text-[var(--kc-gold)]"
            }`}
          >
            Benefits
          </div>
          <ul className="mt-3 space-y-2">
            {tier.benefits.map((b) => (
              <li
                key={b}
                className={`flex gap-2 text-sm ${
                  isGold
                    ? "text-[var(--kc-black)]/85"
                    : "text-[var(--kc-paper)]/85"
                }`}
              >
                <span
                  className={`mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full ${
                    isGold ? "bg-[var(--kc-black)]" : "bg-[var(--kc-gold)]"
                  }`}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

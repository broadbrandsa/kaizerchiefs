"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { ACTIVATION_IDEAS, type ActivationIdea } from "@/data/proposal";

const COST_TONE: Record<string, string> = {
  low: "border-[var(--kc-line)] text-[var(--kc-paper)] bg-transparent",
  medium:
    "border-[var(--kc-gold)]/40 text-[var(--kc-gold)] bg-[var(--kc-gold)]/10",
  high: "bg-[var(--kc-gold)] text-[var(--kc-black)] border-transparent",
};

const TYPE_TONE: Record<string, string> = {
  activation: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10",
  engagement: "border-sky-400/40 text-sky-300 bg-sky-400/10",
  both: "border-fuchsia-400/40 text-fuchsia-300 bg-fuchsia-400/10",
};

const TYPE_LABEL: Record<string, string> = {
  activation: "Activation",
  engagement: "Engagement",
  both: "Activation + Engagement",
};

const SIM_TONE: Record<string, string> = {
  physical: "border-orange-400/40 text-orange-300 bg-orange-400/10",
  esim: "border-violet-400/40 text-violet-300 bg-violet-400/10",
  both: "border-slate-400/40 text-slate-200 bg-slate-400/10",
};

const SIM_LABEL: Record<string, string> = {
  physical: "Physical SIM",
  esim: "eSIM",
  both: "SIM + eSIM",
};

export function ActivationIdeas() {
  const matchDay = ACTIVATION_IDEAS.filter((i) => i.setting === "match-day");
  const offStadium = ACTIVATION_IDEAS.filter((i) => i.setting === "off-stadium");

  const totalActivation = ACTIVATION_IDEAS.filter(
    (i) => i.audienceType === "activation",
  ).length;
  const totalEngagement = ACTIVATION_IDEAS.filter(
    (i) => i.audienceType === "engagement",
  ).length;
  const totalBoth = ACTIVATION_IDEAS.filter(
    (i) => i.audienceType === "both",
  ).length;
  const totalPhysical = ACTIVATION_IDEAS.filter(
    (i) => i.simType === "physical",
  ).length;
  const totalEsim = ACTIVATION_IDEAS.filter((i) => i.simType === "esim").length;
  const totalSimBoth = ACTIVATION_IDEAS.filter(
    (i) => i.simType === "both",
  ).length;

  return (
    <Section
      id="ideas"
      eyebrow="Launch ideas · candidates"
      title="Candidate activation ideas — KC chooses which actually launch"
      intro="A library of 16 candidate mechanics we'd love to run on match-days and off-stadium. These are not commitments — they are options. KC's fan-insight, brand and commercial teams know the supporter best, and KC selects which of these actually go to market in Yr-1. The 6-month launch Gantt and the budget anchor 13 of these as launch defaults; the rest are reserve ideas for KC to pull in or swap out as the season unfolds. Each card is tagged Activation (acquisition) or Engagement (retention), Physical SIM / eSIM / both, and shows the cost band so KC can size each option against the brief."
    >
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/60 p-4">
          <span className="mr-2 text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
            By audience
          </span>
          <Badge className={TYPE_TONE.activation}>
            Activation · {totalActivation}
          </Badge>
          <Badge className={TYPE_TONE.engagement}>
            Engagement · {totalEngagement}
          </Badge>
          <Badge className={TYPE_TONE.both}>Both · {totalBoth}</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/60 p-4">
          <span className="mr-2 text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
            By SIM format
          </span>
          <Badge className={SIM_TONE.physical}>
            Physical · {totalPhysical}
          </Badge>
          <Badge className={SIM_TONE.esim}>eSIM · {totalEsim}</Badge>
          <Badge className={SIM_TONE.both}>SIM + eSIM · {totalSimBoth}</Badge>
        </div>
      </div>

      <Tabs defaultValue="match-day">
        <TabsList className="mb-6 w-full md:w-auto">
          <TabsTrigger value="match-day">
            Match-day · {matchDay.length} ideas
          </TabsTrigger>
          <TabsTrigger value="off-stadium">
            Off-stadium · {offStadium.length} ideas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="match-day">
          <IdeaGrid ideas={matchDay} />
        </TabsContent>
        <TabsContent value="off-stadium">
          <IdeaGrid ideas={offStadium} />
        </TabsContent>
      </Tabs>
    </Section>
  );
}

function IdeaGrid({ ideas }: { ideas: ActivationIdea[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {ideas.map((idea, i) => (
        <Card key={idea.name} className="flex flex-col">
          <CardContent className="flex flex-1 flex-col p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                Idea · {String(i + 1).padStart(2, "0")}
              </span>
              <Badge className={COST_TONE[idea.costBand]}>
                {idea.costBand} cost
              </Badge>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className={TYPE_TONE[idea.audienceType]}>
                {TYPE_LABEL[idea.audienceType]}
              </Badge>
              <Badge className={SIM_TONE[idea.simType]}>
                {SIM_LABEL[idea.simType]}
              </Badge>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--kc-paper)]">
              {idea.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kc-paper)]/85">
              {idea.whatHappens}
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  Why it works
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/75">
                  {idea.whyItWorks}
                </p>
              </div>
              <div className="rounded-lg bg-[var(--kc-ink)]/60 p-3">
                <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  Conversion mechanic
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/85">
                  {idea.mechanic}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

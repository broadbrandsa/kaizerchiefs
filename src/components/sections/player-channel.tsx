import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { PLAYER_CHANNEL } from "@/data/proposal";

export function PlayerChannel() {
  const c = PLAYER_CHANNEL;
  return (
    <Section
      id="player-channel"
      eyebrow="Owned reach · current squad"
      title="KC players as a paid influencer channel"
      intro={c.intro}
    >
      {/* Reach stats */}
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {c.reachStats.map((s) => (
          <Card key={s.label} className="bg-[var(--kc-charcoal)]/40">
            <CardContent className="p-5">
              <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                {s.label}
              </div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-[var(--kc-paper)]">
                {s.value}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[var(--kc-paper)]/70">
                {s.note}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Thesis — why this channel works */}
      <div className="mb-14">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Why this is the highest-leverage channel in the plan
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Trust + reach + relevance — already inside the building
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {c.thesis.map((t, i) => (
            <Card key={t.title}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 font-mono text-xs font-semibold text-[var(--kc-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[var(--kc-paper)]">
                      {t.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--kc-paper)]/80">
                      {t.detail}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Archetypes — roster-agnostic */}
      <div className="mb-14">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Squad slots in scope · 12 first-team players
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Five player archetypes, each doing a different job
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-[var(--kc-paper)]/70">
          Roster-agnostic so the brief survives transfer windows. Specific
          player slotting is agreed with the KC commercial team in week 1.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {c.archetypes.map((a) => (
            <Card key={a.role}>
              <CardContent className="p-5">
                <Badge variant="outline" className="text-[17px]">
                  Archetype
                </Badge>
                <h4 className="mt-3 text-base font-semibold leading-snug text-[var(--kc-paper)]">
                  {a.role}
                </h4>
                <div className="mt-3">
                  <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    What they do
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/85">
                    {a.what}
                  </p>
                </div>
                <div className="mt-3">
                  <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    Why they’re chosen
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/75">
                    {a.why}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Content formats */}
      <div className="mb-14">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          What they actually post
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          Six content formats, one shoot day
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-[var(--kc-paper)]/70">
          One pre-season production day produces 12 weeks of content across
          all six formats below. The mid-season shoot refreshes for the EPL
          run-in and finals.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {c.contentFormats.map((f, i) => (
            <Card key={f.format}>
              <CardContent className="p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[var(--kc-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="text-base font-semibold leading-snug text-[var(--kc-paper)]">
                    {f.format}
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[var(--kc-paper)]/80">
                  {f.example}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cadence + Commercials side-by-side */}
      <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Cadence across the year
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
              When the squad turns on
            </h3>
            <ul className="mt-5 space-y-4">
              {c.cadence.map((row, i) => (
                <li key={row.window} className="flex gap-4">
                  <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 font-mono text-xs font-semibold text-[var(--kc-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--kc-paper)]">
                      {row.window}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/75">
                      {row.activity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="bg-stripes absolute inset-0 opacity-40" />
          <CardContent className="relative p-6">
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              How it’s paid for
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
              Three layers, one budget
            </h3>
            <ul className="mt-5 space-y-4">
              {c.commercials.map((row) => (
                <li key={row.title}>
                  <div className="text-sm font-medium text-[var(--kc-paper)]">
                    {row.title}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/75">
                    {row.detail}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Compliance / operational */}
      <div>
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Operational guardrails
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
          What KC commercial + MTN brand desk need to sign off
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {c.compliance.map((r) => (
            <Card key={r.title} className="bg-[var(--kc-ink)]/60">
              <CardContent className="p-5">
                <h4 className="text-sm font-semibold leading-snug text-[var(--kc-paper)]">
                  {r.title}
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-[var(--kc-paper)]/75">
                  {r.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

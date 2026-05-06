"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { EARNED_VOICES, PLAYER_CHANNEL } from "@/data/proposal";

type Tab = "legends" | "squad" | "media";

const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: "legends", label: "KC Legends",       sub: "Borrowed reach · cultural authority" },
  { id: "squad",   label: "Current Squad",    sub: "Owned reach · paid influencer channel" },
  { id: "media",   label: "SA Football Media", sub: "Earned editorial · launch press" },
];

export function VoicesAndPlayers() {
  const [tab, setTab] = useState<Tab>("legends");

  return (
    <Section
      id="voices-and-players"
      eyebrow="Voices & Players"
      title="The people who carry KC Mobile to the audience"
      intro="Three layers of human reach work in concert. KC Legends bring decades of cultural authority that money can't buy. The current squad is paid influencer media at the cheapest CPM in the plan. SA football editorial is the third-party validation that lands the brand in the hands of fans who don't follow KC's owned channels."
    >
      {/* Tab strip */}
      <div className="mb-10 grid grid-cols-1 gap-2 md:grid-cols-3">
        {TABS.map((t) => {
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-xl border p-4 text-left transition ${
                isActive
                  ? "border-[var(--kc-gold)] bg-[var(--kc-charcoal)]/70"
                  : "border-[var(--kc-line)] bg-[var(--kc-charcoal)]/30 hover:border-[var(--kc-paper)]/30"
              }`}
            >
              <div className={`text-base font-semibold ${isActive ? "text-[var(--kc-gold)]" : "text-[var(--kc-paper)]"}`}>
                {t.label}
              </div>
              <div className="mt-1 text-[16px] text-[var(--kc-paper)]/65">{t.sub}</div>
            </button>
          );
        })}
      </div>

      {/* Panel: Legends */}
      {tab === "legends" ? (
        <div>
          <div className="mb-6 max-w-3xl text-sm text-[var(--kc-paper)]/75">
            {EARNED_VOICES.intro}
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {EARNED_VOICES.legends.map((l) => (
              <Card key={l.name}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--kc-paper)]">{l.name}</h3>
                      <div className="mt-1 text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
                        {l.era}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[16px]">{l.role}</Badge>
                  </div>
                  <p className="mt-4 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                    <strong className="text-[var(--kc-paper)]">Angle · </strong>{l.angle}
                  </p>
                  <p className="mt-3 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">
                    <strong className="text-[var(--kc-paper)]/90">Ask · </strong>{l.ask}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : null}

      {/* Panel: Current Squad */}
      {tab === "squad" ? <SquadPanel /> : null}

      {/* Panel: Media */}
      {tab === "media" ? (
        <div>
          <div className="mb-6 max-w-3xl text-sm text-[var(--kc-paper)]/75">
            Editorial KC fans actually read. Three outlets cover the breadth — Soccer Laduma reaches the cover-buying core; KickOff catches the loyal-but-different reader; Idiski Times reaches the 16–29 fan over-index with TikTok-friendly content.
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {EARNED_VOICES.media.map((m) => (
              <Card key={m.title}>
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold text-[var(--kc-paper)]">{m.title}</h3>
                  <Badge variant="outline" className="mt-2 text-[16px]">{m.role}</Badge>
                  <p className="mt-4 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                    <strong className="text-[var(--kc-paper)]">Angle · </strong>{m.angle}
                  </p>
                  <p className="mt-3 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">
                    <strong className="text-[var(--kc-paper)]/90">Ask · </strong>{m.ask}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}

function SquadPanel() {
  const c = PLAYER_CHANNEL;
  return (
    <div>
      <p className="mb-6 max-w-3xl text-sm text-[var(--kc-paper)]/85">{c.intro}</p>

      {/* Reach stats */}
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {c.reachStats.map((s) => (
          <Card key={s.label} className="bg-[var(--kc-charcoal)]/40">
            <CardContent className="p-5">
              <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                {s.label}
              </div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-[var(--kc-paper)]">
                {s.value}
              </div>
              <p className="mt-3 text-[16px] leading-relaxed text-[var(--kc-paper)]/70">{s.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Thesis */}
      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {c.thesis.map((t, i) => (
          <Card key={t.title}>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--kc-gold)]/15 font-mono text-xs font-semibold text-[var(--kc-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-base font-semibold text-[var(--kc-paper)]">{t.title}</div>
                  <p className="mt-2 text-[16px] leading-relaxed text-[var(--kc-paper)]/80">{t.detail}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Archetypes */}
      <div className="mb-10">
        <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          Archetypes · 12 first-team players
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {c.archetypes.map((a) => (
            <Card key={a.role}>
              <CardContent className="p-5">
                <h4 className="text-base font-semibold leading-snug text-[var(--kc-paper)]">{a.role}</h4>
                <p className="mt-3 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                  <strong className="text-[var(--kc-paper)]">What · </strong>{a.what}
                </p>
                <p className="mt-2 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">
                  <strong className="text-[var(--kc-paper)]/90">Why · </strong>{a.why}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cadence + Commercials side-by-side */}
      <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Cadence
            </div>
            <ul className="mt-4 space-y-3">
              {c.cadence.map((row) => (
                <li key={row.window}>
                  <div className="text-[16px] font-medium text-[var(--kc-paper)]">{row.window}</div>
                  <p className="mt-1 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">{row.activity}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="bg-stripes absolute inset-0 opacity-40" />
          <CardContent className="relative p-6">
            <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              How it’s paid for
            </div>
            <ul className="mt-4 space-y-3">
              {c.commercials.map((row) => (
                <li key={row.title}>
                  <div className="text-[16px] font-medium text-[var(--kc-paper)]">{row.title}</div>
                  <p className="mt-1 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">{row.detail}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Content formats — collapsed grid */}
      <details className="mb-6 rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/30">
        <summary className="cursor-pointer px-5 py-3 text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)] hover:text-[var(--kc-paper)]">
          6 content formats · one shoot day
        </summary>
        <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-2">
          {c.contentFormats.map((f) => (
            <Card key={f.format} className="bg-[var(--kc-ink)]/60">
              <CardContent className="p-4">
                <div className="text-[16px] font-semibold text-[var(--kc-paper)]">{f.format}</div>
                <p className="mt-2 text-[16px] leading-relaxed text-[var(--kc-paper)]/80">{f.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </details>

      {/* Compliance — collapsed */}
      <details className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/30">
        <summary className="cursor-pointer px-5 py-3 text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)] hover:text-[var(--kc-paper)]">
          Operational guardrails · KC commercial + MTN brand desk
        </summary>
        <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-2 lg:grid-cols-4">
          {c.compliance.map((r) => (
            <Card key={r.title} className="bg-[var(--kc-ink)]/60">
              <CardContent className="p-4">
                <div className="text-[16px] font-semibold leading-snug text-[var(--kc-paper)]">{r.title}</div>
                <p className="mt-2 text-[16px] leading-relaxed text-[var(--kc-paper)]/75">{r.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </details>
    </div>
  );
}

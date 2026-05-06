import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { STRATEGIC_PILLARS } from "@/data/proposal";

const PILLAR_ICONS: Record<number, React.ReactNode> = {
  0: (
    // Trade muscle, fan voice — bicep-ish + mic
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M9 30c4-7 11-9 18-7s11 6 12 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="34" cy="14" r="3" fill="currentColor" />
      <rect x="10" y="32" width="28" height="6" rx="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  1: (
    // Earned camaraderie — three figures
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="14" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M6 38c2-6 6-9 8-9M18 38c2-8 4-12 6-12s4 4 6 12M30 38c2-6 6-9 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  2: (
    // Mobile-first, vernacular-led — phone with speech bubble
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="14" y="6" width="14" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="18" y1="9" x2="24" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M30 22h12v8h-7l-3 4v-4h-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  3: (
    // Always-on retail — store front
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M8 16l4-6h24l4 6v4a4 4 0 01-8 0 4 4 0 01-8 0 4 4 0 01-8 0 4 4 0 01-8 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="10" y="22" width="28" height="18" stroke="currentColor" strokeWidth="2" />
      <rect x="20" y="28" width="8" height="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

export function Strategy() {
  return (
    <Section
      id="strategy"
      eyebrow="Strategy"
      title="Four pillars that make the plan run"
      intro="Volume comes from wholesale distribution. Persuasion comes from the Amakhosi voice. The four pillars below sit underneath every line item in the budget — if a tactic doesn't ladder up to one of these, it doesn't make the plan."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {STRATEGIC_PILLARS.map((p, i) => (
          <Card key={p.pillar} className="relative overflow-hidden">
            <div className="bg-stripes absolute inset-0 opacity-50" />
            <CardContent className="relative p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="text-5xl font-semibold tracking-tight text-[var(--kc-gold)]">
                  0{i + 1}
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--kc-gold)]/15 text-[var(--kc-gold)]">
                    {PILLAR_ICONS[i]}
                  </span>
                  <Badge variant="secondary">Pillar</Badge>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-tight text-[var(--kc-paper)]">
                {p.pillar}
              </h3>
              <p className="mt-4 text-[var(--kc-paper)]/85">{p.summary}</p>

              {/* Ladders to which CVPs + personas */}
              <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[var(--kc-line)]/50 pt-4 sm:grid-cols-2">
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    Delivers via
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.cvps.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/10 px-2 py-0.5 text-[12px] font-medium text-[var(--kc-gold)]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    Lands on
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.personas.map((per) => (
                      <span
                        key={per}
                        className="rounded-full border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/60 px-2 py-0.5 font-mono text-[12px] font-semibold text-[var(--kc-paper)]/85"
                      >
                        {per}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

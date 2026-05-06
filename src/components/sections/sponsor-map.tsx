import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { SPONSOR_MAP } from "@/data/proposal";

const TIER_LABEL: Record<string, string> = {
  pilot: "Pilot",
  targeted: "Targeted",
  full: "Full",
};

export function SponsorMap() {
  return (
    <Section
      id="sponsors-collab"
      eyebrow="Sponsor collaborations"
      title="Leveraging the sponsor stack KC already has"
      intro="KC's existing sponsors are the cheapest distribution KC Mobile will ever access. Below is the collaboration angle for each, the commercial logic of the exchange, and the concrete mechanics we'd run — sequenced by which budget tier they fit."
    >
      <Accordion
        type="multiple"
        className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 px-6 py-2"
      >
        {SPONSOR_MAP.map((s) => (
          <AccordionItem key={s.name} value={s.name}>
            <AccordionTrigger>
              <div className="flex flex-1 items-start justify-between gap-4 pr-4">
                <div className="text-left">
                  <div className="text-base font-semibold text-[var(--kc-paper)]">
                    {s.name}
                  </div>
                  <div className="text-sm text-[var(--kc-paper)]/70">
                    {s.role}
                  </div>
                </div>
                <div className="hidden flex-shrink-0 items-center gap-1.5 md:flex">
                  {s.tierFit.map((t) => (
                    <Badge
                      key={t}
                      variant={t === "full" ? "default" : "outline"}
                    >
                      {TIER_LABEL[t]}
                    </Badge>
                  ))}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <p className="text-sm leading-relaxed text-[var(--kc-paper)]/90">
                  <span className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    Headline ·{" "}
                  </span>
                  {s.headline}
                </p>
                <div className="rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-4">
                  <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    Exchange
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kc-paper)]/85">
                    {s.exchange}
                  </p>
                </div>
                <div>
                  <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                    Mechanics
                  </div>
                  <ul className="mt-2 space-y-2">
                    {s.mechanics.map((m) => (
                      <li
                        key={m}
                        className="flex gap-3 rounded-lg bg-[var(--kc-ink)]/40 p-3 text-sm text-[var(--kc-paper)]/85"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {s.note ? (
                  <div className="rounded-lg border border-[var(--kc-gold)]/30 bg-[var(--kc-gold)]/5 p-3">
                    <div className="text-[17px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                      Compliance
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--kc-paper)]/85">
                      {s.note}
                    </p>
                  </div>
                ) : null}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

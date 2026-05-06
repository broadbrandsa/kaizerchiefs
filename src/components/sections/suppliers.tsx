import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { SUPPLIER_DIRECTORY } from "@/data/proposal";
import { SmartText } from "@/components/smart-text";

export function Suppliers() {
  return (
    <Section
      id="suppliers"
      eyebrow="Suppliers"
      title="Where the money goes"
      intro="Every line item maps to a real rate card. Expand any supplier to see standout packages costed against the plan."
    >
      <Accordion type="multiple" className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 px-6 py-2">
        {SUPPLIER_DIRECTORY.map((s) => (
          <AccordionItem key={s.name} value={s.name}>
            <AccordionTrigger>
              <div className="flex flex-1 items-center justify-between gap-4 pr-4">
                <div className="text-left">
                  <div className="text-base font-semibold text-[var(--kc-paper)]">{s.name}</div>
                  <div className="text-sm text-[var(--kc-paper)]/75"><SmartText>{s.role}</SmartText></div>
                </div>
                <Badge variant="outline" className="hidden md:inline-flex">
                  Rate card
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {s.standoutPackages.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 rounded-lg bg-[var(--kc-ink)]/40 p-3 text-sm text-[var(--kc-paper)]/85"
                  >
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                    <span><SmartText>{p}</SmartText></span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-[18px] uppercase tracking-wider text-[var(--kc-mute)]">
                Source · {s.sourceDoc}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

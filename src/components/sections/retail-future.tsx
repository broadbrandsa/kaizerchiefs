import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { RETAIL_FUTURE } from "@/data/proposal";

export function RetailFuture() {
  return (
    <Section
      id="retail-future"
      eyebrow="Retail futures"
      title={RETAIL_FUTURE.headline}
      intro={RETAIL_FUTURE.intro}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {RETAIL_FUTURE.bullets.map((b, i) => (
          <Card key={b.title} className="relative overflow-hidden">
            <div className="bg-stripes absolute inset-0 opacity-30" />
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between">
                <Badge variant="outline">Phase 2 · 0{i + 1}</Badge>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--kc-paper)]">
                {b.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--kc-paper)]/85">
                {b.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

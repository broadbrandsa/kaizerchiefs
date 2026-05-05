import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { YEAR_2_OUTLOOK } from "@/data/proposal";

export function YearTwo() {
  return (
    <Section
      id="year-2"
      eyebrow="Year 2"
      title="Where this goes after Month 12"
      intro={YEAR_2_OUTLOOK.intro}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {YEAR_2_OUTLOOK.themes.map((t, i) => (
          <Card key={t.title} className="relative overflow-hidden">
            <div className="bg-stripes absolute inset-0 opacity-30" />
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between gap-3">
                <Badge variant="outline">Year 2 · 0{i + 1}</Badge>
              </div>
              <h4 className="mt-4 text-base font-semibold leading-snug text-[var(--kc-paper)]">
                {t.title}
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-[var(--kc-paper)]/80">
                {t.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

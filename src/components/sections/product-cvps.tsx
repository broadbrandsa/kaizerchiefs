import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { PRODUCT_CVPS } from "@/data/proposal";

const CVP_ACCENT = [
  "#fbbf24", "#f472b6", "#34d399", "#60a5fa",
  "#fb923c", "#c084fc", "#facc15", "#f87171",
];

export function ProductCvps() {
  return (
    <Section
      id="product-cvps"
      eyebrow="Product · 8 non-comparable CVPs"
      title="What KCM actually sells — and why no one else can copy it"
      intro="Connectivity is the entry token. The product is belonging. Below sit the 8 non-comparable Customer Value Propositions that anchor the KCM commercial blueprint. Five of the eight are first-in-SA-market — open territory only KCM can credibly occupy."
    >
      {/* First-in-SA strip */}
      <div className="mb-10 flex flex-wrap items-center gap-3 rounded-xl border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/10 p-4 text-[16px]">
        <span className="font-mono font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
          5 of 8 first-in-SA
        </span>
        <span className="text-[var(--kc-paper)]/85">
          Khosi Sisters Circle · Junior Khosi · Diaspora Khosi · Stadium Mode · Khosi Heritage
        </span>
      </div>

      {/* CVP cards */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {PRODUCT_CVPS.map((c, i) => (
          <Card key={c.code} className="overflow-hidden">
            <div
              className="h-1.5 w-full"
              style={{ background: CVP_ACCENT[i] }}
            />
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-[16px] font-semibold"
                    style={{ color: CVP_ACCENT[i] }}
                  >
                    {c.code}
                  </span>
                  <Badge variant="outline" className="text-[16px]">
                    {c.primaryPersonas}
                  </Badge>
                </div>
                {c.firstInSa ? (
                  <span className="rounded-full border border-[var(--kc-gold)] bg-[var(--kc-gold)]/15 px-2.5 py-0.5 text-[16px] font-semibold uppercase tracking-wider text-[var(--kc-gold)]">
                    First-in-SA
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
                {c.name}
              </h3>
              <div className="mt-1 text-[16px] uppercase tracking-wider text-[var(--kc-paper)]/65">
                {c.tag}
              </div>

              <p className="mt-4 text-[16px] leading-relaxed text-[var(--kc-paper)]/85">
                {c.promise}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 text-[16px]">
                <Row label="Mechanic" value={c.mechanic} />
                <Row label="Why non-comparable" value={c.whyNonComparable} accent />
                <div className="grid grid-cols-2 gap-3">
                  <Row label="Pricing" value={c.pricingAnchor} />
                  <Row label="KPIs" value={c.kpis} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className={accent ? "rounded-lg bg-[var(--kc-gold)]/10 p-3" : ""}>
      <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
        {label}
      </div>
      <p className="mt-1 leading-relaxed text-[var(--kc-paper)]/85">{value}</p>
    </div>
  );
}

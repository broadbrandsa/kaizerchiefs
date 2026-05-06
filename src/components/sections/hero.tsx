import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChiefMark } from "@/components/chief-mark";
import { PrintButton } from "@/components/print-button";

export function Hero() {
  return (
    <section className="bg-stadium relative overflow-hidden border-b border-[var(--kc-line)]">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start gap-4">
          <ChiefMark className="h-14 w-auto md:h-16" />
          <div>
            <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Amakhosi · 4 Life
            </div>
            <div className="text-sm text-[var(--kc-paper)]/70">
              Prepared by DSG · for Kaizer Chiefs leadership
            </div>
          </div>
        </div>

        <h1 className="mt-10 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          KC Mobile MVNO{" "}
          <span className="text-[var(--kc-gold)]">launch proposal</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[var(--kc-paper)]/80 md:text-xl">
          Wholesale-led, fan-fuelled. A 12-month plan to put a KC Mobile SIM
          (and an eSIM) in every Amakhosi supporter&apos;s hand — anchored to the KCM Digital Mobile model V2 numbers.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          <StatCard label="Monthly physical SIM net adds" value="16,000" sub="Month-1 target per the KCM model" />
          <StatCard label="Monthly eSIM net adds" value="200" sub="Month-1 target per the KCM model" />
          <StatCard label="Marketing investment" value="R4.5M" sub="R376K/m flat · self-funding from M10" />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Button asChild variant="secondary" className="bg-[var(--kc-paper)] text-[var(--kc-black)] hover:bg-white">
            <a href="#model">
              Open the investment model
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <PrintButton variant="outline" className="no-print">
            Download PDF
          </PrintButton>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <Card className="border-[var(--kc-line)] bg-[var(--kc-charcoal)]/60">
      <CardContent className="p-6">
        <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
          {label}
        </div>
        <div className="mt-3 text-4xl font-semibold tracking-tight text-[var(--kc-gold)] md:text-5xl">
          {value}
        </div>
        <div className="mt-2 text-sm text-[var(--kc-mute)]">{sub}</div>
      </CardContent>
    </Card>
  );
}

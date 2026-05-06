import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ReadingProgress } from "@/components/reading-progress";
import { YearTwo, Suppliers, Measure } from "@/components/sections";

export const metadata = {
  title: "Annex · KC Mobile MVNO Launch Proposal",
};

export default function AnnexPage() {
  return (
    <main className="min-h-screen bg-[var(--kc-ink)] text-[var(--kc-paper)]">
      <ReadingProgress />
      <Header />

      {/* Annex hero */}
      <section className="border-b border-[var(--kc-line)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-wider text-[var(--kc-paper)]/70 transition hover:text-[var(--kc-gold)]"
          >
            <ArrowLeft className="size-3.5" />
            Back to proposal
          </Link>
          <div className="mt-8 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Annex
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-5xl">
            Reference material
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-[var(--kc-paper)]/75">
            Three reference sections that sit alongside the main proposal — the
            Year-2 outlook, the rate-card-anchored supplier directory, and the
            measurement framework. They&apos;re housed here so the main read stays
            tight.
          </p>
        </div>
      </section>

      <YearTwo />
      <Suppliers />
      <Measure />
      <Footer />
    </main>
  );
}

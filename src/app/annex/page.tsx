import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ReadingProgress } from "@/components/reading-progress";
import { YearTwo, Suppliers, MediaProposals, Measure, DocumentLibrary, LeadTimes } from "@/components/sections";

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
            The reference layer for the proposal. Six sections — the Document
            Library (every source file as a direct download + every external
            citation), the Lead Times & Critical Path (when each piece of
            work has to start), the Year-2 outlook, the supplier directory,
            the two township-OOH media proposals (Cider Point + Back to
            Front) the Plan Detail anchors to, and the measurement framework.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { id: "document-library", label: "Document library", desc: "All sources" },
              { id: "lead-times", label: "Lead times", desc: "Critical path" },
              { id: "year-2", label: "Year-2 outlook", desc: "Yr-2 expansion" },
              { id: "suppliers", label: "Suppliers", desc: "Partner directory" },
              { id: "media-proposals", label: "Media proposals", desc: "Cider Point + B2F" },
              { id: "measure", label: "Measurement", desc: "KPIs + rhythm" },
            ].map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="group rounded-lg border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-3 transition hover:border-[var(--kc-gold)]/40"
              >
                <div className="text-[12px] font-semibold uppercase tracking-wider text-[var(--kc-gold)] transition group-hover:text-[var(--kc-paper)]">
                  {nav.label}
                </div>
                <div className="mt-0.5 text-[11px] text-[var(--kc-paper)]/55">
                  {nav.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <DocumentLibrary />
      <LeadTimes />
      <YearTwo />
      <Suppliers />
      <MediaProposals />
      <Measure />
      <Footer />
    </main>
  );
}

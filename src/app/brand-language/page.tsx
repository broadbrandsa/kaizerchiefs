import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ReadingProgress } from "@/components/reading-progress";
import { BRAND_LANGUAGE } from "@/data/proposal";

export const metadata = {
  title: "Brand language · KC Mobile",
};

type Group = {
  label: string;
  blurb: string;
  items: { term: string; note: string }[];
  accent: string;
};

export default function BrandLanguagePage() {
  const groups: Group[] = [
    {
      label: "Currency & rituals",
      blurb: "The proprietary names. Capitalise consistently, never pluralise AmaCoin.",
      items: BRAND_LANGUAGE.currency,
      accent: "#fbbf24",
    },
    {
      label: "Persona & tier names",
      blurb: "Use the persona name, not 'subscriber'. The ladder of belonging.",
      items: BRAND_LANGUAGE.personaTiers,
      accent: "#34d399",
    },
    {
      label: "Club lexicon",
      blurb: "Reach for these for high-emotion moments — derby, launch, anthems.",
      items: BRAND_LANGUAGE.clubLexicon,
      accent: "#c084fc",
    },
    {
      label: "Words to avoid",
      blurb: "Telco-coded, corporate or otherwise off-brand. Always replace.",
      items: BRAND_LANGUAGE.wordsToAvoid,
      accent: "#f87171",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--kc-ink)] text-[var(--kc-paper)]">
      <ReadingProgress />
      <Header />

      {/* Hero */}
      <section className="border-b border-[var(--kc-line)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-wider text-[var(--kc-paper)]/70 transition hover:text-[var(--kc-gold)]"
          >
            <ArrowLeft className="size-3.5" />
            Back to proposal
          </Link>
          <div className="mt-8 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Reference card
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-5xl">
            KC Mobile brand language
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-[var(--kc-paper)]/75">{BRAND_LANGUAGE.intro}</p>
        </div>
      </section>

      {/* 4 groups in a 2-column grid */}
      <section className="border-b border-[var(--kc-line)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {groups.map((g) => (
              <div
                key={g.label}
                className="overflow-hidden rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40"
              >
                <div className="h-1.5 w-full" style={{ background: g.accent }} />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
                    {g.label}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--kc-paper)]/70">{g.blurb}</p>
                  <ul className="mt-5 space-y-4">
                    {g.items.map((it) => (
                      <li
                        key={it.term}
                        className="border-t border-[var(--kc-line)]/40 pt-4 first:border-t-0 first:pt-0"
                      >
                        <div className="text-base font-semibold text-[var(--kc-paper)]">
                          {it.term}
                        </div>
                        <p className="mt-1 text-[14px] leading-relaxed text-[var(--kc-paper)]/75">
                          {it.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import {
  DOCUMENT_LIBRARY,
  DOCUMENT_CATEGORY_LABELS,
  type DocumentCategory,
  type DocumentEntry,
} from "@/data/proposal";

const CATEGORY_ORDER: DocumentCategory[] = [
  "kc-strategy",
  "kc-financial",
  "audience",
  "supplier-quotes",
  "rate-cards",
  "alt-tools",
  "external",
];

const FORMAT_COLORS: Record<string, string> = {
  PDF: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  DOCX: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  XLSX: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  PPTX: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  URL: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Keynote: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  Composite: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
};

/**
 * DocumentLibrary — the single comprehensive reference for every supporting
 * document and external citation behind this proposal. Internal docs are
 * served as direct downloads from /documents/...; external sources are
 * outbound links with full citation. Designed so any reviewer can audit the
 * facts behind every figure on the site.
 */
export function DocumentLibrary() {
  const [filter, setFilter] = useState<"all" | "internal" | "external">("all");

  const grouped = DOCUMENT_LIBRARY.reduce<Record<DocumentCategory, DocumentEntry[]>>(
    (acc, doc) => {
      (acc[doc.category] ??= []).push(doc);
      return acc;
    },
    {
      "kc-strategy": [],
      "kc-financial": [],
      audience: [],
      "supplier-quotes": [],
      "rate-cards": [],
      "alt-tools": [],
      external: [],
    },
  );

  const internalCount = DOCUMENT_LIBRARY.filter((d) => d.internal).length;
  const externalCount = DOCUMENT_LIBRARY.filter((d) => !d.internal).length;

  const filtered = (docs: DocumentEntry[]) =>
    filter === "all"
      ? docs
      : docs.filter((d) => (filter === "internal" ? d.internal : !d.internal));

  return (
    <Section
      id="document-library"
      eyebrow="Annex · Document library"
      title="Every source behind every number"
      intro="The single comprehensive reference for this proposal. Every figure, claim, and methodology choice on the site traces back to one of the documents below. Internal documents are downloadable directly from this site (we host the files); external sources are outbound links to the original publishers."
    >
      {/* Top stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Total references" value={DOCUMENT_LIBRARY.length.toString()} sub="documents + citations" />
        <Stat label="Hosted downloads" value={internalCount.toString()} sub="PDF / DOCX / XLSX / PPTX" />
        <Stat label="External citations" value={externalCount.toString()} sub="web URLs + reports" />
        <Stat label="Categories" value={CATEGORY_ORDER.length.toString()} sub="organised by domain" />
      </div>

      {/* Filter pills */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
          Show
        </span>
        {(
          [
            { id: "all" as const, label: `All (${DOCUMENT_LIBRARY.length})` },
            { id: "internal" as const, label: `Hosted downloads (${internalCount})` },
            { id: "external" as const, label: `External citations (${externalCount})` },
          ]
        ).map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-3 py-1.5 text-[12px] font-medium uppercase tracking-wider transition ${
              filter === f.id
                ? "border-[var(--kc-gold)] bg-[var(--kc-gold)]/15 text-[var(--kc-gold)]"
                : "border-[var(--kc-line)] text-[var(--kc-paper)]/70 hover:border-[var(--kc-paper)]/40"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grouped categories */}
      <div className="mt-10 space-y-10">
        {CATEGORY_ORDER.map((cat) => {
          const docs = filtered(grouped[cat] ?? []);
          if (docs.length === 0) return null;
          return (
            <div key={cat}>
              <div className="flex items-baseline justify-between gap-3 border-b border-[var(--kc-line)] pb-3">
                <h3 className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  {DOCUMENT_CATEGORY_LABELS[cat]}
                </h3>
                <span className="text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                  {docs.length} {docs.length === 1 ? "entry" : "entries"}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
                {docs.map((doc) => (
                  <DocCard key={doc.id} doc={doc} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="mt-10 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
          Verification & access
        </div>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-[var(--kc-paper)]/80">
          Every number on this site is traceable back to a row in this library. To audit a figure: find the relevant entry, open the source document, and the calculation/claim sits inside it. Hosted downloads work directly in any browser — internal and external reviewers see the same file. External citations link to the publisher or are described where no public link exists. If you find a number on the site that you can&apos;t trace to a row here, flag it — that&apos;s a gap and we&apos;ll fix it.
        </p>
      </div>
    </Section>
  );
}

function DocCard({ doc }: { doc: DocumentEntry }) {
  const formatColor = FORMAT_COLORS[doc.format] ?? "bg-[var(--kc-line)] text-[var(--kc-paper)]/70 border-[var(--kc-line)]";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-5 transition hover:border-[var(--kc-gold)]/50">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={`${formatColor} text-[11px]`} variant="outline">
            {doc.format}
          </Badge>
          {doc.fileSize ? (
            <span className="font-mono text-[11px] text-[var(--kc-mute)]">
              {doc.fileSize}
            </span>
          ) : null}
          {doc.date ? (
            <span className="text-[11px] uppercase tracking-wider text-[var(--kc-mute)]">
              {doc.date}
            </span>
          ) : null}
          {doc.internal ? (
            <Badge className="bg-[var(--kc-gold)]/15 border-[var(--kc-gold)]/30 text-[var(--kc-gold)] text-[11px]" variant="outline">
              Hosted
            </Badge>
          ) : (
            <Badge className="bg-violet-500/10 border-violet-500/30 text-violet-300 text-[11px]" variant="outline">
              External
            </Badge>
          )}
        </div>
      </div>

      <h4 className="mt-3 text-[15px] font-semibold leading-snug text-[var(--kc-paper)]">
        {doc.title}
      </h4>

      {doc.source ? (
        <div className="mt-1 text-[12px] text-[var(--kc-paper)]/65">
          {doc.source}
        </div>
      ) : null}

      <p className="mt-3 text-[13px] leading-relaxed text-[var(--kc-paper)]/80">
        {doc.provides}
      </p>

      {doc.usedIn?.length ? (
        <div className="mt-3 border-t border-[var(--kc-line)]/50 pt-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
            Used in
          </div>
          <ul className="mt-1.5 space-y-0.5 text-[12px] text-[var(--kc-paper)]/65">
            {doc.usedIn.map((u, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--kc-gold)]/60">·</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--kc-line)]/40 pt-3">
        <code className="truncate font-mono text-[10px] text-[var(--kc-paper)]/45">
          {doc.href}
        </code>
        <a
          href={doc.href}
          target={doc.internal ? "_blank" : "_blank"}
          rel="noopener noreferrer"
          download={doc.internal}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/10 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--kc-gold)] transition hover:bg-[var(--kc-gold)]/20"
        >
          {doc.internal ? "Download" : "Open"}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            {doc.internal ? (
              <path d="M7 1.5v8M3.5 6L7 9.5 10.5 6M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M5 9l7-7M5 2h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </a>
      </div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
        {label}
      </div>
      <div className="mt-1 font-mono text-3xl font-bold text-[var(--kc-gold)]">{value}</div>
      <div className="mt-1 text-[11px] text-[var(--kc-paper)]/65">{sub}</div>
    </div>
  );
}

"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getChapterPosition } from "@/data/section-registry";
import { SectionLayoutProvider } from "@/components/section-layout-context";

export type ChapterSubSection = {
  /** anchor id (matches the underlying Section component's id) */
  id: string;
  /** short label shown in accordion trigger */
  label: string;
  /** one-liner blurb shown next to the label */
  blurb: string;
  /** the rendered section component */
  content: ReactNode;
  /** estimated read minutes (small badge) */
  readMin?: number;
  /** if true, this sub-section is open by default */
  defaultOpen?: boolean;
};

export type ChapterStat = {
  label: string;
  value: string;
};

export function Chapter({
  id,
  eyebrow,
  title,
  intro,
  /** Optional skim cards — fast facts an exec sees without expanding anything. */
  skimStats,
  /** Optional executive summary — bullet-style takeaways. */
  skimSummary,
  /** Optional "this chapter is for…" hint */
  audienceHint,
  subSections,
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  skimStats?: ChapterStat[];
  skimSummary?: string[];
  audienceHint?: string;
  subSections: ChapterSubSection[];
  className?: string;
}) {
  const pos = getChapterPosition(id);

  // Controlled accordion state — start with default-open items, but also
  // expand any item whose id matches the current URL hash so deep-links work.
  const initialOpen = subSections.filter((s) => s.defaultOpen).map((s) => s.id);
  const [openIds, setOpenIds] = useState<string[]>(initialOpen);

  useEffect(() => {
    const subIds = subSections.map((s) => s.id);

    function syncFromHash() {
      const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
      if (!hash) return;
      // If the hash matches one of this chapter's sub-section ids, expand it.
      if (subIds.includes(hash)) {
        setOpenIds((prev) => (prev.includes(hash) ? prev : [...prev, hash]));
        // Re-trigger scroll after expansion so layout settles.
        // Use rAF to wait for the accordion animation to start.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        });
      }
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [subSections]);

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-b border-[var(--kc-line)] py-20 md:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Chapter ribbon */}
        {pos ? (
          <div className="mb-10 flex items-center gap-3 text-[16px]">
            <span className="font-mono uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Chapter {String(pos.index + 1).padStart(2, "0")}
              <span className="text-[var(--kc-mute)]">
                {" "}
                / {String(pos.total).padStart(2, "0")}
              </span>
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--kc-gold)]/40 via-[var(--kc-line)] to-transparent" />
          </div>
        ) : null}

        {/* Title block */}
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-lg text-[var(--kc-paper)]/75">{intro}</p>
          ) : null}
          {audienceHint ? (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--kc-gold)]">
              For
              <span className="text-[var(--kc-paper)]/85 normal-case tracking-normal">
                {audienceHint}
              </span>
            </div>
          ) : null}
        </div>

        {/* Skim layer — stats + bullets */}
        {(skimStats?.length || skimSummary?.length) ? (
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {skimStats?.length ? (
              <div className="rounded-2xl border border-[var(--kc-gold)]/30 bg-[var(--kc-gold)]/5 p-5 lg:col-span-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  Fast facts
                </div>
                <ul className="mt-3 space-y-2.5">
                  {skimStats.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-baseline justify-between gap-3 border-b border-[var(--kc-line)]/50 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-[12px] uppercase tracking-wider text-[var(--kc-paper)]/70">
                        {s.label}
                      </span>
                      <span className="font-mono text-[15px] font-semibold text-[var(--kc-paper)]">
                        {s.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {skimSummary?.length ? (
              <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-5 lg:col-span-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  In one minute
                </div>
                <ul className="mt-3 space-y-3">
                  {skimSummary.map((line, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kc-gold)]" />
                      <span className="text-[15px] leading-relaxed text-[var(--kc-paper)]/85">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Sub-sections accordion — depth on demand */}
        <div className="mt-10">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-mute)]">
              Go deeper · {subSections.length}{" "}
              {subSections.length === 1 ? "section" : "sections"}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpenIds(subSections.map((s) => s.id))}
                className="text-[11px] uppercase tracking-wider text-[var(--kc-mute)] transition hover:text-[var(--kc-gold)]"
              >
                Expand all
              </button>
              <span className="text-[var(--kc-line)]">·</span>
              <button
                type="button"
                onClick={() => setOpenIds([])}
                className="text-[11px] uppercase tracking-wider text-[var(--kc-mute)] transition hover:text-[var(--kc-gold)]"
              >
                Collapse all
              </button>
            </div>
          </div>

          <Accordion
            type="multiple"
            value={openIds}
            onValueChange={setOpenIds}
            className="space-y-3"
          >
            {subSections.map((s) => (
              <AccordionItem
                key={s.id}
                value={s.id}
                className="overflow-hidden rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 px-0"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex w-full items-start gap-4 text-left">
                    <span className="inline-block h-10 w-1 shrink-0 rounded-sm bg-[var(--kc-gold)]" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-base font-semibold tracking-tight text-[var(--kc-paper)]">
                          {s.label}
                        </span>
                        {s.readMin ? (
                          <Badge variant="outline" className="text-[11px]">
                            {s.readMin} min
                          </Badge>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-[var(--kc-paper)]/70">
                        {s.blurb}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                {/* Content unmounts when collapsed — the hash-listener above
                    auto-expands the matching item when a sub-section anchor
                    is followed, so deep-links still resolve to the section. */}
                <AccordionContent className="px-6 pb-8 pt-2">
                  <SectionLayoutProvider nested>
                    {s.content}
                  </SectionLayoutProvider>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

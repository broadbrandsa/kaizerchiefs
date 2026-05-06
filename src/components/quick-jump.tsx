"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  SECTION_REGISTRY,
  SECTION_GROUP_LABELS,
  type SectionMeta,
} from "@/data/section-registry";

const GROUP_ORDER: SectionMeta["group"][] = [
  "frame",
  "audience",
  "model",
  "plan",
  "channels",
  "lifecycle",
  "ops",
  "phasing",
];

export function QuickJump() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [activeId, setActiveId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* Track which sections have been seen (scrolled into view at least 60%) */
  useEffect(() => {
    const elements = SECTION_REGISTRY.map((s) =>
      document.getElementById(s.id),
    ).filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        setCompleted((prev) => {
          const next = new Set(prev);
          for (const e of entries) {
            if (e.isIntersecting && e.intersectionRatio >= 0.6) {
              next.add(e.target.id);
            }
          }
          return next;
        });
      },
      { threshold: [0.6] },
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Track current active section */
  useEffect(() => {
    const elements = SECTION_REGISTRY.map((s) =>
      document.getElementById(s.id),
    ).filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Keyboard shortcuts: J next, K prev, ? open, Esc close, / focus search */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

      if (e.key === "Escape" && open) {
        setOpen(false);
        e.preventDefault();
        return;
      }
      if (isTyping) return;

      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        setOpen(true);
        e.preventDefault();
        setTimeout(() => inputRef.current?.focus(), 50);
      } else if (e.key === "/" && !open) {
        setOpen(true);
        e.preventDefault();
        setTimeout(() => inputRef.current?.focus(), 50);
      } else if (e.key.toLowerCase() === "j") {
        const idx = SECTION_REGISTRY.findIndex((s) => s.id === activeId);
        const next = SECTION_REGISTRY[Math.min(idx + 1, SECTION_REGISTRY.length - 1)];
        if (next) {
          document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (e.key.toLowerCase() === "k") {
        const idx = SECTION_REGISTRY.findIndex((s) => s.id === activeId);
        const prev = SECTION_REGISTRY[Math.max(idx - 1, 0)];
        if (prev) {
          document.getElementById(prev.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, activeId]);

  /* Filter by query */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTION_REGISTRY;
    return SECTION_REGISTRY.filter(
      (s) =>
        s.label.toLowerCase().includes(q) ||
        s.blurb.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q),
    );
  }, [query]);

  /* Group filtered sections */
  const grouped = useMemo(() => {
    const map = new Map<SectionMeta["group"], SectionMeta[]>();
    for (const s of filtered) {
      const arr = map.get(s.group) ?? [];
      arr.push(s);
      map.set(s.group, arr);
    }
    return GROUP_ORDER.filter((g) => map.has(g)).map((g) => ({
      group: g,
      label: SECTION_GROUP_LABELS[g],
      items: map.get(g)!,
    }));
  }, [filtered]);

  const completedCount = completed.size;
  const completedPct = Math.round((completedCount / SECTION_REGISTRY.length) * 100);

  function jumpTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    setQuery("");
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--kc-gold)]/40 bg-[var(--kc-charcoal)]/90 px-4 py-3 text-sm font-medium text-[var(--kc-paper)] shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-[var(--kc-gold)] hover:bg-[var(--kc-charcoal)]"
        aria-label="Open quick-jump menu"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M3 4h12M3 9h12M3 14h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="hidden sm:inline">Jump to section</span>
        <span className="hidden md:inline rounded border border-[var(--kc-line)] bg-[var(--kc-ink)] px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-[var(--kc-mute)]">
          /
        </span>
        <span className="sm:hidden text-[16px] font-mono text-[var(--kc-gold)]">
          {completedCount}/{SECTION_REGISTRY.length}
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="no-print fixed inset-0 z-[70] flex items-start justify-center bg-[var(--kc-black)]/75 px-4 pt-[8vh] backdrop-blur-md"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-ink)] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="border-b border-[var(--kc-line)] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
                    Jump to section
                  </div>
                  <div className="mt-1 text-[16px] text-[var(--kc-paper)]/70">
                    {completedCount} of {SECTION_REGISTRY.length} sections viewed · {completedPct}%
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-[var(--kc-line)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--kc-mute)] hover:border-[var(--kc-paper)] hover:text-[var(--kc-paper)]"
                >
                  Esc
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[var(--kc-charcoal)]">
                <div
                  className="h-full bg-[var(--kc-gold)] transition-all duration-300"
                  style={{ width: `${completedPct}%` }}
                />
              </div>

              <input
                ref={inputRef}
                type="text"
                placeholder="Search sections…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="mt-4 w-full rounded-lg border border-[var(--kc-line)] bg-[var(--kc-charcoal)] px-3 py-2.5 text-sm text-[var(--kc-paper)] placeholder:text-[var(--kc-mute)] focus:border-[var(--kc-gold)] focus:outline-none"
              />
            </div>

            {/* Sections list */}
            <div className="max-h-[58vh] overflow-y-auto p-3">
              {grouped.length === 0 ? (
                <div className="px-4 py-12 text-center text-sm text-[var(--kc-mute)]">
                  No sections match “{query}”.
                </div>
              ) : (
                grouped.map((g) => (
                  <div key={g.group} className="mb-4 last:mb-0">
                    <div className="px-3 pb-2 pt-1 text-[16px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
                      {g.label}
                    </div>
                    <div className="space-y-1">
                      {g.items.map((s) => {
                        const seen = completed.has(s.id);
                        const isActive = s.id === activeId;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => jumpTo(s.id)}
                            className={`group flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left transition ${
                              isActive
                                ? "border-[var(--kc-gold)] bg-[var(--kc-gold)]/10"
                                : "border-transparent hover:border-[var(--kc-line)] hover:bg-[var(--kc-charcoal)]/60"
                            }`}
                          >
                            {/* Status icon */}
                            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                              {seen ? (
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 20 20"
                                  className="text-[var(--kc-gold)]"
                                  aria-hidden="true"
                                >
                                  <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.18" />
                                  <path
                                    d="M5.5 10.5l3 3 6-6"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : (
                                <span className="inline-block h-2 w-2 rounded-full border border-[var(--kc-line)]" />
                              )}
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className={`text-[16px] font-semibold ${isActive ? "text-[var(--kc-gold)]" : "text-[var(--kc-paper)]"}`}>
                                {s.label}
                              </div>
                              <div className="mt-0.5 truncate text-[16px] text-[var(--kc-paper)]/65">
                                {s.blurb}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Keyboard hints */}
            <div className="flex items-center justify-between gap-2 border-t border-[var(--kc-line)] px-5 py-3 text-[16px] uppercase tracking-wider text-[var(--kc-mute)]">
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline">Shortcuts:</span>
                <span><kbd className="rounded border border-[var(--kc-line)] bg-[var(--kc-charcoal)] px-1.5 py-0.5 font-mono">J</kbd> next</span>
                <span><kbd className="rounded border border-[var(--kc-line)] bg-[var(--kc-charcoal)] px-1.5 py-0.5 font-mono">K</kbd> prev</span>
                <span className="hidden sm:inline"><kbd className="rounded border border-[var(--kc-line)] bg-[var(--kc-charcoal)] px-1.5 py-0.5 font-mono">/</kbd> search</span>
              </div>
              <span>Press <kbd className="rounded border border-[var(--kc-line)] bg-[var(--kc-charcoal)] px-1.5 py-0.5 font-mono">Esc</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

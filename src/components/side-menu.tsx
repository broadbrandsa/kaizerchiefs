"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SECTION_REGISTRY } from "@/data/section-registry";

export function SideMenu() {
  const [active, setActive] = useState<string>(SECTION_REGISTRY[0]?.id ?? "");
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  /* Active section tracker */
  useEffect(() => {
    const elements = SECTION_REGISTRY
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Completion tracker — section seen at >=60% intersection */
  useEffect(() => {
    const elements = SECTION_REGISTRY
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
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
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const completedCount = completed.size;
  const completedPct = Math.round((completedCount / SECTION_REGISTRY.length) * 100);

  return (
    <nav
      aria-label="Section navigation"
      className="no-print pointer-events-none fixed left-0 top-24 z-30 hidden h-[calc(100vh-6rem)] w-56 lg:block"
    >
      <div className="pointer-events-auto h-full overflow-y-auto px-4 py-4">
        {/* Read progress mini-meter */}
        <div className="mb-4 rounded-md border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-3">
          <div className="flex items-baseline justify-between text-[16px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
            <span>Progress</span>
            <span className="font-mono text-[var(--kc-gold)]">{completedPct}%</span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[var(--kc-ink)]">
            <div
              className="h-full bg-[var(--kc-gold)] transition-all duration-300"
              style={{ width: `${completedPct}%` }}
            />
          </div>
          <div className="mt-1 text-[16px] text-[var(--kc-mute)]">
            {completedCount} / {SECTION_REGISTRY.length} sections
          </div>
        </div>

        <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-mute)]">
          Sections
        </div>

        <ul className="mt-3 space-y-1">
          {SECTION_REGISTRY.map((s, i) => {
            const isActive = active === s.id;
            const isSeen = completed.has(s.id);
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "group flex items-center gap-2.5 rounded px-2 py-1.5 text-[13px] transition",
                    isActive
                      ? "text-[var(--kc-gold)]"
                      : isSeen
                        ? "text-[var(--kc-paper)]/85 hover:text-[var(--kc-gold)]"
                        : "text-[var(--kc-paper)]/60 hover:text-[var(--kc-gold)]",
                  )}
                >
                  {/* Status indicator */}
                  <span
                    className={cn(
                      "relative flex h-4 w-4 shrink-0 items-center justify-center",
                    )}
                    aria-hidden="true"
                  >
                    {isActive ? (
                      <>
                        <span className="absolute inline-block h-3 w-3 animate-ping rounded-full bg-[var(--kc-gold)]/40" />
                        <span className="relative inline-block h-2 w-2 rounded-full bg-[var(--kc-gold)]" />
                      </>
                    ) : isSeen ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        className="text-[var(--kc-gold)]/85"
                        aria-hidden="true"
                      >
                        <circle cx="7" cy="7" r="6" fill="currentColor" opacity="0.18" />
                        <path
                          d="M4 7.2l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="inline-block h-1.5 w-1.5 rounded-full border border-[var(--kc-mute)]" />
                    )}
                  </span>

                  {/* Number + label */}
                  <span className="font-mono text-[10px] tabular-nums text-[var(--kc-mute)] group-hover:text-[var(--kc-paper)]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Keyboard hints */}
        <div className="mt-6 rounded-md border border-[var(--kc-line)]/60 bg-[var(--kc-charcoal)]/30 p-3 text-[16px] text-[var(--kc-mute)]">
          <div className="font-semibold uppercase tracking-[0.2em]">Tips</div>
          <ul className="mt-2 space-y-1">
            <li><kbd className="rounded border border-[var(--kc-line)] bg-[var(--kc-ink)] px-1 font-mono text-[16px]">J</kbd> next chapter</li>
            <li><kbd className="rounded border border-[var(--kc-line)] bg-[var(--kc-ink)] px-1 font-mono text-[16px]">K</kbd> previous chapter</li>
            <li><kbd className="rounded border border-[var(--kc-line)] bg-[var(--kc-ink)] px-1 font-mono text-[16px]">/</kbd> search sections</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

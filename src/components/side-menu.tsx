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

  return (
    <nav
      aria-label="Section navigation"
      className="no-print group/nav pointer-events-none fixed left-0 top-24 z-30 hidden h-[calc(100vh-6rem)] w-12 transition-[width] duration-300 ease-out hover:w-56 lg:block"
    >
      <div className="pointer-events-auto h-full overflow-hidden py-4 transition-[padding] duration-300 ease-out group-hover/nav:px-4 px-2">
        {/* Section header — fades in on hover */}
        <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-mute)] opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100 whitespace-nowrap">
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
                  title={s.label}
                  className={cn(
                    "group/item flex items-center gap-2.5 rounded px-2 py-1.5 text-[13px] transition",
                    isActive
                      ? "text-[var(--kc-gold)]"
                      : isSeen
                        ? "text-[var(--kc-paper)]/85 hover:text-[var(--kc-gold)]"
                        : "text-[var(--kc-paper)]/60 hover:text-[var(--kc-gold)]",
                  )}
                >
                  {/* Status indicator — always visible */}
                  <span
                    className="relative flex h-4 w-4 shrink-0 items-center justify-center"
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

                  {/* Number + label — hidden until hover, then fade in */}
                  <span className="font-mono text-[10px] tabular-nums text-[var(--kc-mute)] opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100 group-hover/item:text-[var(--kc-paper)]/70 whitespace-nowrap">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100">
                    {s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "audience", label: "Audience" },
  { id: "strategy", label: "Strategy" },
  { id: "model", label: "Investment model" },
  { id: "sponsors-collab", label: "Sponsors" },
  { id: "earned-voices", label: "Voices" },
  { id: "ideas", label: "Launch ideas" },
  { id: "loyalty", label: "Loyalty" },
  { id: "suppliers", label: "Suppliers" },
  { id: "retail-future", label: "Retail futures" },
  { id: "waitlist", label: "Pre-launch" },
  { id: "timing", label: "Phasing" },
  { id: "measure", label: "Measurement" },
  { id: "year-2", label: "Year 2" },
];

export function SideMenu() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Trigger when section enters the upper third of the viewport
        rootMargin: "-15% 0px -65% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="no-print pointer-events-none fixed left-0 top-24 z-30 hidden h-[calc(100vh-6rem)] w-56 lg:block"
    >
      <div className="pointer-events-auto h-full overflow-y-auto px-4 py-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-mute)]">
          Sections
        </div>
        <ul className="mt-3 space-y-0.5">
          {SECTIONS.map((s, i) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "group flex items-center gap-3 rounded-md px-2 py-1.5 text-xs transition",
                    isActive
                      ? "bg-[var(--kc-gold)]/15 text-[var(--kc-gold)]"
                      : "text-[var(--kc-paper)]/55 hover:bg-[var(--kc-charcoal)]/40 hover:text-[var(--kc-paper)]",
                  )}
                >
                  <span
                    className={cn(
                      "inline-block h-1.5 w-1.5 shrink-0 rounded-full transition",
                      isActive
                        ? "bg-[var(--kc-gold)]"
                        : "bg-[var(--kc-line)] group-hover:bg-[var(--kc-mute)]",
                    )}
                    aria-hidden
                  />
                  <span className="font-mono text-[10px] tabular-nums text-[var(--kc-mute)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 truncate">{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  CHAPTER_REGISTRY,
  SECTION_REGISTRY,
} from "@/data/section-registry";

/**
 * SideMenu — left-rail navigation.
 *
 * Hierarchical: 6 chapters at top level, sub-sections nested under each.
 * Active chapter is highlighted as the user scrolls. Sub-section links jump
 * to the in-page anchor of the underlying Section component (which is still
 * rendered inside the chapter's accordion, so the browser will scroll to it
 * if the accordion is already open; otherwise the top-of-chapter anchor is
 * used).
 */
export function SideMenu() {
  const [active, setActive] = useState<string>(CHAPTER_REGISTRY[0]?.id ?? "");

  useEffect(() => {
    const elements = CHAPTER_REGISTRY
      .map((c) => document.getElementById(c.id))
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

  return (
    <nav
      aria-label="Chapter navigation"
      className="no-print group/nav pointer-events-none fixed left-0 top-24 z-30 hidden h-[calc(100vh-6rem)] w-12 transition-[width] duration-300 ease-out hover:w-72 lg:block"
    >
      <div className="pointer-events-auto h-full overflow-y-auto py-4 px-2 transition-[padding] duration-300 ease-out group-hover/nav:px-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-mute)] opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100 whitespace-nowrap">
          Chapters
        </div>

        <ul className="mt-3 space-y-1">
          {CHAPTER_REGISTRY.map((c, i) => {
            const isActive = active === c.id;
            const subSections = c.subSectionIds
              .map((id) => SECTION_REGISTRY.find((s) => s.id === id))
              .filter((s): s is NonNullable<typeof s> => Boolean(s));

            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  title={c.label}
                  className={cn(
                    "group/item flex items-center gap-2.5 rounded px-2 py-1.5 text-[13px] transition",
                    isActive
                      ? "text-[var(--kc-gold)]"
                      : "text-[var(--kc-paper)]/80 hover:text-[var(--kc-gold)]",
                  )}
                >
                  <span
                    className="relative flex h-4 w-4 shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    {isActive ? (
                      <>
                        <span className="absolute inline-block h-3 w-3 animate-ping rounded-full bg-[var(--kc-gold)]/40" />
                        <span className="relative inline-block h-2 w-2 rounded-full bg-[var(--kc-gold)]" />
                      </>
                    ) : (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--kc-mute)]" />
                    )}
                  </span>

                  <span className="font-mono text-[10px] tabular-nums text-[var(--kc-mute)] opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100 group-hover/item:text-[var(--kc-paper)]/70 whitespace-nowrap">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate font-semibold opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100">
                    {c.label}
                  </span>
                </a>

                {/* Sub-sections — only visible when nav is hovered + this chapter is active */}
                {subSections.length > 1 ? (
                  <ul className="ml-5 mt-0.5 space-y-0.5 border-l border-[var(--kc-line)]/60 pl-2 opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100">
                    {subSections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          title={s.label}
                          className="block truncate rounded px-2 py-1 text-[12px] text-[var(--kc-paper)]/55 transition hover:text-[var(--kc-gold)]"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

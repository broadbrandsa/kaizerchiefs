"use client";

import Link from "next/link";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChiefMark } from "@/components/chief-mark";
import { CHAPTER_REGISTRY, SECTION_REGISTRY } from "@/data/section-registry";

export function Header() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-[var(--kc-line)] bg-[var(--kc-ink)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <ChiefMark className="h-8 w-auto" />
          <div className="hidden border-l border-[var(--kc-line)] pl-3 leading-none sm:block">
            <div className="text-[17px] uppercase tracking-[0.32em] text-[var(--kc-mute)]">
              Mobile · MVNO Launch
            </div>
            <div className="text-sm font-semibold tracking-tight text-[var(--kc-paper)]">
              Proposal · 2026
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          {/* Chapters dropdown — hierarchical */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 px-3 py-1.5 text-[12px] font-medium uppercase tracking-wider text-[var(--kc-paper)] transition hover:border-[var(--kc-gold)]/60 hover:text-[var(--kc-gold)]"
              >
                Chapters
                <ChevronDown className="size-3.5 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[320px]">
              {CHAPTER_REGISTRY.map((c, i) => {
                const subSections = c.subSectionIds
                  .map((id) => SECTION_REGISTRY.find((s) => s.id === id))
                  .filter((s): s is NonNullable<typeof s> => Boolean(s));
                return (
                  <div key={c.id} className={i > 0 ? "mt-1 border-t border-[var(--kc-line)]/40 pt-1" : undefined}>
                    <DropdownMenuLabel className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
                      Ch {String(i + 1).padStart(2, "0")}
                    </DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <a
                        href={`/#${c.id}`}
                        className="cursor-pointer text-[12px] font-semibold uppercase tracking-wider text-[var(--kc-paper)]"
                      >
                        {c.label}
                      </a>
                    </DropdownMenuItem>
                    {subSections.length > 1
                      ? subSections.map((s) => (
                          <DropdownMenuItem key={s.id} asChild>
                            <a
                              href={`/#${s.id}`}
                              className="ml-3 cursor-pointer text-[11px] font-normal text-[var(--kc-paper)]/65"
                            >
                              ↳ {s.label}
                            </a>
                          </DropdownMenuItem>
                        ))
                      : null}
                  </div>
                );
              })}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/brand-language"
                  className="cursor-pointer text-[12px] font-medium uppercase tracking-wider text-[var(--kc-gold)]"
                >
                  Brand language →
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/annex"
                  className="cursor-pointer text-[12px] font-medium uppercase tracking-wider text-[var(--kc-gold)]"
                >
                  Annex →
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/annex#document-library"
                  className="cursor-pointer text-[12px] font-medium uppercase tracking-wider text-[var(--kc-gold)]"
                >
                  Document library ↓
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Direct annex link as well */}
          <Link
            href="/annex"
            className="text-[12px] font-medium uppercase tracking-wider text-[var(--kc-paper)]/70 transition hover:text-[var(--kc-gold)]"
          >
            Annex
          </Link>
        </div>

        <Button
          onClick={() => typeof window !== "undefined" && window.print()}
          size="sm"
          className="gap-2"
        >
          <Download className="size-4" />
          Download PDF
        </Button>
      </div>
    </header>
  );
}

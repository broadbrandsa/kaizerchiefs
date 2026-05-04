"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChiefMark } from "@/components/chief-mark";

const NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Audience", href: "#audience" },
  { label: "Tiers", href: "#tiers" },
  { label: "Sponsors", href: "#sponsors-collab" },
  { label: "Ideas", href: "#ideas" },
  { label: "Loyalty", href: "#loyalty" },
  { label: "Retail", href: "#retail-future" },
  { label: "Measure", href: "#measure" },
];

export function Header() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-[var(--kc-line)] bg-[var(--kc-ink)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <ChiefMark className="h-8 w-auto" />
          <div className="hidden border-l border-[var(--kc-line)] pl-3 leading-none sm:block">
            <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--kc-mute)]">
              Mobile · MVNO Launch
            </div>
            <div className="text-sm font-semibold tracking-tight text-[var(--kc-paper)]">
              Proposal · 2026
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[var(--kc-paper)]/80 transition hover:text-[var(--kc-gold)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

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

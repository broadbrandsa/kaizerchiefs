import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  getNextSection,
  getSectionPosition,
  getSectionMeta,
} from "@/data/section-registry";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const pos = id ? getSectionPosition(id) : null;
  const meta = id ? getSectionMeta(id) : null;
  const next = id ? getNextSection(id) : null;

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-b border-[var(--kc-line)] py-20 md:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Chapter ribbon — only renders when section is in the registry */}
        {pos && meta ? (
          <div className="mb-10 flex items-center gap-3 text-[16px]">
            <span className="font-mono uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              Chapter {String(pos.index + 1).padStart(2, "0")}
              <span className="text-[var(--kc-mute)]"> / {String(pos.total).padStart(2, "0")}</span>
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--kc-gold)]/40 via-[var(--kc-line)] to-transparent" />
            <span className="font-mono uppercase tracking-wider text-[var(--kc-mute)]">
              ~{meta.readMin} min read
            </span>
          </div>
        ) : null}

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
        </div>

        <div className="mt-12">{children}</div>

        {/* Continue-reading footer */}
        {next ? (
          <a
            href={`#${next.id}`}
            className="group mt-16 flex items-center justify-between gap-6 rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6 transition hover:border-[var(--kc-gold)]/50 hover:bg-[var(--kc-charcoal)]/70"
          >
            <div className="min-w-0 flex-1">
              <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-mute)] group-hover:text-[var(--kc-gold)]">
                Continue to chapter {pos ? String(pos.index + 2).padStart(2, "0") : ""}
              </div>
              <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--kc-paper)]">
                {next.label}
              </div>
              <p className="mt-1 text-sm text-[var(--kc-paper)]/70">{next.blurb}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 text-[var(--kc-paper)]/60 group-hover:text-[var(--kc-gold)]">
              <span className="font-mono text-[16px] uppercase tracking-wider">
                ~{next.readMin} min
              </span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <circle cx="20" cy="20" r="19.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <path
                  d="M16 14l8 6-8 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        ) : null}
      </div>
    </section>
  );
}

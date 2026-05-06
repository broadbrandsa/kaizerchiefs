import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
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
      </div>
    </section>
  );
}

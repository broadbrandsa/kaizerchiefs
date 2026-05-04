import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id, eyebrow, title, intro, children, className,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-[var(--kc-line)] py-20 md:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
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

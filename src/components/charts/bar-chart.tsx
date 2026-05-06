import { cn } from "@/lib/utils";

export interface BarDatum {
  label: string;
  value: number;
  /** Optional secondary label shown to the right (e.g. "85.5%") */
  display?: string;
  /** Optional sublabel (italic context) */
  sub?: string;
  /** Override colour — defaults to KC gold */
  tone?: "gold" | "muted" | "ink";
  /** Mark this row as retired (Showmax-style: line-through + 50% opacity + tooltip) */
  retired?: boolean;
}

/**
 * Horizontal bar chart, inline SVG (no library dependency, print-friendly).
 * Use for "percentage growth" or "comparison across categories".
 */
export function BarChart({
  data,
  max,
  className,
}: {
  data: BarDatum[];
  /** Optional cap; otherwise uses max value in data */
  max?: number;
  className?: string;
}) {
  const ceiling =
    max ?? Math.max(...data.map((d) => d.value), 0) * 1.05;

  return (
    <div className={cn("w-full", className)}>
      <ul className="space-y-3">
        {data.map((d) => {
          const widthPct =
            ceiling > 0 ? Math.max(0, (d.value / ceiling) * 100) : 0;
          const tone =
            d.tone === "ink"
              ? "bg-[var(--kc-ink)] border-[var(--kc-line)]"
              : d.tone === "muted"
                ? "bg-[var(--kc-charcoal)]"
                : "bg-[var(--kc-gold)]";
          return (
            <li
              key={d.label}
              className={d.retired ? "line-through opacity-50" : ""}
              title={
                d.retired
                  ? "No longer relevant — service is being shut down"
                  : undefined
              }
            >
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium text-[var(--kc-paper)]">
                  {d.label}
                </span>
                <span className="font-mono text-xs text-[var(--kc-paper)]/85">
                  {d.display ?? d.value}
                </span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[var(--kc-ink)]">
                <div
                  className={cn("h-full rounded-full", tone)}
                  style={{ width: `${widthPct}%` }}
                />
              </div>
              {d.sub ? (
                <div className="mt-1 text-[18px] uppercase tracking-wider text-[var(--kc-mute)]">
                  {d.sub}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { LAUNCH_TIMELINE } from "@/data/proposal";

const TYPE_COLOR: Record<string, string> = {
  "always-on": "#34d399",
  "match-day": "#fbbf24",
  monthly:     "#60a5fa",
  burst:       "#f472b6",
  "one-shot":  "#f87171",
};

const TYPE_LABEL: Record<string, string> = {
  "always-on": "Always-on",
  "match-day": "Match-day",
  monthly:     "Monthly",
  burst:       "Burst",
  "one-shot":  "One-shot",
};

export function LaunchTimelineChart() {
  const t = LAUNCH_TIMELINE;
  const months = [1, 2, 3, 4, 5, 6];
  const colWidth = 110;
  const labelWidth = 220;
  const rowHeight = 36;
  const headerHeight = 56;
  const totalWidth = labelWidth + colWidth * 6 + 20;
  const totalHeight = headerHeight + t.activities.length * rowHeight + 30;

  return (
    <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
      <div className="text-[18px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
        6-month launch activation timeline
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
        When each of the 13 launch activities turns on
      </h3>
      <p className="mt-3 max-w-3xl text-sm text-[var(--kc-paper)]/75">{t.intro}</p>

      {/* Phases strip */}
      <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
        {t.phases.map((p) => (
          <div
            key={p.month}
            className="rounded-lg border border-[var(--kc-line)] bg-[var(--kc-ink)]/60 p-3"
          >
            <div className="text-[16px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
              {p.name}
            </div>
            <p className="mt-1 text-[16px] leading-snug text-[var(--kc-paper)]/80">
              {p.focus}
            </p>
          </div>
        ))}
      </div>

      {/* Gantt */}
      <div className="mt-8 overflow-x-auto">
        <svg viewBox={`0 0 ${totalWidth} ${totalHeight}`} className="h-auto w-full" style={{ minWidth: totalWidth }}>
          {/* Month column headers */}
          {months.map((m, i) => (
            <g key={m}>
              <rect
                x={labelWidth + i * colWidth}
                y={0}
                width={colWidth - 4}
                height={36}
                fill="var(--kc-ink)"
                rx={6}
              />
              <text
                x={labelWidth + i * colWidth + (colWidth - 4) / 2}
                y={22}
                fontSize="13"
                fontWeight="600"
                fill="var(--kc-paper)"
                textAnchor="middle"
              >
                M{m}
              </text>
            </g>
          ))}

          {/* Vertical month gridlines */}
          {months.map((m, i) => (
            <line
              key={`grid-${m}`}
              x1={labelWidth + i * colWidth}
              y1={headerHeight - 8}
              x2={labelWidth + i * colWidth}
              y2={totalHeight - 24}
              stroke="var(--kc-line)"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}

          {/* Activity rows */}
          {t.activities.map((a, idx) => {
            const y = headerHeight + idx * rowHeight;
            const color = TYPE_COLOR[a.type] ?? "var(--kc-gold)";
            const startMonth = Math.min(...a.months);
            const endMonth = Math.max(...a.months);
            const isContinuous = a.months.length > 1 && (endMonth - startMonth + 1 === a.months.length);

            return (
              <g key={a.name}>
                {/* Row background */}
                <rect
                  x={0}
                  y={y}
                  width={totalWidth}
                  height={rowHeight - 4}
                  fill={idx % 2 === 0 ? "var(--kc-charcoal)" : "transparent"}
                  opacity="0.25"
                  rx={4}
                />
                {/* Activity name */}
                <text x={8} y={y + 18} fontSize="12" fill="var(--kc-paper)" fontWeight="500">
                  {a.name}
                </text>
                <text x={8} y={y + 30} fontSize="9" fill="var(--kc-mute)">
                  {TYPE_LABEL[a.type]} · {a.category}
                </text>

                {/* Bars */}
                {isContinuous ? (
                  <rect
                    x={labelWidth + (startMonth - 1) * colWidth + 2}
                    y={y + 8}
                    width={(endMonth - startMonth + 1) * colWidth - 6}
                    height={20}
                    fill={color}
                    opacity="0.8"
                    rx={4}
                  />
                ) : (
                  a.months.map((m) => (
                    <rect
                      key={m}
                      x={labelWidth + (m - 1) * colWidth + 2}
                      y={y + 8}
                      width={colWidth - 6}
                      height={20}
                      fill={color}
                      opacity="0.8"
                      rx={4}
                    />
                  ))
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-5 flex flex-wrap gap-4 text-[16px] text-[var(--kc-paper)]/75">
        {Object.entries(TYPE_LABEL).map(([k, label]) => (
          <span key={k} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-4 rounded"
              style={{ background: TYPE_COLOR[k] }}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

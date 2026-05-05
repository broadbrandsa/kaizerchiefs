"use client";

import { cn } from "@/lib/utils";

export interface Series {
  label: string;
  colour: string;
  values: number[];
  /** Format function for the y-axis labels + legend value */
  format?: (v: number) => string;
  /** If true, fill area under the line */
  area?: boolean;
}

/**
 * Inline-SVG multi-line chart with x-axis + y-axis labels.
 * Each series gets its own y-scale (normalised independently). The y-axis
 * labels are derived from the first series' scale + format function.
 */
export function MultiLineChart({
  labels,
  series,
  height = 260,
  className,
  yMin,
  yMax,
}: {
  labels: string[];
  series: Series[];
  height?: number;
  className?: string;
  /** Force all series onto the same y-axis with explicit bounds */
  yMin?: number;
  yMax?: number;
}) {
  const width = 760;
  const padding = { top: 24, right: 24, bottom: 32, left: 72 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const x = (i: number) =>
    padding.left + (labels.length === 1 ? innerW / 2 : (i / (labels.length - 1)) * innerW);

  // Each series gets its own y-scale UNLESS yMin/yMax are supplied,
  // in which case all series share a single fixed-bound axis.
  const sharedAxis = yMin !== undefined && yMax !== undefined;
  const yScales = series.map((s) => {
    const max = sharedAxis ? yMax! : Math.max(...s.values, 0);
    const min = sharedAxis ? yMin! : Math.min(...s.values, 0);
    const range = max - min || 1;
    return {
      max,
      min,
      range,
      y: (v: number) =>
        padding.top + innerH - ((v - min) / range) * innerH,
    };
  });

  // Use the first series' scale for the y-axis labels
  const primary = yScales[0];
  const primaryFormat =
    series[0]?.format ?? ((v: number) => Math.round(v).toString());

  // Generate 5 gridline values from min to max of primary scale
  const gridCount = 4;
  const grid = Array.from({ length: gridCount + 1 }, (_, i) => {
    const ratio = i / gridCount;
    const yPos = padding.top + ratio * innerH;
    const v = primary.max - ratio * primary.range;
    return { y: yPos, v };
  });

  return (
    <div className={cn("w-full", className)}>
      {/* Legend */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {series.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-xs">
            <span
              className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: s.colour }}
            />
            <span className="text-[var(--kc-paper)]/85">{s.label}</span>
            <span className="font-mono text-[var(--kc-paper)]/65">
              {s.format
                ? s.format(s.values[s.values.length - 1])
                : Math.round(s.values[s.values.length - 1]).toString()}
            </span>
          </div>
        ))}
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img">
        <defs>
          {series.map((s, i) => (
            <linearGradient
              key={i}
              id={`mlc-fill-${i}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={s.colour} stopOpacity="0.35" />
              <stop offset="100%" stopColor={s.colour} stopOpacity="0.02" />
            </linearGradient>
          ))}
        </defs>

        {/* Y-axis gridlines + labels */}
        {grid.map((g, i) => (
          <g key={i}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={g.y}
              y2={g.y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
            <text
              x={padding.left - 8}
              y={g.y + 4}
              textAnchor="end"
              fontSize="10"
              fill="#6b6f78"
              className="font-mono"
            >
              {primaryFormat(g.v)}
            </text>
          </g>
        ))}

        {/* X-axis baseline (subtle) */}
        <line
          x1={padding.left}
          x2={width - padding.right}
          y1={padding.top + innerH}
          y2={padding.top + innerH}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />

        {/* Each series — area + line */}
        {series.map((s, si) => {
          const ys = yScales[si];
          const points = s.values.map((v, i) => `${x(i)},${ys.y(v)}`).join(" ");
          if (s.area) {
            const areaPath =
              `M ${x(0)} ${padding.top + innerH} ` +
              s.values.map((v, i) => `L ${x(i)} ${ys.y(v)}`).join(" L ") +
              ` L ${x(s.values.length - 1)} ${padding.top + innerH} Z`;
            return (
              <g key={si}>
                <path d={areaPath} fill={`url(#mlc-fill-${si})`} />
                <polyline
                  points={points}
                  fill="none"
                  stroke={s.colour}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            );
          }
          return (
            <polyline
              key={si}
              points={points}
              fill="none"
              stroke={s.colour}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        })}

        {/* X-axis labels */}
        {labels.map((label, i) => (
          <text
            key={i}
            x={x(i)}
            y={padding.top + innerH + 20}
            textAnchor="middle"
            fontSize="10"
            fill="#6b6f78"
            className="uppercase tracking-wider"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

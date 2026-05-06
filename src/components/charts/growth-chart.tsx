"use client";

import { cn } from "@/lib/utils";

export interface GrowthPoint {
  label: string;
  value: number;
  /** Optional display string for the value (e.g. "$505M") */
  display?: string;
}

/**
 * Simple area-line chart for showing growth across a small number of points.
 * Inline SVG, print-friendly. Designed for 2-6 data points.
 */
export function GrowthChart({
  data,
  height = 220,
  yMin,
  yMax,
  caption,
}: {
  data: GrowthPoint[];
  height?: number;
  yMin?: number;
  yMax?: number;
  caption?: string;
}) {
  const width = 720;
  const padding = { top: 24, right: 24, bottom: 40, left: 56 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const values = data.map((d) => d.value);
  const minY = yMin ?? Math.min(...values, 0);
  const maxY = yMax ?? Math.max(...values) * 1.1;
  const range = maxY - minY || 1;

  const x = (i: number) =>
    padding.left + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW);
  const y = (v: number) =>
    padding.top + innerH - ((v - minY) / range) * innerH;

  const points = data.map((d, i) => `${x(i)},${y(d.value)}`).join(" ");
  const areaPath = `M ${x(0)} ${padding.top + innerH} L ${data
    .map((d, i) => `${x(i)} ${y(d.value)}`)
    .join(" L ")} L ${x(data.length - 1)} ${padding.top + innerH} Z`;

  // 4 grid lines
  const gridLines = 4;
  const grid = Array.from({ length: gridLines + 1 }, (_, i) => {
    const ratio = i / gridLines;
    const yPos = padding.top + ratio * innerH;
    const v = maxY - ratio * range;
    return { y: yPos, v };
  });

  return (
    <div className={cn("w-full")}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label={caption ?? "Growth chart"}
      >
        <defs>
          <linearGradient id="gcAreaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E09C2A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#E09C2A" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* gridlines */}
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
              {Math.round(g.v).toLocaleString()}
            </text>
          </g>
        ))}

        {/* area fill */}
        <path d={areaPath} fill="url(#gcAreaFill)" />
        {/* line */}
        <polyline
          points={points}
          fill="none"
          stroke="#E09C2A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* points + labels */}
        {data.map((d, i) => (
          <g key={d.label}>
            <circle cx={x(i)} cy={y(d.value)} r="4" fill="#E09C2A" />
            <text
              x={x(i)}
              y={y(d.value) - 12}
              textAnchor="middle"
              fontSize="11"
              fill="#F8F6F0"
              className="font-mono"
            >
              {d.display ?? d.value}
            </text>
            <text
              x={x(i)}
              y={padding.top + innerH + 24}
              textAnchor="middle"
              fontSize="11"
              fill="#6b6f78"
              className="uppercase tracking-wider"
            >
              {d.label}
            </text>
          </g>
        ))}
      </svg>
      {caption ? (
        <p className="mt-3 text-center text-[18px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

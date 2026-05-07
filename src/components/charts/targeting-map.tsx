"use client";

import { useState, useMemo } from "react";
import {
  KC_HOME_STADIUM,
  PSL_AWAY_STADIUMS,
  CIDER_POINT_WALLS,
  CIDER_POINT_TOTALS,
  SA_BOUNDS,
  GP_KZN_BOUNDS,
  type StadiumPoint,
  type CiderPointWall,
} from "@/data/proposal";

type View = "national" | "zoom";

type Bounds = { minLat: number; maxLat: number; minLng: number; maxLng: number };

/** Project (lng, lat) into an SVG x/y inside the given viewport. */
function project(lng: number, lat: number, b: Bounds, w: number, h: number) {
  const x = ((lng - b.minLng) / (b.maxLng - b.minLng)) * w;
  // y inverted — north (less negative lat) is up
  const y = ((b.maxLat - lat) / (b.maxLat - b.minLat)) * h;
  return { x, y };
}

/** Simplified South Africa outline path — approximate, for orientation only. */
const SA_OUTLINE_PATH =
  "M 17.5 -28.5 L 17.0 -29.0 L 17.5 -32.0 L 18.4 -34.4 L 20.0 -34.8 L 22.5 -34.5 L 25.5 -34.0 L 28.0 -33.5 L 29.5 -31.5 L 30.5 -29.8 L 32.0 -28.5 L 32.5 -27.0 L 32.5 -25.5 L 31.5 -25.4 L 30.5 -22.4 L 28.0 -22.0 L 25.5 -22.0 L 22.0 -22.0 L 20.0 -22.0 L 17.5 -28.5 Z";

/** Approximate Lesotho enclave (a hole in SA). */
const LESOTHO_PATH =
  "M 27.4 -30.5 L 28.0 -28.6 L 29.4 -28.6 L 29.5 -30.0 L 28.6 -30.7 Z";

const MAJOR_CITIES: { name: string; lat: number; lng: number }[] = [
  { name: "Johannesburg", lat: -26.20, lng: 28.05 },
  { name: "Pretoria",     lat: -25.75, lng: 28.20 },
  { name: "Durban",       lat: -29.86, lng: 31.02 },
  { name: "Cape Town",    lat: -33.93, lng: 18.42 },
  { name: "Polokwane",    lat: -23.90, lng: 29.45 },
  { name: "Bloemfontein", lat: -29.10, lng: 26.21 },
  { name: "Mbombela",     lat: -25.46, lng: 31.02 },
  { name: "East London",  lat: -33.02, lng: 27.85 },
  { name: "Rustenburg",   lat: -25.66, lng: 27.24 },
];

const ZOOM_CITIES: { name: string; lat: number; lng: number }[] = [
  { name: "Johannesburg", lat: -26.20, lng: 28.05 },
  { name: "Pretoria",     lat: -25.75, lng: 28.20 },
  { name: "Soweto",       lat: -26.28, lng: 27.86 },
  { name: "Tembisa",      lat: -25.99, lng: 28.20 },
  { name: "Alexandra",    lat: -26.10, lng: 28.10 },
  { name: "Polokwane",    lat: -23.90, lng: 29.45 },
  { name: "Mbombela",     lat: -25.46, lng: 31.02 },
  { name: "Durban",       lat: -29.86, lng: 31.02 },
  { name: "KwaMashu",     lat: -29.75, lng: 30.99 },
  { name: "Umlazi",       lat: -29.97, lng: 30.88 },
];

export function TargetingMap() {
  const [view, setView] = useState<View>("national");
  const [hover, setHover] = useState<{ kind: "stadium" | "wall"; id: string } | null>(null);

  const isNational = view === "national";
  const bounds: Bounds = isNational ? SA_BOUNDS : GP_KZN_BOUNDS;
  const VW = 800;
  const VH = isNational ? 670 : 600;

  // Fit-projection that maintains aspect ratio relative to bounds
  const aspectRatio = (bounds.maxLng - bounds.minLng) / (bounds.maxLat - bounds.minLat);
  const renderH = Math.round(VW / aspectRatio);

  const allStadiums: StadiumPoint[] = useMemo(
    () => [KC_HOME_STADIUM, ...PSL_AWAY_STADIUMS],
    [],
  );

  // City labels for the active view
  const cityLabels = isNational ? MAJOR_CITIES : ZOOM_CITIES;

  // Outline only matters in national view
  const outlinePoints = SA_OUTLINE_PATH.split(/[ML Z]/)
    .filter(Boolean)
    .map((s) => s.trim().split(/\s+/).map(Number))
    .filter((arr) => arr.length === 2);

  function projectedOutline(): string {
    return outlinePoints
      .map(([lng, latNeg], i) => {
        const lat = latNeg; // already negative
        const { x, y } = project(lng, lat, bounds, VW, renderH);
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ") + " Z";
  }

  function projectedLesotho(): string {
    const pts = LESOTHO_PATH.split(/[ML Z]/)
      .filter(Boolean)
      .map((s) => s.trim().split(/\s+/).map(Number))
      .filter((arr) => arr.length === 2);
    return pts
      .map(([lng, latNeg], i) => {
        const { x, y } = project(lng, latNeg, bounds, VW, renderH);
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ") + " Z";
  }

  // KZN highlight rectangle for national view
  const kznHighlight = isNational
    ? (() => {
        const tl = project(GP_KZN_BOUNDS.minLng, GP_KZN_BOUNDS.maxLat, bounds, VW, renderH);
        const br = project(GP_KZN_BOUNDS.maxLng, GP_KZN_BOUNDS.minLat, bounds, VW, renderH);
        return { x: tl.x, y: tl.y, w: br.x - tl.x, h: br.y - tl.y };
      })()
    : null;

  function StadiumDot({ s }: { s: StadiumPoint }) {
    const { x, y } = project(s.lng, s.lat, bounds, VW, renderH);
    if (x < -10 || x > VW + 10 || y < -10 || y > renderH + 10) return null;
    const isKC = s.isHome;
    const r = isKC ? 9 : 6;
    const stroke = isKC ? "#fbbf24" : "#60a5fa";
    const fill = isKC ? "#fbbf24" : "#1e293b";
    const isActive = hover?.kind === "stadium" && hover.id === s.id;
    return (
      <g
        transform={`translate(${x}, ${y})`}
        onMouseEnter={() => setHover({ kind: "stadium", id: s.id })}
        onMouseLeave={() => setHover(null)}
        style={{ cursor: "pointer" }}
      >
        {isKC && (
          <circle r={18} fill="#fbbf24" opacity={0.18}>
            <animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0.05;0.25" dur="2.5s" repeatCount="indefinite" />
          </circle>
        )}
        <circle r={r + (isActive ? 3 : 0)} fill={fill} stroke={stroke} strokeWidth={2} />
        {isKC && (
          <text
            y={-15}
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: 11, fontWeight: 700, fill: "#fbbf24" }}
          >
            KC HOME
          </text>
        )}
      </g>
    );
  }

  function WallDot({ w }: { w: CiderPointWall }) {
    const { x, y } = project(w.lng, w.lat, bounds, VW, renderH);
    if (x < -10 || x > VW + 10 || y < -10 || y > renderH + 10) return null;
    const isActive = hover?.kind === "wall" && hover.id === w.id;
    const r = isActive ? 6 : 4;
    return (
      <g
        transform={`translate(${x}, ${y})`}
        onMouseEnter={() => setHover({ kind: "wall", id: w.id })}
        onMouseLeave={() => setHover(null)}
        style={{ cursor: "pointer" }}
      >
        <rect x={-r} y={-r} width={r * 2} height={r * 2} fill="#f97316" stroke="#fed7aa" strokeWidth={1} transform="rotate(45)" />
      </g>
    );
  }

  // Determine the active hovered point's full info to show in a side panel
  const hoverInfo = useMemo(() => {
    if (!hover) return null;
    if (hover.kind === "stadium") {
      const s = allStadiums.find((s) => s.id === hover.id);
      if (!s) return null;
      return {
        title: s.label,
        subtitle: `${s.team} · ${s.city}`,
        stats: [
          s.capacity ? `Capacity ${s.capacity.toLocaleString("en-ZA")}` : null,
          s.isHome ? "KC home venue" : "Away venue",
          `GPS ${s.lat.toFixed(4)}, ${s.lng.toFixed(4)}`,
        ].filter(Boolean) as string[],
        note: s.note,
      };
    }
    const w = CIDER_POINT_WALLS.find((w) => w.id === hover.id);
    if (!w) return null;
    return {
      title: w.label,
      subtitle: `Cider Point ${w.cpmCode} · ${w.city}`,
      stats: [
        `${w.size}`,
        `${w.monthlyTraffic.toLocaleString("en-ZA")} cars/month`,
        `LSM ${w.lsm}`,
        `R${w.monthlyRate.toLocaleString("en-ZA")} / month + R${w.productionCost.toLocaleString("en-ZA")} production`,
        `GPS ${w.lat.toFixed(4)}, ${w.lng.toFixed(4)} · ${w.geoSource}`,
      ],
      note: w.note,
    };
  }, [hover, allStadiums]);

  return (
    <div className="rounded-2xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            Marketing targeting · where the campaign lands
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--kc-paper)]">
            One KC home stadium · 15 PSL away venues · 15 Cider Point walls
          </h3>
        </div>
        <span className="rounded-full border border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--kc-gold)]">
          Geographic coverage
        </span>
      </div>

      <p className="mt-3 max-w-3xl text-[15px] text-[var(--kc-paper)]/75">
        The football fixture list defines half the campaign's geography — KC plays a single home + away round-robin against 15 other clubs, so the campaign needs to land in 16 different cities. Cider Point's 15 named walls cluster on top of the highest-density KC heartlands in Gauteng + KZN (where {Math.round((11 + 4) / 15 * 100)}% of the league's match attendance lives). Digital + radio + earned PR are nationwide and unconstrained — they cover everything the physical media can&apos;t.
      </p>

      {/* View toggle */}
      <div className="mt-6 flex flex-wrap gap-2">
        {([
          { id: "national" as const, label: "National view" },
          { id: "zoom" as const, label: "Gauteng + KZN zoom" },
        ]).map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setView(v.id)}
            className={`rounded-full border px-3 py-1.5 text-[12px] font-medium uppercase tracking-wider transition ${
              view === v.id
                ? "border-[var(--kc-gold)] bg-[var(--kc-gold)]/15 text-[var(--kc-gold)]"
                : "border-[var(--kc-line)] text-[var(--kc-paper)]/70 hover:border-[var(--kc-paper)]/40"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Map + side panel */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/60 p-3 lg:col-span-2">
          <svg
            viewBox={`0 0 ${VW} ${renderH}`}
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-auto"
            role="img"
            aria-label="Map of South Africa marketing targeting"
          >
            {/* SA outline (national view only) */}
            {isNational && (
              <>
                <path
                  d={projectedOutline()}
                  fill="rgba(80, 96, 110, 0.18)"
                  stroke="rgba(180, 190, 200, 0.35)"
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
                <path
                  d={projectedLesotho()}
                  fill="rgba(60, 75, 90, 0.5)"
                  stroke="rgba(180, 190, 200, 0.35)"
                  strokeWidth={1}
                />
                {/* KZN+GP highlight box that tells the user "zoom is here" */}
                {kznHighlight && (
                  <rect
                    x={kznHighlight.x}
                    y={kznHighlight.y}
                    width={kznHighlight.w}
                    height={kznHighlight.h}
                    fill="rgba(251, 191, 36, 0.05)"
                    stroke="rgba(251, 191, 36, 0.4)"
                    strokeWidth={1.5}
                    strokeDasharray="6 4"
                  />
                )}
              </>
            )}

            {/* Zoom-view grid lines */}
            {!isNational && (
              <>
                {/* Subtle grid */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const xRatio = i / 5;
                  return (
                    <line
                      key={`vg-${i}`}
                      x1={VW * xRatio}
                      y1={0}
                      x2={VW * xRatio}
                      y2={renderH}
                      stroke="rgba(120, 130, 140, 0.12)"
                      strokeWidth={1}
                    />
                  );
                })}
                {Array.from({ length: 5 }).map((_, i) => {
                  const yRatio = i / 4;
                  return (
                    <line
                      key={`hg-${i}`}
                      x1={0}
                      y1={renderH * yRatio}
                      x2={VW}
                      y2={renderH * yRatio}
                      stroke="rgba(120, 130, 140, 0.12)"
                      strokeWidth={1}
                    />
                  );
                })}
              </>
            )}

            {/* City labels */}
            {cityLabels.map((c) => {
              const { x, y } = project(c.lng, c.lat, bounds, VW, renderH);
              if (x < 0 || x > VW || y < 0 || y > renderH) return null;
              return (
                <g key={c.name} transform={`translate(${x}, ${y})`}>
                  <circle r={2} fill="rgba(180, 190, 200, 0.55)" />
                  <text
                    x={6}
                    y={-3}
                    style={{ fontSize: isNational ? 10 : 11, fill: "rgba(180, 190, 200, 0.7)", fontFamily: "system-ui" }}
                  >
                    {c.name}
                  </text>
                </g>
              );
            })}

            {/* Cider Point walls */}
            {CIDER_POINT_WALLS.map((w) => (
              <WallDot key={w.id} w={w} />
            ))}

            {/* Stadium markers */}
            {allStadiums.map((s) => (
              <StadiumDot key={s.id} s={s} />
            ))}
          </svg>
        </div>

        {/* Side panel: hover info + legend */}
        <div className="space-y-4">
          {/* Legend */}
          <div className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
              Legend
            </div>
            <ul className="mt-3 space-y-2 text-[13px]">
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="-10 -10 20 20">
                  <circle r="9" fill="#fbbf24" stroke="#fbbf24" strokeWidth={2} />
                </svg>
                <span className="text-[var(--kc-paper)]/85">KC home venue (FNB Stadium)</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="-10 -10 20 20">
                  <circle r="6" fill="#1e293b" stroke="#60a5fa" strokeWidth={2} />
                </svg>
                <span className="text-[var(--kc-paper)]/85">PSL away venue ({PSL_AWAY_STADIUMS.length})</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="-10 -10 20 20">
                  <rect x="-4" y="-4" width="8" height="8" fill="#f97316" stroke="#fed7aa" strokeWidth={1} transform="rotate(45)" />
                </svg>
                <span className="text-[var(--kc-paper)]/85">Cider Point wall ({CIDER_POINT_WALLS.length})</span>
              </li>
              <li className="mt-2 text-[12px] text-[var(--kc-paper)]/55">
                Hover or tap any marker for details.
              </li>
            </ul>
          </div>

          {/* Hover info or default summary */}
          <div className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-4">
            {hoverInfo ? (
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  Selected
                </div>
                <h4 className="mt-2 text-[15px] font-semibold leading-tight text-[var(--kc-paper)]">
                  {hoverInfo.title}
                </h4>
                <p className="mt-1 text-[12px] uppercase tracking-wider text-[var(--kc-mute)]">
                  {hoverInfo.subtitle}
                </p>
                <ul className="mt-3 space-y-1 text-[12px] text-[var(--kc-paper)]/80">
                  {hoverInfo.stats.map((s, i) => (
                    <li key={i} className="font-mono">
                      {s}
                    </li>
                  ))}
                </ul>
                {hoverInfo.note ? (
                  <p className="mt-3 border-t border-[var(--kc-line)]/50 pt-3 text-[12px] leading-relaxed text-[var(--kc-paper)]/70">
                    {hoverInfo.note}
                  </p>
                ) : null}
              </div>
            ) : (
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                  Coverage at a glance
                </div>
                <ul className="mt-3 space-y-3 text-[13px]">
                  <li>
                    <div className="font-semibold text-[var(--kc-paper)]">Stadium reach</div>
                    <div className="text-[12px] text-[var(--kc-paper)]/75">
                      16 venues across 9 provinces — every KC league fixture lands the brand somewhere new.
                    </div>
                  </li>
                  <li>
                    <div className="font-semibold text-[var(--kc-paper)]">Cider Point walls</div>
                    <div className="text-[12px] text-[var(--kc-paper)]/75">
                      {CIDER_POINT_TOTALS.walls} sites (11 GP · 4 KZN) · combined {(
                        CIDER_POINT_TOTALS.totalMonthlyTraffic / 1_000_000
                      ).toFixed(1)}M cars/month claimed reach · LSM 4–7.
                    </div>
                  </li>
                  <li>
                    <div className="font-semibold text-[var(--kc-paper)]">Digital layer</div>
                    <div className="text-[12px] text-[var(--kc-paper)]/75">
                      Performance social, DStv Stream, programmatic, YouTube + Search are nationwide — they fill the geography that physical media doesn&apos;t.
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Sources */}
          <div className="text-[11px] uppercase tracking-wider text-[var(--kc-mute)]">
            Sources · KC home + 15 PSL venues per Wikipedia / Transfermarkt 2025-26 · 15 walls per Cider Point Media OOH Schedule (Jun–Aug 2026) + Walls Site List with GPS deck.
          </div>
        </div>
      </div>

      {/* Quick-stat strip below the map */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Stadiums in scope" value="16" detail="1 home + 15 away" />
        <Stat label="Cider Point walls" value={CIDER_POINT_TOTALS.walls.toString()} detail="11 GP · 4 KZN" />
        <Stat label="Cars / month combined" value={`${(CIDER_POINT_TOTALS.totalMonthlyTraffic / 1_000_000).toFixed(1)}M`} detail="Cider Point supplier-claimed reach" />
        <Stat label="Cider Point flight quote" value={`R${(CIDER_POINT_TOTALS.threeMonthFlightRand / 1_000).toFixed(0)}K`} detail="3 months · 15 walls · ex VAT" />
      </div>
    </div>
  );
}

function Stat({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-ink)]/40 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-mute)]">
        {label}
      </div>
      <div className="mt-1 font-mono text-2xl font-bold text-[var(--kc-gold)]">{value}</div>
      <div className="mt-1 text-[11px] text-[var(--kc-paper)]/65">{detail}</div>
    </div>
  );
}

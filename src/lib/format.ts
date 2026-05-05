/**
 * Number formatting helpers — whole numbers only (no decimals anywhere user-facing).
 */

export const formatRand = (n: number): string => {
  if (n >= 1_000_000) {
    const m = Math.round(n / 100_000) / 10; // 1 decimal max for million-scale
    if (m === Math.floor(m)) return `R${m.toFixed(0)}M`;
    return `R${m.toFixed(1)}M`;
  }
  if (n >= 1_000) {
    return `R${Math.round(n / 1_000)}K`;
  }
  return `R${Math.round(n)}`;
};

export const formatRandFull = (n: number): string => {
  return `R${Math.round(n).toLocaleString("en-ZA")}`;
};

export const formatInt = (n: number): string => {
  return Math.round(n).toLocaleString("en-ZA");
};

export const formatPct = (n: number): string => `${Math.round(n)}%`;

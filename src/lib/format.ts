export const formatRand = (n: number): string => {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `R${m % 1 === 0 ? m.toFixed(0) : m.toFixed(2)}M`;
  }
  if (n >= 1_000) {
    return `R${(n / 1_000).toFixed(0)}K`;
  }
  return `R${n}`;
};

export const formatRandFull = (n: number): string => {
  return `R${n.toLocaleString("en-ZA")}`;
};

export const formatPct = (n: number): string => `${n.toFixed(0)}%`;

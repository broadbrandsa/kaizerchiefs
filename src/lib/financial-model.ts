/**
 * KC Mobile MVNO investment calculator — parametric monthly model.
 * Anchored to KCM Digital Mobile model calculations (Final 20260128, EJW 20260312).
 */

export interface ModelAssumptions {
  arpuMonthly: number;     // R / sub / month — from KCM model
  grossMargin: number;     // 0.51 = 51% — from KCM model gross profit margin
  monthlyChurn: number;    // 0.05 = 5% / month — from KCM model
  reinvestmentRate: number; // 0.05 = 5% of monthly gross profit reinvested
  /** Marketing required at the baseline subs target — used to scale spend */
  baselineMarketingPerYear: number;
  /** Cost per new user (CAC) — R / activation. Default from brief target. */
  cacPerNewUser: number;
}

export const MODEL_DEFAULTS: ModelAssumptions = {
  arpuMonthly: 81,           // R81.46 rounded to whole rand
  grossMargin: 0.51,
  monthlyChurn: 0.05,
  reinvestmentRate: 0.05,
  baselineMarketingPerYear: 4_500_000, // R376k/month × 12 ≈ R4.5M from the KCM model
  cacPerNewUser: 150,        // Brief target R150 per activation
};

/**
 * Net adds per month at the BASELINE — derived from the KCM model's R5
 * "Monthly SIM distribution" series (whole numbers):
 *   M1: 16,000  M2: 16,000  M3: 31,200  M4: 45,640  M5: 59,358
 *   M6: 72,390  M7: 84,771  M8: 96,532  M9: 107,705 M10: 118,320
 *   M11: 128,404 M12: 137,984
 *
 * For the calculator we treat M1 as the *target* (slider input) and scale
 * the curve proportionally; the same growth multipliers are preserved.
 */
const KCM_NET_ADDS_BASE = [
  16000, 16000, 31200, 45640, 59358, 72390, 84771, 96532, 107705, 118320,
  128404, 137984,
];

/** Proportional net-adds curve relative to M1 (= 1.0). */
const NET_ADDS_MULTIPLIER = KCM_NET_ADDS_BASE.map(
  (v) => v / KCM_NET_ADDS_BASE[0],
);

/**
 * Marketing spend curve across 12 months — derived from KCM model row R51
 * which has flat R376k/month. Slightly front-loaded to reflect the Phase-1
 * launch noise without distorting total spend.
 */
const SPEND_CURVE = [
  // Flat spend curve — base budget split evenly across 12 months.
  // (Reinvestment from monthly profit still adds a growing layer on top.)
  1 / 12, 1 / 12, 1 / 12, 1 / 12, 1 / 12, 1 / 12,
  1 / 12, 1 / 12, 1 / 12, 1 / 12, 1 / 12, 1 / 12,
];
// Sum = 1.000 exactly

export interface MonthRow {
  month: number;
  baseSpend: number;
  reinvestedSpend: number;
  totalSpend: number;
  newActivations: number;
  cumulativeActivations: number;
  activeSubs: number;
  monthlyRevenue: number;
  monthlyGrossProfit: number;
  cumulativeGrossProfit: number;
  netContribution: number;
  /** Marketing spend the activations *would* cost at the selected CAC. */
  impliedMarketingAtCAC: number;
  /** Actual spend minus implied spend. Positive = over-invested vs CAC; negative = under-invested */
  marketingEfficiencyDelta: number;
}

export interface ModelResult {
  rows: MonthRow[];
  totals: {
    totalSpend: number;
    baseInvestment: number;
    totalReinvested: number;
    activations: number;
    activeSubsAtM12: number;
    cumulativeRevenue: number;
    cumulativeGrossProfit: number;
    netContributionAtM12: number;
    paybackMonth: number | null;
    /** Total spend the activations would have cost at the selected CAC */
    cumulativeImpliedMarketingAtCAC: number;
    /** Actual total spend minus cumulative implied spend */
    marketingEfficiencyDelta: number;
    /** Effective CAC = total spend / total activations */
    effectiveCAC: number;
  };
}

/**
 * Run the model.
 *
 * Activations per month are derived from the monthly marketing spend and CAC,
 * scaled by the KCM-derived growth multiplier so the curve still ramps from
 * M1 to M12 the way the KCM model does.
 *
 * @param baseInvestment  Total 12-month base marketing investment (excl. reinvestment)
 * @param cacOverride     Optional override of the cost-per-new-user (CAC). Defaults to assumptions.
 * @param assumptions     Optional override of the model assumptions
 */
export function runModel(
  baseInvestment: number,
  cacOverride?: number,
  assumptions: ModelAssumptions = MODEL_DEFAULTS,
): ModelResult {
  const cac = cacOverride ?? assumptions.cacPerNewUser;
  const grossProfitPerSubMonth =
    assumptions.arpuMonthly * assumptions.grossMargin;

  let activeSubs = 0;
  let cumulativeActivations = 0;
  let cumulativeGrossProfit = 0;
  let cumulativeSpend = 0;
  let prevMonthProfit = 0;

  const rows: MonthRow[] = [];
  let paybackMonth: number | null = null;

  for (let m = 1; m <= 12; m++) {
    const baseSpend = baseInvestment * SPEND_CURVE[m - 1];
    const reinvested =
      m === 1 ? 0 : prevMonthProfit * assumptions.reinvestmentRate;
    const totalSpend = baseSpend + reinvested;
    cumulativeSpend += totalSpend;

    // Activations: monthly spend ÷ CAC × KCM growth multiplier (preserves
    // the M1 → M12 momentum curve from the source-of-truth KCM model).
    // Capped at 250,000 monthly net adds — generous ceiling to prevent the
    // reinvestment loop from compounding into business-implausible numbers
    // at very low CAC values. (KCM baseline peaks at ~138K M12.)
    const MONTHLY_ACTIVATION_CEILING = 250_000;
    const newActivations = Math.min(
      Math.round((totalSpend / cac) * NET_ADDS_MULTIPLIER[m - 1]),
      MONTHLY_ACTIVATION_CEILING,
    );
    cumulativeActivations += newActivations;

    // Apply churn first, then add new activations
    activeSubs = activeSubs * (1 - assumptions.monthlyChurn) + newActivations;

    const monthlyRevenue = activeSubs * assumptions.arpuMonthly;
    const monthlyGrossProfit = activeSubs * grossProfitPerSubMonth;
    cumulativeGrossProfit += monthlyGrossProfit;

    const netContribution = cumulativeGrossProfit - cumulativeSpend;
    if (paybackMonth === null && netContribution >= 0 && m > 1) {
      paybackMonth = m;
    }

    const impliedMarketingAtCAC = newActivations * cac;
    const marketingEfficiencyDelta = totalSpend - impliedMarketingAtCAC;

    rows.push({
      month: m,
      baseSpend,
      reinvestedSpend: reinvested,
      totalSpend,
      newActivations,
      cumulativeActivations,
      activeSubs,
      monthlyRevenue,
      monthlyGrossProfit,
      cumulativeGrossProfit,
      netContribution,
      impliedMarketingAtCAC,
      marketingEfficiencyDelta,
    });

    prevMonthProfit = monthlyGrossProfit;
  }

  const totalSpendAll = rows.reduce((s, r) => s + r.totalSpend, 0);
  const cumulativeImpliedAtCAC = rows.reduce((s, r) => s + r.impliedMarketingAtCAC, 0);

  const totals = {
    totalSpend: totalSpendAll,
    baseInvestment,
    totalReinvested: rows.reduce((s, r) => s + r.reinvestedSpend, 0),
    activations: cumulativeActivations,
    activeSubsAtM12: rows[11].activeSubs,
    cumulativeRevenue: rows.reduce((s, r) => s + r.monthlyRevenue, 0),
    cumulativeGrossProfit,
    netContributionAtM12: rows[11].netContribution,
    paybackMonth,
    cumulativeImpliedMarketingAtCAC: cumulativeImpliedAtCAC,
    marketingEfficiencyDelta: totalSpendAll - cumulativeImpliedAtCAC,
    effectiveCAC: cumulativeActivations > 0 ? totalSpendAll / cumulativeActivations : 0,
  };

  return { rows, totals };
}

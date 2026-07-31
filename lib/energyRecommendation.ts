export const ENERGY_RESULT_STORAGE_KEY = "aobec-energy-assessment-result";

export type EnergyAssessmentData = {
  country: string;
  projectType: string;
  consumption: string;
  electricityCost: string;
  outage: string;
  solarSpace: string;
  backupRequirement: string;
};

export type EnergyRecommendation = {
  solar: string;
  battery: string;
  inverter: string;
  saving: string;
  payback: string;
  generation: string;
};

type RecommendationInput = Omit<EnergyAssessmentData, "country">;

const projectBase: Record<
  string,
  { solarKW: number; batteryKWh: number; inverterKW: number }
> = {
  "Residential Home": { solarKW: 8, batteryKWh: 15, inverterKW: 8 },
  "Hotel & Resort": { solarKW: 30, batteryKWh: 60, inverterKW: 30 },
  "Factory & Industrial": {
    solarKW: 50,
    batteryKWh: 100,
    inverterKW: 50,
  },
  "Farm & Agriculture": { solarKW: 20, batteryKWh: 40, inverterKW: 20 },
  "Commercial Building": { solarKW: 40, batteryKWh: 80, inverterKW: 40 },
  "Mini Grid / Community": {
    solarKW: 100,
    batteryKWh: 200,
    inverterKW: 100,
  },
};

const consumptionFactors: Record<
  string,
  { solar: number; battery: number; inverter: number }
> = {
  "Low Consumption": { solar: 0.65, battery: 0.65, inverter: 0.65 },
  "Medium Consumption": { solar: 1, battery: 1, inverter: 1 },
  "High Consumption": { solar: 1.4, battery: 1.4, inverter: 1.35 },
  "Need Backup Power": { solar: 0.85, battery: 1.35, inverter: 1 },
};

const electricityFactors: Record<
  string,
  { solar: number; tariff: number }
> = {
  "Low Bill": { solar: 0.85, tariff: 0.1 },
  "Medium Bill": { solar: 1, tariff: 0.15 },
  "High Bill": { solar: 1.15, tariff: 0.2 },
  "Very High Bill": { solar: 1.3, tariff: 0.25 },
};

const outageBatteryFactors: Record<string, number> = {
  Rarely: 0.8,
  Monthly: 1.1,
  Weekly: 1.4,
  Daily: 1.8,
};

const solarSpaceFactors: Record<string, number> = {
  "Available Roof Space": 1,
  "Limited Space": 0.65,
  "Ground Installation": 1.15,
  "Not Sure": 0.9,
};

const backupFactors: Record<
  string,
  { battery: number; inverter: number }
> = {
  "Basic Backup": { battery: 0.85, inverter: 0.9 },
  "Medium Backup": { battery: 1, inverter: 1.15 },
  "Full Backup": { battery: 1.35, inverter: 1.4 },
  "Critical Backup": { battery: 1.7, inverter: 1.75 },
};

export function getRecommendation({
  projectType,
  consumption,
  electricityCost,
  outage,
  solarSpace,
  backupRequirement,
}: RecommendationInput): EnergyRecommendation {
  const base = projectBase[projectType] ?? projectBase["Residential Home"];
  const consumptionFactor =
    consumptionFactors[consumption] ?? consumptionFactors["Medium Consumption"];
  const electricityFactor =
    electricityFactors[electricityCost] ??
    electricityFactors["Medium Bill"];
  const outageFactor = outageBatteryFactors[outage] ?? 1;
  const spaceFactor = solarSpaceFactors[solarSpace] ?? 1;
  const backupFactor =
    backupFactors[backupRequirement] ?? backupFactors["Basic Backup"];

  const solarKW =
    base.solarKW *
    consumptionFactor.solar *
    electricityFactor.solar *
    spaceFactor;
  const batteryKWh =
    base.batteryKWh *
    consumptionFactor.battery *
    outageFactor *
    backupFactor.battery;
  const inverterKW =
    base.inverterKW *
    consumptionFactor.inverter *
    backupFactor.inverter;

  const generation = solarKW * 1500;
  const annualSaving =
    generation * 0.75 * electricityFactor.tariff;
  const monthlySaving = annualSaving / 12;
  const estimatedInvestment = solarKW * 900 + batteryKWh * 300;
  const paybackYears =
    annualSaving > 0 ? estimatedInvestment / annualSaving : 0;

  return {
    solar: `${Math.round(solarKW)} kWp`,
    battery: `${Math.round(batteryKWh)} kWh LiFePO4`,
    inverter: `${Math.round(inverterKW)} kW`,
    saving: `$${Math.round(monthlySaving)}/month`,
    payback: `${paybackYears.toFixed(1)} Years`,
    generation: `${Math.round(generation)} kWh/year`,
  };
}

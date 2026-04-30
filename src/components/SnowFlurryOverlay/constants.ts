import { buildSnowSheetSpecs } from "./utils";

/** Sparse small flakes per sheet (fixed pixel size — not texture scaling). */
export const SNOW_SHEET_A_SPECS = buildSnowSheetSpecs(0x9e3779b9, 16);

export const SNOW_SHEET_B_SPECS = buildSnowSheetSpecs(0x85ebca6b, 14, {
  opacityMul: 0.82,
});

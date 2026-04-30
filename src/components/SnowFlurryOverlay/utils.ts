import type { SnowFlakeSpec } from "./types";

function createSeededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = Math.imul(s, 1664525) + 1013904223;
    return (s >>> 0) / 4294967296;
  };
}

function randBetween(rng: () => number, min: number, max: number): number {
  return min + rng() * (max - min);
}

type BuildSheetOptions = {
  /** Multiplies each flake’s opacity (second sheet can sit quieter). */
  opacityMul?: number;
};

/**
 * Deterministic specs so SSR and client match. Motion is a closed quadrilateral
 * in `vw`/`vh` so each loop feels like drifting rather than sliding in one line.
 */
export function buildSnowSheetSpecs(
  seed: number,
  count: number,
  options: BuildSheetOptions = {}
): SnowFlakeSpec[] {
  const rng = createSeededRng(seed);
  const opacityMul = options.opacityMul ?? 1;
  const specs: SnowFlakeSpec[] = [];

  for (let i = 0; i < count; i++) {
    specs.push({
      leftPct: randBetween(rng, 3, 97),
      topPct: randBetween(rng, -8, 102),
      sizePx: rng() > 0.55 ? 2 : 3,
      durS: randBetween(rng, 15, 30),
      delayS: randBetween(rng, 0, 28),
      vx1: randBetween(rng, -6.5, 6.5),
      vy1: randBetween(rng, -7.5, 7.5),
      vx2: randBetween(rng, -6.5, 6.5),
      vy2: randBetween(rng, -7.5, 7.5),
      opacity: Math.min(0.95, randBetween(rng, 0.55, 0.88) * opacityMul),
    });
  }

  return specs;
}

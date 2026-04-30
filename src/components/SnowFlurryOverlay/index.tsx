import { cn } from "@/lib/utils";

import { SNOW_SHEET_A_SPECS, SNOW_SHEET_B_SPECS } from "./constants";
import type { SnowFlakeMotionStyle, SnowFlakeSpec, SnowFlurryOverlayProps } from "./types";

function flakeMotionStyle(spec: SnowFlakeSpec): SnowFlakeMotionStyle {
  return {
    width: spec.sizePx,
    height: spec.sizePx,
    opacity: spec.opacity,
    animationDuration: `${spec.durS}s`,
    animationDelay: `-${spec.delayS}s`,
    "--vx1": `${spec.vx1}vw`,
    "--vy1": `${spec.vy1}vh`,
    "--vx2": `${spec.vx2}vw`,
    "--vy2": `${spec.vy2}vh`,
  };
}

function SnowSheet({
  specs,
  sheetClass,
}: {
  specs: readonly SnowFlakeSpec[];
  sheetClass: string;
}) {
  return (
    <div className={sheetClass}>
      {specs.map((spec, i) => (
        <span
          key={i}
          className="snow-flurry-overlay__flake-wrap pointer-events-none"
          style={{ left: `${spec.leftPct}%`, top: `${spec.topPct}%` }}
        >
          <span
            className="snow-flurry-overlay__flake-dot"
            style={flakeMotionStyle(spec)}
          />
        </span>
      ))}
    </div>
  );
}

/**
 * Ambient hero snow: a small number of **fixed-size** dots per layer, each
 * following a slow closed path (not a single diagonal pan).
 */
export const SnowFlurryOverlay = ({ className, ...rest }: SnowFlurryOverlayProps) => (
  <div
    className={cn(
      "snow-flurry-overlay pointer-events-none absolute inset-y-0 left-1/2 z-[1] w-screen max-w-none -translate-x-1/2 overflow-hidden",
      className
    )}
    aria-hidden
    {...rest}
  >
    <SnowSheet
      specs={SNOW_SHEET_A_SPECS}
      sheetClass="snow-flurry-overlay__sheet snow-flurry-overlay__sheet--a"
    />
    <SnowSheet
      specs={SNOW_SHEET_B_SPECS}
      sheetClass="snow-flurry-overlay__sheet snow-flurry-overlay__sheet--b"
    />
  </div>
);

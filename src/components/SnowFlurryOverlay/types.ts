import type { CSSProperties, HTMLAttributes } from "react";

export type SnowFlurryOverlayProps = HTMLAttributes<HTMLDivElement>;

/** One small flake: fixed pixel size, closed-loop wander via CSS vars on the dot. */
export type SnowFlakeSpec = {
  leftPct: number;
  topPct: number;
  sizePx: 2 | 3;
  durS: number;
  delayS: number;
  vx1: number;
  vy1: number;
  vx2: number;
  vy2: number;
  opacity: number;
};

export type SnowFlakeMotionStyle = CSSProperties & {
  "--vx1": string;
  "--vy1": string;
  "--vx2": string;
  "--vy2": string;
};

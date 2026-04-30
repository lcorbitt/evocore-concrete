import { cn } from "@/lib/utils";

import {
  ANIMATED_UNDERSCORE_CLIP_CLASS,
  ANIMATED_UNDERSCORE_HOT_CRAWL_CLASS,
  ANIMATED_UNDERSCORE_HOT_CRAWL_GRADIENT,
  ANIMATED_UNDERSCORE_HOT_CRAWL_SHADOW,
  ANIMATED_UNDERSCORE_LASER_BAR_CLASS,
  ANIMATED_UNDERSCORE_LASER_BAR_GRADIENT,
  ANIMATED_UNDERSCORE_LASER_BAR_SHADOW,
  ANIMATED_UNDERSCORE_TRACK_CLASS,
  ANIMATED_UNDERSCORE_WRAPPER_CLASS,
} from "./constants";
import type { AnimatedUnderscoreProps } from "./types";
import { animatedUnderscoreId } from "./utils";

export const AnimatedUnderscore = ({ className }: AnimatedUnderscoreProps) => (
  <div
    id={animatedUnderscoreId}
    className={cn(ANIMATED_UNDERSCORE_WRAPPER_CLASS, className)}
    aria-hidden
  >
    <div className={ANIMATED_UNDERSCORE_CLIP_CLASS}>
      <div className={ANIMATED_UNDERSCORE_TRACK_CLASS}>
        <div
          className={ANIMATED_UNDERSCORE_LASER_BAR_CLASS}
          style={{
            background: ANIMATED_UNDERSCORE_LASER_BAR_GRADIENT,
            boxShadow: ANIMATED_UNDERSCORE_LASER_BAR_SHADOW,
          }}
        />
        <div
          className={ANIMATED_UNDERSCORE_HOT_CRAWL_CLASS}
          style={{
            background: ANIMATED_UNDERSCORE_HOT_CRAWL_GRADIENT,
            boxShadow: ANIMATED_UNDERSCORE_HOT_CRAWL_SHADOW,
          }}
        />
      </div>
    </div>
  </div>
);

export const ANIMATED_UNDERSCORE_WRAPPER_CLASS =
  "relative mx-auto w-full max-w-64 min-w-0 opacity-100 sm:mt-6 sm:max-w-72";

/** Clips horizontal motion/bleed; vertical padding for blur. */
export const ANIMATED_UNDERSCORE_CLIP_CLASS =
  "relative w-full min-w-0 overflow-x-clip py-2";

/** Single optical “bar” — one 2px line + blur room. */
export const ANIMATED_UNDERSCORE_TRACK_CLASS = "relative h-6 w-full min-w-0 sm:h-7";

/** Wide horizontal feather so red + white taper together (no hard “card” edge). */
const MASK_FEATHER =
  "[mask-image:linear-gradient(90deg,transparent_0%,black_22%,black_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_22%,black_78%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] [-webkit-mask-size:100%_100%] [-webkit-mask-repeat:no-repeat]";

/**
 * One faded red bar (full width). Blur fuses edges; mask + gradient both ease out
 * at the sides so the white crawl never meets a sharp red boundary.
 */
export const ANIMATED_UNDERSCORE_LASER_BAR_CLASS =
  `pointer-events-none absolute inset-x-0 top-1/2 z-[1] h-[2px] w-full -translate-y-1/2 rounded-full blur-[4px] ${MASK_FEATHER}`;

export const ANIMATED_UNDERSCORE_LASER_BAR_GRADIENT =
  "linear-gradient(90deg, rgba(255,0,0,0) 0%, rgba(255,0,0,0.22) 8%, rgba(255,0,0,0.78) 18%, rgba(255,35,35,1) 42%, rgb(255,0,0) 50%, rgba(255,35,35,1) 58%, rgba(255,0,0,0.78) 82%, rgba(255,0,0,0.22) 92%, rgba(255,0,0,0) 100%)";

export const ANIMATED_UNDERSCORE_LASER_BAR_SHADOW =
  "0 0 6px rgba(255,100,100,1), 0 0 16px rgba(255,50,50,0.98), 0 0 28px rgba(255,0,0,0.9), 0 0 52px rgba(255,0,0,0.65)";

/**
 * Same mask + height/blur as bar; gradient fades the crawl’s own ends softly.
 * `left-1/2` + symmetric keyframes (`calc(-50% ± …)`) keep motion equal left/right of center.
 */
export const ANIMATED_UNDERSCORE_HOT_CRAWL_CLASS =
  `pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[2px] w-[34%] max-w-[5.25rem] rounded-full blur-[4px] ${MASK_FEATHER} motion-safe:animate-hero-headline-sheen [box-shadow:0_0_12px_rgba(255,255,255,0.55),0_0_22px_rgba(255,160,160,0.45)]`;

export const ANIMATED_UNDERSCORE_HOT_CRAWL_GRADIENT =
  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0.55) 32%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.55) 68%, rgba(255,255,255,0) 90%, rgba(255,255,255,0) 100%)";

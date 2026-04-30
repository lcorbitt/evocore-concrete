import type { ComponentPropsWithoutRef, ElementType } from "react";

export type RevealProps = {
  /** Root element (default `div`). Use `span` for inline runs, `section` for landmarks, etc. */
  as?: ElementType;
  /** Milliseconds before the entrance animation starts. */
  delayMs?: number;
  /** Total animation length in ms (default 1250). */
  durationMs?: number;
  /**
   * Minimum fraction of this element’s area that must intersect the viewport
   * before children are shown and the entrance animation runs (default 0.15).
   */
  minIntersectionRatio?: number;
} & ComponentPropsWithoutRef<"div">;

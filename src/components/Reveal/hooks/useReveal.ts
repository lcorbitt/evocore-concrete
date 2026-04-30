import { useEffect, useRef, useState } from "react";

import { REVEAL_MIN_INTERSECTION_RATIO } from "../constants";

interface UseRevealOptions {
  /** Min intersection ratio (0–1) before revealing. */
  minIntersectionRatio?: number;
}

const buildThresholds = (ratio: number): number[] => {
  const clamped = Math.min(1, Math.max(0, ratio));
  const candidates = [0, clamped, 1].sort((a, b) => a - b);
  return [...new Set(candidates)];
};

export const useReveal = ({
  minIntersectionRatio = REVEAL_MIN_INTERSECTION_RATIO,
}: UseRevealOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isRevealed) return;

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsRevealed(true);
      return;
    }

    const ratio = minIntersectionRatio;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.intersectionRatio >= ratio) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: buildThresholds(ratio) },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isRevealed, minIntersectionRatio]);

  return { ref, isRevealed };
};

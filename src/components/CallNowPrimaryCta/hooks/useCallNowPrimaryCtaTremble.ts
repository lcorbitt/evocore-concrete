"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import {
  HERO_CTA_PRIMARY_LINK_CLASS,
  HERO_CTA_TREMBLE_DELAY_AFTER_INTERSECT_MS,
} from "@/app/page/components/HeroSection/constants";

/**
 * Defers tremble until after intersect + parent reveal fade (see hero CTA).
 */
export const useCallNowPrimaryCtaTremble = () => {
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const [playTremble, setPlayTremble] = useState(false);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let trembleTimeoutId: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || entry.intersectionRatio < 0.15) return;
        observer.disconnect();
        trembleTimeoutId = window.setTimeout(() => {
          setPlayTremble(true);
        }, HERO_CTA_TREMBLE_DELAY_AFTER_INTERSECT_MS);
      },
      { threshold: [0, 0.15, 1] },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (trembleTimeoutId !== undefined) window.clearTimeout(trembleTimeoutId);
    };
  }, []);

  return {
    ctaRef,
    className: cn(HERO_CTA_PRIMARY_LINK_CLASS, playTremble && "animate-hero-cta-tremble"),
  };
};

"use client";

import type { ElementType } from "react";

import { cn } from "@/lib/utils";

import { REVEAL_MIN_INTERSECTION_RATIO } from "./constants";
import { useReveal } from "./hooks/useReveal";
import type { RevealProps } from "./types";

/**
 * Entrance: fade from transparent + slight upward translate once enough of the
 * block is in view (see `minIntersectionRatio`). Respects `prefers-reduced-motion`
 * via `useReveal` and `.reveal-root` in `globals.css`.
 */
export const Reveal = ({
  as: Tag = "div",
  children,
  className,
  style,
  delayMs,
  durationMs = 1250,
  minIntersectionRatio = REVEAL_MIN_INTERSECTION_RATIO,
  ...rest
}: RevealProps) => {
  const Component = Tag as ElementType;
  const { ref, isRevealed } = useReveal({ minIntersectionRatio });

  return (
    <Component
      ref={ref}
      className={cn(
        "reveal-root",
        isRevealed ? "animate-reveal-enter" : "opacity-0 translate-y-3",
        className,
      )}
      style={{
        ...(delayMs != null ? { animationDelay: `${delayMs}ms` } : {}),
        ...(durationMs !== 1250 ? { animationDuration: `${durationMs}ms` } : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

import type { ElementType } from "react";

import { cn } from "@/lib/utils";

import type { RevealProps } from "./types";

/**
 * Mount entrance: fade from transparent + slight upward translate in one motion.
 * Respects `prefers-reduced-motion` via `.reveal-root` in `globals.css`.
 */
export const Reveal = ({
  as: Tag = "div",
  children,
  className,
  style,
  delayMs,
  durationMs = 1250,
  ...rest
}: RevealProps) => {
  const Component = Tag as ElementType;

  return (
    <Component
      className={cn("reveal-root animate-reveal-enter", className)}
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

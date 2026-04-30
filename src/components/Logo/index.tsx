import { LOGO_ARIA_LABEL } from "./constants";
import type { LogoProps } from "./types";

export const Logo = ({ className, ...rest }: LogoProps) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    role="img"
    aria-label={LOGO_ARIA_LABEL}
    {...rest}
  >
    <polygon
      points="60,4 112,32 112,88 60,116 8,88 8,32"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      className="text-evocore-red"
    />
    <text
      x="60"
      y="72"
      textAnchor="middle"
      fontSize="52"
      fontWeight="800"
      fill="currentColor"
      className="font-display text-evocore-white tracking-tighter"
    >
      C
    </text>
  </svg>
);

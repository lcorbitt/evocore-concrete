import { Calculator, DollarSign, Map, MapPinHouse, ShieldCheck } from "lucide-react";

import type { ValuePropIconCard } from "../types";
import type { ValuePropCardProps } from "./types";

const VALUE_PROP_ICONS = {
  "shield-check": ShieldCheck,
  "calculator": Calculator,
  "dollar-sign": DollarSign,
  "map-pin-house": MapPinHouse,
} as const satisfies Record<ValuePropIconCard["icon"], typeof ShieldCheck>;

function isIconCard(props: ValuePropCardProps): props is ValuePropIconCard {
  return "icon" in props;
}

/**
 * Stat tile or icon-led tile.
 */
export const ValuePropCard = (props: ValuePropCardProps) => {
  const { title, subtext } = props;

  if (isIconCard(props)) {
    const Icon = VALUE_PROP_ICONS[props.icon];
    return (
      <article className="flex flex-col items-center text-center">
        <div className="relative flex items-center justify-center">
          <Icon
            className="size-[clamp(2.75rem,9vw,4.75rem)] shrink-0 text-evocore-white drop-shadow-[0_0_28px_rgba(255,255,255,0.18)] sm:size-20 md:size-21"
            strokeWidth={1.15}
            aria-hidden
          />
        </div>
        <h3 className="mt-4 max-w-56 font-display text-xs font-bold uppercase leading-snug tracking-[0.14em] text-evocore-white sm:mt-5 sm:max-w-none sm:text-xs sm:tracking-[0.18em]">
          {title}
        </h3>
        <p className="mt-2 font-montserrat text-[10px] font-medium tracking-wide text-evocore-red/90 sm:text-[11px] sm:tracking-widest">
          {subtext}
        </p>
      </article>
    );
  }

  const { value } = props;

  return (
    <article className="flex flex-col items-center text-center">
      <div className="relative flex items-end justify-center gap-0.5 sm:gap-1">
        <span className="relative z-10 font-display text-[clamp(2.25rem,8vw,4.5rem)] font-black tabular-nums leading-none tracking-tight text-evocore-white sm:text-7xl md:text-8xl [text-shadow:0_0_48px_rgba(255,255,255,0.14)]">
          {value}
        </span>
      </div>
      <h3 className="mt-4 max-w-56 font-display text-xs font-bold uppercase leading-snug tracking-[0.14em] text-evocore-white sm:mt-5 sm:max-w-none sm:text-xs sm:tracking-[0.18em]">
        {title}
      </h3>
      <p className="mt-2 font-montserrat text-[10px] font-medium tracking-wide text-evocore-red/90 sm:text-[11px] sm:tracking-widest">
        {subtext}
      </p>
    </article>
  );
};

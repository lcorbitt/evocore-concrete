export type ValuePropStatCard = {
  value: string;
  title: string;
  subtext: string;
};

/** Card led by an icon instead of a numeric stat. */
export type ValuePropIconCard = {
  icon: "calculator" | "dollar-sign"| "map-pin-house" | "shield-check" ;
  title: string;
  subtext: string;
};

export type ValuePropCardData = ValuePropStatCard | ValuePropIconCard;

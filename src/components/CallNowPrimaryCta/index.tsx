"use client";

import { PhoneIcon } from "lucide-react";
import Link from "next/link";

import {
  HERO_CTA_PRIMARY_CONTENT_CLASS,
  HERO_CTA_PRIMARY_ICON_CLASS,
  HERO_CTA_PRIMARY_LABEL,
  HERO_CTA_PRIMARY_SHIMMER_CLASS,
} from "@/app/page/components/HeroSection/constants";

import { useCallNowPrimaryCtaTremble } from "./hooks/useCallNowPrimaryCtaTremble";
import type { CallNowPrimaryCtaProps } from "./types";

/** Same markup, styles, shimmer, and post-reveal tremble as the hero primary CTA. */
export const CallNowPrimaryCta = ({
  href,
  label = HERO_CTA_PRIMARY_LABEL,
}: CallNowPrimaryCtaProps) => {
  const { ctaRef, className } = useCallNowPrimaryCtaTremble();

  return (
    <Link ref={ctaRef} href={href} className={className}>
      <span aria-hidden className={HERO_CTA_PRIMARY_SHIMMER_CLASS} />
      <span className={HERO_CTA_PRIMARY_CONTENT_CLASS}>
        <PhoneIcon className={HERO_CTA_PRIMARY_ICON_CLASS} />
        {label}
      </span>
    </Link>
  );
};

"use client";

import { ArrowRight, PhoneIcon } from "lucide-react";
import Link from "next/link";

import {
  HERO_CTA_PRIMARY_CONTENT_CLASS,
  HERO_CTA_PRIMARY_HREF,
  HERO_CTA_PRIMARY_ICON_CLASS,
  HERO_CTA_PRIMARY_LABEL,
  HERO_CTA_PRIMARY_SHIMMER_CLASS,
  HERO_CTA_ROW_CLASS,
  HERO_CTA_SECONDARY_HREF,
  HERO_CTA_SECONDARY_ICON_CLASS,
  HERO_CTA_SECONDARY_LABEL,
  HERO_CTA_SECONDARY_LINK_CLASS,
} from "../constants";

import { useHeroActionLinks } from "./hooks/useHeroActionLinks";

export const HeroActionLinks = () => {
  const { primaryCtaRef, primaryCtaClassName } = useHeroActionLinks();

  return (
    <div className={HERO_CTA_ROW_CLASS}>
      <Link
        ref={primaryCtaRef}
        href={HERO_CTA_PRIMARY_HREF}
        className={primaryCtaClassName}
      >
        <span aria-hidden className={HERO_CTA_PRIMARY_SHIMMER_CLASS} />
        <span className={HERO_CTA_PRIMARY_CONTENT_CLASS}>
          <PhoneIcon className={HERO_CTA_PRIMARY_ICON_CLASS} />
          {HERO_CTA_PRIMARY_LABEL}
        </span>
      </Link>
      <Link href={HERO_CTA_SECONDARY_HREF} className={HERO_CTA_SECONDARY_LINK_CLASS}>
        {HERO_CTA_SECONDARY_LABEL}
        <ArrowRight className={HERO_CTA_SECONDARY_ICON_CLASS} />
      </Link>
    </div>
  );
};

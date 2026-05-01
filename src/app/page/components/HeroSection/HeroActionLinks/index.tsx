"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CallNowPrimaryCta } from "@/components/CallNowPrimaryCta";

import {
  HERO_CTA_PRIMARY_HREF,
  HERO_CTA_ROW_CLASS,
  HERO_CTA_SECONDARY_HREF,
  HERO_CTA_SECONDARY_ICON_CLASS,
  HERO_CTA_SECONDARY_LABEL,
  HERO_CTA_SECONDARY_LINK_CLASS,
} from "../constants";

export const HeroActionLinks = () => (
  <div className={HERO_CTA_ROW_CLASS}>
    <CallNowPrimaryCta href={HERO_CTA_PRIMARY_HREF} />
    <Link href={HERO_CTA_SECONDARY_HREF} className={HERO_CTA_SECONDARY_LINK_CLASS}>
      {HERO_CTA_SECONDARY_LABEL}
      <ArrowRight className={HERO_CTA_SECONDARY_ICON_CLASS} />
    </Link>
  </div>
);

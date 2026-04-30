import Image from "next/image";

import {
  HERO_IMAGE,
  HERO_IMAGE_CLASS,
  HERO_OVERLAY_GRADIENT_CLASS,
  HERO_OVERLAY_SOLID_CLASS,
} from "../constants";

export const HeroBackdrop = () => (
  <>
    <Image
      src={HERO_IMAGE.src}
      alt=""
      fill
      priority
      sizes="100vw"
      className={HERO_IMAGE_CLASS}
      aria-hidden
    />
    <div className={HERO_OVERLAY_SOLID_CLASS} aria-hidden />
    <div className={HERO_OVERLAY_GRADIENT_CLASS} aria-hidden />
  </>
);

"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { useDeferredPublicImage } from "./hooks/useDeferredPublicImage";
import type { DeferredPublicImageProps } from "./types";

/**
 * Defers mounting `next/image` until the slot intersects the viewport so the
 * browser does not request the asset during initial homepage paint.
 */
export const DeferredPublicImage = ({
  src,
  alt,
  sizes,
  className,
}: DeferredPublicImageProps) => {
  const { rootRef, shouldLoad } = useDeferredPublicImage();

  return (
    <div
      ref={rootRef}
      className={cn("relative isolate overflow-hidden bg-evocore-steel/40", className)}
    >
      {!shouldLoad ? (
        <div
          className="absolute inset-0 bg-linear-to-br from-evocore-charcoal via-evocore-steel/60 to-evocore-charcoal"
          aria-hidden
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      )}
    </div>
  );
};

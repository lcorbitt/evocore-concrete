"use client";

import { useEffect, useRef, useState } from "react";

import {
  DEFERRED_PUBLIC_IMAGE_ROOT_MARGIN,
  DEFERRED_PUBLIC_IMAGE_THRESHOLD,
} from "../constants";

export const useDeferredPublicImage = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: DEFERRED_PUBLIC_IMAGE_ROOT_MARGIN,
        threshold: DEFERRED_PUBLIC_IMAGE_THRESHOLD,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return { rootRef, shouldLoad };
};

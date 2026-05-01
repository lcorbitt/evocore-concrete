export interface DeferredPublicImageProps {
  src: string;
  alt: string;
  /** Passed to `next/image` `sizes` for responsive selection. */
  sizes: string;
  className?: string;
}

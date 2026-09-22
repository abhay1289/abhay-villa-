/* Native img: Framer CDN already serves sized files. next/image added a proxy hop. */
/* eslint-disable @next/next/no-img-element */

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function CoverImage({
  src,
  alt,
  className,
  priority,
}: CoverImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

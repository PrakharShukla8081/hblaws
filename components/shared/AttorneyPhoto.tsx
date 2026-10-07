'use client';

import { useEffect, useRef, useState } from 'react';

type AttorneyPhotoProps = {
  slug: string;
  name: string;
  initials: string;
  className?: string;
  initialsClassName?: string;
};

/**
 * Shows /images/attorneys/<slug>.jpg.
 * If the image is missing (not added yet), it falls back to the initials.
 */
export function AttorneyPhoto({
  slug,
  name,
  initials,
  className = '',
  initialsClassName = 'text-5xl',
}: AttorneyPhotoProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the image already failed before React attached onError (SSR case), catch it here
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-primary/10 ${className}`}>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className={`font-display font-bold text-primary/80 ${initialsClassName}`}>
            {initials}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={`/images/attorneys/${slug}.jpg`}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      )}
    </div>
  );
}

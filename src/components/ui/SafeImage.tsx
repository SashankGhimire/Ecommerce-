import React, { useEffect, useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '../../utils/utils';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ src, alt, className, ...props }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div
        className={cn('flex h-full w-full flex-col items-center justify-center bg-muted text-center text-stone-400', className)}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="mb-3 h-8 w-8" />
        <span className="px-4 text-xs font-bold uppercase tracking-widest">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading={props.loading ?? 'lazy'}
      {...props}
    />
  );
};

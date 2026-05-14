import React, { useState } from 'react';

export function ImageWithFallback({ src, alt, className, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // You can set a fallback image here if needed
      // setImgSrc('/fallback-image.png');
    }
  };

  if (hasError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center text-gray-500 text-sm`}>
        Image not available
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}
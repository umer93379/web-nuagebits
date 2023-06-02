import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Image({ src, alt = '', ...props }) {
  console.log(src);
  const isRemote = typeof src === 'string';
  const image = !isRemote ? getImage(src) : [];
  console.log(src, image)
  return (
    <>
      {isRemote ? (
        <img src={src} alt={alt} {...props}></img>
      ) : (
        <GatsbyImage image={image} alt={alt} {...props} />
      )}
    </>
  );
}

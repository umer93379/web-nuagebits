import React from 'react'
import DefaultHero from './Default';
import VisualImageWithHeading from './VisualImageWithHeading';

export default function HeroGenerator({ data }) {
  
  switch (data.variant) {
    case 'visual_image_with_heading':
      return <VisualImageWithHeading data={data} />;
    default:
      return (
        <DefaultHero data={data} />
      )
  }
  

  
}

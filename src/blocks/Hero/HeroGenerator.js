import clsx from 'clsx'
import React from 'react'
import { Parallax } from 'react-parallax';
import Buttons from '../../components/UI/Buttons'
import Container from '../../components/UI/Container'
import Text from '../../components/UI/Text'
import Image from '../../resolvers/Image'
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

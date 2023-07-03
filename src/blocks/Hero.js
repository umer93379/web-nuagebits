import clsx from 'clsx'
import React from 'react'


import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import HeroGenerator from './Hero/HeroGenerator';

export default function Hero({ data }) {
  console.log(data);
  const image = getImage(data.bg_settings?.bg_photo)
  const bgImage = convertToBgImage(image)
  switch (data.bg_settings.variant){
    case 'bg-video':
      return (
        <div className='grid'>
          <div style={{minHeight: '100vh', minWidth: '100vh'}}  className="video-background overflow-hidden">
            <iframe src={"https://www.youtube.com/embed/"+ data.bg_settings.bg_video +"?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&disablekb=1" } frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
          <div
            className={'absolute w-screen'} style={{minHeight: '100vh', minWidth: '100vh'}}
          >
              <HeroGenerator data={data} />
          </div>
        </div>
      )
      break;
    case 'bg-image':
      return (
        <div style={{ display: "grid" }}>
          <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
          >
            <div style={{minHeight: '100vh', minWidth: '100vh'}}  className="absolute">
              <GatsbyImage image={image} alt={"testimage"}/>
            
            </div>
            <div
              className={'relative'} style={{minHeight: '100vh', minWidth: '100vh'}}
            >
                <HeroGenerator data={data} />
            </div>
          </BackgroundImage>
        </div>
      )
      break;
    default:
      return (<HeroGenerator data={data} />)
      break;
  }
  
  
}

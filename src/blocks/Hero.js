import React from 'react'

import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"

import HeroGenerator from './Hero/HeroGenerator';

export default function Hero({ data }) {
  const image = getImage(data.bg_settings?.bg_photo)
  const bgImage = convertToBgImage(image)
  
  switch (data.bg_settings.variant){
    case 'bg-video':
      return (
        <div className="flex relative w-full h-full">
          <div  className="video-background">
            <iframe title={data.title} src={"https://www.youtube.com/embed/"+ data.bg_settings.bg_video +"?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&disablekb=1" } frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
          <div className='absolute w-full h-full '>
            <HeroGenerator data={data} />
          </div>
        </div>
      )
    case 'bg-image':
      return (
        <div className='bg-cover bg-no-repeat bg-center' style={ {backgroundImage: `url(`+bgImage?.fluid?.src+`)`}}>
          <HeroGenerator data={data} />
        </div>
        
      )
    case 'bg-color':
      return (
        <div style={{ backgroundColor: data.bg_settings.bg_color}}>
          <HeroGenerator data={data} />
        </div>
        
      )
    default:
      return (<HeroGenerator data={data} />)
  }
  
  
}

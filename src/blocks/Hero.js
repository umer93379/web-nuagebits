import React from 'react'
import clsx from 'clsx';

import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"

import HeroGenerator from './Hero/HeroGenerator';

export default function Hero({ data,  height }) {
  const image = getImage(data.bg_settings?.bg_photo)
  const bgImage = convertToBgImage(image)
  data.height = height;
  switch (data.bg_settings.variant){
    case 'bg-video':
      return (
        <div className={ 
          clsx({
            "flex relative w-full": true, 
            "h-screen": data.height === 'full', 
            "h-80vh": data.height === '80vh', 
            "h-60vh": data.height === '60vh', 
            "h-40vh": data.height === '40vh', 
            "h-20vh": data.height === '20vh', 
            "h-auto": data.height === 'auto'
            })}>
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

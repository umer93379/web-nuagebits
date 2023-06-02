import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

import Hero from '@/blocks/Hero';
import Carousel from 're-carousel' 
export default function Heros({ data }) {
  
  return (
    <div className='h-screen'>
      <Carousel loop auto>
        {data?.heros && (
          data?.heros?.map((block, i) => {
            block.hero.variant = 'full'
              return (
                <Hero key={i} data={block.hero} />
              )
          })
        )}
      </Carousel>
    </div>
  )

  // return (
  //   <>
  //     <Carousel auto className=''>
        // {data?.heros && (
        //   data?.heros?.map((block, i) => {
        //     block.hero.variant = 'full'
        //       return (
        //         <Hero key={i} data={block.hero} />
        //       )
        //   })
        // )}
  //     </Carousel>
  //   </>
  // )
}

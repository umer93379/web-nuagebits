import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

import Hero from '@/blocks/Hero';

export default function Heros({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [counter, setCounter] = useState(0)
  const nextSlide = () => { setCurrentSlide(currentSlide++) }
  const previouSlide = () => { setCurrentSlide(currentSlide--) }

  const watchSlide = () => { 
    if(data?.heros){
      if(data?.heros.length > 1){
        if((currentSlide + 1) <= (data?.heros.length - 1)){
          console.log("next slider", (currentSlide) , (data?.heros.length) - 1, (currentSlide) <= (data?.heros.length) - 1)
          setCurrentSlide(currentSlide + 1)
        }else{
          console.log("prev slider")
          setCurrentSlide(0)
        }
      }
    }
  }
  var Timer = null;

  const startTimer = () => {
    Timer = setTimeout(()=> {
      if(counter === 100){
        watchSlide();
        setCounter(0);
      }else{
        setCounter(counter + 1)
      }
    }, 100);
  }

  const stopTimer = () => {
    if(Timer != null){
      clearTimeout(Timer)
      Timer = null;
    }
  }
  
  useEffect(() => {
    if(Timer == null){
      startTimer();
    }
  })

  return (
    <>
      <div class="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700">
        <div class="bg-gray-600 h-0.5 rounded-full" style={{width: counter + `%`}}></div>
      </div>
      <div className=''>
        {data?.heros && (
          data?.heros?.map((block, i) => {
            block.hero.variant = 'full'
              if(i == currentSlide){
                return (
                  <div 
                    className={clsx({'w-full transition-all duration-10000': true})}
                  >
                    <Hero key={i} data={block.hero} />
                  </div>
                )
              }else{
                return (<></>)
              }
          })
        )}
      </div>
    </>
  )
}

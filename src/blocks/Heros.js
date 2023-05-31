import clsx from 'clsx'
import React from 'react'

import Hero from '@/blocks/Hero';

export default function Heros({ data }) {
  console.log(data);
  return (
    <>
      {data?.heros && (
        data?.heros?.map((block, i) => {
          return <Hero key={i} data={block.hero} />
        })
      )}
    </>
  )
}

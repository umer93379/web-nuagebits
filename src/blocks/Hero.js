import clsx from 'clsx'
import React from 'react'
import { Parallax } from 'react-parallax';
import Buttons from '../components/UI/Buttons'
import Container from '../components/UI/Container'
import Text from '../components/UI/Text'
import Image from '../resolvers/Image'

export default function Hero({ data }) {
  const isCentered = data?.variant === 'centered'
  const isFull = data?.variant === 'full'
  console.log(data,data?.bg_photo?.bg_image);
  const bgImage = typeof data?.bg_photo?.bg_image === 'string' ? data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Parallax
        bgImage={bgImage}
        bgImageAlt={data?.bg_photo?.alt}
    >
    <section
      className={clsx(
        'py-12 bg-white bg-opacity-20 dark:bg-black dark:text-white lg:py-24 relative',
        {
          'flex min-h-screen items-center': isFull,
        },
        {
          'flex justify-center py-20 text-center lg:py-44': isCentered,
        },
      )}
    >
      <Container>
        {data?.title && (
          <h1
            className={clsx('mb-4 text-4xl font-bold md:text-6xl', {
              'mx-auto': isCentered,
            })}
          >
            {data?.title}
          </h1>
        )}
        <Text className={clsx('text-lg', { 'mx-auto': isCentered })}>
          {data?.content}
        </Text>
        {data?.buttons && (
          <Buttons
            buttons={data?.buttons}
            className={clsx('mt-6', { 'justify-center': isCentered })}
          />
        )}
      </Container>
      {data?.photo?.image && (
        <div className="lg:w-1/2">
            <Image
              src={data?.photo?.image}
              alt={data?.photo?.alt}
              className="w-full"
            />
        </div>
      )}
    </section>
    </Parallax>
  )
}

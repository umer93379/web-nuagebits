import React from 'react';

import { Parallax } from 'react-parallax';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import Text from '../components/UI/Text';
import Image from '../resolvers/Image'

export default function Perks({ data }) {
  console.log(data);
  const bgImage = typeof data?.bg_photo?.bg_image === 'string' ? data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Parallax
        bgImage={bgImage}
        bgImageAlt={data?.bg_photo?.alt}
        disabled={data?.bg_photo?.enable_parallax === true}
    >
      <section className='py-10 dark:bg-[#0d0d10] lg:py-20 '>
        
        <Container>
          {data?.title && (
            <Title
              Tag='h2'
              variant='xl'
              className={`mx-auto mb-4 max-w-6xl lg:mb-10`}>
              {data?.title}
            </Title>
          )}
          {data?.content && (
            <Text className={`mx-auto mt-8 max-w-3xl text-center lg:text-lg`}>
              {data?.content}
            </Text>
          )}
          <div
            className={`mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 md:gap-10 lg:grid-cols-3 `}>
            {data?.columns &&
              data?.columns.map((col, i) => (
                <div className='flex space-x-4' key={i}>
                  {col?.photo?.image && (
                    <div className="">
                        <Image
                          src={col?.photo?.image}
                          alt={col?.photo?.alt}
                          className="w-24 mt-4 rounded-full"
                        />
                    </div>
                  )}
                  <div
                    className={`mx-auto w-72 text-center sm:text-left lg:w-80  ${
                      i % 3 === 0
                        ? 'lg:ml-0 lg:mr-auto'
                        : i % 3 === 2
                        ? 'lg:mr-0 lg:ml-auto'
                        : 'lg:mx-auto'
                    } ${i % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                    {col?.title && (
                      <Title Tag='h3' variant='xs' className='mt-2'>
                        {col.title}
                      </Title>
                    )}
                    {col?.content && (
                      <Text className={`mt-1 max-w-2xl short_description`}>{col?.content}</Text>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </section>
    </Parallax>
  );
}

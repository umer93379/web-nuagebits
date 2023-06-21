import React, { useEffect, useState } from 'react';
import { Link as GatsbyLink } from 'gatsby'

import { Parallax } from 'react-parallax';
import Container from '../../components/UI/Container';
import Title from '../../components/UI/Title';
import Text from '../../components/UI/Text';
import Image from '../../resolvers/Image'

export default function Galley({ data }) {
  const [showPopup , setShowPopup] = useState(false);

  const [popupData , setPopupData] = useState({
    image: '',
    image_alt: '',
    title: '',
    content: '',
    permalink:'',
  })

  // useEffect(()=> {

  //   setShowPopup(!showPopup)

  // },[popupData]);

  
  const images = [[], [], [], []];

  if(data.columns && data?.columns.length > 0){
    for (let i = 0; i < data.columns.length; i++) {
      const index = i % 4;
      images[index].push(data.columns[i]);
    }
  }
  
  return (
          <>
            {showPopup && (
              <div className='fixed bg-red-100 z-50'>

              </div>
            )}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
              {
                data?.columns && (
                  <>
                  <div class="grid gap-4">
                    {images[0].map((col, i) => (
                      col?.photo?.image && (
                        <Image
                            src={col?.photo?.image}
                            alt={col?.photo?.alt}
                            className="h-auto max-w-full rounded-lg"
                            key={i+`0`} onClick={() => setPopupData({
                              image: col?.photo?.image,
                              image_alt: col?.photo?.alt,
                              title: col?.title,
                              content: col?.content,
                              permalink: col?.permalink
                            })}
                        />
                      )))}
                  </div>
                  <div class="grid gap-4">
                    {images[1].map((col, i) => (
                      col?.photo?.image && (
                        <Image
                            src={col?.photo?.image}
                            alt={col?.photo?.alt}
                            className="h-auto max-w-full rounded-lg"
                            key={i+`1`} onClick={() => setPopupData({
                              image: col?.photo?.image,
                              image_alt: col?.photo?.alt,
                              title: col?.title,
                              content: col?.content,
                              permalink: col?.permalink
                            })}
                        />
                      )))}
                  </div>
                  <div class="grid gap-4">
                    {images[2].map((col, i) => (
                      col?.photo?.image && (
                        <Image
                            src={col?.photo?.image}
                            alt={col?.photo?.alt}
                            className="h-auto max-w-full rounded-lg"
                            key={i+`2`} onClick={() => setPopupData({
                              image: col?.photo?.image,
                              image_alt: col?.photo?.alt,
                              title: col?.title,
                              content: col?.content,
                              permalink: col?.permalink
                            })}
                        />
                      )))}
                  </div>
                  <div class="grid gap-4">
                    {images[3].map((col, i) => (
                      col?.photo?.image && (
                        <Image
                            src={col?.photo?.image}
                            alt={col?.photo?.alt}
                            className="h-auto max-w-full rounded-lg"
                            key={i+`4`} onClick={() => setPopupData({
                              image: col?.photo?.image,
                              image_alt: col?.photo?.alt,
                              title: col?.title,
                              content: col?.content,
                              permalink: col?.permalink
                            })}
                        />
                      )))}
                  </div>
                  </>
                )
              }
            </div>
          </>
  );
}

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax';

import Hero from '@/blocks/Hero';
import Carousel from 're-carousel' 
export default function Form({ data, blocks }) {

  const convertToSafeInputFieldName = (str) => {
  // Replace any non-alphanumeric characters with underscores
  const safeStr = str.replace(/[^a-zA-Z0-9]/g, '_');

  // Remove leading digits if the string starts with a number
  const safeStrWithoutLeadingDigits = safeStr.replace(/^\d+/, '');

  // Add a prefix if the string starts with an underscore or a digit
  const finalStr = /^[0-9_]/.test(safeStrWithoutLeadingDigits) ? `_${safeStrWithoutLeadingDigits}` : safeStrWithoutLeadingDigits;

  // Convert the string to lowercase
  const lowercaseStr = finalStr.toLowerCase();

  return lowercaseStr;
}

  console.log(data)
  const bgImage =  data?.bg_photo ? 
    data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <>
          {blocks.map(((block, i) => {
            block.fields.map((field, x) => {
              if(field.input_type == 'hidden'){
                return <input type={field.input_type} id={i+`-`+x} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.label} required={field.required} name={convertToSafeInputFieldName(field.name)} />
              }
            })
          }))}
        </>
        <>
        {blocks.map(((block, i) => {
          return (
            <div className='flex gap-6 w-full mb-6 flex-row'>
              {
                block.fields.map((field, x) => {

                  if(field.input_type == 'hidden'){
                    return <></>
                  }

                  switch (field.type) {
                    case 'input':
                      return (
                        <div class="flex-1" key={i+`-`+x}>
                            <label for={i+`-`+x} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}</label>
                            <input type={field.input_type} id={i+`-`+x} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.label} required={field.required} name={convertToSafeInputFieldName(field.name)} />
                        </div>
                      )
                    case 'textarea':
                      return (
                        <div class="flex-1" key={i+`-`+x}>
                            <label for={i+`-`+x} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}</label>
                            <textarea type={field.input_type} id={i+`-`+x} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.label} required={field.required} name={convertToSafeInputFieldName(field.name)} ></textarea>
                        </div>
                      )
                    case 'checkbox':
                      return (
                        <div class="flex items-start mb-6 flex-1" key={i+`-`+x}>
                          <div class="flex items-center h-5">
                            <input id={i+`-`+x} type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required={field.required} name={convertToSafeInputFieldName(field.name)} />
                          </div>
                          <label id={i+`-`+x} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{field.label}</label>
                        </div>
                      )
                    default:
                      return (
                        <div class="flex-1" key={i+`-`+x}>
                            <label for={i+`-`+x} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}{field.type}{field.input_type}</label>
                            <input type={field.input_type} id={i+`-`+x} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.label} required={field.required} name={convertToSafeInputFieldName(field.name)} />
                        </div>
                      );
                  }
                
              })
              }
            </div>
          )
          
        }))}
        </>
      </form>
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

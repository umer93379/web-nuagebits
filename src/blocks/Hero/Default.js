
import React from 'react'
import { Parallax } from 'react-parallax';
import Buttons from '../../components/UI/Buttons';
import Image from '../../resolvers/Image'
import clsx from 'clsx';

export default function DefaultHero({ data }) {
  
    return (
        <section class="body-font flex h-screen w-screen place-content-center items-center">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow w-full md:w-1/2 lg:w-4/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    {data?.title && (<h1 className={clsx({"title-font sm:text-4xl text-3xl mb-4 font-medium " : true , 'text-white': data.color_theme === 'white' , 'text-gray-900': data.color_theme === 'dark'})}>{data?.title}</h1>)}
                    {data?.content && (<p className={clsx({"mb-8 leading-relaxed" : true , 'text-white': data.color_theme === 'white' , 'text-gray-500': data.color_theme === 'dark'})}>data?.content</p>)}
                    {data?.buttons && (
                        <div className="flex justify-center">
                            <Buttons
                                buttons={data?.buttons}
                                className={clsx('mt-6')}
                            />
                        </div>
                    )}
                </div>
                { data?.photo && (
                    <div className="lg:max-w-lg w-full md:w-1/2 lg:w-1/5 text-center md:text-left">
                        { data?.photo && (<Image
                                src={data?.photo?.image}
                                alt={data?.photo?.alt}
                                objectFit='contain'
                                className="w-full max-w-xs mx-auto object-contain"
                            />)}
                    </div>
                )}
            </div>
        </section>
        
    )

}
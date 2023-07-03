
import React from 'react'
import { Parallax } from 'react-parallax';
import Buttons from '../../components/UI/Buttons';
import Image from '../../resolvers/Image'
import clsx from 'clsx';

export default function VisualImageWithHeading({ data }) {
  
    return (
        <section className={clsx({'h-screen': data?.height === 'full' ,"dark:bg-gray-900  items-center my-auto flex": true, 'bg-white bg-opacity-50': data.bg_settings.overlay === 'white', 'bg-black bg-opacity-50': data.bg_settings.overlay === 'black' })}>
                <section className=" mx-auto">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            {data?.title && (<h1 className={clsx({"mb-4 text-4xl font-extrabold tracking-tight leading-none" : true  ,  'text-white': data.color_theme === 'white' , 'text-gray-900': data.color_theme === 'dark' ," md:text-5xl lg:text-6xl dark:text-white" : true})}>{data?.title}</h1>)}
                            {data?.content && (<p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{data?.content}</p>)}
                            {data?.buttons && (
                                <div className="inline-flex items-center justify-center">
                                    <Buttons
                                        buttons={data?.buttons}
                                        className={clsx('mt-6')}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-right align-right text-right">
                            { data?.photo && (<Image
                                src={data?.photo?.image}
                                alt={data?.photo?.alt}
                                className="w-full max-w-xs mx-auto"
                            />)}
                        </div>                
                    </div>
                </section>
            </section>
    )

}
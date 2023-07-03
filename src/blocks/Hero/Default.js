
import React from 'react'
import { Parallax } from 'react-parallax';
import Buttons from '../../components/UI/Buttons';
import Image from '../../resolvers/Image'
import clsx from 'clsx';

export default function DefaultHero({ data }) {
  
    return (
        <section className={clsx({'h-screen w-screen': data?.height === 'full' ,"dark:bg-gray-900  items-center my-auto flex": true, 'bg-white bg-opacity-50': data.bg_settings.overlay === 'white', 'bg-black bg-opacity-50': data.bg_settings.overlay === 'black' })}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-12 lg:px-12">
                
                {data?.title && (<h1 className={clsx({"mb-4 text-4xl font-extrabold tracking-tight leading-none" : true , 'text-white': data.color_theme === 'white' , 'text-gray-900': data.color_theme === 'dark' ," md:text-5xl lg:text-6xl dark:text-white" : true})}>{data?.title}</h1>)}
                {data?.content && (
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{data?.content}</p>
                )}
                {data?.buttons && (
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Buttons
                            buttons={data?.buttons}
                            className={clsx('mt-6')}
                        />
                    </div>
                )}
                
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
                    <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between w-72 mx-auto">
                        {data?.columns && ( data?.columns.map((col, i) => {
                            return (
                                <a key={i} href="/" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                    { col?.photo && (<Image
                                        src={col?.photo?.image}
                                        alt={col?.photo?.alt}
                                        className="w-24 rounded-full"
                                    />)}
                                    { col?.photo && (<Image
                                        src={col?.photo?.image}
                                        alt={col?.photo?.alt}
                                        className="w-24 rounded-full"
                                    />)}
                                </a>
                            )
                        }))}
                    </div>
                </div> 
            </div>
        </section>
    )

}
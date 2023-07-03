
import React from 'react'
import Buttons from '../../components/UI/Buttons';
import Image from '../../resolvers/Image'
import clsx from 'clsx';

export default function VisualImageWithHeading({ data }) {
    
    return (
        <section class="text-gray-600 body-font flex h-screen w-full place-content-center items-center">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    {data?.title && (<h1 className={clsx({"title-font sm:text-4xl text-3xl mb-4 font-medium " : true , 'text-white': data.color_theme === 'white' , 'text-gray-900': data.color_theme === 'dark'})}>{data?.title}</h1>)}
                    {data?.content && (<p className={clsx({"mb-8 leading-relaxed" : true , 'text-white': data.color_theme === 'white' , 'text-gray-500': data.color_theme === 'dark'})}>{data?.content}</p>)}
                    {data?.buttons && (
                        <div className="flex justify-center">
                            <Buttons
                                buttons={data?.buttons}
                                className={clsx('mt-6')}
                            />
                        </div>
                    )}
                </div>
                { data?.photos && (
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        {data?.photo.map(photo => {
                            return (
                                <Image
                                    src={photo?.image}
                                    alt={photo?.alt}
                                    className="object-cover object-center rounded"
                                />
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )

}
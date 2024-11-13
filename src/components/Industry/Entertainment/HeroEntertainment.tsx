import Image from 'next/image'
import React from 'react'
import IndustryButton from '../IndustryButton'


const HeroEntertainment = () => {
    return (
        <div className='md:px-16 px-6 bg-gray-100 border-b-gray-300 md:h-[500px] mb-12'>
            <div className='flex md:flex-row flex-col-reverse items-center justify-center pt-12'>
                <div className='md:w-[50%] w-full'>
                    <h1 className='md:text-5xl text-3xl font-bold text-gray-700'>Innovative Entertainment Solutions</h1>
                    <p className='leading-7 text-lg font-medium'>
                        DevsCushion specializes in optimizing entertainment operations with innovative digital solutions. Our custom applications and robust SaaS platforms enhance efficiency, ensuring entertainment services meet the evolving needs of modern audiences.
                    </p>
                    <div>
                        <IndustryButton />
                    </div>

                </div>
                <div>
                    <Image src={'/fintech1.png'} alt='bg-service devscushion' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default HeroEntertainment
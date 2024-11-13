import Image from 'next/image'
import React from 'react'
import CompanyButton from '../Company/CompanyButton'


const HeroMission = () => {
    return (
        <div className='md:px-16 px-6 bg-gray-100 border-b-gray-300 
        md:h-[500px] mb-12'>
            <div className='flex md:flex-row flex-col-reverse items-center
             justify-center pt-12'>
                <div className='md:w-[50%] w-full'>
                    <h1 className='md:text-5xl text-3xl font-bold
                     text-gray-700'>DevsCushions' Mission, Vision & Values</h1>
                    <p className='leading-7 text-lg font-medium pt-2'>
                        At DevsCushion, our focus is on driving growth through innovative solutions and dependable business services, ensuring your success in an ever-evolving digital landscape.
                    </p>
                    <div>
                        <CompanyButton />
                    </div>
                </div>
                <div>
                    <Image src={'/company-hero-1.png'} alt='company hero devscushion' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default HeroMission
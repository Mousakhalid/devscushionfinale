import Image from 'next/image'
import React from 'react'
import CompanyButton from './CompanyButton'

const HeroCompany = () => {
    return (
        <div className='md:px-16 px-6 bg-gray-100 border-b-gray-300 
        md:h-[500px] mb-12'>
            <div className='flex md:flex-row flex-col-reverse items-center
             justify-center pt-12'>
                <div className='md:w-[50%] w-full'>
                    <h1 className='md:text-5xl text-3xl font-bold
                     text-gray-700'>About DevsCushion</h1>
                    <p className='leading-7 text-lg font-medium pt-2'>A
                        trailblazer in the development industry, delivers innovative
                        tech solutions to businesses worldwide.
                        We specialize in full-stack development designed to fuel your growth,
                        optimize operations, and keep you ahead of the competition. With our
                        expertise in SaaS, digital marketing, UI/UX design, and custom software
                        development, we turn your ideas into powerful realities. Let
                        DevsCushion empower your business with the tech it needs to lead and
                        succeed.
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

export default HeroCompany
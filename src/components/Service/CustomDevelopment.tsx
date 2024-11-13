import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import ServiceButton from './ServiceButton'

const CustomDevelopment = () => {
    return (
        <div className='my-12'>
            <div className='flex md:flex-row flex-col items-center justify-center'>
                <div className='md:w-[62%] w-full space-y-4'>
                    <p className='text-3xl font-medium text-gray-800'>Custom Developement</p>
                    <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Tailored Solutions for Your Business</h1>
                    <div>
                        <p>Unlock the full potential of your business with DevsCushion's custom development services. Our team of experts works closely with you to understand your unique needs and craft bespoke software solutions that drive efficiency, innovation, and growth. From concept to implementation, we prioritize quality, agility, and seamless integration to ensure your vision becomes a reality. Partner with DevsCushion for tailored development that empowers your business to thrive in the digital age.</p>

                    </div>
                    <div>
                        <ServiceButton />
                    </div>
                </div>
                <div>
                    <Image src={'/custom.avif'} alt='Custom development srevices by devscushion' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default CustomDevelopment
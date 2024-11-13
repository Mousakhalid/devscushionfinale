import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const HeroWebDevelopment = () => {
    return (
        <div className='md:px-16 px-6 bg-gray-100 border-b-gray-300 md:h-[500px] mb-12'>
            <div className='flex md:flex-row flex-col-reverse items-center justify-center pt-12 max-sm:pb-8'>
                <div className='md:w-[50%] w-full space-y-2'>
                    <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Services</p>
                    <h1 className='md:text-5xl text-3xl font-bold text-gray-700'>Web App Development Services</h1>
                    <p className='leading-7 text-lg font-medium'>
                        Design web apps that deliver exceptional user experiences by customizing every detail to meet the unique needs of your audience.
                    </p>
                    <div>
                        <Link href={'/contact'}>
                            <Button className='bg-[#7030A0] py-6 text-xl px-9'>Book Now</Button>
                        </Link>
                    </div>

                </div>
                <div>
                    <Image src={'/service-bg.png'} alt='bg-service devscushion' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default HeroWebDevelopment
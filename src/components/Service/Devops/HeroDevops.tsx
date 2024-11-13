import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroDevops = () => {
    return (
        <div className='md:px-16 px-6 bg-gray-100 border-b-gray-300 md:h-[500px] mb-12'>
            <div className='flex md:flex-row flex-col-reverse gap-4 items-center justify-center pt-12 max-sm:pb-8'>
                <div className='md:w-[50%] w-full space-y-2'>
                    <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Services</p>
                    <h1 className='md:text-5xl text-3xl font-bold text-gray-700'>Devops Solutions & Services</h1>
                    <p className='leading-7 text-lg font-medium'>
                        DevOps development services focus on delivering consistent enhancements
                        in software quality through streamlined processes. By integrating
                        development and operations, DevOps promotes a collaborative approach
                        that reduces bottlenecks and enhances scalability, allowing your software
                        to grow alongside your business needs. With a strong emphasis on automation
                        and monitoring, DevOps provides the predictability required for efficient,
                        reliable, and secure software deployment and maintenance.
                    </p>
                    <div>
                        <Link href={'/contact'}>
                            <Button className='bg-[#7030A0] py-6 text-xl px-9'>Book Now</Button>
                        </Link>
                    </div>

                </div>
                <div>
                    <Image src={'/devops.png'} alt='bg-service devscushion' width={600} height={600} />
                </div>
            </div>
        </div>
    )
}

export default HeroDevops
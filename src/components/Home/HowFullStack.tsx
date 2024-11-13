
import Image from 'next/image'
import React from 'react'

const HowFullStack = () => {
    return (
        <div className='bg-[#001628] text-gray-100 '>
            <div className='text-center py-16 max-sm:px-5'>
                <h2 className='font-bold md:text-3xl text-2xl font-mono'>How Our Full-Stack Digital Product Agency Delivers Excellence.</h2>
                <p className='py-8 md:text-[17px] text-[14px] max-sm:px-8'>Whether you're developing a new product, starting a business, or breathing new life into an old <br />
                    platform, we’ve empowered many partners to achieve tangible outcomes.</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 px-8 gap-8 pb-16'>
                <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-8 space-y-4'>
                    <div className='bg-circle-shop flex items-center justify-center'>
                        <Image src={'/workshop.png'} alt='Workshop devscushion' width={70} height={70} />
                    </div>
                    <h2 className='tracking-wide text-2xl font-medium'>Workshop</h2>
                    <p>
                        Uncover Your Unique Needs in Discovery Workshops.</p>
                </div>
                <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-8 space-y-4'>
                    <div className='bg-circle-shop flex items-center justify-center'>
                        <Image src={'/search.png'} alt='Workshop devscushion' width={70} height={70} />
                    </div>
                    <h2 className='tracking-wide text-2xl font-medium'>Research</h2>
                    <p>
                        Crack Your Problem with Comprehensive Primary and Secondary Research.</p>
                </div>
                <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-8 space-y-4'>
                    <div className='bg-circle-shop flex items-center justify-center'>
                        <Image src={'/ideation.png'} alt='Workshop devscushion' width={70} height={70} />
                    </div>
                    <h2 className='tracking-wide text-2xl font-medium'>Ideation</h2>
                    <p>
                        Quickly Generate Solutions by Mapping Journeys and Defining Architectures.</p>
                </div>
                <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-8 space-y-4 '>
                    <div className='bg-circle-shop flex items-center justify-center'>
                        <Image src={'/ux.png'} alt='Workshop devscushion' width={70} height={70} />
                    </div>
                    <h2 className='tracking-wide text-2xl font-medium'>UX/UI Design Services</h2>
                    <p>
                        Create Stunning, Functional, and On-Brand Products Aligned with Your Goals.</p>
                </div>
                <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-8 space-y-4'>
                    <div className='bg-circle-shop flex items-center justify-center'>
                        <Image src={'/custom1.png'} alt='Workshop devscushion' width={70} height={70} />
                    </div>
                    <h2 className='tracking-wide text-2xl font-medium'>Custom Development</h2>
                    <p>
                        Build Robust, Scalable Software Powered by the Latest Technologies.</p>
                </div>
                <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-8 space-y-4'>
                    <div className='bg-circle-shop flex items-center justify-center'>
                        <Image src={'/launch.png'} alt='Workshop devscushion' width={70} height={70} />
                    </div>
                    <h2 className='tracking-wide text-2xl font-medium'>Product Launch</h2>
                    <p>
                        Launch, Assess, and Refine Your Product for Meaningful Results.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HowFullStack
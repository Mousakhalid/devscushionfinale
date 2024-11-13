import Image from 'next/image'
import React from 'react'

const HealthCareExpertise = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid md:grid-cols-2 grid-cols-1 px-8 py-24 gap-8'>
                <div className='space-y-6'>
                    <div>
                        <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Expertise</p>
                        <h1 className='md:text-3xl text-2xl font-bold'>Let’s Collaborate!</h1>

                    </div>
                    <div>
                        <p className='text-gray-700 leading-loose tracking-wide' >
                        DevsCushion, a full-service digital agency, empowers healthcare businesses with customized digital solutions. From branding to app development, we enhance online visibility, streamline operations, and boost patient engagement to drive meaningful outcomes.
                        </p>
                    </div>
                    <div className='flex justify-center gap-5'>
                        <div>
                            <h2 className='md:text-6xl text-3xl'>120<span className='md:text-2xl text-xl text-gray-500'>+</span></h2>
                            <p className='text-gray-700 md:leading-loose max-sm:text-[10px]  md:tracking-wide'>Projects Successfully Completed.</p>
                        </div>
                        <div>
                            <h2 className='md:text-6xl text-3xl'>100<span className='md:text-2xl text-xl text-gray-500'>%</span></h2>
                            <p className='text-gray-700 md:leading-loose max-sm:text-[10px] md:tracking-wide'>Satisfaction Rate Achieved and Growing.</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-md'>
                    <Image src={'/health1.jpeg'} alt='Fintech Expertise Devscushion' width={700} height={1000} className='w-full h-full ' />
                </div>
            </div>
        </div>
    )
}

export default HealthCareExpertise
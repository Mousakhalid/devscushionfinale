import Image from 'next/image'
import React from 'react'

const FintechValues = () => {
    return (
        <div className='py-16 space-y-8'>
            <div className='text-center space-y-2'>
                <p className='text-[10px] font-bold uppercase text-gray-500 leading-loose tracking-wider'>CORE VALUES</p>
                <h1 className='text-gray-800 font-bold text-4xl max-sm:text-2xl'>Our Guiding Core Values
                </h1>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 py-12 px-8 gap-8'>
                <div className='flex items-center justify-center space-x-8'>
                    <div className='border border-gray-200 shadow-md p-4 rounded-[50%]'>
                        1
                    </div>
                    <div className='space-y-3'>
                        <Image src="/innovation.png" alt="" width={120} height={120} />
                        <h2 className='font-bold text-xl text-gray-700'>Innovation</h2>
                        <p className='text-gray-600'>We continuously explore innovative strategies to maximize the impact and effectiveness of digital marketing efforts.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-8'>
                    <div className='border border-gray-200 shadow-md p-4 rounded-[50%]'>
                        2
                    </div>
                    <div className='space-y-3'>
                        <Image src="/integrity.png" alt="" width={120} height={120} />
                        <h2 className='font-bold text-xl text-gray-700'>Integrity</h2>
                        <p className='text-gray-600'>We prioritize honesty and maintain full transparency in every client interaction and project we undertake.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-8'>
                    <div className='border border-gray-200 shadow-md p-4 rounded-[50%]'>
                        3
                    </div>
                    <div className='space-y-3'>
                        <Image src="/focus.png" alt="" width={120} height={120} />
                        <h2 className='font-bold text-xl text-gray-700'>Customer Focus</h2>
                        <p className='text-gray-600'>We consistently prioritize client needs, focusing on their satisfaction and long-term success.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FintechValues
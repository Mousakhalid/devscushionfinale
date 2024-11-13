import Image from 'next/image'
import React from 'react'

const WhyCards = () => {
    return (
        <div className='py-4 px-8'>
            <div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                    <div className='space-y-2'>
                        <Image src={'/people.png'} alt='Text Image for devscushion' width={50} height={50} />
                        <h2 className='font-bold text-xl'>
                            People
                        </h2>
                        <p className='text-[15px] text-gray-600'>
                            At DevsCushion, we carefully hire individuals who are not only
                            skilled and passionate but also aligned with our values, bringing
                            dedication and fresh ideas to every project.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <Image src={'/hours.png'} alt='Text Image for devscushion' width={50} height={50} />
                        <h2 className='font-bold text-xl'>
                            Customer Service
                        </h2>
                        <p className='text-[15px] text-gray-600'>
                            At DevsCushion, we believe in delivering more than expected and
                            ensuring that our clients feel confident in their decision to work
                            with us, backed by our expertise and the results we deliver.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <Image src={'/support.png'} alt='Text Image for devscushion' width={50} height={50} />
                        <h2 className='font-bold text-xl'>
                            Support
                        </h2>
                        <p className='text-[15px] text-gray-600'>
                            At DevsCushion, our team goes the extra mile, leveraging their
                            experience to meet your development needs with precision and efficiency,
                            all while focusing on driving your business growth.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <Image src={'/quality.png'} alt='Text Image for devscushion' width={50} height={50} />
                        <h2 className='font-bold text-xl'>
                            Quality
                        </h2>
                        <p className='text-[15px] text-gray-600'>
                            At DevsCushion, our goal is to do more than just meet expectations; we provide development solutions that enhance your business and strengthen its digital presence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyCards
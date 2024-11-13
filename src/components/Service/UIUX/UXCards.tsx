import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const UXCards = () => {
    return (
        <div className=' bg-gray-100'>
            <div className='px-8 py-16'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='flex flex-col bg-white space-y-4 px-7 rounded-lg shadow py-10'>
                        <div className="bg-blue-200 w-20 h-20 rounded-full flex items-center justify-center">
                            <FaSearch className="text-gray-600 text-3xl" />
                        </div>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Learn everything you need to know about users.
                        </h2>
                        <p className='text-[16px] leading-7 tracking-wider text-gray-600'>
                            Building a tailor-made product for your users necessarily means knowing them inside and out. Our UI/UX design services leverage thorough user research to understand needs, preferences, and pain points, creating designs that not only look good but deeply resonate with users.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white space-y-4 px-7 rounded-lg shadow py-10'>
                        <div className="bg-[#FFD7FE] w-20 h-20 rounded-full flex items-center justify-center">
                            <Image src={'/muscleux.png'} alt='Muscle' width={40} height={40} />
                        </div>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Stay conversion-focused (& stay competitive.)
                        </h2>
                        <p className='text-[16px] leading-7 tracking-wider text-gray-600'>
                            Because UI UX design is such a make-or-break aspect of generating traction and staying competitive, our design process prioritizes the design aspects that add real value to users. By designing with them in mind first, you’ll see the greatest impact on your bottom line.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white space-y-4 px-7 rounded-lg shadow py-10'>
                        <div className="bg-[#E5FFE3] w-20 h-20 rounded-full flex items-center justify-center">
                            <Image src={'/thunderux.png'} alt='Thunder' width={40} height={40} />
                        </div>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Design guided by value—for users and you.
                        </h2>
                        <p className='text-[16px] leading-7 tracking-wider text-gray-600'>
                            You’re not building a digital platform just to build a digital platform—you’re doing it to drive real business outcomes. And we know that. During Strategy Sprint, we’ll define your North Star Metric and all the KPIs you need to make sure development is prioritized and guided by ROI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UXCards
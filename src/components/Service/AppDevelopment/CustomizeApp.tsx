import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ServicesCarousel from './SwiperAppServices'

const CustomizeApp = () => {
    return (
        <div className='bg-gray-100 px-8'>
            <div className='grid md:grid-cols-2 py-16 grid-cols-1 '>
                <div className=''>
                    <h2 className='bg-[#000022] text-3xl font-semibold font-mono text-white px-1 py-3 w-[310px]'>Customize Pricing</h2>
                    <h2 className='bg-[#000022] text-3xl font-semibold font-mono px-1 w-[310px] text-white py-3 ml-8'>For Your Needs</h2>
                </div>
                <div>
                    <p className='text-[17px] pt-8'>
                        Hundreds of startups, non-profits, and enterprises trust <span className='font-semibold'>DevsCushion</span> to boost growth, enhance user engagement, and deliver meaningful business results.
                    </p>
                </div>
            </div>
            {/* <div className=' gap-8 py-32'>
                <div className='bg-white border-t-4 rounded-xl border-red-700 space-y-5 py-8 px-8 w-[600px]'>
                    <h2 className='font-semibold text-4xl font-mono text-gray-700'>Product Design</h2>
                    <p className='text-gray-500'>Our Product Design service seamlessly merges beauty with usability, transforming your ideas into captivating digital experiences that deeply connect with your audience at every touchpoint.</p>
                    <p className='underline text-xl pt-8 text-[#000002] flex items-center space-x-3 hover:text-[#6F2FA1]'>
                        <Link href={'/'}>Learn More</Link> <ArrowRight />
                    </p>
                    <hr />
                    <div className='pt-24'>

                    </div>

                </div>
                <div className='bg-white border-t-4 rounded-xl border-red-700 space-y-5 py-8 px-8  w-[600px]'>
                    <h2 className='font-semibold text-4xl font-mono text-gray-700'>Strategy Consulting & Auditing</h2>
                    <p className='text-gray-500'>Elevate your business with our Strategy Consulting & Audits, providing in-depth market analysis, strategic planning, and comprehensive assessments to help you thrive in a competitive landscape.</p>
                    <p className='underline text-xl pt-8 text-[#000002] flex items-center space-x-3 hover:text-[#6F2FA1]'>
                        <Link href={'/'}>Learn More</Link> <ArrowRight />
                    </p>
                    <hr />
                    <div className='pt-24'>

                    </div>
                </div>
                <div className='bg-white border-t-4 rounded-xl border-red-700 space-y-5 py-8 px-8  w-[600px]'>
                    <h2 className='font-semibold text-4xl font-mono text-gray-700'>Software & App Development</h2>
                    <p className='text-gray-500'>Our Software and App Development services are customized to deliver robust, scalable, and innovative solutions, ensuring your digital product excels in the market and meets the needs of your users.</p>
                    <p className='underline text-xl pt-8 text-[#000002] flex items-center space-x-3 hover:text-[#6F2FA1]'>
                        <Link href={'/'}>Learn More</Link> <ArrowRight />
                    </p>
                    <hr />
                    <div className='pt-24'>

                    </div>
                </div>
                <div className='bg-white border-t-4 rounded-xl border-red-700 space-y-5 py-8 px-8  w-[600px]'>
                    <h2 className='font-semibold text-4xl font-mono text-gray-700'>Product Marketing</h2>
                    <p className='text-gray-500'>Boost engagement and drive growth with our Product Marketing strategies, crafted to enhance your product's visibility through impactful messaging, targeted campaigns, and captivating content.</p>
                    <p className='underline text-xl pt-8 text-[#000002] flex items-center space-x-3 hover:text-[#6F2FA1]'>
                        <Link href={'/'}>Learn More</Link> <ArrowRight />
                    </p>
                    <hr />
                    <div className='pt-24'>

                    </div>
                </div>
            </div> */}
            <div>
                <ServicesCarousel />
            </div>
        </div>
    )
}

export default CustomizeApp
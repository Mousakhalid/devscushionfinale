import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SaasCards = () => {
    return (
        <div className=' bg-gray-100'>
            <div className='px-8 py-16'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='flex flex-col bg-white space-y-4 px-7 rounded-lg shadow py-10'>
                        <div className="bg-blue-200 w-20 h-20 rounded-full flex items-center justify-center">
                            <FaSearch className="text-gray-600 text-3xl" />
                        </div>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Scalable, sustainable technical foundations.
                        </h2>
                        <p className='text-[16px] leading-7 tracking-wider text-gray-600'>
                            Building your SaaS product on a solid technical foundation is essential for long-term success. Our team ensures that your software is scalable, secure, and robust, ready to grow with your business. By focusing on sustainable development practices, we safeguard your investment and provide a platform capable of handling future demands.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white space-y-4 px-7 rounded-lg shadow py-10'>
                        <div className="bg-[#FFD7FE] w-20 h-20 rounded-full flex items-center justify-center">
                            <Image src={'/muscleux.png'} alt='Muscle' width={40} height={40} />
                        </div>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Full-stack agency for the entire product lifecycle.
                        </h2>
                        <p className='text-[16px] leading-7 tracking-wider text-gray-600'>
                            Benefit from a full-stack agency that manages every aspect of your SaaS product lifecycle. From initial strategy through design, development, and maintenance, our comprehensive services ensure seamless integration, consistency, and high-quality outcomes, saving you time and resources.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white space-y-4 px-7 rounded-lg shadow py-10'>
                        <div className="bg-[#E5FFE3] w-20 h-20 rounded-full flex items-center justify-center">
                            <Image src={'/thunderux.png'} alt='Thunder' width={40} height={40} />
                        </div>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            Strategic development guided by ROI.
                        </h2>
                        <p className='text-[16px] leading-7 tracking-wider text-gray-600'>
                            Maximize your ROI with development strategies driven by real results and insights. We leverage data to inform our approach, ensuring every decision aligns with your business objectives. This focus on measurable outcomes enhances efficiency and supports the long-term success of your SaaS software.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaasCards
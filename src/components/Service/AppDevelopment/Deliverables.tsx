import Image from 'next/image'
import React from 'react'

const Deliverables = () => {
    return (
        <div className='bg-[#000022] my-12'>
            <div className='px-8 py-16 space-y-16'>
                <div >
                    <h1 className='text-3xl font-semibold text-center text-gray-50'>Our Deliverables</h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-6 text-white'>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Workshop devscushion' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>Source code</h2>
                            <p>
                                The complete code and scripts developed in this phase form the core foundation of the software or application.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Workshop devscushion' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>Web and mobile applications
                            </h2>
                            <p>
                                A functional product or software that showcases features, enabling testing, feedback, and lasting marketing impact.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Workshop devscushion' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>Technical documentation
                            </h2>
                            <p>
                                Comprehensive documentation covering code comments, API references, software architecture, and installation or configuration guides.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Workshop devscushion' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>Test plan and reports</h2>
                            <p>
                                Thorough testing strategies, including unit, integration, and system tests, with detailed reports on results and identified bugs or issues.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deliverables
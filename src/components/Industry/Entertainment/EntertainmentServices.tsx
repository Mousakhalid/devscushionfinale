import Image from 'next/image'
import React from 'react'

const EntertainmentServices = () => {
    return (
        <div className='bg-gray-100 py-16'>
            <div className='text-center'>
                <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Services</p>
                <h1 className='md:text-3xl text-2xl font-bold'>Entertainment Solutions Across Industries</h1>
            </div>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 px-8 py-14 gap-8'>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/dev.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Web Development</h2>
                        <p className='text-[14px] text-gray-600'>
                            Creating secure, scalable, and user-friendly entertainment websites for optimal user interaction.
                        </p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/appdev.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>App Development</h2>
                        <p className='text-[14px] text-gray-600'>
                            Developing intuitive, robust mobile apps to enhance user access and engagement in the entertainment industry.
                        </p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/sas.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>SaaS Development</h2>
                        <p className='text-[14px] text-gray-600'>
                            Building scalable, cloud-based entertainment solutions to innovate content delivery and management.
                        </p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/uiuxdev.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>UI/UX Services</h2>
                        <p className='text-[14px] text-gray-600'>
                            Designing seamless, user-centric entertainment interfaces for improved user satisfaction and retention.
                        </p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/digimarket.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Digital Marketing</h2>
                        <p className='text-[14px] text-gray-600'>
                            Customized strategies to enhance entertainment visibility, engagement, and conversion across digital channels.
                        </p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/branding-ser.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Branding Services</h2>
                        <p className='text-[14px] text-gray-600'>Building strong entertainment brands through strategic positioning, identity design, and impactful messaging.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntertainmentServices
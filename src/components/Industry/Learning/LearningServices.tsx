import Image from 'next/image'
import React from 'react'

const LearningServices = () => {
    return (
        <div className='bg-gray-100 py-16'>
            <div className='text-center'>
                <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Services</p>
                <h1 className='md:text-3xl text-2xl font-bold'>E-Learning Solutions for Diverse Industries</h1>
            </div>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 px-8 py-14 gap-8'>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/dev.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Web Development</h2>
                        <p className='text-[14px] text-gray-600'>
                            Creating Secure, Scalable, and User-Friendly E-Learning Platforms for Enhanced Learner Engagement.
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
                            Developing intuitive, robust mobile apps to streamline access to e-learning resources and enhance the learning experience.
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
                            Creating scalable, cloud-based e-learning solutions to innovate educational services and management.
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
                            Designing seamless, user-centric e-learning interfaces for improved learner satisfaction and retention.
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
                            Customized strategies to enhance e-learning visibility, engagement, and conversion across digital platforms.
                        </p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/branding-ser.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Branding Services</h2>
                        <p className='text-[14px] text-gray-600'>
                            Building Strong E-Learning Brands through Strategic Positioning, Identity Design, and Compelling Messaging.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningServices
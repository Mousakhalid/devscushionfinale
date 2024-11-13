import Image from 'next/image'
import React from 'react'

const FintechServices = () => {
    return (
        <div className='bg-gray-100 py-16'>
            <div className='text-center'>
                <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Services</p>
                <h1 className='md:text-3xl text-2xl font-bold max-sm:px-3'>FinTech Solutions for Diverse Industries</h1>
            </div> 
            <div className='grid grid-cols-3 max-sm:grid-cols-1 px-8 py-14 gap-8'>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/dev.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Web Development</h2>
                        <p className='text-[14px] text-gray-600'>Building Secure, Scalable, and User-Friendly FinTech Websites for Enhanced User Engagement.</p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/appdev.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>App Development</h2>
                        <p className='text-[14px] text-gray-600'>Creating Intuitive, Robust Mobile Apps to Simplify Financial Services and Enhance Customer Access.</p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/sas.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>SaaS Development</h2>
                        <p className='text-[14px] text-gray-600'>Developing Scalable, Cloud-Based FinTech Solutions to Drive Innovation in Financial Services and Management.</p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/uiuxdev.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>UI/UX Services</h2>
                        <p className='text-[14px] text-gray-600'>Creating Seamless, User-Centric FinTech Interfaces to Boost Satisfaction and Retention.</p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/digimarket.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Digital Marketing</h2>
                        <p className='text-[14px] text-gray-600'>Customized Strategies to Boost FinTech Visibility, Engagement, and Conversions Across Digital Channels.</p>
                    </div>
                </div>
                <div className='flex justify-between space-x-8'>
                    <div>
                        <Image src={'/branding-ser.png'} alt='web development DevsCushion' width={80} height={80} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Branding Services</h2>
                        <p className='text-[14px] text-gray-600'>Building Strong FinTech Brands with Strategic Positioning, Identity Design, and Impactful Messaging.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FintechServices
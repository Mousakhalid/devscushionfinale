import Link from 'next/link'
import React from 'react'

const HowWeEnterprise = () => {
    return (
        <div className='bg-[#001528]'>
            <div className='py-20'>
                <div>
                    <div className='text-center space-y-2'>
                        <p className='text-[10px] font-bold uppercase text-[#6F2FA0] leading-relaxed tracking-wider'>HERE’S HOW WE DO IT</p>
                        <h1 className='md:text-3xl text-2xl font-bold text-gray-50 max-sm:px-4'>Steps to Success with Digital Solutions in the Enterprise Industry</h1>
                    </div>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4 text-gray-50 px-8 py-12'>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Analysis</h2>
                        <p className='text-gray-500'>We start by conducting a comprehensive assessment of your existing financial technology infrastructure, uncovering opportunities for innovation and pinpointing areas for improvement to enhance customer experiences and drive business growth.</p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Design</h2>
                        <p className='text-gray-500'>Our team designs customized FinTech solutions tailored to your unique needs, prioritizing user experience and ensuring regulatory compliance to deliver a seamless, user-friendly interface for your services.</p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Development</h2>
                        <p className='text-gray-500'>Leveraging the latest technologies, we create secure, high-performance FinTech applications and platforms designed for reliability, efficiency, and scalability to meet the demands of your expanding customer base.</p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Launch</h2>
                        <p className='text-gray-500'>Following extensive testing and quality assurance, we deploy your FinTech solution and offer continuous support to ensure peak performance while adapting to evolving market demands.</p>
                    </div>
                </div>
            </div>
            <div className='text-center pb-8'>
                <h2 className='text-gray-50'><span className='text-[#6F2FA0] hover:underline'><Link href={'/contact'}>Lets Discuss, </Link></span> Your Idea & Turn Your Idea into Reality!</h2>
            </div>
        </div>
    )
}

export default HowWeEnterprise
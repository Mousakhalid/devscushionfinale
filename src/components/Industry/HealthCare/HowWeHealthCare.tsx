import Link from 'next/link'
import React from 'react'

const HowWeHealthCare = () => {
    return (
        <div className='bg-[#001528]'>
            <div className='py-20'>
                <div>
                    <div className='text-center space-y-2'>
                        <p className='text-[10px] font-bold uppercase text-[#6F2FA0] leading-relaxed tracking-wider'>HERE’S HOW WE DO IT</p>
                        <h1 className='md:text-3xl text-2xl font-bold text-gray-50'>Optimized Step-by-Step Guide to Digital Finance Solutions <br />for the FinTech Industry</h1>
                    </div>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4 text-gray-50 px-8 py-12'>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Discovery</h2>
                        <p className='text-gray-500'>
                            We start by analyzing your healthcare organization’s unique needs, goals, and challenges to deliver customized digital solutions designed to maximize efficiency, improve patient outcomes, and align with your strategic objectives.
                        </p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Strategy</h2>
                        <p className='text-gray-500'>
                            Our team develops a tailored digital strategy aligned with your healthcare goals, prioritizing enhanced patient care, optimized operational efficiency, and strict compliance with healthcare regulations.
                        </p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Implementation</h2>
                        <p className='text-gray-500'>
                            DevsCushion seamlessly delivers and integrates digital solutions, including app development, website creation, and SaaS platforms, ensuring smooth compatibility with your existing healthcare infrastructure.
                        </p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Optimization</h2>
                        <p className='text-gray-500'>
                            Post-launch, DevsCushion continuously monitors, analyzes, and optimizes digital solutions using user feedback and performance data to ensure maximum impact and efficiency in the healthcare sector.
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center pb-8'>
                <h2 className='text-gray-50'><span className='text-[#6F2FA0] hover:underline'><Link href={'/contact'}>Lets Discuss, </Link></span> Your Idea & Turn Your Idea into Reality!</h2>
            </div>
        </div>
    )
}

export default HowWeHealthCare
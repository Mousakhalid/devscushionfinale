import Link from 'next/link'
import React from 'react'

const LearningHowWe = () => {
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
                        <h2 className='font-bold'>Analysis</h2>
                        <p className='text-gray-500'>
                            We begin by assessing your existing e-learning setup, understanding your audience, and identifying gaps and opportunities to improve your digital learning experience.
                        </p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Design</h2>
                        <p className='text-gray-500'>
                            Our team develops a strategic design for your e-learning platform, emphasizing user engagement and educational effectiveness to ensure it is visually appealing and functionally seamless.
                        </p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Development</h2>
                        <p className='text-gray-500'>
                            DevsCushion developers bring the design to life with robust coding, integrating interactive features and scalable technology to create a comprehensive e-learning environment.
                        </p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Launch</h2>
                        <p className='text-gray-500'>
                            After thorough testing and final adjustments, we launch your e-learning platform, providing ongoing support and analytics monitoring to ensure smooth operation and maximize user satisfaction.
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

export default LearningHowWe
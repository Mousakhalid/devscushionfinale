import Link from 'next/link'
import React from 'react'

const EntertainmentHowWe = () => {
    return (
        <div className='bg-[#001528]'>
            <div className='py-20'>
                <div>
                    <div className='text-center space-y-2'>
                        <p className='text-[10px] font-bold uppercase text-[#6F2FA0] leading-relaxed tracking-wider'>HERE’S HOW WE DO IT</p>
                        <h1 className='md:text-3xl text-2xl font-bold text-gray-50'>Transforming the Entertainment Industry through Strategic <br />Digital Service Initiatives</h1>
                    </div>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4 text-gray-50 px-8 py-12'>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Analysis</h2>
                        <p className='text-gray-500'>
                            We begin by thoroughly exploring your entertainment project's goals, audience, and market trends. This step ensures our digital solutions are perfectly aligned with your vision and the needs of your audience.
                        </p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Design</h2>
                        <p className='text-gray-500'>
                            Our team creates engaging and interactive designs for your digital platforms, prioritizing user experience to keep your audience entertained and involved, whether through apps or websites.
                        </p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Development</h2>
                        <p className='text-gray-500'>We turn designs into reality by developing robust and scalable digital solutions. This includes a wide range of offerings, from mobile apps for streaming to immersive websites, all customized for the entertainment industry.</p>
                    </div>
                    <div className='py-8 px-6 space-y-3 rounded-sm bg-[#0D2133] text-center'>
                        <h2 className='font-bold'>Launch</h2>
                        <p className='text-gray-500'>
                            After comprehensive testing and quality assurance, we launch your digital service. However, our commitment doesn’t stop there; we continually monitor, update, and optimize to keep your audience engaged and captivated.
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

export default EntertainmentHowWe
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Section2 = () => {
    return (
        <div className='px-8'>
            <div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>

                    <div>
                        <Image src={'/cloud.webp'} alt='Images' width={600} height={600} />
                    </div>
                    <div className=''>
                        <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Industries</p>
                        <h2 className='md:text-4xl text-2xl font-bold'>FinTech</h2>
                        <p className='text-gray-700 pb-2'>
                            DevsCushion is revolutionizing FinTech with specialized digital solutions tailored to this fast-evolving industry. We deliver robust websites, custom applications, and scalable SaaS platforms that meet the unique needs of financial businesses. Our strategic branding and innovative UI/UX designs ensure seamless user experiences that resonate with your audience.
                            <br /> <br />
                            Through targeted digital marketing, we enhance FinTech brand visibility, engagement, and growth. With technology that performs, persuades, and excels, DevsCushion empowers your financial services to thrive in the digital era.</p>
                        <Link href={'/industries/fintech'}>
                            <Button className='bg-[#7030A0] py-6 text-xl px-9'>Learn More</Button>
                        </Link>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Section2
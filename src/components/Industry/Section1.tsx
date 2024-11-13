import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Section1 = () => {
    return (
        <div className=''>
            <div className='space-y-16'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 px-8'>
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
                    <div>
                        <Image src={'/cloud.webp'} alt='Images' width={600} height={600} />
                    </div>
                </div>
                <div className='md:grid md:grid-cols-2 flex flex-col-reverse gap-8 bg-gray-100 px-8 py-14'>
                    <div>
                        <Image src={'/enterprise.jpeg'} alt='Images' width={600} height={600} />
                    </div>
                    <div className=''>
                        <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Industries</p>
                        <h2 className='md:text-4xl text-2xl font-bold'>Enterprises</h2>
                        <p className='text-gray-700 pb-2'>
                            DevsCushion delivers exceptional digital solutions tailored to the complex needs of enterprise clients. We specialize in building functional websites, custom applications, and scalable SaaS platforms designed for large-scale operations. Our creative branding and innovative UI/UX designs ensure that every solution is visually appealing and highly functional, enhancing engagement and satisfaction.
                            <br /><br />
                            With strategic digital marketing, we boost your enterprise’s market presence, driving visibility and growth. Partner with DevsCushion to transform your business with cutting-edge digital solutions that inspire innovation and deliver lasting results
                        </p>
                        <Link href={'/industries/enterprises'}>
                            <Button className='bg-[#7030A0] py-6 text-xl px-9'>Learn More</Button>
                        </Link>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 px-8'>
                    <div className=''>
                        <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Industries</p>
                        <h2 className='md:text-4xl text-2xl font-bold'>Healthcare</h2>
                        <p className='text-gray-700 pb-2'>
                            DevsCushion is committed to transforming healthcare with tailored digital solutions. Our expertise in website development, application development, and SaaS platforms addresses the unique challenges of the healthcare industry, enhancing patient care and streamlining operations. We focus on creating intuitive, user-friendly interfaces through innovative UI/UX designs that boost engagement and satisfaction.
                            <br /><br />
                            Our strategic branding elevates healthcare organizations' market presence, helping them stand out in a competitive environment. With targeted digital marketing campaigns, we enhance reach and impact, effectively connecting healthcare providers with their audiences for meaningful engagement.
                        </p>
                        <Link href={'/industries/health-care'}>
                            <Button className='bg-[#7030A0] py-6 text-xl px-9'>Learn More</Button>
                        </Link>
                    </div>
                    <div>
                        <Image src={'/healthcare.webp'} alt='Images' width={600} height={600} />
                    </div>
                </div>
                <div className='md:grid md:grid-cols-2 flex flex-col-reverse gap-8 bg-gray-100 px-8 py-14'>
                    <div>
                        <Image src={'/learning.jpg'} alt='Images' width={600} height={600} />
                    </div>
                    <div className=''>
                        <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Industries</p>
                        <h2 className='md:text-4xl text-2xl font-bold'>E-Learning</h2>
                        <p className='text-gray-700 pb-2'>
                            DevsCushion is committed to advancing the e-learning industry with specialized digital solutions. We create responsive websites, custom applications, and scalable SaaS platforms tailored to the unique needs of educational institutions. Our advanced UI/UX designs ensure digital learning tools are engaging, intuitive, and effective for users.
                            <br /><br />
                            Through expert branding and targeted digital marketing strategies, we enhance the visibility and impact of your e-learning content. With DevsCushion, educational institutions and content providers can deliver accessible and engaging learning experiences that inspire students worldwide.
                        </p>
                        <Link href={'/industries/lms'}>
                            <Button className='bg-[#7030A0] py-6 text-xl px-9'>Learn More</Button>
                        </Link>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 px-8'>
                    <div className=''>
                        <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Industries</p>
                        <h2 className='md:text-4xl text-2xl font-bold'>Entertainment</h2>
                        <p className='text-gray-700 pb-2'>
                            DevsCushion is transforming the entertainment industry with specialized digital solutions. We develop dynamic websites, build custom applications, and deploy scalable SaaS platforms tailored to entertainment businesses. Our expertise in branding and innovative UI/UX design ensures each solution captivates audiences and enhances user interaction and engagement.
                            <br /><br />
                            Through strategic digital marketing campaigns, we amplify your brand’s presence, helping you attract and retain audiences in a competitive market. With DevsCushion, entertainment brands can create a vibrant digital presence that resonates with viewers and fans alike.
                        </p>
                        <Link href={'/industries/fintech'}>
                            <Button className='bg-[#7030A0] py-6 text-xl px-9'>Learn More</Button>
                        </Link>
                    </div>
                    <div>
                        <Image src={'/entertainment.avif'} alt='Images' width={600} height={600} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
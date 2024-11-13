import Image from 'next/image'
import React from 'react'

const CompanyHistory = () => {
    return (
        <div className='bg-[#001628] py-16 text-gray-50 mb-16'>
            <div className='flex flex-col items-center justify-center mx-auto md:px-44 px-8 space-y-16 py-16'>
                <div>
                    <p className='text-3xl font-bold'>Our History</p>
                </div>
                <div className='flex md:flex-row flex-col md:gap-32 gap-8'>
                    <p className='text-xl font-bold'>2020 - 2021</p>
                    <h2 className='text-gray-300'>The story of DevsCushion is built on hard work, consistency, and dedication. Founded in 2020, our mission has always been to make a lasting impact. With one founder excelling in design, another in software development, and the third bringing entrepreneurial expertise, our vision was clear from the start: to create meaningful solutions. We set out to build a company that addresses everyday business challenges through technology, improving efficiency and delivering exceptional results.</h2>
                </div>
                <div className='flex md:flex-row flex-col md:gap-32 gap-8'>
                    <p className='text-xl font-bold'>2022 - 2023</p>
                    <h2 className='text-gray-300'>In 2023, DevsCushion emerged in Pakistan, driven by our shared vision and determination. Though still growing, our founders remain committed to delivering high-quality development solutions tailored to meet the unique needs of businesses worldwide.</h2>
                </div>
                <div className='flex md:flex-row flex-col md:gap-24 gap-8'>
                    <p className='text-xl font-bold'>2024 - ongoing</p>
                    <h2 className='text-gray-300'>DevsCushion offers a wide range of services, including Website Development, SaaS Solutions, Web and Mobile Applications, and UI/UX Design. Backed by a team of skilled professionals and innovative thinkers, our mission extends beyond achieving business goals. We strive to drive digital transformation, empowering businesses worldwide to thrive in an ever-evolving landscape. At DevsCushion, we embody the spirit of entrepreneurship, committed to meeting the present and future needs of our clients.</h2>
                </div>
            </div>
            <div>
                <div className='py-16'>
                    <p className='text-2xl font-bold text-center'>Outreach by the Numbers</p>
                </div>
                <div className='grid grid-cols-5 max-sm:grid-cols-2 text-center px-8 gap-8'>
                    <div className='flex flex-col items-center justify-center space-y-2'>
                        <Image src={'/certified.png'} alt='Certified Devscushion' width={70} height={70} />
                        <p className='text-4xl font-bold'>100+</p>
                        <p className='text-gray-300'>Cerified professionals in diverse fields</p>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-2'>
                        <Image src={'/trophy.png'} alt='Certified Devscushion' width={70} height={70} />
                        <p className='text-4xl font-bold'>10+</p>
                        <p className='text-gray-300'>Awards for excellence and commitment</p>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-2'>
                        <Image src={'/task.png'} alt='Certified Devscushion' width={70} height={70} />
                        <p className='text-4xl font-bold'>120+</p>
                        <p className='text-gray-300'>Projects completed with dedication</p>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-2'>
                        <Image src={'/industry.png'} alt='Certified Devscushion' width={70} height={70} />
                        <p className='text-4xl font-bold'>6+</p>
                        <p className='text-gray-300'>Industries serviced with digital solutions
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center space-y-2'>
                        <Image src={'/increase.png'} alt='Certified Devscushion' width={70} height={70} />
                        <p className='text-4xl font-bold'>$1M+</p>
                        <p className='text-gray-300'>$0 to $1M in revenue in under 3 years</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CompanyHistory
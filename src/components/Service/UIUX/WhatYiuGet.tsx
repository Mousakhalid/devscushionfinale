import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const WhatYiuGet = () => {
    return (
        <div >
            <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <div className='text-gray-50 py-16 px-8'>
                    <div className='space-y-2 text-center'>
                        <h1 className='text-3xl'>What You Get with Our UI UX Design Services</h1>
                        <p className='text-[18px]'>At the end of our UI UX Design process, you’ll have a full, working prototype of your <br /> product—tailor-made for your users and goals.</p>
                        <Button className='rounded-full py-6 px-9 font-bold'>Start Designing</Button>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 py-8 gap-8'>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 space-y-4 rounded-xl flex p-6  items-center md:flex-row flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Discovery Sessions</h2>
                                <p className='text-[18px]'>Clarify your project goals and uncover insights about your market and users, ensuring that the design strategy aligns your vision with conversion and business outcomes.</p>
                            </div>
                            <div>
                                <Image src={'/disc.webp'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>User Personas</h2>
                                <p className='text-[18px]'>Provide a clear understanding of your target audience’s demographics, behaviors, and motivations, allowing us to create a product that resonates deeply with your users.</p>
                            </div>
                            <div>
                                <Image src={'/user.webp'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Journey Mapping                                </h2>
                                <p className='text-[18px]'>Visualizes the complete user experience, identifying pain points and opportunities for improvement, which helps you enhance customer satisfaction and engagement.</p>
                            </div>
                            <div>
                                <Image src={'/mapping.webp'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Wireframes</h2>
                                <p className='text-[18px]'>Offer a structural blueprint of your product. Have these assets allows you to visualize your product’s functionality and layout early on, streamlining feedback and iteration processes.</p>
                            </div>
                            <div>
                                <Image src={'/frames.png'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Design System</h2>
                                <p className='text-[18px]'>Ensures consistency and scalability across your product, speeding up the design and development process while maintaining a cohesive user experience that converts.</p>
                            </div>
                            <div>
                                <Image src={'/system.png'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Working Prototype</h2>
                                <p className='text-[18px]'>Provides an interactive representation of the final product for realistic user testing. This prototype allows you to gather valuable feedback and make informed design iterations.</p>
                            </div>
                            <div>
                                <Image src={'/mac.webp'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatYiuGet
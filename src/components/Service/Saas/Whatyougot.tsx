import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Whatyougot = () => {
    return (
        <div >
            <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <div className='text-gray-50 py-16 px-8'>
                    <div className='space-y-2 text-center'>
                        <h1 className='text-3xl'>What You Get with DevsCushions' SaaS development Services</h1>
                        <p className='text-[18px]'>Our SaaS Development Services are end-to-end and customized for your needs. We handle everything <br /> from product strategy to deployment.</p>
                        <Button className='rounded-full py-6 px-9 font-bold'>Start Building</Button>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 py-8 gap-8'>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 space-y-4 rounded-xl flex p-6  items-center md:flex-row flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Strategic Roadmap</h2>
                                <p className='text-[18px]'>
                                    Develop a clear SaaS roadmap aligned with your goals to ensure efficient resource allocation, minimize risks, and maximize ROI—keeping your project focused and on track from start to finish.
                                </p>
                            </div>
                            <div>
                                <Image src={'/disc.webp'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Technical Specifications                                </h2>
                                <p className='text-[18px]'>Create detailed documentation outlining technical requirements and architecture, ensuring team alignment and providing a solid foundation for your SaaS product.</p>
                            </div>
                            <div>
                                <Image src={'/user.webp'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Wireframes & Prototypes</h2>
                                <p className='text-[18px]'>Visualize your SaaS product early with wireframes and prototypes, enabling iterative feedback and improvements to ensure the final product meets user expectations and business goals effectively.</p>
                            </div>
                            <div>
                                <Image src={'/mapping.webp'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>User Testing Reports</h2>
                                <p className='text-[18px]'>Gather insights from user testing to guide improvements, ensuring your SaaS product is intuitive and user-friendly. This approach enhances usability and meets user needs effectively.</p>
                            </div>
                            <div>
                                <Image src={'/frames.png'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Final Software Product</h2>
                                <p className='text-[18px]'>Ensures consistency and scalability across your SaaS product, accelerating the design and development process while maintaining a cohesive user experience that drives conversions.</p>
                            </div>
                            <div>
                                <Image src={'/system.png'} alt='Book Devsushion' width={800} height={800} />
                            </div>
                        </div>
                        <div className='bg-[#786ADB] backdrop-blur-lg bg-opacity-70 rounded-xl flex items-center md:flex-row p-6  flex-col justify-between'>
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-medium'>Ongoing Support                                </h2>
                                <p className='text-[18px]'>Keep your SaaS competitive with continuous maintenance and updates, monitoring performance, addressing issues, and implementing improvements based on user feedback and market trends.</p>
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

export default Whatyougot
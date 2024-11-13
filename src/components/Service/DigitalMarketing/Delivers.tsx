import Image from 'next/image';
import React from 'react';

const DigitalMarketingDeliverables = () => {
    return (
        <div className='bg-[#000022] my-12'>
            <div className='px-8 py-16 space-y-16'>
                <div>
                    <h1 className='text-3xl font-semibold text-center  text-gray-50'>Our  Deliverables</h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-6 text-white'>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='SEO Strategy' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>SEO Strategy</h2>
                            <p>
                                Comprehensive search engine optimization plans that improve your website's visibility and ranking on search engines through keyword research, on-page, and off-page techniques.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Content Marketing' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>Content Marketing</h2>
                            <p>
                                Tailored content strategies that engage your audience through valuable and relevant content, including blog posts, articles, infographics, and videos.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Social Media Management' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>Social Media Management</h2>
                            <p>
                                Strategic management of your social media platforms to increase brand awareness, engagement, and customer loyalty through consistent and targeted messaging.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Analytics and Reporting' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>Analytics & Reporting</h2>
                            <p>
                                In-depth analytics and reporting services that track your digital marketing performance, providing insights and actionable recommendations for continuous improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DigitalMarketingDeliverables;

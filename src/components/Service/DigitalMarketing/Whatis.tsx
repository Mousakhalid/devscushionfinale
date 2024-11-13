import Image from 'next/image'
import React from 'react'

const Whatis = () => {
    return (
        <div>
        <div className='md:px-48 px-4 space-y-8'>
            <h1 className='md:text-4xl text-2xl font-semibold text-gray-700'>
                What is Digital Marketing?
            </h1>
            <p className='text-xl leading-loose'>
                Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and other websites to connect with current and prospective customers. The primary goal of digital marketing is to engage customers effectively, drive traffic, and boost conversion rates.
            </p>
            <Image className='rounded-xl' src={'/social.png'} alt='Digital Marketing Services' width={800} height={800} />
        </div>
        <div>
            <section className="px-4 md:px-12 lg:px-20 py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h1 className="md:text-3xl text-xl max-sm:text-start font-bold text-gray-800 mb-8 text-center">
                        Understanding Digital Marketing
                    </h1>
                    <div className="space-y-12">
                        {/* Section Item */}
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                Search Engine Optimization (SEO)
                            </h2>
                            <p className="text-gray-600 md:w-3/4">
                                SEO involves optimizing website content and structure to improve visibility in search engine results. This increases organic traffic and enhances the user experience.
                            </p>
                        </div>

                        {/* Section Item */}
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                Content Marketing
                            </h2>
                            <p className="text-gray-600 md:w-3/4">
                                Content marketing focuses on creating valuable, relevant content to attract and engage a target audience. This includes blogs, videos, infographics, and more.
                            </p>
                        </div>

                        {/* Section Item */}
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                Social Media Marketing
                            </h2>
                            <p className="text-gray-600 md:w-3/4">
                                This strategy utilizes platforms like Facebook, Twitter, and Instagram to promote products and services, engage with customers, and enhance brand awareness.
                            </p>
                        </div>

                        {/* Section Item */}
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                Email Marketing
                            </h2>
                            <p className="text-gray-600 md:w-3/4">
                                Email marketing involves sending targeted emails to nurture leads, promote products, and foster customer relationships through personalized communication.
                            </p>
                        </div>

                        {/* Section Item */}
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                Pay-Per-Click (PPC) Advertising
                            </h2>
                            <p className="text-gray-600 md:w-3/4">
                                PPC advertising allows businesses to place ads on search engines and social media platforms, paying each time a user clicks on their ad, driving targeted traffic.
                            </p>
                        </div>

                        {/* Section Item */}
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                Analytics and Data Analysis
                            </h2>
                            <p className="text-gray-600 md:w-3/4">
                                Analyzing data from digital marketing campaigns helps businesses understand customer behavior, measure performance, and optimize strategies for better results.
                            </p>
                        </div>

                        {/* Section Item */}
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                Influencer Marketing
                            </h2>
                            <p className="text-gray-600 md:w-3/4">
                                Collaborating with influencers can enhance brand visibility and credibility, as they promote products to their established audience through authentic recommendations.
                            </p>
                        </div>

                        {/* Section Item */}
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                Online Reputation Management
                            </h2>
                            <p className="text-gray-600 md:w-3/4">
                                Managing your online reputation involves monitoring and influencing public perception of your brand through customer feedback, reviews, and social media engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Whatis
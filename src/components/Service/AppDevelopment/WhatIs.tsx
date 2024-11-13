import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatIs = () => {
    return (
        <div className='px-8'>
            <div className='md:px-48 px-4 space-y-8'>
                <h1 className='md:text-4xl text-2xl font-semibold text-gray-700'>
                    So, what is App Development?
                </h1>
                <p className='text-xl leading-loose'>
                    App development is the process of creating
                    mobile applications that run on both iOS and
                    Android operating systems. This involves designing
                    and building apps for devices such as iPhones, iPads,
                    Android smartphones, tablets, and e-readers, ensuring a
                    seamless user experience across both platforms.
                </p>
                <Image className='rounded-xl' src={'/appdeve.png'} alt='App Dev Devscushion' width={800} height={800} />
            </div>
            <section className="max-w-5xl mx-auto p-6 mt-8">
                <h2 className="md:text-3xl text-xl font-bold md:text-center text-start mb-6">
                    What’s the Cost of App Development at DevsCushion?
                </h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">1. Project Complexity:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Simple Apps:</strong> Starting from <span className="font-medium">$2,000</span> for basic applications with limited functionality.
                            </li>
                            <li>
                                <strong>Moderately Complex Apps:</strong> Ranging from <span className="font-medium">$3,000 to $50,000</span> for apps with features like user authentication, basic database functions, and third-party integrations.
                            </li>
                            <li>
                                <strong>Complex Apps:</strong> For advanced applications requiring features like real-time chat, geolocation, or extensive back-end services, costs can start from <span className="font-medium">$40,000</span> and go up to <span className="font-medium">$100,000 or more</span>.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">2. Platform Selection:</h3>
                        <p className="text-gray-700">
                            Development costs vary based on whether you choose to build for <strong>iOS, Android, or both</strong>. Cross-platform development can offer cost savings.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">3. Design Requirements:</h3>
                        <p className="text-gray-700">
                            Custom UI/UX design services are available, with costs ranging from <span className="font-medium">$2,000 to $30,000</span> based on complexity and interactivity.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">4. Development Team Expertise:</h3>
                        <p className="text-gray-700">
                            Our experienced team ensures you receive high-quality service, delivering exceptional value for your investment.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">5. Ongoing Support and Maintenance:</h3>
                        <p className="text-gray-700">
                            We offer maintenance packages to keep your app up-to-date and functional, typically costing <span className="font-medium">15-20%</span> of the initial development cost annually.
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-lg font-medium">
                          <Link href={'/contact'} className='underline'>Contact our team </Link> for a detailed proposal tailored to your unique project requirements.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhatIs
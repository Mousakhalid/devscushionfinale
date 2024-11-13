import Image from 'next/image'
import React from 'react'

const Whatis = () => {
    return (
        <div>
            <div className='md:px-48 px-4 space-y-8'>
                <h1 className='md:text-4xl text-2xl font-semibold text-gray-700'>
                    What is Web App Development?
                </h1>
                <p className='text-xl leading-loose'>
                    Web app development is the process of conceptualizing,
                    planning, and building the functional and interactive
                    components of a web application. It combines aesthetics,
                    usability, and robust functionality to create seamless digital
                    experiences. The primary goal of web app development is to deliver
                    high-performance solutions that engage users, solve problems efficiently,
                    and leave a lasting impression.
                </p>
                <Image className='rounded-xl' src={'/web_dev.jpeg'} alt='App Dev Devscushion' width={800} height={800} />
            </div>
            <div>
                (
                <section className="px-4 md:px-12 lg:px-20 py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="md:text-3xl text-xl font-bold text-gray-800 mb-8 md:text-center text-start">
                            Understanding Web App Development
                        </h1>

                        <div className="space-y-12">
                            {/* Section Item */}
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                    User-Centric Development
                                </h2>
                                <p className="text-gray-600 md:w-3/4">
                                    Developers prioritize understanding user needs to ensure a seamless experience. They collaborate with designers, gather feedback, and use agile practices to deliver high-quality solutions efficiently.
                                </p>
                            </div>

                            {/* Section Item */}
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                    Front-End Development
                                </h2>
                                <p className="text-gray-600 md:w-3/4">
                                    Developers work with technologies like HTML, CSS, and JavaScript to implement engaging layouts, animations, and visual elements that align with the design vision.
                                </p>
                            </div>

                            {/* Section Item */}
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                    Back-End Development
                                </h2>
                                <p className="text-gray-600 md:w-3/4">
                                    Back-end development focuses on server logic, database management, and APIs that ensure data flows smoothly between the front-end and back-end of the web app.
                                </p>
                            </div>

                            {/* Section Item */}
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                    Responsive Design
                                </h2>
                                <p className="text-gray-600 md:w-3/4">
                                    Developers build web apps to adapt seamlessly across all devices, providing a consistent experience on desktops, tablets, and mobile phones.
                                </p>
                            </div>

                            {/* Section Item */}
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                    Accessibility Compliance
                                </h2>
                                <p className="text-gray-600 md:w-3/4">
                                    Developers follow accessibility standards to ensure the app is usable by individuals with disabilities through ARIA roles, screen reader support, and keyboard navigation.
                                </p>
                            </div>

                            {/* Section Item */}
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                    Performance Optimization
                                </h2>
                                <p className="text-gray-600 md:w-3/4">
                                    Efficient code, optimized assets, and techniques like lazy loading ensure faster load times and smoother performance for users.
                                </p>
                            </div>

                            {/* Section Item */}
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                    Testing and Quality Assurance
                                </h2>
                                <p className="text-gray-600 md:w-3/4">
                                    Developers run automated and manual tests to ensure reliability and bug-free performance, covering unit, integration, and end-to-end testing.
                                </p>
                            </div>

                            {/* Section Item */}
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <h2 className="text-xl font-semibold text-gray-700 md:w-1/4">
                                    Deployment and Maintenance
                                </h2>
                                <p className="text-gray-600 md:w-3/4">
                                    After deployment, developers monitor the app’s performance and provide updates and feature enhancements to maintain functionality and security.
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
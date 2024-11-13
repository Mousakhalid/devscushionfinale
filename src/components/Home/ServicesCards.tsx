import Image from 'next/image'
import React from 'react'
import ButtonFindOut from './ButtonFindOut'
import Link from 'next/link'

const ServicesCards = () => {
    return (
        <div className='px-8'>
            <div className='text-center py-16'>
                <p className='text-[10px] text-gray-500 leading-relaxed tracking-wider'>OUR SERVICES</p>
                <h2 className='md:text-4xl text-2xl font-bold'>Future-Ready Services for Sustained Growth</h2>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 text-center gap-8'>
                <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                    <h2 className='text-xl font-bold'>Website Development</h2>
                    <p>We deliver impactful website development services with responsive design, easy navigation, and seamless user experiences that boost engagement.</p>
                    <Image src={'/web-icon.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />

                    <Link href={'/services/web-development'}>
                        <ButtonFindOut />
                    </Link>
                </div>
                <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                    <h2 className='text-xl font-bold'>Mobile App Development</h2>
                    <p>We deliver impactful app development services with intuitive design, effortless navigation, and seamless user experiences that drive engagement and satisfaction.</p>
                    <Image src={'/apps-icon.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />
                    <Link href={'/services/app-development'}>
                        <ButtonFindOut />
                    </Link>
                </div>
                <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                    <h2 className='text-xl font-bold'>SaaS Development</h2>
                    <p>We deliver impactful SaaS development services with scalable architecture, intuitive user interfaces, and seamless integrations that maximize efficiency and user engagement.</p>
                    <Image src={'/saas.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />
                    <Link href={'/services/saas-development'}>
                        <ButtonFindOut />
                    </Link>
                </div>
                <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                    <h2 className='text-xl font-bold'>Digital Marketing Services</h2>
                    <p>We deliver impactful digital marketing services with strategic campaigns, engaging content, and data-driven insights that boost visibility and drive meaningful engagement.</p>
                    <Image src={'/digi.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />
                    <Link href={'/services/digital-marketing'}>
                        <ButtonFindOut />
                    </Link>
                </div>
                <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                    <h2 className='text-xl font-bold'>UI & UX Design Services</h2>
                    <p>We deliver impactful UI/UX design services with intuitive layouts, user-centered design, and seamless interactions that enhance usability and elevate user engagement..</p>
                    <Image src={'/ui-icon.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />
                    <Link href={'/services/ui-ux-design'}>
                        <ButtonFindOut />
                    </Link>
                </div>
                <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                    <h2 className='text-xl font-bold'>DevOps Solutions</h2>
                    <p>We deliver impactful DevOps services with streamlined automation, efficient workflows, and seamless integration processes that enhance reliability and accelerate deployment.</p>
                    <Image src={'/custom.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />
                    <Link href={'/services/devops-solutions'}>
                        <ButtonFindOut />
                    </Link>
                </div>
            </div>
            <h2 className='text-center py-8'>Customized Development Solutions for your Business. <Link className=" underline md:underline-offset-4" href={'/services'}>View All Services</Link></h2>
            <hr />
        </div>
    )
}

export default ServicesCards
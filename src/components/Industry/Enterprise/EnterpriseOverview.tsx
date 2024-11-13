import React from 'react'

const EnterpriseOverview = () => {
    return (
        <div className='my-12'>
            <div className='text-center'>
                <p className='text-[10px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Overview</p>
                <h1 className='md:text-3xl text-2xl max-sm:text-start px-8 font-bold'>Driving Enterprise Excellence with Cutting-Edge<br className='max-sm:hidden' /> Digital Solutions</h1>
            </div>
            <div className='md:px-56 px-8 py-8'>
                <p className='leading-loose py-3 text-gray-600'>DevsCushion is committed to transforming the enterprise sector with a comprehensive range of digital services tailored to meet today’s business challenges and opportunities. From delivering impactful branding solutions that connect with your audience to building custom enterprise applications that optimize operations, DevsCushion combines innovation with functionality. Our web development team creates powerful, engaging digital experiences, while our expertise in SaaS platform development offers scalable cloud solutions to drive business growth.</p>
                <ul className='leading-loose'>
                    <li>
                        <b className='text-gray-600'>Bespoke Enterprise App Development:</b> Developing custom solutions that enhance efficiency and foster innovation across your business operations.
                    </li>
                    <li>
                        <b className='text-gray-600'>Strategic Digital Marketing:</b> Enhancing your brand's digital presence through targeted strategies designed to boost engagement and maximize ROI.
                    </li>
                    <li>
                        <b className='text-gray-600'>Intuitive UI/UX Design:</b> Improving user experience with designs that are visually appealing, user-friendly, and accessible to all.
                    </li>
                </ul>
                <p className='leading-loose py-3 text-gray-600'>Furthermore, DevsCushion's digital marketing strategies are crafted to boost your visibility and engagement.</p>
            </div>
        </div>
    )
}

export default EnterpriseOverview
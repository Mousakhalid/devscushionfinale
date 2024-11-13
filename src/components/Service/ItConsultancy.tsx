import React from 'react'
import ServiceButton from './ServiceButton'
import Image from 'next/image'

const ItConsultancy = () => {
  return (
    <div className='my-12'>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='md:w-[62%] w-full space-y-4'>
          <p className='text-3xl font-medium text-gray-800'>IT Consultancy</p>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Guiding Your Tech Transformation Journey</h1>
          <div>
            <p>DevsCushion's IT consultancy services are your strategic partner in navigating the complexities of technology. Our seasoned experts provide tailored solutions to align your IT infrastructure with your business goals, ensuring optimal performance, security, and scalability. From system audits and technology roadmaps to implementation and ongoing support, we empower your business to thrive in the digital landscape. Partner with DevsCushion and let us guide your tech transformation journey with confidence.</p>

          </div>
          <div>
            <ServiceButton />
          </div>
        </div>
        <div>
          <Image src={'/it-consultant.png'} alt='Custom development srevices by devscushion' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default ItConsultancy
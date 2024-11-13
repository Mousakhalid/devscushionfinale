import React from 'react'
import ServiceButton from './ServiceButton'
import Image from 'next/image'

const Shopify = () => {
  return (
    <div className='my-12'>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='md:w-[62%] w-full space-y-4'>
          <p className='text-3xl font-medium text-gray-800'>Shopify & E-Commerce</p>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Powering Your E-commerce Success Seamlessly</h1>
          <div>
            <p>At DevsCushion, we specialize in Shopify and e-commerce solutions tailored to drive your online success. Our team crafts seamless, user-friendly platforms that streamline the shopping experience and maximize conversions. From customizing Shopify stores to integrating payment gateways and optimizing for mobile, we empower businesses to thrive in the competitive e-commerce landscape. Partner with DevsCushion to launch your online store with confidence and achieve your sales goals.</p>

          </div>
          <div>
            <ServiceButton />
          </div>
        </div>
        <div>
          <Image src={'/shopi.webp'} alt='Custom development srevices by devscushion' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default Shopify
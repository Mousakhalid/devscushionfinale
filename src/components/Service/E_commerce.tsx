import React from 'react'
import ServiceButton from './ServiceButton'
import Image from 'next/image'

const E_commerce = () => {
  return (
    <div className='my-12'>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='md:w-[62%] w-full space-y-4'>
          <p className='text-3xl font-medium text-gray-800'>E-Commerce Platforms</p>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Driving Your E-commerce Success Forward</h1>
          <div>
            <p>DevsCushion offers comprehensive e-commerce services inspired by industry giants like Amazon, eBay, and Daraz. From platform development to marketplace integration, our solutions are tailored to maximize your online sales potential. We specialize in creating user-friendly interfaces, optimizing product listings, and implementing secure payment gateways to enhance the shopping experience. With DevsCushion as your partner, unlock the full potential of your e-commerce venture and join the ranks of successful online marketplaces.</p>

          </div>
          <div>
            <ServiceButton />
          </div>
        </div>
        <div>
          <Image src={'/ecom1.png'} alt='Custom development srevices by devscushion' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default E_commerce
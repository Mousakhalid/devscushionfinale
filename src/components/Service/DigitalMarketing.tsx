import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import ServiceButton from './ServiceButton'

const DigitalMarketing = () => {
  return (
    <div className='my-12'>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='md:w-[62%] w-full space-y-4'>
          <p className='text-3xl font-medium text-gray-800'>Digital Marketing</p>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Maximizing Your Online Presence Effortlessly</h1>
          <div>
            <p>Elevate your brand's online presence with DevsCushion's digital marketing expertise. Our tailored strategies are designed to enhance visibility, drive engagement, and convert leads into loyal customers. From SEO and social media management to content marketing and PPC advertising, we provide comprehensive solutions that deliver measurable results. Partner with DevsCushion and let us help you unlock the full potential of your digital marketing efforts.</p>

          </div>
          <div>
            <ServiceButton />
          </div>
        </div>
        <div>
          <Image src={'/digi1.png'} alt='Custom development srevices by devscushion' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing
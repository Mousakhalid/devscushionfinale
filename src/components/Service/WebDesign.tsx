import React from 'react'
import ServiceButton from './ServiceButton'
import Image from 'next/image'

const WebDesign = () => {
  return (
    <div className='my-12'>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='md:w-[62%] w-full space-y-4'>
          <p className='text-3xl font-medium text-gray-800'>Web Design & Development</p>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Crafting Your Digital Experience Expertly</h1>
          <div>
            <p>We specialize in crafting exceptional digital experiences through innovative web design and development. Our team combines creativity with technical expertise to build websites that captivate audiences and drive results. From responsive designs to seamless user experiences, we tailor every aspect of your website to reflect your brand and engage your target audience. Partner with DevsCushion to elevate your online presence and leave a lasting impression in the digital world.</p>

          </div>
          <div>
            <ServiceButton />
          </div>
        </div>
        <div>
          <Image src={'/web-dev1.png'} alt='Custom development srevices by devscushion' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default WebDesign
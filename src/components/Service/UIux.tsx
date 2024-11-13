import React from 'react'
import ServiceButton from './ServiceButton'
import Image from 'next/image'

const UIux = () => {
  return (
    <div className='my-12'>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='md:w-[62%] w-full space-y-4'>
          <p className='text-3xl font-medium text-gray-800'>UI/UX Design</p>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Elevating User Experiences with DevsCushion</h1>
          <div>
            <p>At DevsCushion, we specialize in creating exceptional user experiences through intuitive UI/UX design. Our team combines creativity with user-centric design principles to craft interfaces that engage, delight, and convert. From wireframing and prototyping to user testing and iterative design, we ensure every aspect of your digital product is optimized for usability and impact. Partner with DevsCushion to elevate your brand with cutting-edge UI/UX design that sets you apart from the competition.</p>

          </div>
          <div>
            <ServiceButton />
          </div>
        </div>
        <div>
          <Image src={'/ux.png'} alt='Custom development srevices by devscushion' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default UIux
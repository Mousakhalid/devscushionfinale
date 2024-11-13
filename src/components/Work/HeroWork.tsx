import Image from 'next/image'
import React from 'react'
import WorkButton from './WorkButton'
 
const HeroWork = () => {
  return (
    <div className='md:px-16 px-6 bg-gray-100 border-b-gray-300 md:h-[500px] mb-12'>
      <div className='flex md:flex-row flex-col-reverse items-center justify-center pt-12'>
        <div className='md:w-[50%] w-full'>
          <h1 className='md:text-5xl text-3xl font-bold text-gray-700'>Innovation in action with DevsCushion</h1>
          <p className='leading-7 text-lg font-medium'>Explore groundbreaking solutions with DevsCushion through our success stories.</p>
          <div>
            <WorkButton />
          </div>

        </div>
        <div>
          <Image src={'/service-bg.png'} alt='bg-service devscushion' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default HeroWork
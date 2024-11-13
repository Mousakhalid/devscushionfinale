import React from 'react'
import ServiceButton from './ServiceButton'
import Image from 'next/image'

const Wordpress = () => {
  return (
    <div className='my-12'>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='md:w-[62%] w-full space-y-4'>
          <p className='text-3xl font-medium text-gray-800'>WordPress Development</p>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Empowering Your Vision with WordPress</h1>
          <div>
            <p>At DevsCushion, we specialize in WordPress design and development to bring your digital vision to life. Our team of experts harnesses the power of WordPress to create stunning, user-friendly websites that reflect your brand and engage your audience. From custom themes and plugins to responsive designs and SEO optimization, we tailor every aspect of your WordPress site to meet your unique needs. Partner with DevsCushion to elevate your online presence and stand out in the digital landscape.</p>

          </div>
          <div>
            <ServiceButton />
          </div>
        </div>
        <div>
          <Image src={'/Wordpress_web.png'} alt='Custom development srevices by devscushion' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default Wordpress
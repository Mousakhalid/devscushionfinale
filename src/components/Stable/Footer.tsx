import { company, industries, serviceItems, support } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-14 mt-16'>
      <div className='flex flex-row max-sm:flex-col gap-8'>
        <div className='-mt-4'>
          <Link href={'/'}>
            <Image src={'/logo1.png'} alt='Footer logo' width={200} height={200} className='h-36 w-36 mr-2' />
          </Link>
          <p>Office # 9 & 10, Al Rehmat Plaza, G-11 Markaz, Islamabad</p>
          <p>
            <Link href={`tel:03001119288`}>
              P: 0092 (0) 300 1119288
            </Link>
          </p>
          <p>
            <Link href={`mail:devscushion@gmail.com`}>
              M: devscushion@gmail.com
            </Link>
          </p>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
          <div>
            <Link href={'/services'}>
              <h2 className='font-bold hover:text-[#6f2fa0]'>Services</h2>
            </Link>
            <ul className='space-y-2 text-[15px] text-gray-600 '>
              {serviceItems.map((item, index) => (
                <li key={index} className='hover:text-[#6f2fa0] duration-100'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href={'/industries'}>
              <h2 className='font-bold hover:text-[#6f2fa0]'>Industries</h2>
            </Link>
            <ul className='space-y-2 text-[15px] text-gray-600 '>
              {industries.map((item, index) => (
                <li key={index} className='hover:text-[#6f2fa0] duration-100'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href={'/company'}>
              <h2 className='font-bold hover:text-[#6f2fa0]'>Company</h2>
            </Link>
            <ul className='space-y-2 text-[15px] text-gray-600 '>
              {company.map((item, index) => (
                <li key={index} className='hover:text-[#6f2fa0] duration-100'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='font-bold hover:text-[#6f2fa0]'>Support</h2>
            <ul className='space-y-2 text-[15px] text-gray-600 '>
              {support.map((item, index) => (
                <li key={index} className='hover:text-[#6f2fa0] duration-100'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
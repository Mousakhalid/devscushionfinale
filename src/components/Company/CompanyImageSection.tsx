import Image from 'next/image'
import React from 'react'

const CompanyImageSection = () => {
    return (
        <div className='my-16 px-8'>
            <div className='flex md:flex-row flex-col items-center justify-center'>
                <div className='rounded-lg'>
                    <Image src={'/ab1.jpg'} alt='About Devscushion' className='rounded-lg md:h-[400px] md:w-[500px]' width={400} height={400} />
                </div>
                <div className='space-y-12 md:pl-8 pl-0 max-sm:py-8'>
                    <Image src={'/about.jpg'} alt='About Devscushion' className='rounded-lg h-[170px] md:w-[550px]' width={400} height={400} />
                    <Image src={'/about.jpg'} alt='About Devscushion' className='rounded-lg h-[170px] w-[550px]' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default CompanyImageSection
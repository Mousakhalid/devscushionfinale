import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

const HeroQuote = () => {
    return (
        <div className='md:px-16 px-6 bg-gray-100 border-b-gray-300 md:h-[500px] mb-12'>
            <div className='flex md:flex-row flex-col-reverse items-center justify-center pt-12'>
                <div className='md:w-[50%] w-full space-y-4'>
                    <h1 className='md:text-5xl text-3xl font-bold text-gray-700'>Request a Quote: Let's Get Started on Your Project!</h1>
                    <p className='leading-7 text-lg font-medium'>Fill out the form below to receive a personalized quote tailored to your specific needs and requirements.</p>
                    <div>
                        <Link href={'/contact'}>
                            <Button className='bg-fuchsia-700 py-6 text-xl px-9'>Request A Call</Button>
                        </Link>
                    </div>

                </div>
                <div>
                    <Image src={'/assets/busi1.png'} alt='bg-quote devscushion' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default HeroQuote
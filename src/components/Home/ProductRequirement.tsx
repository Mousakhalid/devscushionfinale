import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const ProductRequirement = () => {
    return (
        <div className='bg-gradient-to-r from-[rgb(57,23,84)] via-[#6F2FA0] to-[#4b0680e8] '>
            <div className='md:py-36 py-16 gap-4 px-8 flex md:flex-row flex-col items-center justify-between '>
                <div className='space-y-8 mx-8'>
                    <h2 className='md:text-7xl text-4xl font-semibold font-mono text-gray-50'>
                        Product <br />
                        <span className='bg-pink-500'>Requirements</span><br />
                        Document
                    </h2>
                    <div className='py-3'>
                        <Link href={'/product-requirement-documents'}>
                            <Button className='md:py-7 py-5 px-9 md:px-12 text-xl rounded-full hover:border hover:border-gray-500 bg-none' variant={'outline'}>Get the complete template</Button>
                        </Link>
                    </div>
                </div>
                <div className='flex max-sm:mt-16'>
                    <div className='border-l-2 h-[300px]'></div>
                    <div className='space-y-4 md:pt-4 pt-2  md:px-12 px-2'>
                        <div className='flex items-center justify-start gap-3'>
                            <Image src={'/sketch.png'} alt='p r q devscushion' width={30} height={30} />
                            <p className='font-bold text-white md:text-xl'>Outline your products goals & problems</p>
                        </div>
                        <div className='flex items-center justify-start gap-3'>
                            <Image src={'/star.png'} alt='p r q devscushion' width={30} height={30} />
                            <p className='font-bold text-white md:text-xl'>Define success metrics</p>
                        </div>
                        <div className='flex items-center justify-start gap-3'>
                            <Image src={'/question.png'} alt='p r q devscushion' width={30} height={30} />
                            <p className='font-bold text-white md:text-xl'>Challenge critical assumptions</p>
                        </div>
                        <div className='flex items-center justify-start gap-3'>
                            <Image src={'/risk.png'} alt='p r q devscushion' width={30} height={30} />
                            <p className='font-bold text-white md:text-xl'>Reduce risk</p>
                        </div>
                        <div className='flex items-center justify-start gap-3'>
                            <Image src={'/smile.png'} alt='p r q devscushion' width={30} height={30} />
                            <p className='font-bold text-white md:text-xl'>Creating lasting user impact</p>
                        </div>
                        <div className='flex items-center justify-start gap-3'>
                            <Image src={'/revenue.png'} alt='p r q devscushion' width={30} height={30} />
                            <p className='font-bold text-white md:text-xl'>Drive revenue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductRequirement
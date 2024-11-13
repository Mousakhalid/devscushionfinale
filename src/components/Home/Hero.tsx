import React from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='p-8 md:-mt-10'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='space-y-6 '>
                    <h2 className='text-4xl font-sans font-semibold md:mt-28 md:w-[70%]'>An Innovative Digital Solutions Agency <span className='text-[#6F2FA0]'>Revolutionizing </span>Businesses.</h2>
                    <p className='md:w-[80%]'>We collaborate with startups and many fortune companies to craft products that captivate customers, drive adoption, and accelerate revenue growth.</p>
                    <div className='md:space-x-6 max-sm:space-y-4'>
                        <div>
                            <Link href={'/get-a-quote'}>
                                <Button className='rounded-full py-6 font-bold px-14 text-[16px] max-sm:w-full hover:bg-[#6F2FA0]'>
                                    <Send className="mr-2 h-4 w-4" /> Book Free Consultation
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link href={'/company'}>
                                <Button variant={'outline'} className='rounded-full max-sm:w-full py-6 font-bold px-14 text-[16px] border-black hover:border-[#6F2FA0]'>About Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={'/bg-hero.png'} alt='Hero Devscushion' width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default Hero
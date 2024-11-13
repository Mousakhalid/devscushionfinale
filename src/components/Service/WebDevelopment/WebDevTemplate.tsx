import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WebDevTemplate = () => {
    return (
        <div className='px-8 rounded-xl'>
            <div className='bg-gray-100 rounded-xl'>
                <div className='flex md:flex-row py-8 px-4 flex-col items-center gap-8  justify-between'>
                    <div className='space-y-3'>
                        <Badge>Template</Badge>
                        <h2 className='text-4xl font-bold '>DevsCushion Lo-Fi Kit</h2>
                        <p className='text-xl'>Speed up your design process</p>
                        <p>In this kit, you’ll find simple color styles, a robust type scale, <br /> and many components that’ll help you hit the ground running.</p>
                        <div>
                            <Link href={'/product-requirement-documents'}>
                                <Button className='rounded-full py-5 px-11 bg-[#592A99] text-gray-50 duration-500 transition-all' variant={'outline'} >View Template</Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={'/webser1.png'} alt='Web App Dev Desvscushion' width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebDevTemplate
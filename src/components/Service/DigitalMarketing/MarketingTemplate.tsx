import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DigitalMarketingTemplate = () => {
    return (
        <div className='px-8 rounded-xl'>
            <div className='bg-gray-100 rounded-xl'>
                <div className='flex md:flex-row py-8 px-4 flex-col items-center gap-8 justify-between'>
                    <div className='space-y-3'>
                        <Badge>Template</Badge>
                        <h2 className='text-4xl font-bold'>DevsCushion Digital Marketing Kit</h2>
                        <p className='text-xl'>Elevate Your Marketing Strategy</p>
                        <p>
                            This kit includes essential tools and resources to optimize your digital marketing efforts,
                            including strategies for content creation, social media engagement, and analytics tracking.
                        </p>
                        <Button className='rounded-full py-5 px-11 bg-[#592A99] text-gray-50 duration-500 transition-all' variant={'outline'}>
                            Contact For Demo
                        </Button>
                    </div>
                    <div>
                        <Image src={'/digipng.png'} alt='Digital Marketing Kit' width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketingTemplate;

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const IndustryButton = () => {
    return (
        <div className='flex items-center md:flex-row flex-col gap-5 py-8'>
            <Link href={'/contact'}>
                <Button className='bg-[#7030A0] py-6 text-xl px-9'>Request A Call</Button>
            </Link>
            <Link href={'/get-a-quote'}>
                <Button className='py-6 text-xl px-9' variant={'outline'}>Get A Quote</Button>
            </Link>
        </div>
    )
}

export default IndustryButton
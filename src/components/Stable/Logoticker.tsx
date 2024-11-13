'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Logoticker = () => {
    return (
        <div className='py-8 md:py-12 bg-white'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <motion.div className='container flex gap-14 flex-none pr-14' animate={{
                    translateX: '-50%'
                }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }}
                >
                    <Image src={'/logo2.png'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/supe.png'} alt='Superior Group' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/nunn.webp'} alt='Real Estate Jefferson nunn' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/logo2.png'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/supe.png'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/logo2.png'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    {/* Second logo section */}
                    <Image src={'/morgan.jpg'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/bm.png'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/rec.png'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/nunn.webp'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/ae.png'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                    <Image src={'/bm.png'} alt='BaitAlSadiq' width={350} height={350} className='logo-ticker-image' />
                </motion.div>
            </div>
        </div>
    )
}

export default Logoticker
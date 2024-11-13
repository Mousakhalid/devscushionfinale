'use client'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
const ButtonFindOut = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div>
            <div className='flex items-center justify-center py-4 px-7 space-x-2 font-bold relative overflow-clip cursor-pointer'
                onMouseEnter={(e) => setIsHover(true)}
                onMouseLeave={(e) => setIsHover(false)}
            >
                <motion.div className='circle'
                    animate={{
                        scale: isHover ? 45 : 1,
                        backgroundColor: isHover ? '#6F2FA0' : '#000000'
                    }}
                    transition={{
                        ease: 'easeIn',
                        duration: 0.2
                    }}
                ></motion.div>
                <motion.div className='text-[16px] tracking-[-0.5px] font-[500px] z-10' animate={{
                    x: isHover ? -8 : 8,
                    color: isHover ? '#ffffff' : '#000000'
                }}>
                    <p>Find Out More</p>
                </motion.div>
                <motion.div className='flex items-center justify-center absolute right-[22px]'
                    animate={{ x: isHover ? 0 : 24 }}
                >
                    <ArrowRight className='w-[16px] h-[16px] stroke-2 text-white' />
                </motion.div>
            </div>
        </div >
    )
}

export default ButtonFindOut
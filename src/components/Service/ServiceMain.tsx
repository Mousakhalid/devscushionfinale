'use client'
import React from 'react'
import { LazyMotion, domAnimation, motion } from 'framer-motion'
import HeroService from './HeroService'
import ServicesSec from './ServicesSec'

const ServiceMain = () => {
    return (
        <LazyMotion features={domAnimation}>
            <motion.div className="h-full" initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }} >
                <HeroService />
                <ServicesSec />
            </motion.div>
        </LazyMotion>
    )
}

export default ServiceMain
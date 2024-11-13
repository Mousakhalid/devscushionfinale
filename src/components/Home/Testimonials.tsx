'use client';
import { twMerge } from 'tailwind-merge';
import { testimonials } from '@/lib/testimonials';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn: React.FC<{ className?: string; testimonials: typeof testimonials; duration?: number }> = ({ className, testimonials, duration }) => {
    return (
        <div className={twMerge(className)} style={{ overflow: 'hidden' }}>
            <motion.div
                animate={{ translateY: "-50%" }}
                transition={{
                    duration: duration || 10,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                }}
                className='flex flex-col gap-6 pb-6'
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75), transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75), transparent)',
                }}
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {testimonials.map(({ text, imageSrc, name, username }, idx) => (
                            <div key={idx} className='card'>
                                <div>{text}</div>
                                <div className='flex items-center gap-2 mt-5'>
                                    <Image width={40} height={40} src={imageSrc} alt={username} className='h-10 w-10 rounded-full' />
                                    <div className='flex flex-col'>
                                        <div className='font-medium tracking-tight leading-5'>{name}</div>
                                        <div className='tracking-tight leading-5'>{username}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    return (
        <div>
            <section className='bg-white py-8'>
                <div className='container'>
                    <div className='section-heading'>
                        <div className='flex justify-center flex-col items-center text-center px-8'>
                            <div className='tag border py-2 px-4 rounded-lg bg-white'>Testimonials</div>
                            <h2 className='section-title mt-5 font-bold text-3xl text-[#001628]'>What our users say</h2>
                            <p className='section-description mt-5'>
                                Discover the impact of our quality craftsmanship and exceptional service through genuine customer experiences.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center gap-6 mt-10' style={{ overflow: 'hidden' }}>
                        <TestimonialsColumn testimonials={firstColumn} duration={15} />
                        <TestimonialsColumn testimonials={secondColumn} duration={19} className='hidden md:block' />
                        <TestimonialsColumn testimonials={thirdColumn} duration={17} className='hidden lg:block' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;

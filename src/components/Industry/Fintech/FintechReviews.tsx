import { testimonials } from '@/lib/testimonials'
import React from 'react'

const FintechReviews = () => {
    return (
        <div className='py-16 px-8'>
            <div className='text-center'>
                <p className='text-[12px] font-bold uppercase text-gray-500 leading-relaxed tracking-wider'>Reviews</p>
            </div>
            <div className='flex flex-wrap justify-center gap-8 mt-8'>
                {testimonials.slice(0, 4).map((testimonial, index) => (
                    <div key={index} className='flex flex-col items-center w-72'>
                        <img src={testimonial.imageSrc} alt={testimonial.name} className='w-16 h-16 rounded-full' />
                        <p className='text-lg font-semibold mt-4'>{testimonial.name}</p>
                        <p className='text-sm text-gray-500'>{testimonial.username}</p>
                        <p className='mt-2 text-base text-center'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FintechReviews
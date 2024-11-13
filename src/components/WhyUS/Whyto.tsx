import Image from 'next/image'
import React from 'react'

const Whyto = () => {
    return (
        <div className='px-8 md:py-24 py-6'>
            <div>
                <div className='flex md:flex-row flex-col items-center justify-between gap-8'>
                    <div>
                        <Image src={'/why.jpg'} alt='Image for devscushion why' width={2500} height={2500} />
                    </div>
                    <div>
                        <h1 className='md:text-3xl text-2xl font-bold '>Why Choose DevsCushion for Development Services?</h1>
                        <p className='text-gray-600'>
                            When you choose DevsCushion, you're getting more than just development services. We specialize in building websites and apps that not only look exceptional but perform seamlessly. Our attention to every detail ensures your business connects with customers and grows, providing a development process that delivers both quality and profitability, setting you apart from the competition.
                            <br /><br />
                            With DevsCushion, you can trust that your development needs are in expert hands. We're dedicated to delivering results that fuel your business growth and prepare you for the future. Let's collaborate to unlock new opportunities and take your business to the next level.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyto
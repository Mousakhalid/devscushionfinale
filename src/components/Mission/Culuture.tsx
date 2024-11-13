import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Culuture = () => {
    return (
        <div className='px-8'>
            <div>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='bg-[#6f2fa0] py-32 space-y-8 md:px-16 px-8'>
                        <h2 className='text-2xl font-bold text-center text-gray-50'>Our Culture</h2>
                        <ul className='list-disc text-gray-50 space-y-4'>
                            <li>We aim to hire professionals who are passionate and dedicated to their work.</li>
                            <li>Clear communication matters; simplicity stands out in a complex development process to foster connection.</li>
                            <li>Understanding a business’s concept is vital groundwork before starting any development project.</li>
                        </ul>
                        <div>
                            <Link href={'/company'}>
                                <Button className='bg-transparent border-2 text-gray-50 font-bold py-5 px-12 w-full duration-300 transition-opacity' variant={'outline'}>Find Out More</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#001628] py-32 space-y-8 md:px-16 px-8'>
                        <h2 className='text-2xl font-bold text-center text-gray-50'>Our Commitment</h2>
                        <ul className='list-disc text-gray-50 space-y-4'>
                            <li>DevsCushion is your trusted proactive technology partner, delivering tailored solutions that drive success and help your business thrive in the digital world.</li>
                            <li>DevsCushion empathizes with fellow business owners, understanding the daily digital challenges they face and providing solutions that address those needs effectively.</li>
                            <li>DevsCushion serves as your reliable built-in development partner, always available to assist you whenever you need support or guidance.</li>
                        </ul>
                        <div>
                            <Link href={'/contact'}>
                                <Button className='bg-transparent border-2 text-gray-50 font-bold py-5 px-12 w-full duration-300 transition-opacity' variant={'outline'}>Get In Touch</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Culuture
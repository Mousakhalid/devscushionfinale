import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ContactCards = () => {
    return (
        <div className='py-16 px-8'>
            <div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='text-center p-12 bg-white shadow flex flex-col items-center justify-center space-y-4 rounded'>
                        <h2 className='text-2xl font-bold '>Live Chat Support</h2>
                        <p>Chat with our sales & support team for quick answers.
                        </p>
                        <Image src={'/chat.svg'} alt='Images for devscushion cards' width={80} height={80} />
                        <Link href={'https://wa.me/+923001119288'} target='_blank'>
                            <Button className='hover:bg-[#6F2FA0] duration-400 transition'>Start Live Chat Now</Button>
                        </Link>
                    </div>
                    <div className='text-center p-12 bg-white shadow flex flex-col items-center justify-center space-y-4 rounded'>
                        <h2 className='text-2xl font-bold '>Headquarters</h2>
                        <p>Office # 9 & 10, Al Rehmat Plaza, G-11 Markaz, Islamabad</p>
                        <Image src={'/map.svg'} alt='Images for devscushion cards' width={80} height={80} />

                        <Button className='hover:bg-[#6F2FA0] duration-400 transition'>View Locations</Button>
                    </div>
                    <div className='text-center p-12 bg-white shadow flex flex-col items-center justify-center space-y-4 rounded'>
                        <h2 className='text-2xl font-bold '>Working hours</h2>
                        <p>Open Monday to Saturday
                            <br />
                            08:00 AM – 05:00 PM (UTC)</p>
                        <Image src={'/watch.svg'} alt='Images for devscushion cards' width={80} height={80} />
                        <Link href={'mail:devscushion@gmail.com'}>
                            <Button className='hover:bg-[#6F2FA0] duration-400 transition'>Email Us</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-center py-12'>
                <p>You can also email or call us at <Link href={`mail:info@devscushion.com`} className='text-[#6F2FA0] font-medium'>info@devscushion.com</Link> | <Link className='text-[#6F2FA0] font-medium' href={`tel:03001119288`}> +92 (0) 300-1119288 </Link></p>
            </div>
        </div>
    )
}

export default ContactCards
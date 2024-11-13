import Image from 'next/image'
import React from 'react'
import ButtonFindOut from '../Home/ButtonFindOut'
import CompanyServiceButton from './CompanyServiceButton'
import CompanyIndustriesButton from './CompanyIndutsriesButton'
import Link from 'next/link'

const CompanyCards = () => {
    return (
        <div className='px-8 py-16'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-12'>
                <div>
                    <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                        <h2 className='text-xl font-bold'>What We Do</h2>
                        <p>We create custom software solutions that drive business growth, deliver sustainable success, and generate long-term results.</p>
                        <Image src={'/coding.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />
                        <CompanyServiceButton />
                    </div>
                </div>
                <div>
                    <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                        <h2 className='text-xl font-bold'>Who We Assist?</h2>
                        <p>We empower businesses with expert solutions that streamline operations, boost productivity, and drive sustainable growth.</p>
                        <Image src={'/assist.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />
                        <CompanyIndustriesButton />
                    </div>
                </div>
                <div>
                    <div className="bg-gray-100 py-16 rounded-md px-8 flex flex-col items-center justify-center space-y-5">
                        <h2 className='text-xl font-bold'>Why Choose Us?</h2>
                        <p>Our proven strategies accelerate business growth, providing comprehensive support at every stage of your journey.</p>
                        <Image src={'/choose.png'} alt="Web Development DevsCushion Service" width={"100"} height={"100"} />
                        <Link href={'/why-choose-us'}>
                            <ButtonFindOut />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCards
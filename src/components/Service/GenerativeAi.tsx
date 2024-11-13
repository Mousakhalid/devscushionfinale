import React from 'react'
import ServiceButton from './ServiceButton'
import Image from 'next/image'

const GenerativeAi = () => {
    return (
        <div className='my-12'>
            <div className='flex md:flex-row flex-col items-center justify-center'>
                <div className='md:w-[62%] w-full space-y-4'>
                    <p className='text-3xl font-medium text-gray-800'>Generative AI</p>
                    <h1 className='md:text-4xl text-2xl font-semibold text-gray-600'>Innovative Generative AI Solutions: Transforming Ideas into Reality</h1>
                    <div>
                        <p>At DevsCushion, we harness the power of generative AI to drive innovation and creativity. Our team leverages advanced AI algorithms to produce dynamic and customized solutions that enhance user experiences and streamline processes. From generating unique content and designs to optimizing decision-making and automating tasks, our generative AI services are tailored to meet your specific needs. Partner with DevsCushion to unlock new possibilities and stay ahead of the curve with cutting-edge AI technology.</p>
                    </div>
                    <div>
                        <ServiceButton />
                    </div>
                </div>
                <div>
                    <Image src={'/ai.avif'} alt='Custom development srevices by devscushion' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default GenerativeAi
import Image from 'next/image'
import React from 'react'

const VisionFallShort = () => {
    return (
        <div className='px-8'>
            <div>
                <div className='grid md:grid-cols-2 grid-cols-1 py-16 gap-8'>
                    <div className=''>
                        <Image src={'/visiom.webp'} alt='Vidiom' width={500} height={600} />
                    </div>
                    <div>
                        <h1 className='md:text-4xl text-2xl font-semibold'>Don’t Let Your Product Vision Fall Short</h1>
                        <section className="">
                            <div className="max-w-6xl py-4">
                                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                                    Simplify Your Product Strategy Communication
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    With DevsCushion’s fillable product requirements document template, you can clearly outline problems, solutions, & expected impact for efficient alignment & development.
                                </p>
                                <p className="text-lg text-gray-600 mb-6">
                                    Easily communicate your product strategy to your design and development teams, ensuring everyone is on the same page.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionFallShort
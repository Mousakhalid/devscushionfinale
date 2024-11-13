import Image from 'next/image'
import React from 'react'

const Delivers = () => {
    return (
        <div className='bg-[#000022] my-12'>
            <div className='px-8 py-16 space-y-16'>
                <div >
                    <h1 className='text-3xl font-semibold text-center text-gray-50'>Our Deliverables</h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-6 text-white'>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Workshop devscushion' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>UX Docs</h2>
                            <p>
                                Which visually represent the product’s structure and user’s navigational path through the application with site maps, user flows, and workflows.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Workshop devscushion' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>
                                Wireframes
                            </h2>
                            <p>
                                Wireframes, both low-fidelity and high-fidelity, serve as visual blueprints outlining the layout, structure, and placement of elements within a digital interface.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Workshop devscushion' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>
                                Concept Designs
                            </h2>
                            <p>
                                These are preliminary visual concepts of interfaces that showcase the core ideas, design aesthetics, and brand identity of the product.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0F0F2F] border-[0.5px] border-gray-600 rounded-xl py-12 px-5 h-[390px] space-y-4'>
                            <div className='bg-circle-sh flex items-center justify-center'>
                                <Image src={'/book.png'} alt='Workshop devscushion' width={40} height={40} />
                            </div>
                            <h2 className='tracking-wide text-2xl font-medium'>Design System</h2>
                            <p>
                                A complete framework of design standards, components, and documentation that ensures consistency and efficiency in building user interfaces across all products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivers
import Image from 'next/image'
import React from 'react'

const MissionVision = () => {
    return (
        <div className='py-32'>
            <div className=''>
                <div className='space-y-16'>
                    <div className='flex items-start justify-between md:flex-row flex-col gap-10 px-8'>
                        <h2 className='text-xl font-bold text-gray-800 w-[30%]'>Our Mission</h2>
                        <p className='text-gray-700'>We’re committed to empowering businesses through innovative solutions, strong dedication, and consistent performance. DevsCushion’s mission is to drive growth by offering advanced technologies and reliable services, ensuring clients stay competitive and succeed in a dynamic market full of evolving challenges.</p>
                    </div>
                    <div className='bg-gray-100 py-12'>
                        <div className='flex items-start justify-between md:flex-row  flex-col gap-2 px-8'>
                            <h2 className='text-xl font-bold text-gray-800 w-[30%]'>Our Vision</h2>
                            <p className='text-gray-700'> At DevsCushion, we envision a future where businesses leverage technology to achieve success. Our goal is to drive innovation, empowering companies to thrive in a digitally connected world.
                                <br /><br />
                                We aim to create a digital landscape where creativity fuels efficiency and unlocks new opportunities. With a strong commitment to quality and customer satisfaction, we strive to be the preferred partner for businesses seeking impactful development solutions.
                                <br /><br />
                                By empowering companies to adapt, grow, and excel, we drive progress and prosperity in ever-evolving markets.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start justify-between md:flex-row flex-col gap-10 px-8'>
                        <h2 className='text-xl font-bold text-gray-800 w-[30%]'>Our Values</h2>
                        <p className='text-gray-700'>We’re committed to empowering businesses through innovative solutions, strong dedication, and consistent performance. DevsCushion’s mission is to drive growth by offering advanced technologies and reliable services, ensuring clients stay competitive and succeed in a dynamic market full of evolving challenges.</p>
                    </div>
                </div>

            </div>
            <div className='mx-8 my-16 border border-gray-500 rounded-md'>
                <div className='md:p-20 p-8 grid grid-cols-2 mx-auto gap-10'>
                    <div className='flex gap-8 md:flex-row flex-col'>
                        <div>
                            <Image src={'/com.svg'} alt='Text description Devscushion' width={60} height={60} />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl text-[#253858]'>Commitment</h2>
                            <p className='max-sm:text-[13px] '>Be accountable, work together as a team and communicate clearly.</p>
                        </div>
                    </div>
                    <div className='flex gap-8 md:flex-row flex-col'>
                        <div>
                            <Image src={'/inno.svg'} alt='Text description Devscushion' width={60} height={60} />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl text-[#253858]'>Innovation</h2>
                            <p className='max-sm:text-[13px] '>Think outside the box, challenge constructively and act before others do.</p>
                        </div>
                    </div>
                    <div className='flex gap-8 md:flex-row flex-col'>
                        <div>
                            <Image src={'/community.svg'} alt='Text description Devscushion' width={60} height={60} />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl text-[#253858]'>Community</h2>
                            <p className='max-sm:text-[13px] '>Creating a positive place to work and supporting ethical initiatives.</p>
                        </div>
                    </div>
                    <div className='flex gap-8 md:flex-row flex-col'>
                        <div>
                            <Image src={'/stars.svg'} alt='Text description Devscushion' width={60} height={60} />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl text-[#253858]'>Excellence</h2>
                            <p className='max-sm:text-[13px] '>Always deliver exceptional quality, accomplish and improve.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionVision
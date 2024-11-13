import Image from 'next/image'
import React from 'react'

const ProcessFlow = () => {
    return (
        <div className='bg-gray-100 my-8'>
            <div className='py-16 px-8'>
                <div className='text-center md:px-64 space-y-2'>
                    <h1 className='md:text-4xl text-2xl text-gray-700 font-bold'>What is the DevOps Process flow?</h1>
                    <p className='text-[13px] text-gray-500'>
                        The DevOps process focuses on agility and automation. The flow has stages like
                        continuous development, integration, testing, and deployment narrowing down the gap
                        between development & operations.
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8 py-8'>
                    <div className='hover:bg-white p-8 rounded-xl duration-300 space-y-2'>
                        <Image src={'/continuous-integration.png'} alt='Imag' width={60} height={60} />
                        <h2 className='font-bold'>Continuous Integration</h2>
                        <p className='text-[13px] text-gray-500'>
                            Here, developers make daily modifications to shared repository's source code, generating need for testig & reporting.
                        </p>
                    </div>
                    <div className='hover:bg-white p-8 rounded-xl duration-300 space-y-2'>
                        <Image src={'/ci-cd.png'} alt='Imag' width={60} height={60} />
                        <h2 className='font-bold'>Continuous Testing</h2>
                        <p className='text-[13px] text-gray-500'>Automated and consistent test of changes, every commit & quality checkpoints across the delivery pipeline is done.</p>
                    </div>
                    <div className='hover:bg-white p-8 rounded-xl duration-300 space-y-2'>
                        <Image src={'/continuous-delivery.png'} alt='Imag' width={60} height={60} />
                        <h2 className='font-bold'>Continuous Delivery</h2>
                        <p className='text-[13px] text-gray-500'>Now code is pushed to various environments after passing it through all test cases ensuring multiple deployments.</p>
                    </div>
                    <div className='hover:bg-white p-8 rounded-xl duration-300 space-y-2'>
                        <Image src={'/continuous-deployment.png'} alt='Imag' width={60} height={60} />
                        <h2 className='font-bold'>Continuous Deployment</h2>
                        <p className='text-[13px] text-gray-500'>DevOps delivers code to production multiple times daily, giving new features, products and bug fixes to consumers.</p>
                    </div>
                    <div className='hover:bg-white p-8 rounded-xl duration-300 space-y-2'>
                        <Image src={'/continuous-monitiring.png'} alt='Imag' width={60} height={60} />
                        <h2 className='font-bold'>Continuous Monitoring</h2>
                        <p className='text-[13px] text-gray-500'>Here the developers and testers understand the app's performance & availability; monitoring helps in reducing errors.</p>
                    </div>
                    <div className='hover:bg-white p-8 rounded-xl duration-300 space-y-2'>
                        <Image src={'/continuous-planning.png'} alt='Imag' width={60} height={60} />
                        <h2 className='font-bold'>Continuous Planning</h2>
                        <p className='text-[13px] text-gray-500'>This step involves continuous analysis & requirement gathering to enhance communication in line with the end goal.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProcessFlow
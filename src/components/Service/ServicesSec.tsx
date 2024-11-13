import React from 'react'
import CustomDevelopment from './CustomDevelopment'
import DigitalMarketing from './DigitalMarketing'
import ItConsultancy from './ItConsultancy'
import WebDesign from './WebDesign'
import Wordpress from './Wordpress'
import Shopify from './Shopify'
import UIux from './UIux'
import E_commerce from './E_commerce'
import GenerativeAi from './GenerativeAi'

const ServicesSec = () => {
    return (
        <div className='md:px-16 px-6 my-8'>
            <div>
                <div>
                    <h1 className='md:text-5xl text-3xl font-bold text-gray-700'>WHAT WE DO</h1>
                </div>
                <div>
                    <div id='custom'>
                        <CustomDevelopment />
                    </div>
                    <hr className='border-b w-full' />
                    <div id='digital'>
                        <DigitalMarketing />
                    </div>
                    <hr className='border-b w-full' />
                    <div id='consultant'>
                        <ItConsultancy />
                    </div>
                    <hr className='border-b w-full' />
                    <div id='development'>
                        <WebDesign />
                    </div>
                    <hr className='border-b w-full' />
                    <div id='wordpress'>
                        <Wordpress />
                    </div>
                    <hr className='border-b w-full' />
                    <div id='shopify'>
                        <Shopify />
                    </div>
                    <hr className='border-b w-full' />
                    <div id='design'>
                        <UIux />
                    </div>
                    <hr className='border-b w-full' />
                    <div id='commerce'>
                        <E_commerce />
                    </div>
                    <hr className='border-b w-full' />
                    <div id='ai'>
                        <GenerativeAi />
                    </div>
                    <hr className='border-b w-full' />
                </div>
            </div>
        </div>
    )
}

export default ServicesSec
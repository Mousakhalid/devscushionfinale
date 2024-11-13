import ServiceMain from '@/components/Service/ServiceMain'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Services | We provide tech services",
};



const servicespage = () => {
    return (
        <div>
            <ServiceMain />
            <GetInTouch />
        </div>
    )
}

export default servicespage
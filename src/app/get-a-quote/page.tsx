import HomeQuote from '@/components/GetAQuote/HomeQuote'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Get a quote | Book A Call",
};



const page = () => {
    return (
        <div>
            <HomeQuote />
        </div>
    )
}

export default page
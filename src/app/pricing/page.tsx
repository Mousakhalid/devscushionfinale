import HomePricing from '@/components/Pricing/HomePricing'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Pricing | DevsCushion product pricing",
};



const page = () => {
    return (
        <div>
            <HomePricing />
        </div>
    )
}

export default page
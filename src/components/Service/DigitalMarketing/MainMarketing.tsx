import React from 'react'
import HeroMarketing from './HeroMarketing'
import Whatis from './Whatis'
import DigitalMarketingDeliverables from './Delivers'
import WhyDigitalMarketingMatters from './WhyMatters'
import Marketing from './Marketing'
import CustomizeApp from '../AppDevelopment/CustomizeApp'
import DigitalMarketingProcess from './Process'
import DigitalMarketingTemplate from './MarketingTemplate'
import DigitalMarketingServices from './Important'

const MainMarketing = () => {
    return (
        <div>
            <HeroMarketing />
            <div className='px-2'>
                <Whatis />
            </div>
            <DigitalMarketingDeliverables />
            <div className='px-2'>
                <WhyDigitalMarketingMatters />
                <Marketing />
                <CustomizeApp />
                <DigitalMarketingProcess />
                <DigitalMarketingTemplate />
                <DigitalMarketingServices />
            </div>
        </div>
    )
}

export default MainMarketing
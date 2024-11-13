import React from 'react'
import HeroWebDevelopment from './HeroWebDevelopment'
import Whatis from './Whatis'
import Delivers from './Delivers'
import WhyWebAppMatters from './WhyWebDevMatters'
import CustomizeApp from '../AppDevelopment/CustomizeApp'
import RoleOfWebAppDevelopment from './RoleOfWebAppDevelopment'
import WebDevServices from './WebDevServices'
import WebDevTemplate from './WebDevTemplate'

const WebDevelopmentHome = () => {
    return (
        <div>
            <HeroWebDevelopment />
            <div className='px-2'>
                <Whatis />
            </div>
            <Delivers />
            <div className='px-2'>
                <WhyWebAppMatters />
                <CustomizeApp />
                <RoleOfWebAppDevelopment />
                <WebDevTemplate />
                <WebDevServices />
            </div>
        </div>
    )
}

export default WebDevelopmentHome
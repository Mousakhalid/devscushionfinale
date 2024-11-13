import React from 'react'
import HeroAppDevelopment from './HeroAppDevelopment'
import WhatIs from './WhatIs'
import Deliverables from './Deliverables'
import HowLongApp from './HowLongApp'
import CustomizeApp from './CustomizeApp'
import AppSetup from './AppSetup'

const AppDevelopmentHome = () => {
    return (
        <div>
            <HeroAppDevelopment />
            <WhatIs />
            <Deliverables />
            <HowLongApp />
            <CustomizeApp />
            <AppSetup />
        </div>
    )
}

export default AppDevelopmentHome
import React from 'react'
import HeroFintech from './HeroFintech'
import FinTabs from './FinTabs'
import FintechOverview from './FintechOverview'
import FintechServices from './FintechServices'
import HowWeFintech from './HowWeFintech'
import FintechValues from './FintechValues'
import FintechExpertise from './FintechExpertise'
import FintechReviews from './FintechReviews'
import FintechCaseStudies from './FintechCaseStudies'

const MainFintechPage = () => {
    return (
        <div>
            <HeroFintech />
            <FinTabs />
            <div id="fintech-overview">
                <FintechOverview />
            </div>
            <div id="fintech-services">
                <FintechServices />
            </div>
            <div id="fintech-process">
                <HowWeFintech />
            </div>
            <div id="fintech-core-values">
                <FintechValues />
            </div>
            <div id="fintech-expertise">
                <FintechExpertise />
            </div>

            <div id="fintech-reviews">
                <FintechReviews />
            </div>

            <div id="fintech-contact">
                <FintechCaseStudies />
            </div>
        </div>
    )
}

export default MainFintechPage 
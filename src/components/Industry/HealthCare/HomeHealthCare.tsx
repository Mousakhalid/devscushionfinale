import React from 'react'
import HeroHealthCare from './HeroHealthCare'
import HealthCareTabs from './HealthCareTabs'
import HealthCareOverview from './HealthCareOverview'
import HealthCareServices from './HealthCareServices'
import HowWeHealthCare from './HowWeHealthCare'
import FintechValues from '../Fintech/FintechValues'
import HealthCareExpertise from './HeatlhCareExpertise'
import FintechReviews from '../Fintech/FintechReviews'
import FintechCaseStudies from '../Fintech/FintechCaseStudies'

const HomeHealthCare = () => {
    return (
        <div>
            <HeroHealthCare />
            <HealthCareTabs />
            <div id="healthcare-overview">
                <HealthCareOverview />
            </div>
            <div id="healthcare-services">
                <HealthCareServices />
            </div>
            <div id="healthcare-process">
                <HowWeHealthCare />
            </div>
            <div id="healthcare-core-values">
                <FintechValues />
            </div>
            <div id="healthcare-expertise">
                <HealthCareExpertise />
            </div>
            <div id="healthcare-reviews">
                <FintechReviews />
            </div>
            <div id="healthcare-contact">
                <FintechCaseStudies />
            </div>
        </div>
    )
}

export default HomeHealthCare
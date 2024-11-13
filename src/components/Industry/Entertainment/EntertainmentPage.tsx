import React from 'react'
import HeroEntertainment from './HeroEntertainment'
import EntertainmentTabs from './EntertainmentTabs'
import EntertainmentOverview from './EntertainmentOverview'
import EntertainmentServices from './EntertainmentServices'
import EntertainmentHowWe from './EntertainmentHowWe'
import FintechValues from '../Fintech/FintechValues'
import EntertainmentExpertise from './EntertainmentExpertise'
import FintechReviews from '../Fintech/FintechReviews'
import FintechCaseStudies from '../Fintech/FintechCaseStudies'

const EntertainmentHome = () => {
    return (
        <div>
            <HeroEntertainment />
            <EntertainmentTabs />
            <div id="overview-entertainment">
                <EntertainmentOverview />
            </div>
            <div id="services-entertainment">
                <EntertainmentServices />
            </div>
            <div id="process-entertainment">
                <EntertainmentHowWe />
            </div>
            <div id="core-values-entertainment">
                <FintechValues />
            </div>
            <div id="expertise-entertainment">
                <EntertainmentExpertise />
            </div>
            <div id="reviews-entertainment">
                <FintechReviews />
            </div>
            <div id="contact-us-entertainment">
                <FintechCaseStudies />
            </div>
        </div>
    )
}

export default EntertainmentHome
import React from 'react'
import HeroEnterprise from './HeroEnterprise'
import EnterpriseTabs from './EnterpriseTabs'
import EnterpriseOverview from './EnterpriseOverview'
import EnterpriseService from './EnterpriseService'
import HowWeEnterprise from './HowWeEnterprise'
import FintechValues from '../Fintech/FintechValues'
import FintechExpertise from '../Fintech/FintechExpertise'
import EnterpriseReviews from './EnterpriseReviews'
import FintechCaseStudies from '../Fintech/FintechCaseStudies'
import FintechReviews from '../Fintech/FintechReviews'

const HomeEnterprise = () => {
    return (
        <div>
            <HeroEnterprise />
            <EnterpriseTabs />
            <div id="overview">
                <EnterpriseOverview />
            </div>
            <div id="services">
                <EnterpriseService />
            </div>
            <div id="process">
                <HowWeEnterprise />
            </div>
            <div id="core-values">
                <FintechValues />
            </div>

            <div id="expertise">
                <FintechExpertise />
            </div>
            <div id="reviews">
                <FintechReviews />
            </div>
            <div id="contact-us">
                <FintechCaseStudies />
            </div>
        </div>
    )
}

export default HomeEnterprise
import React from 'react'
import HeroLearning from './HeroLearning'
import LearningTabs from './LearningTabs'
import LearningOverview from './LearningOverview'
import LearningServices from './LearningServices'
import LearningHowWe from './LearningHowWe'
import FintechValues from '../Fintech/FintechValues'
import LearningExpertise from './LearningExpertise'
import FintechReviews from '../Fintech/FintechReviews'
import FintechCaseStudies from '../Fintech/FintechCaseStudies'

const HomeLearning = () => {
    return (
        <div>
            <HeroLearning />
            <LearningTabs />
            <div id="learning-overview">
                <LearningOverview />
            </div>
            <div id="learning-services">
                <LearningServices />
            </div>
            <div id="learning-process">
                <LearningHowWe />
            </div>
            <div id="learning-core-values">
                <FintechValues />
            </div>
            <div id="learning-expertise">
                <LearningExpertise />
            </div>
            <div id="learning-reviews">
                <FintechReviews />
            </div>
            <div id="learning-contact">
                <FintechCaseStudies />
            </div>
        </div>
    )
}

export default HomeLearning
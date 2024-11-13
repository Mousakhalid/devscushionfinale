import React from 'react'
import HeroCompany from './HeroCompany'
import TabsSection from './TabsSection'
import CompanyImageSection from './CompanyImageSection'
import CompanyDevelopment from './CompanyDevelopment'
import CompanyCards from './CompanyCards'
import CompanyHistory from './CompanyHistory'
import BlogHome from '../Home/BlogHome'

const MainCompanyPage = () => {
    return (
        <div>
            <HeroCompany />
            <TabsSection />
            <CompanyImageSection />
            <CompanyDevelopment />
            <CompanyCards />
            <CompanyHistory />
            <BlogHome />
        </div>
    )
}

export default MainCompanyPage
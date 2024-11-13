import MainIndustryPage from '@/components/Industry/MainIndustryPage'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Industries | We are serving",
};



const IndustriesPage = () => {
  return (
    <div>
      <MainIndustryPage />
      <GetInTouch />
    </div>
  )
}

export default IndustriesPage
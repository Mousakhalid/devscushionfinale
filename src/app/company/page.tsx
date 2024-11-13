import MainCompanyPage from '@/components/Company/MainCompanyPage'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Company | Lets know about us",
};



const CompanyPage = () => {
  return (
    <div>
      <MainCompanyPage />
      <GetInTouch />
    </div>
  )
}

export default CompanyPage
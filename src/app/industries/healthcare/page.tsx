import HomeHealthCare from '@/components/Industry/HealthCare/HomeHealthCare'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Health Care | Industry we are serving",
};



const HealthcarePage = () => {
  return (
    <div>
      <HomeHealthCare />
      <GetInTouch />
    </div>
  )
}

export default HealthcarePage
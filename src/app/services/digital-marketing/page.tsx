import MainMarketing from '@/components/Service/DigitalMarketing/MainMarketing'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Digital Marketing | Services",
};



const DigitalMarketingPage = () => {
  return (
    <div>
      <MainMarketing />
      <GetInTouch />
    </div>
  )
}

export default DigitalMarketingPage
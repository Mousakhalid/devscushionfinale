import GetInTouch from '@/components/Stable/GetInTouch'
import HomeWhyUs from '@/components/WhyUS/HomeWhyUs'
import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
  title: "Why choose us",
};



const WhyChooseUsPage = () => {
  return (
    <div>
      <HomeWhyUs />
      <GetInTouch />
    </div>
  )
}

export default WhyChooseUsPage
import HomeLearning from '@/components/Industry/Learning/HomeLearning'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "LMS | Industry we are serving",
};



const LMSPage = () => {
  return (
    <div>
      <HomeLearning />
      <GetInTouch />
    </div>
  )
}

export default LMSPage
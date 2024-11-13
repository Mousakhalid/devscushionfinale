import MainFintechPage from '@/components/Industry/Fintech/MainFintechPage'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
  title: "FinTech | Industry we are serving",
};




const FintechPage = () => {
  return (
    <div>
      <MainFintechPage />
      <GetInTouch />
    </div>
  )
}

export default FintechPage
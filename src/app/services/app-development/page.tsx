import AppDevelopmentHome from '@/components/Service/AppDevelopment/AppDevelopmentHome'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "App Development | Services",
};



const AppDevelopmentPage = () => {
  return (
    <div>
      <AppDevelopmentHome />
      <GetInTouch />
    </div>
  )
}

export default AppDevelopmentPage
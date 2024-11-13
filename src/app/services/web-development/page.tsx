import WebDevelopmentHome from '@/components/Service/WebDevelopment/WebDevelopmentHome'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Web Development | Services",
};



const WebDevelopmentPage = () => {
  return (
    <div className=''>
      <WebDevelopmentHome />
      <GetInTouch />
    </div>
  )
}

export default WebDevelopmentPage
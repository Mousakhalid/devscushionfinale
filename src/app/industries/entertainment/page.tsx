import EntertainmentHome from '@/components/Industry/Entertainment/EntertainmentPage'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Entertainment | Industry we are serving",
};



const EntertainmentPage = () => {
  return (
    <div>
      <EntertainmentHome />
      <GetInTouch />
    </div>
  )
}

export default EntertainmentPage
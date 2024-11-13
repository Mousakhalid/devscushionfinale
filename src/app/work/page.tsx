import GetInTouch from '@/components/Stable/GetInTouch'
import MainWorkPage from '@/components/Work/MainWorkPage'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Case Studies | Work",
};


const WorkPage = () => {
  return (
    <div>
      <MainWorkPage />
      <GetInTouch />
    </div>
  )
}

export default WorkPage
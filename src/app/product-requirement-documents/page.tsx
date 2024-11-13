import HomePrd from '@/components/PRD/HomePrd'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
  title: "Product Requirement Documents",
};




const page = () => {
  return (
    <div>
      <HomePrd />
      <GetInTouch />
    </div>
  )
}

export default page
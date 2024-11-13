import HomeEnterprise from '@/components/Industry/Enterprise/HomeEnterprise'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Enterprise | Industries we are serving",
};



const EnterprisesPage = () => {
  return (
    <div>
      <HomeEnterprise />
      <GetInTouch />
    </div>
  )
}

export default EnterprisesPage
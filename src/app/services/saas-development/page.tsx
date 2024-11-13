import MainSaas from '@/components/Service/Saas/MainSaas'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "SaaS Development | Services",
};



const SaasDevelopmentPage = () => {
  return (
    <div>
      <MainSaas />
      <GetInTouch />
    </div>
  )
}

export default SaasDevelopmentPage
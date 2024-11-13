import MainDevops from '@/components/Service/Devops/MainDevops'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: " DevOps Solutions | Services",
};



const DevopsSolutionsPage = () => {
  return (
    <div>
      <MainDevops />
      <GetInTouch />
    </div>
  )
}

export default DevopsSolutionsPage
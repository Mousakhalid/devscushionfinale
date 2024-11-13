import HomeMission from '@/components/Mission/HomeMission'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Mission & Vision ",
};



const MissionVisionValuesPage = () => {
  return (
    <div>
      <HomeMission />
      <GetInTouch />
    </div>
  )
}

export default MissionVisionValuesPage
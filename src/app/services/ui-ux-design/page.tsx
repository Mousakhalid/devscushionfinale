import MainUiUx from '@/components/Service/UIUX/MainUiUx'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "UI/UX Design | Services",
};



const UIUXDesign = () => {
  return (
    <div>
      <MainUiUx />
      <GetInTouch />
    </div>
  )
}

export default UIUXDesign
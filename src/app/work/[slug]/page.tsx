import GetInTouch from '@/components/Stable/GetInTouch'
import SlugWork from '@/components/Work/SlugWork'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Work | Our Case Studies",
};


const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <SlugWork params={params} />
      <GetInTouch />
    </div>
  )
}

export default page
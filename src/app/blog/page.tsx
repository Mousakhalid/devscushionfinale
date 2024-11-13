import BlogHome from '@/components/Blog/Home'
import GetInTouch from '@/components/Stable/GetInTouch'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Blogs | Read Resources",
};



const BlogPage = () => {
  return (
    <div>
        <BlogHome />
        <GetInTouch />
    </div>
  )
}

export default BlogPage
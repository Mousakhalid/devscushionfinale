import BlogPost from '@/components/Blog/SlugPage'
import Newsletter from '@/components/Stable/NewsLetter'
import { Metadata } from 'next';
import React from 'react'


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

    return {
        title: params.slug,
        description: params.slug,
        openGraph:{
            images:[
                {url:'/opengraph-image.png'}
            ]
        }
    } 
}



const page = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <BlogPost params={params} />
            <Newsletter />
        </div>
    )
}

export default page
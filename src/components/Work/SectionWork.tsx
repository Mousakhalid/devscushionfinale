'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const getData = groq`*[_type == "caseStudy"] {
  title,
  "slug": slug.current,
  "heroImageUrl": heroImage.asset->url,
  "logoUrl": logo.asset->url,
  overview,
  buttonText,
  buttonVariant,
  website,
  "websiteImageUrl": websiteImage.asset->url,
  bgColor
}`;

const SectionWork = async () => {
    let cases = [];

    try {
        cases = await client.fetch(getData);
        if (!cases || cases.length === 0) {
            console.error('No case studies found');
            return;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return;
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-gray-700'>Case Studies</h1>
            <div className='my-16'>

                <div className='grid md:grid-cols-3 grid-cols-1 md:mx-12 mx-8 gap-6'>
                    {cases.map((caseStudy: any) => (
                        <div>
                            <Link href={`/work/${caseStudy.slug}`}>
                                <div
                                    key={caseStudy.slug}
                                    className='rounded-md px-8  pt-12 flex justify-center flex-col space-y-6 items-center'
                                    style={{ backgroundColor: caseStudy.bgColor || '#ffffff' }} // Using inline styles for bgColor
                                >
                                    <div className='flex items-center justify-center space-x-4'>
                                        <Image
                                            src={caseStudy.logoUrl || '/default-logo.png'}
                                            alt={caseStudy.title}
                                            width={98}
                                            height={98}
                                        />
                                        <p className='text-xl font-bold text-white'>{caseStudy.title}</p>
                                    </div>
                                    <p className='text-xl font-bold text-center text-gray-50'>{caseStudy.title}</p>
                                    <p className='text-gray-200 text-center'>{caseStudy.overview}</p>
                                    <Button className='bg-transparent text-gray-50 py-4 border border-gray-100' variant={'outline'}>
                                        {caseStudy.buttonText || 'View Details'}
                                    </Button>
                                    <div className='bg-white px-6 py-3 rounded-t-lg'>
                                        <p className='text-gray-700'>Website</p>
                                        <Image
                                            src={caseStudy.websiteImageUrl || '/default-image.jpg'}
                                            className='-mb-4'
                                            alt='Website Image'
                                            width={160}
                                            height={160}
                                        />
                                    </div>



                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default SectionWork;

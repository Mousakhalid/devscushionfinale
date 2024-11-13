import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const getData = groq`*[_type == "caseStudy"] {
  title,
  "slug": slug.current,
  "heroImageUrl": heroImage.asset->url,
  overview,
  buttonText,
  buttonVariant,
  bgColor
}`;

const FintechCaseStudies = async () => {
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
        <div className='px-8 py-16'>
            <h1 className='text-3xl font-bold text-center text-gray-700 mb-16'>Case Studies</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                {cases.map((caseStudy: any) => (
                    <div key={caseStudy.slug} className='shadow-xl px-7 py-5 rounded-md'>
                        <div className='relative'>
                            <Image
                                src={caseStudy.heroImageUrl || '/default-hero-image.jpg'}
                                alt={caseStudy.title}
                                width={200}
                                height={200}
                                className='object-cover w-full h-48 rounded-md' // Ensures image covers the area and maintains aspect ratio
                            />
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-xl font-bold'>{caseStudy.title}</h2>
                            <p className='text-gray-700'>{caseStudy.overview}</p>
                            {/* Case study button linking to the individual case study page */}
                            <div>
                                <Link href={`/work/${caseStudy.slug}`}>
                                    <Button className='py-5 px-9 bg-transparent hover:bg-[#6F2FA0] w-full duration-700 hover:text-gray-50 font-semibold' variant={caseStudy.buttonVariant || 'outline'}>
                                        {caseStudy.buttonText || 'Read Case Study'}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FintechCaseStudies;

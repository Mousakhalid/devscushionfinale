import { businessTip } from '@/lib/interface';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Fetch data from Sanity
async function getData(): Promise<businessTip[]> {
    const query = groq`*[_type == "businessTip"] {
    title, 
    overview,
    _createdAt,
    slug {
      current
    },
    _id,
    date,
    "mainImage": mainImage.asset->url
  }`;

    try {
        const data = await client.fetch(query);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

// Revalidate every 60 seconds
export const revalidate = 60;

// Helper function to limit words
function limitWords(text: string, maxWords: number): string {
    const words = text.split(' ');
    return words.length > maxWords
        ? words.slice(0, maxWords).join(' ') + '...'
        : text;
}

// Main Blog Page Component
const MainBusinessTipBlogPage = async () => {
    const data = await getData();
    console.log("Fetched Data:", data);

    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No content available.</div>;
    }

    return (
        <main className="grid md:grid-cols-3 grid-cols-1">
            {data.map((app) => (
                <div key={app._id} className="mb-6 px-8">
                    <div className="rounded-t-md">
                        <article>
                            <Link href={`/blog/category/business-tip/${app.slug?.current}`}>
                                <div className="bg-gray-100">
                                    {app.mainImage && (
                                        <Image
                                            src={app.mainImage}
                                            alt={app.title}
                                            width={600}
                                            height={600}
                                            className="h-[200px] w-[400px]"
                                        />
                                    )}
                                    <div className="py-5 space-y-3 px-4">
                                        <h1 className="font-bold">
                                            {limitWords(app.title, 7)}
                                        </h1>
                                        <p>
                                            {app._createdAt
                                                ? new Date(app._createdAt).toDateString()
                                                : "Date unavailable"}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    </div>
                </div>
            ))}
        </main>
    );
};



export default MainBusinessTipBlogPage;

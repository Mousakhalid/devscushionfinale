
import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

// GROQ query to fetch posts
const getData = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  publishedAt,
  "author": {
    "name": author->name,
    "image": author->image.asset->url
  },
  "mainImage": mainImage.asset->url,
  "slug": slug.current
}`;

const BlogHome = async () => {
    const posts = await client.fetch(getData);

    // Get only the first 3 posts
    const latestPosts = posts.slice(0, 3);

    return (
        <div className="p-8">
            <div className="space-y-3 mb-8">
                <p className="text-[12px] text-center text-gray-400 leading-relaxed tracking-wider">
                    From our blog
                </p>
                <h1 className="text-3xl font-bold text-center">
                    More articles from the blog library
                </h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {latestPosts.map((post: any, index: number) => {
                    // Function to trim the title to 7 words
                    const trimmedTitle = post.title
                        .split(' ')
                        .slice(0, 7)
                        .join(' ')
                        .concat(post.title.split(' ').length > 7 ? '...' : '');

                    return (
                        <div key={index}>
                            {/* Link the entire card to the post's individual page */}
                            <Link href={`/blog/${post.slug}`}>
                                <div className="bg-gray-100 border rounded shadow overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200">
                                    {post.mainImage && (
                                        <div className="relative h-48 w-full group">
                                            <Image
                                                src={post.mainImage}
                                                alt={post.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="w-full h-full object-cover group-hover:bg-gray-200 transition-all duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                                        </div>
                                    )}
                                    <div className="p-4">
                                        <div className="flex items-center space-x-3 mb-4">
                                            {post.author.image && (
                                                <Image
                                                    src={post.author.image}
                                                    alt={post.author.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            )}
                                            <span className="text-sm font-medium text-gray-700">
                                                by {post.author.name}
                                            </span>
                                        </div>
                                        <h2 className="text-lg font-semibold text-gray-800 mb-2 transition-colors duration-300 hover:text-blue-600">
                                            {trimmedTitle}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {new Date(post.publishedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogHome;

import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

// GROQ query to fetch the post data by slug
async function getData(slug: string) {
  const query = groq`*[_type == "post" && slug.current == '${slug}'] {
    title,
    publishedAt,
    "author": {
      "name": author->name, 
      "image": author->image.asset->url
    },
    "mainImage": mainImage.asset->url,
    "currentSlug": slug.current,
    body,
    "categories": categories[]->{
      title,
      slug
    }
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

interface BlogPostProps {
  params: { slug: string };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const data = await getData(params.slug);

  if (!data) {
    return <div>Post not found</div>;
  }

  return (
    <div className="md:px-64 p-8">
      <div className="mb-8">
        <h1 className="md:text-4xl font-bold">{data.title}</h1>
        <div className="flex items-center space-x-3 mt-4">
          {data.author.image && (
            <Image
              src={data.author.image}
              alt={data.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <span className="text-sm font-medium text-gray-700">by {data.author.name}</span>
          <span className="text-sm text-gray-500">
            {new Date(data.publishedAt).toLocaleDateString()}
          </span>
        </div>
        {data.mainImage && (
          <div className="relative w-full h-96 mt-6">
            <Image
              src={data.mainImage}
              alt={data.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Render categories below the author name */}
      <div className="mt-4">
        <span className="text-sm text-gray-500">Categories: </span>
        {data.categories && data.categories.length > 0 ? (
          <ul className="flex space-x-2">
            {data.categories.map((category: { title: string; slug: { current: string } }, index: number) => (
              <li key={index}>
                <p className="text-blue-500 hover:underline cursor-pointer">
                  {category.title}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-gray-500">No categories available</span>
        )}
      </div>

      {/* Render Portable Text body */}
      <div className="prose mt-8">
        <PortableText value={data.body} />
      </div>
    </div>
  );
};

export default BlogPost;

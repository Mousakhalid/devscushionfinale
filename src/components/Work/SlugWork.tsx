import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const getData = async (slug: string) => {
  const query = groq`*[_type == "caseStudy" && slug.current == $slug] {
    title,
    slug,
    heroImage {
      asset->{url}
    },
    logo {
      asset->{url}
    },
    overview,
    content,
    buttonText,
    buttonVariant,
    website,
    websiteImage {
      asset->{url}
    },
    bgColor,
    techStack[] {
      techLogo,
    },
    solution,
    results
  }[0]`;

  const data = await client.fetch(query, { slug });
  return data;
};

interface SlugWorkProps {
  params: { slug: string };
}

const SlugWork = async ({ params }: SlugWorkProps) => {
  const data = await getData(params.slug);

  if (!data) {
    return <div>Case Study Not Found</div>;
  }

  return (
    <div className="md:px-64 p-8">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        {data.heroImage?.asset?.url && (
          <div className="relative w-full h-96 mt-6">
            <Image
              src={data.heroImage.asset.url}
              alt={data.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Overview Section */}
      {data.overview && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-gray-700">{data.overview}</p>
        </div>
      )}

      {/* Tech Stack Section */}
      {data.techStack && data.techStack.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Tech Stack:</h3>
          <div className="flex space-x-4">
            {data.techStack.map((tech: { techLogo: string }, index: number) =>
              tech.techLogo ? (
                <div key={index} className="w-12 h-12">
                  <Image
                    src={tech.techLogo}
                    alt={`Tech Stack ${index}`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              ) : null
            )}
          </div>
        </div>
      )}

      {/* Content Section */}
      {data.content && (
        <div className="prose mt-8">
          <PortableText value={data.content} />
        </div>
      )}

      {/* Solution Section */}
      {data.solution && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="mt-4 text-gray-700">{data.solution}</p>
        </div>
      )}

      {/* Results Section */}
      {data.results && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Results</h2>
          <p className="mt-4 text-gray-700">{data.results}</p>
        </div>
      )}

      {/* Website Section */}
      {data.website && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Website</h3>
          {data.websiteImage?.asset?.url && (
            <div className="relative w-full h-48 mt-4">
              <Image
                src={data.websiteImage.asset.url}
                alt="Website Image"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Visit Website
          </a>
        </div>
      )}

      {/* Button Section */}
      {data.buttonText && (
        <div className="mt-8">
          <a
            href={data.website || "#"}
            className={`btn-${data.buttonVariant} py-2 px-4 rounded text-white`}
          >
            {data.buttonText}
          </a>
        </div>
      )}
    </div>
  );
};

export default SlugWork;

import { MetadataRoute } from "next";
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

// Define types for blog post and case study slugs
interface BlogPostSlug {
    slug: string;
}

interface CaseStudySlug {
    slug: string;
}

// Function to fetch all blog post slugs from Sanity
async function getBlogPostSlugs(): Promise<BlogPostSlug[]> {
    const query = groq`*[_type == "post"] { "slug": slug.current }`;
    const posts: BlogPostSlug[] = await client.fetch(query);
    return posts;
}

// Function to fetch all case study slugs from Sanity
async function getCaseStudySlugs(): Promise<CaseStudySlug[]> {
    const query = groq`*[_type == "caseStudy"] { "slug": slug.current }`;
    const caseStudies: CaseStudySlug[] = await client.fetch(query);
    return caseStudies;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    
    // Fetch slugs for blog posts and case studies
    const [blogPostSlugs, caseStudySlugs] = await Promise.all([
        getBlogPostSlugs(),
        getCaseStudySlugs(),
    ]);

    // Generate URLs for each blog post
    const blogPostUrls: MetadataRoute.Sitemap = blogPostSlugs.map(({ slug }) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(), // Optionally set actual last modified date
    }));

    // Generate URLs for each case study
    const caseStudyUrls: MetadataRoute.Sitemap = caseStudySlugs.map(({ slug }) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified: new Date(), // Optionally set actual last modified date
    }));

    // Return the full sitemap array, including static URLs
    return [
        // Static URLs
        { url: `${baseUrl}/work`, lastModified: new Date() },
        { url: `${baseUrl}/why-choose-us`, lastModified: new Date() },
        { url: `${baseUrl}/services/web-development`, lastModified: new Date() },
        { url: `${baseUrl}/services/ui-ux-design`, lastModified: new Date() },
        { url: `${baseUrl}/services/saas-development`, lastModified: new Date() },
        { url: `${baseUrl}/services/digital-marketing`, lastModified: new Date() },
        { url: `${baseUrl}/services/devops-solutions`, lastModified: new Date() },
        { url: `${baseUrl}/services/app-development`, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/product-requirement-documents`, lastModified: new Date() },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
        { url: `${baseUrl}/pricing`, lastModified: new Date() },
        { url: `${baseUrl}/mission-vision-values`, lastModified: new Date() },
        { url: `${baseUrl}/industries/lms`, lastModified: new Date() },
        { url: `${baseUrl}/industries/healthcare`, lastModified: new Date() },
        { url: `${baseUrl}/industries/fintech`, lastModified: new Date() },
        { url: `${baseUrl}/industries/entertainment`, lastModified: new Date() },
        { url: `${baseUrl}/industries/enterprises`, lastModified: new Date() },
        { url: `${baseUrl}/industries`, lastModified: new Date() },
        { url: `${baseUrl}/get-a-quote`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/company`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
        // Dynamic URLs
        ...blogPostUrls,
        ...caseStudyUrls,
    ];
}

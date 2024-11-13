// schemas/caseStudy.js
export default {
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the case study',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Unique URL path for this case study page',
        options: {
          source: 'title',
          maxLength: 200,
        },
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        description: 'Main image for the case study',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        description: 'Logo image for the case study',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'overview',
        title: 'Overview',
        type: 'text',
        description: 'A brief overview of the case study',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Detailed content of the case study',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        description: 'Text to display on the button',
        initialValue: 'View Details',
      },
      {
        name: 'buttonVariant',
        title: 'Button Variant',
        type: 'string',
        description: 'Button variant styling, e.g., outline or solid',
      },
      {
        name: 'website',
        title: 'Website',
        type: 'url',
        description: 'URL of the group’s website',
      },
      {
        name: 'websiteImage',
        title: 'Website Image',
        type: 'image',
        description: 'Image displayed for the website section',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bgColor',
        title: 'Background Color',
        type: 'string',
        description: 'Select a background color',
        options: {
          list: [
            { title: 'Light Gray', value: '#F3F4F6' },
            { title: 'White', value: '#FFFFFF' },
            { title: 'Dark Blue', value: '#1E3A8A' },
            { title: 'Soft Pink', value: '#FAD2E1' },
            { title: 'Teal', value: '#14B8A6' },
            { title: 'Orange', value: '#F97316' },
            { title: 'Warm Yellow', value: '#FACC15' },
            { title: 'Sky Blue', value: '#38BDF8' },
            { title: 'Forest Green', value: '#166534' },
            { title: 'Deep Purple', value: '#7C3AED' },
            { title: 'Rose Red', value: '#E11D48' },
            { title: 'Charcoal', value: '#374151' },
            { title: 'Coral', value: '#FB7185' },
            { title: 'Lime Green', value: '#84CC16' },
            { title: 'Soft Lavender', value: '#C4B5FD' },
            { title: 'Pastel Mint', value: '#A7F3D0' },
            { title: 'Navy Blue', value: '#1E40AF' },
            { title: 'Golden Yellow', value: '#FFD700' },
            { title: 'Steel Blue', value: '#4682B4' },
            { title: 'Blush Pink', value: '#FFC0CB' },
          ],
        },
      },
      {
        name: 'techStack',
        title: 'Tech Stack',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
        description: 'Images of the different technologies or products used in the project',
      },
      {
        name: 'solution',
        title: 'Solution',
        type: 'text',
        description: 'Description of the solution provided for the case study',
      },
      {
        name: 'results',
        title: 'Results',
        type: 'text',
        description: 'Description of the results achieved from the project',
      },
    ],
  };
  
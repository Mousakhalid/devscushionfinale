export default {
  name: 'logoticker',
  title: 'Logo Ticker',
  type: 'document',
  fields: [
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
      validation: (Rule:any) => Rule.min(1).max(20).error('You need at least 1 logo and can add up to 20'),
    },
  ],
};

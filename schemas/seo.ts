export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The title that appears in search engines and browser tabs',
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      description: 'A brief description of the page for search engines',
      validation: (Rule: any) => Rule.max(160).warning('Description should be under 160 characters'),
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords that describe the content of the page',
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image that appears when shared on social media',
      options: {
        hotspot: true,
      },
    },
  ],
}

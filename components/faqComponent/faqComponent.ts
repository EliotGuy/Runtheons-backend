import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const faqComponent = defineField({
  name: 'faqComponent',
  title: 'FAQ',
  icon: BlockContentIcon,
  description: 'Frequently Asked Questions',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'titleImage',
      title: 'Title Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'title',
      media: 'titleImage',
    },
    prepare: ({heading, media}) => ({
      title: heading || 'No Title',
      media,
    }),
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

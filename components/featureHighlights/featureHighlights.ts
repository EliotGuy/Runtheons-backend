import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const featureHighlights = defineField({
  name: 'featureHighlights',
  title: 'Feature Highlights',
  icon: BlockContentIcon,
  description: 'Feature Highlights',
  type: 'object',
  fields: [
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'title',
    },
    prepare: ({heading}) => ({
      title: heading || 'Feature Highlight',
    }),
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

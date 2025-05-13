import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const coachSection = defineField({
  name: 'coachSection',
  title: 'Coach Section',
  icon: BlockContentIcon,
  description: 'Coach Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'descriptionBlocks',
      title: 'Description Blocks',
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
              name: 'content',
              title: 'Content',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      heading: 'title',
      ctaText: 'subtitle',
    },
    prepare: ({heading, ctaText}) => ({
      title: heading || 'No heading',
      subtitle: ctaText ? `CTA: ${ctaText}` : 'No CTA',
    }),
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

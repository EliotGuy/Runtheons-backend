import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const waitingList = defineField({
  name: 'waitingList',
  title: 'Waiting List',
  icon: BlockContentIcon,
  description: 'Waiting List',
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
      type: 'text',
    },
    {
      name: 'ctaText',
      title: 'ctaText',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
  preview: {
    select: {
      heading: 'title',
      ctaText: 'ctaText',
      media: 'image',
    },
    prepare: ({heading, ctaText, media}) => ({
      title: heading || 'No heading',
      subtitle: ctaText ? `CTA: ${ctaText}` : 'No CTA',
      media,
    }),
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

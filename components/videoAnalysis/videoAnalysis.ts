import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const videoAnalysis = defineField({
  name: 'videoAnalysis',
  title: 'Video Analysis',
  icon: BlockContentIcon,
  description: 'Video Analysis',
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
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      heading: 'title',
      ctaText: 'ctaText',
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

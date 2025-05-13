import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const thankYou = defineField({
  name: 'thankYou',
  title: 'Thank You',
  icon: BlockContentIcon,
  description: 'Thank You',
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
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'inviteText',
      title: 'Invite Button Text',
      type: 'string',
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

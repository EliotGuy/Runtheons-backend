import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, ExpandIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const hero = defineField({
  name: 'hero',
  title: 'Hero',
  icon: BlockContentIcon,
  description: 'Hero component',
  type: 'object',
  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: PanelRightIcon,
      default: true,
    },
    {
      name: 'settings',
      title: 'Settings',
      icon: ControlsIcon,
    },
  ],
  fields: [
    {
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'A short label above the heading',
      group: 'content',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading text',
      group: 'content',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
      group: 'content',
    },
    {
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      description: 'URL the button should link to',
      group: 'content',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
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

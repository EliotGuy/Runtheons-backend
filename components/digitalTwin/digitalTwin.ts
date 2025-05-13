import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const digitalTwin = defineField({
  name: 'digitalTwin',
  title: 'Digital Twin',
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
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A short label above the heading',
      group: 'content',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'An array of descriptions with titles',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'descriptionItem',
          title: 'Description Item',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title of the description block',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              description: 'Content of the description block',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'content',
            },
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Upload an image for the hero section',
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

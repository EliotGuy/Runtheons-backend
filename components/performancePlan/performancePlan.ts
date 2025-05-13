import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, ExpandIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const performancePlan = defineField({
  name: 'performancePlan',
  title: 'Performance Plan',
  icon: BlockContentIcon,
  description: 'Performance component',
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
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {accept: 'video/*'},
            },
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
    {
      name: 'embeds',
      title: 'Embed Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {accept: 'video/*'},
            },
            {
              name: 'preview',
              title: 'Preview',
              type: 'image',
              options: {hotspot: true},
            },
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
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Atleta', value: 'ATLETA'},
                  {title: 'Performance Expert', value: 'PERFORMANCE_EXPERT'},
                ],
                layout: 'radio',
              },
            },
          ],
        },
      ],
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

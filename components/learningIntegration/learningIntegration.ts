import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const learningIntegration = defineField({
  name: 'learningIntegration',
  title: 'Learning & Integrations',
  icon: BlockContentIcon,
  description: 'Learning & Integrations',
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
      name: 'learningSection',
      title: 'Learning Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
        },
        {
          name: 'learningLogo',
          title: 'Learning Image',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'integrationsSection',
      title: 'Integrations Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
        },
        {
          name: 'integrationImage',
          title: 'Single Integration Image',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'integrations',
          title: 'Integrations (Multiple)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Integration Name',
                  type: 'string',
                },
                {
                  name: 'logo',
                  title: 'Integration Logo',
                  type: 'image',
                  options: {hotspot: true},
                },
              ],
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
    },
    prepare: ({heading}) => ({
      title: heading || 'Learning Integration',
    }),
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

import {LinkIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {PAGE_TYPES} from '../../lib'

export const REFERENCABLE_DOCUMENT_TYPES = [
  'pressRelease',
  'solutionsPartner',
  'technologyPartner',
  ...PAGE_TYPES,
]

export const internalLink = defineField({
  name: 'internalLink',
  title: 'Internal Link',
  icon: LinkIcon,
  type: 'object',
  options: {
    collapsible: false,
  },
  fields: [
    defineField({
      name: 'reference',
      title: 'Reference',
      description: 'Select a document to link to',
      type: 'reference',
      to: REFERENCABLE_DOCUMENT_TYPES.map((type) => ({type})),
    }),
    defineField({
      name: 'blank',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      description: 'Descriptive text for screen readers',
      type: 'string',
    }),
  ],
})

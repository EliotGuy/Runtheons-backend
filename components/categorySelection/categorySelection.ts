import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const categorySelection = defineField({
  name: 'categorySelection',
  title: 'Category Selection',
  icon: BlockContentIcon,
  description: 'Category Selection',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Category Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Category Icon',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(2).max(2),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const ourFounders = defineField({
  name: 'ourFounders',
  title: 'Our Founders',
  icon: BlockContentIcon,
  description: 'Our Founders',
  type: 'object',
  fields: [
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
      name: 'founders',
      title: 'Founders',
      type: 'array',
      of: [
        {
          type: 'person',
          name: 'person',
          title: 'Person',
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'title',
      description: 'description',
    },
    prepare: ({heading, description}) => ({
      title: heading || 'No heading',
      subtitle: description || '',
    }),
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

import {RiLayoutTopLine} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

const header = defineType({
  name: 'globalHeader',
  title: 'Global Header Settings',
  type: 'document',
  icon: RiLayoutTopLine,
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {media: 'logo'},
    prepare: ({media}) => ({
      title: 'Global Header Settings',
      media,
    }),
  },
})

export default header

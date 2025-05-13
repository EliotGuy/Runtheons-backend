import {RiLayoutBottomLine} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

const footer = defineType({
  name: 'footer',
  title: 'Global Footer Settings',
  type: 'document',
  icon: RiLayoutBottomLine,
  fields: [
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy Link',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Global Footer Settings',
    }),
  },
})

export default footer

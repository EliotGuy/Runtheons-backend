import { ImageIcon } from '@sanity/icons'
import { FaEllipsisH } from 'react-icons/fa'
import { defineField } from 'sanity'
import { definePageComponent } from '../definePageComponent'
import { PreviewTrustBar } from './PreviewTrustBar'
import { richImage } from '../../fields/richImage'
import { internalLink } from '../../fields/linkTypes/internalLink'

export const trustBar = definePageComponent({
  name: 'trustBar',
  title: 'Trust Bar',
  description: 'A component that displays a list of logos',
  icon: FaEllipsisH,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        defineField({
          name: 'linkName',
          title: 'Link Name',
          type: 'string',
        }),
        { ...internalLink, title: 'Link Reference' },
      ],
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {
            title: 'Scrolling',
            value: 'scrolling',
          },
          {
            title: 'Fixed',
            value: 'fixed',
          },
        ],
      },
      initialValue: 'scrolling',
    }),
    defineField({
      name: 'companies',
      title: 'Companies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'company' }],
        },
        {
          ...richImage,
          name: 'logo',
          title: 'Just a Logo',
          icon: ImageIcon,
        },
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      companies: 'companies',
    },
    prepare({ companies }) {
      const title = 'Trust Bar'

      return {
        title,
        companies,
      }
    },
  },
  components: {
    preview: PreviewTrustBar,
  },
})

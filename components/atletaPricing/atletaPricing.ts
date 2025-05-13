import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const atletaPricing = defineField({
  name: 'atletaPricing',
  title: 'atletaPricing',
  icon: BlockContentIcon,
  description: 'Atleta Pricing',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Subtitle',
    },
    {
      name: 'plans',
      type: 'array',
      title: 'Pricing Plans',
      of: [
        {
          type: 'object',
          name: 'pricingOption',
          title: 'Pricing Option',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'price',
              type: 'string',
              title: 'Price',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'features',
              type: 'array',
              title: 'Features',
              of: [{type: 'string'}],
            },
            {
              name: 'originPrice',
              type: 'string',
              title: 'Origin',
            },
            {
              name: 'discountPrice',
              type: 'string',
              title: 'Discount Price',
            },
            {
              name: 'ctaText',
              type: 'string',
              title: 'CTA Button Text',
            },
            {
              name: 'optionTitle',
              type: 'string',
              title: 'Option Title',
            },
            {
              name: 'options',
              type: 'text',
              title: 'Options',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'title',
      subTitle: 'subtitle',
      media: 'image',
    },
    prepare: ({heading, subTitle, media}) => ({
      title: heading || 'No heading',
      subtitle: subTitle,
      media,
    }),
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

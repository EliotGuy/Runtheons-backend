import {GenericInputWithJsonView} from '../GenericInputWithJsonView'
import {BlockContentIcon, ControlsIcon, ExpandIcon, PanelRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const pricingPlan = defineField({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  icon: BlockContentIcon,
  description: 'Pricing Plan',
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
      name: 'plans',
      title: 'Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Plan Name',
              type: 'string',
            },
            {
              name: 'tag',
              title: 'Plan Tag',
              type: 'string',
            },
            {
              name: 'highlightText',
              title: 'Highlight Text',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
            },
            {
              name: 'savings',
              title: 'Savings',
              type: 'string',
            },
            {
              name: 'benefits',
              title: 'Benefits',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'ctaText',
              title: 'CTA Text',
              type: 'string',
            },
            {
              name: 'border',
              title: 'Border',
              type: 'object',
              fields: [
                {
                  name: 'enabled',
                  title: 'Enable Border',
                  type: 'boolean',
                  description: 'Toggle the border for this plan',
                },
                {
                  name: 'color',
                  title: 'Border Color',
                  type: 'string',
                  description: 'Set a custom border color',
                },
              ],
            },
            {
              name: 'blur',
              title: 'Blur',
              type: 'object',
              fields: [
                {
                  name: 'enableBlur',
                  title: 'Enable Blur',
                  type: 'boolean',
                  description: 'Toggle the blur for this plan',
                },
                {
                  name: 'blurcolor',
                  title: 'Blur Color',
                  type: 'string',
                  description: 'Set a custom blur color',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'title',
      subtitle: 'subtitle',
    },
    prepare: ({heading, subtitle}) => ({
      title: heading || 'No heading',
      subtitle: subtitle ? `${subtitle}` : 'No Subtitle',
    }),
  },
  components: {
    input: GenericInputWithJsonView,
  },
})

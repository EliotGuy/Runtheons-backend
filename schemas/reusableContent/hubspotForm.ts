import {SiHubspot} from 'react-icons/si'
import {defineField, defineType} from 'sanity'
import {internalLink} from '../../fields/linkTypes/internalLink'

export const hubspotForm = defineType({
  name: 'hubspotForm',
  title: 'HubSpot Form',
  type: 'document',
  icon: SiHubspot,
  fields: [
    defineField({
      name: 'internalName',
      title: 'Internal Name',
      description:
        "This is the name that will be used to reference this form in the code. Try to use something that makes this form's purpose clear.",
      type: 'string',
    }),
    defineField({
      name: 'formId',
      title: 'Form ID',
      description: 'This is the ID of the form in Marketo.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submitAction',
      title: 'Submit Action',
      description: 'What will a visitor see after submitting your form',
      type: 'string',
      options: {
        list: [
          {title: 'Redirect to another page', value: 'redirect'},
          {title: 'Display an inline thank you message', value: 'inline'},
        ],
      },
    }),
    defineField({
      name: 'redirectLinkType',
      title: 'Redirect Link Type',
      description: 'Where visitor will be redirected to',
      type: 'string',
      options: {
        list: [
          {title: 'Internal Link', value: 'internalLink'},
          {title: 'External Link', value: 'externalLink'},
        ],
      },
      hidden: ({parent}) => parent?.submitAction !== 'redirect',
    }),
    defineField({
      ...internalLink,
      hidden: ({parent}) =>
        parent?.redirectLinkType !== 'internalLink' || parent?.submitAction !== 'redirect',
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      description: 'Redirect External Link',
      type: 'string',
      hidden: ({parent}) =>
        parent?.redirectLinkType !== 'externalLink' || parent?.submitAction !== 'redirect',
    }),
    defineField({
      name: 'thankYouMessage',
      title: 'Thank you message',
      description: 'Thank you message',
      type: 'simpleRichText',
      hidden: ({parent}) => parent?.submitAction !== 'inline',
    }),
  ],
  preview: {
    select: {
      title: 'internalName',
      subtitle: 'formId',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle: `Form ID: ${subtitle}`,
    }),
  },
})

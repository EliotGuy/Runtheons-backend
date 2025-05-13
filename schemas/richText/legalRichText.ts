import {link} from '../../fields/linkTypes/link'
import {faqs} from '../../fields/faqs'
import {internalLink} from '../../fields/linkTypes/internalLink'
import {downloadLink} from '../../fields/linkTypes/downloadLink'
import {anchor} from '../../fields/anchor'
import {DocumentPdfIcon} from '@sanity/icons'
import {SiHubspot} from 'react-icons/si'
import {defineArrayMember, defineType} from 'sanity'

export const legalRichText = defineType({
  name: 'legalRichText',
  title: 'Legal Rich Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // This config limits the styles can be applied to text in the editor
      // Specifically, this removes the default H1 option to avoid conflict
      // with the blog post title.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Heading 5', value: 'h5'},
        {title: 'Heading 6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong',
          },
          {
            title: 'Emphasis',
            value: 'em',
          },
          {
            title: 'Underline',
            value: 'underline',
          },
          {
            title: 'Code',
            value: 'code',
          },
        ],
        annotations: [link, internalLink, downloadLink],
      },
    }),
    faqs,
    anchor,
    defineArrayMember({
      name: 'pdf',
      title: 'PDF Embed',
      icon: DocumentPdfIcon,
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineArrayMember({
      type: 'reference',
      to: [{type: 'hubspotForm'}],
      icon: SiHubspot,
    }),
  ],
})

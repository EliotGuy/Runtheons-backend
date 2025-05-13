// –------------------------------------------------
// SIMPLE RICH TEXT (field)
//
// A rich text editor without headings and custom
// block types.
//
// –------------------------------------------------

import {tokenReference} from '../../fields/tokenReference'
import {richImage} from '../../fields/richImage'
import {link} from '../../fields/linkTypes/link'
import {internalLink} from '../../fields/linkTypes/internalLink'
import {defineArrayMember, defineType} from 'sanity'

export const simpleRichTextWithImages = defineType({
  name: 'simpleRichTextWithImages',
  title: 'Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      of: [tokenReference],
      // This config limits the styles can be applied to text in the editor
      // Specifically, this removes the default H1 option to avoid conflict
      // with the blog post title.
      styles: [],
      marks: {
        annotations: [link, internalLink],
        decorators: [
          {
            title: 'Strong',
            value: 'strong',
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
      },
    }),
    richImage,
  ],
})

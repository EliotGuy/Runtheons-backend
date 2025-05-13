// –------------------------------------------------
// COMPLEX RICH TEXT (field)
//
// Contains the body content for blog posts on the site.
//
// –------------------------------------------------

import { anchor } from '../../fields/anchor'
import { tokenReference } from '../../fields/tokenReference'
import { richImage } from '../../fields/richImage'
import { link } from '../../fields/linkTypes/link'
import { internalLink } from '../../fields/linkTypes/internalLink'
import { ctaCard } from '../../components/hero/ctaCard/ctaCard'
import { ctaBar } from '../../fields/ctaBar'
import { GoHorizontalRule } from 'react-icons/go'
import { defineArrayMember, defineType } from 'sanity'

export const complexRichText = defineType({
  name: 'complexRichText',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // These blocks can be added inline with text in the editor
      of: [tokenReference],
      // This config limits the styles that can be applied to text in the editor
      // Specifically, this removes the default H1 option to avoid conflict
      // with the blog post title.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Heading 5', value: 'h5' },
        { title: 'Heading 6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        annotations: [link, internalLink],
      },
    }),
    richImage,
    ctaCard,
    ctaBar,
    defineArrayMember({
      name: 'testimonialReference',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineArrayMember({
      name: 'videoReference',
      title: 'Video',
      type: 'reference',
      to: [{ type: 'video' }],
    }),
    anchor,
    defineArrayMember({
      name: 'hr',
      title: 'Horizontal Rule',
      icon: GoHorizontalRule,
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          initialValue: 'hr',
          hidden: true,
        },
      ],
      components: {
        preview: () => <hr />,
      },
    }),
  ],
})

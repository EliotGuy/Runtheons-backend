// –------------------------------------------------
// PERSON (document)
//
// Contains details about people referenced anywhere on the site.
// For example, this document may be referenced as an author for a blog post or testimonial.
//
// –------------------------------------------------

import {EditIcon, LinkIcon, UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const person = defineType({
  name: 'person',
  title: 'Person',
  icon: UserIcon,
  type: 'document',
  fields: [
    // Basic information
    defineField({
      name: 'firstName',
      title: 'First',
      type: 'string',
      validation: (Rule) =>
        Rule.required().warning('You must provide a first name for this person.'),
    }),
    defineField({
      name: 'lastName',
      title: 'Last',
      type: 'string',
      validation: (Rule) =>
        Rule.required().warning('You must provide a last name for this person.'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      // See Sanity's docs on image fields here: https://www.sanity.io/docs/image-type
      options: {
        hotspot: true,
      },
    }),
  ],

  // The preview object controls how person documents will appear in lists.
  // `select` gathers information from the document's fields and prepares
  // an object that will be passed to the prepare function. Note how the keys
  // in `select` are destructured in the preapre function.

  // This configuration joins the first and last names as the displayed title
  // and collates the role and company name (which is grabbed from the
  // referenced company doc!) as a subtitle.
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      media: 'headshot',
    },
    prepare({firstName, lastName, media}) {
      const title = [firstName, lastName].filter((i) => i).join(' ')

      return {
        title,
        media,
      }
    },
  },
})

// –------------------------------------------------
// Blog Categories (field)
//
// Used to create a group of categories fields in
// multiple contexts across the site.
//
// –------------------------------------------------

import {defineField} from 'sanity'

export const blogCategories = defineField({
  name: 'blogCategories',
  title: 'Blog Categories',
  type: 'object',
  group: 'categories',
  fields: [
    defineField({
      name: 'blogCategory',
      title: 'Blog Category',
      description: 'This is the category of the blog.',
      type: 'reference',
      to: {type: 'blogCategory'},
      options: {
        filter: categoryFilterFn,
        disableNew: true,
      },
    }),
    defineField({
      name: 'blogTopics',
      title: 'Blog Topics',
      description:
        'Select one or more relevant topics so visitors can find it through search or related content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'blogTopic'},
          options: {
            filter: categoryFilterFn,
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      description:
        'Select one or more relevant Use Cases so visitors can find it through search or related content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'useCase'},
          options: {
            filter: categoryFilterFn,
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      description: 'This is the industry of blog.',
      type: 'reference',
      to: {type: 'industry'},
      options: {
        filter: categoryFilterFn,
        disableNew: true,
      },
    }),
    defineField({
      name: 'technology',
      title: 'Technology',
      description: 'This is the technology used in blog.',
      type: 'reference',
      to: {type: 'technology'},
      options: {
        filter: categoryFilterFn,
        disableNew: true,
      },
    }),
  ],
})

/**
 * Filter function for category fields
 */
function categoryFilterFn({document, parentPath}) {
  // Prevent duplicates from showing
  const fieldValue = parentPath.reduce((obj, path) => obj[path], document)
  const refs = fieldValue.reduce((refArr, {_ref}) => {
    _ref && refArr.push(_ref)
    return refArr
  }, [])

  return {
    filter: '!(_id in $refs)',
    params: {
      refs,
    },
  }
}

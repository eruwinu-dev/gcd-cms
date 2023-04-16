import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'categoryType',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          {title: 'Post Category', value: 'post'},
          {title: 'Project Category', value: 'project'},
        ],
        layout: 'radio',
      },
    }),
  ],
})

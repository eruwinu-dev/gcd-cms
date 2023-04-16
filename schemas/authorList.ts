import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'authorList',
  title: 'Author List',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'author'},
          options: {
            filter: 'real == $real',
            filterParams: {real: true},
          },
        },
      ],
    }),
  ],
})

import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'Youtube Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Youtube video URL',
    }),
  ],
  preview: {
    select: {
      title: 'url',
    },
  },
})

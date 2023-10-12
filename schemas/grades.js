import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'grades',
  title: 'Grades',
  type: 'document',
  fields: [
    defineField({
      name: 'gradeNo',
      title: 'Grade No.',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

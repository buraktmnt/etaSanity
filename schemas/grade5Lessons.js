import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'grade5Lessons',
  title: 'Grade 5 Lessons',
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords - SEO',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description - SEO',
      type: 'string',
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'googleSlides',
      title: 'Google Slides',
      type: 'array',
      of: [
        {
          name: 'googleSlide',
          title: 'Google Slide',
          type: 'object',
          fields: [
            {name: 'googleSlideTitle', type: 'string', title: 'Google Slide Title'},
            {name: 'googleSlideLink', type: 'string', title: 'Google Slide Link'},
            {name: 'googleSlideImage', type: 'image', title: 'Google Slide Image'},
          ],
        },
      ],
    }),
    defineField({
      name: 'games',
      title: 'Games',
      type: 'array',
      of: [
        {
          name: 'googleSlide',
          title: 'Google Slide',
          type: 'object',
          fields: [
            {name: 'gameTitle', type: 'string', title: 'Game Title'},
            {name: 'gameLink', type: 'string', title: 'Game Link'},
            {name: 'gameImage', type: 'image', title: 'Game Image'},
          ],
        },
      ],
    }),
    defineField({
      name: 'lessonText',
      title: 'Lesson Text',
      type: 'blockContent',
    }),
  ],
})

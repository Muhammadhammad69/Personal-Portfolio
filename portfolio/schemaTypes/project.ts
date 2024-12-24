import {defineType, defineField} from 'sanity'

export const projects = defineType({
  title: 'Portfolio Projects',
  name: 'portfolioProjects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'projectContent',
      type: 'string',
    }),
    defineField({
      title: 'Project Image',
      name: 'projectImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
        }),
      ],
    }),
    defineField({
        title: 'Project URL',
        name: 'projectUrl',
        type: 'url'
      })
  ],
})

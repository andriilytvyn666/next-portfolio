import {Rule} from 'sanity'

export default {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'pix',
      type: 'array',
      description: 'jpeg (4:3 aspect ratio)',
      of: [{type: 'image', options: {accept: 'image/jpeg'}}],
      validation: (rule: Rule) => rule.min(1).required(),
    },
    {
      name: 'text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'links',
      type: 'array',
      of: [{type: 'link'}],
    },
    {
      name: 'featuredProjects',
      type: 'array',
      of: [{type: 'project'}],
      validation: (rule: Rule) => rule.required().min(3),
    },
  ],
}

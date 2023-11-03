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
      description: 'webp (4:3 aspect ratio)',
      of: [{type: 'image'}],
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
  ],
}

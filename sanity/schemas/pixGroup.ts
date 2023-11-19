import {Rule} from 'sanity'

export default {
  name: 'pixGroup',
  title: 'Pix group',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'pix',
      type: 'array',
      description: 'jpeg (4:3 aspect ratio)',
      of: [{type: 'image', options: {accept: 'image/jpeg'}}],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

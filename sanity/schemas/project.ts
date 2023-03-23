import {Rule} from 'sanity'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'subtitle',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'link',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      description: 'webp 128x128',
      options: {accept: 'image/webp'},
      validation: (rule: Rule) => rule.required(),
    },
  ],
}

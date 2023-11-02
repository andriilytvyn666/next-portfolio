import {Rule} from 'sanity'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      description: 'external link or internal (/projects)',
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

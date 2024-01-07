import {Rule} from 'sanity'

export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'url',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}

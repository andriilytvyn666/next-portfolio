import {Rule} from 'sanity'

export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'internalName',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}

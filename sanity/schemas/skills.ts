import {Rule} from 'sanity'

export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'subtitle',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'skillGroups',
      type: 'array',
      of: [{type: 'skillGroup'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

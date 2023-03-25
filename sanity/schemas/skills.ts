import {Rule} from 'sanity'

export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'skillGroups',
      type: 'array',
      of: [{type: 'skillGroup'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

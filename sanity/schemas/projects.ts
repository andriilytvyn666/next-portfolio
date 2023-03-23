import {Rule} from 'sanity'

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectGroups',
      type: 'array',
      of: [{type: 'projectGroup'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

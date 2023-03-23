import {Rule} from 'sanity'

export default {
  name: 'projectGroup',
  title: 'Project group',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(3),
    },
    {
      name: 'projects',
      type: 'array',
      of: [{type: 'project'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

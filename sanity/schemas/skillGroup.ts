import {Rule} from 'sanity'

export default {
  name: 'skillGroup',
  title: 'Skill group',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(3),
    },
    {
      name: 'skills',
      type: 'array',
      of: [{type: 'skill'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

import {Rule} from 'sanity'

export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

import {Rule} from 'sanity'

export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'degree',
      type: 'string',
      options: {list: ['Bachelor', 'Master', 'PhD']},
      initialValue: 'Bachelor',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'major',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'link',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'dateStarted',
      type: 'date',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'dateFinished',
      type: 'date',
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

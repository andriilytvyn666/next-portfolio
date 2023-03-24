import {Rule} from 'sanity'

export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'provider',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'dateFinished',
      type: 'date',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'certificate',
      type: 'file',
      title: 'Certificate PDF',
      options: {accepts: 'application/pdf'},
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

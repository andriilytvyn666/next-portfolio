import {Rule} from 'sanity'

export default {
  name: 'pic',
  title: 'Pic',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      description: 'jpeg (4:3 aspect ratio)',
      options: {accept: 'image/jpeg'},
      validation: (rule: Rule) => rule.required(),
    },
  ],
}

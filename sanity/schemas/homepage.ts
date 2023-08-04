import {Rule} from 'sanity'

// TODO: move resume link to separate field

export default {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'links',
      type: 'array',
      of: [{type: 'link'}],
    },
  ],
}

import {Rule} from 'sanity'

export default {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'text',
      type: 'localePortableText',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}

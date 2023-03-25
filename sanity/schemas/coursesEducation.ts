import {Rule} from 'sanity'

export default {
  name: 'coursesEducation',
  title: 'Courses & Education',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(3),
    },
    {
      name: 'subtitle',
      type: 'string',
      validation: (rule: Rule) => rule.required().min(3),
    },
    {
      name: 'courses',
      type: 'array',
      of: [{type: 'course'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'educationList',
      type: 'array',
      of: [{type: 'education'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

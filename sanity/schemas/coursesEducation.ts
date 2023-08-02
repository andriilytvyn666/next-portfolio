import {Rule} from 'sanity'

export default {
  name: 'coursesEducation',
  title: 'Courses & Education',
  type: 'document',
  fields: [
    {
      name: 'titleCourses',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'courses',
      type: 'array',
      of: [{type: 'course'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'titleEducation',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'educationList',
      type: 'array',
      of: [{type: 'education'}],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

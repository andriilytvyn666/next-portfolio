import {defaultLanguage, supportedLanguages} from '../fieldLocalization'
import {Rule} from 'sanity'

export default {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    validation: (rule: Rule) => rule.required().min(1),
    fieldset: lang.id === defaultLanguage ? null : 'translations',
  })),
}

import {defaultLanguage, supportedLanguages} from '../fieldLocalization'

export default {
  title: 'Locale portable text',
  name: 'localePortableText',
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
    type: 'array',
    of: [{type: 'block'}],
    fieldset: lang.id === defaultLanguage ? null : 'translations',
  })),
}

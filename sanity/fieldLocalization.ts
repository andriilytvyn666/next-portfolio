import {Language} from '@sanity/language-filter'

const supportedLanguages: Language[] = [
  {id: 'en', title: 'English'},
  {id: 'uk', title: 'Ukrainian'},
]

const defaultLanguage: string = 'en'

export {supportedLanguages, defaultLanguage}

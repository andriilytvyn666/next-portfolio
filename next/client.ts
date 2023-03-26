import { createClient } from '@sanity/client'

export const projectId = '5zmqw6cj'
export const dataset = 'production'

export default createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: '2023-03-22',
})

export const getLocalizedString = (
  locale: string,
  string: localeString
): string => {
  return locale === 'en' ? string.en : string.uk
}

export const getLocalizedPortableText = (
  locale: string,
  portableText: localePortableText
) => {
  return locale === 'en' ? portableText.en : portableText.uk
}

import { createClient } from '@sanity/client'

export const projectId = '5zmqw6cj'
export const dataset = 'production'

export default createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: '2023-03-22',
})

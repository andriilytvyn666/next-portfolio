import { createClient } from '@sanity/client'

export default createClient({
  projectId: '5zmqw6cj',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-22',
})

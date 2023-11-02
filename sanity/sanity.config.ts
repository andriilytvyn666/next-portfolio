import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
export default defineConfig({
  name: 'default',
  title: 'andrii-lytvyn-portfolio',

  projectId: '5zmqw6cj',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Main')
          .items([
            S.listItem()
              .title('Homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            ...S.documentTypeListItems().filter(
              (listItem) => !['project', 'homepage', 'link'].includes(`${listItem.getId()}`)
            ),
          ]),
    }),
    vercelDeployTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

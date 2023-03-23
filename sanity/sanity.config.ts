import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
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
              .title('Skills')
              .child(S.document().schemaType('skills').documentId('skills')),
            S.listItem()
              .title('Projects')
              .child(S.document().schemaType('projects').documentId('projects')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['skill', 'skillGroup', 'skills', 'project', 'projectGroup', 'projects'].includes(
                  `${listItem.getId()}`
                )
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

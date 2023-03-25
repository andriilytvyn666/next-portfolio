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
    vercelDeployTool(),
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
            S.listItem()
              .title('Courses & Education')
              .child(S.document().schemaType('coursesEducation').documentId('coursesEducation')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'skill',
                  'skillGroup',
                  'skills',
                  'project',
                  'projectGroup',
                  'projects',
                  'course',
                  'coursesEducation',
                  'education',
                ].includes(`${listItem.getId()}`)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

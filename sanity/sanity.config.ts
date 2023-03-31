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
              .title('Skills')
              .child(S.document().schemaType('skills').documentId('skills')),
            S.listItem()
              .title('Projects')
              .child(S.document().schemaType('projects').documentId('projects')),
            S.listItem()
              .title('Courses & Education')
              .child(S.document().schemaType('coursesEducation').documentId('coursesEducation')),
            S.listItem()
              .title('Homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
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
                  'homepage',
                ].includes(`${listItem.getId()}`)
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

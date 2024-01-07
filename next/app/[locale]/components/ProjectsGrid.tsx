'use client'

import imageUrlBuilder from '@sanity/image-url'
import { FC } from 'react'

import client from '../../../client'
import { useTabs } from '../providers/TabsProvider'
import Project from './Project'

type Props = {
  projectGroups: ProjectGroup[]
}

const ProjectsGrid: FC<Props> = ({ projectGroups }) => {
  const projects = useTabs()
  const builder = imageUrlBuilder(client)

  return (
    <>
      {projectGroups.map((group) => {
        if (group.name === projects.activeTab) {
          return (
            <>
              {group.projects.map((project) => {
                return (
                  <Project
                    key={project.title}
                    title={project.title}
                    subtitle={project.subtitle}
                    url={project.link}
                    imageUrl={builder.image(project.image).url()}
                  />
                )
              })}
            </>
          )
        }
      })}
    </>
  )
}

export default ProjectsGrid

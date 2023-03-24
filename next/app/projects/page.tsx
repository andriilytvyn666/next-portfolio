'use client'

import imageUrlBuilder from '@sanity/image-url'
import React, { use } from 'react'

import client from '../../client'
import Card from '../components/Card'
import CardGroup from '../components/CardGroup'
import PageHead from '../components/PageHead'

export default function Projects() {
  const data = use(fetchProjects())
  const builder = imageUrlBuilder(client)

  return (
    <>
      <PageHead
        title="Projects"
        className="lg:col-span-2"
        subtitle="Things I’ve been working on in my free time"
      />
      <>
        {data.projectGroups.map((projectGroup, index) => {
          return (
            <CardGroup key={index} title={projectGroup.name}>
              {projectGroup.projects.map((project, index) => {
                return (
                  <Card
                    key={index}
                    url={project.link}
                    title={project.title}
                    subtitle={project.subtitle}
                    imageUrl={builder.image(project.image).url()}
                  />
                )
              })}
            </CardGroup>
          )
        })}
      </>
    </>
  )
}

const fetchProjects = async () => {
  return client.fetch<Projects>(`*[_type == "projects"][0]`)
}

import imageUrlBuilder from '@sanity/image-url'
import { useLocale } from 'next-intl'
import React from 'react'

import client, { getLocalizedString } from '../../../client'
import Card from '../../components/Card'
import CardGroup from '../../components/CardGroup'
import PageHead from '../../components/PageHead'

export default async function Projects() {
  const data = await client.fetch<Projects>(`*[_type == "projects"][0]`)
  const builder = imageUrlBuilder(client)
  const locale = useLocale()

  // TODO: find a not to pass locale as an parameter
  return (
    <>
      <PageHead
        title={getLocalizedString(locale, data.title)}
        className="lg:col-span-2"
        subtitle={getLocalizedString(locale, data.subtitle)}
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
                    title={getLocalizedString(locale, project.title)}
                    subtitle={getLocalizedString(locale, project.subtitle)}
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

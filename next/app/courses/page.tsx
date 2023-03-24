import { buildFileUrl } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'
import React from 'react'

import client, { dataset, projectId } from '../../client'
import Card from '../components/Card'
import CardGroup from '../components/CardGroup'
import PageHead from '../components/PageHead'

export default async function Courses() {
  const data = await fetchCoursesEducatio()
  const builder = imageUrlBuilder(client)
  const locale = 'en-us'

  // TODO: change date format based on i18n locale (when i18n added)
  return (
    <>
      <div className="flex flex-col gap-8">
        <PageHead
          title={data.title}
          subtitle={data.subtitle}
          className="lg:col-span-2"
        />
        <CardGroup>
          {data.courses.map((course, index) => {
            return (
              <Card
                key={index}
                title={course.name}
                subtitle={`${course.provider} · ${new Date(
                  course.dateFinished
                ).toLocaleDateString(locale, {
                  month: 'short',
                  year: 'numeric',
                })}`}
                imageUrl={builder.image(course.image).url()}
                // it seems library is a bit outdates, replace calls required for it to work
                url={buildFileUrl({
                  assetId: course.certificate.asset._ref
                    .replace('file-', '')
                    .replace('-pdf', ''),
                  extension: 'pdf',
                  projectId: projectId,
                  dataset: dataset,
                })}
              />
            )
          })}
        </CardGroup>
      </div>
      <div className="flex flex-col gap-6">
        <PageHead title="Education" className="lg:col-span-2" />
        <CardGroup singleCol={true}>
          {data.educationList.map((education, index) => {
            return (
              <Card
                key={index}
                title={education.name}
                subtitle={`${education.degree} · ${
                  education.major
                }  · ${new Date(
                  education.dateStarted
                ).getFullYear()}-${new Date(
                  education.dateFinished
                ).getFullYear()}`}
                url={education.link}
                imageUrl={builder.image(education.image).url()}
              />
            )
          })}
        </CardGroup>
      </div>
    </>
  )
}

const fetchCoursesEducatio = async () => {
  return client.fetch<CoursesEducation>(`*[_type == "coursesEducation"][0]`)
}

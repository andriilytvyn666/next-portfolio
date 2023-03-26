import { buildFileUrl } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import React from 'react'

import client, { dataset, getLocalizedString, projectId } from '../../../client'
import Card from '../../components/Card'
import CardGroup from '../../components/CardGroup'
import PageHead from '../../components/PageHead'

export default async function Courses() {
  const data = await client.fetch<CoursesEducation>(
    `*[_type == "coursesEducation"][0]`
  )

  const builder = imageUrlBuilder(client)
  // const locale = 'en-us'
  const locale = useLocale()

  // TODO: change date format based on i18n locale (when i18n added)
  return (
    <>
      <div className="flex flex-col gap-8">
        <PageHead
          title={getLocalizedString(locale, data.titleCourses)}
          subtitle={getLocalizedString(locale, data.subtitle)}
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
        <PageHead
          title={getLocalizedString(locale, data.titleEducation)}
          className="lg:col-span-2"
        />
        <CardGroup singleCol={true}>
          {data.educationList.map((education, index) => {
            return (
              <Card
                key={index}
                title={getLocalizedString(locale, education.name)}
                subtitle={`${getLocalizedString(
                  locale,
                  education.degree
                )} · ${getLocalizedString(
                  locale,
                  education.major
                )}  · ${new Date(
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

import { useLocale } from 'next-intl'
import React from 'react'

import client, { getLocalizedString } from '../../../client'
import PageHead from '../../components/PageHead'
import Skill from '../../components/Skill'
import SkillGroup from '../../components/SkillGroup'

export default async function Skills() {
  const data = await client.fetch<Skills>(`*[_type == "skills"][0]`)
  const locale = useLocale()

  return (
    <>
      <PageHead
        title={getLocalizedString(locale, data.title)}
        className="lg:col-span-2"
        subtitle={getLocalizedString(locale, data.subtitle)}
      />
      <>
        {data.skillGroups.map((skillGroup, index) => {
          return (
            <SkillGroup key={index} title={skillGroup.name}>
              {skillGroup.skills.map((skill, index) => {
                return <Skill key={index} name={skill.name} />
              })}
            </SkillGroup>
          )
        })}
      </>
    </>
  )
}

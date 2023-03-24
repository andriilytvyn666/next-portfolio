'use client'

import React, { use } from 'react'

import client from '../../client'
import PageHead from '../components/PageHead'
import Skill from '../components/Skill'
import SkillGroup from '../components/SkillGroup'

export default function Skills() {
  const data = use(fetchSkills())

  return (
    <>
      <PageHead
        title="Skills"
        className="lg:col-span-2"
        subtitle="My skills summary"
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

const fetchSkills = async () => {
  return client.fetch<Skills>(`*[_type == "skills"][0]`)
}

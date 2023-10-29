import React from 'react'

import client from '../../client'
import PageHead from '../components/PageHead'
import Skill from '../components/Skill'
import SkillGroup from '../components/SkillGroup'

export default async function Skills() {
  const data = await client.fetch<Skills>(`*[_type == "skills"][0]`, {
    next: { cache: 'force-cache' },
  })

  return (
    <>
      sorry this page is deprecated
      <br />
      {"you'd bette go see resume page"}
    </>
  )
}

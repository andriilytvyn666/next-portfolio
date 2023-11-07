import React, { useState } from 'react'

import client from '../../client'
import ProjectsGrid from '../components/ProjectsGrid'
import Tabs from './tabs'

export default async function Projects() {
  const data = await client.fetch<ProjectGroup[]>(
    `*[_type == "projectGroup"]`
    // {
    //   next: { cache: 'force-cache' },
    // }
  )

  return (
    <div className="flex flex-col">
      <Tabs />
      <div className="grid pt-8 mx-auto lg:grid-cols-3 items-centerlg gap-y-8 gap-x-6 w-fit">
        <ProjectsGrid projectGroups={data} />
      </div>
    </div>
  )
}

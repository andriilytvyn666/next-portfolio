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
    <div className="flex flex-col-reverse gap-8 lg:flex-col">
      <Tabs className="sticky bottom-4 lg:bottom-0 lg:top-[5.75rem] flex" />
      <div className="grid mx-auto lg:grid-cols-4 items-centerlg gap-y-8 gap-x-6 w-fit">
        <ProjectsGrid projectGroups={data} />
        <ProjectsGrid projectGroups={data} />
      </div>
    </div>
  )
}

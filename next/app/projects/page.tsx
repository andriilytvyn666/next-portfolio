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
    <div className="flex flex-col-reverse w-full gap-8 md:flex-col">
      <Tabs className="sticky bottom-4 md:bottom-0 md:top-[5.75rem] flex" />
      <div className="grid items-center w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6">
        <ProjectsGrid projectGroups={data} />
      </div>
    </div>
  )
}

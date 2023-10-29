'use client'

import imageUrlBuilder from '@sanity/image-url'
import React, { useState } from 'react'

import client from '../../client'
import Project from '../components/Project'

export default function Projects() {
  // const data = await client.fetch<Projects>(`*[_type == "projects"][0]`, {
  //   next: { cache: 'force-cache' },
  // })
  const builder = imageUrlBuilder(client)

  const [currentTab, setCurrentTab] = useState<'projects' | 'figma' | 'html'>(
    'projects'
  )

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 [&>*]:text-body [&>*]:text-clickable w-full items-center justify-center">
        <button
          type="button"
          className={`${
            currentTab === 'projects'
              ? 'dark:text-fg-active-dark text-fg-active'
              : ''
          }`}
          onClick={() => {
            setCurrentTab('projects')
          }}
        >
          projects
        </button>
        <button
          type="button"
          className={`${
            currentTab === 'figma'
              ? 'dark:text-fg-active-dark text-fg-active'
              : ''
          }`}
          onClick={() => {
            setCurrentTab('figma')
          }}
        >
          figma
        </button>
        <button
          type="button"
          className={`${
            currentTab === 'html'
              ? 'dark:text-fg-active-dark text-fg-active'
              : ''
          }`}
          onClick={() => {
            setCurrentTab('html')
          }}
        >
          html
        </button>
      </div>
      <div className="grid grid-cols-3 gap-y-8 gap-x-6 w-fit mx-auto items-center pt-8">
        <Project
          title="rihterb.pp.ua"
          subtitle="website for ukrainian indie musician vasily richter"
          url="https://rihterb.pp.ua"
        />
        <Project
          title="rihterb.pp.ua"
          subtitle="website for ukrainian indie musician vasily richter"
          url="https://rihterb.pp.ua"
        />
        <Project
          title="rihterb.pp.ua"
          subtitle="website for ukrainian indie musician vasily richter"
          url="https://rihterb.pp.ua"
        />
        <Project
          title="rihterb.pp.ua"
          subtitle="website for ukrainian indie musician vasily richter"
          url="https://rihterb.pp.ua"
        />
        <Project
          title="rihterb.pp.ua"
          subtitle="website for ukrainian indie musician vasily richter"
          url="https://rihterb.pp.ua"
        />
      </div>
    </div>
  )
}

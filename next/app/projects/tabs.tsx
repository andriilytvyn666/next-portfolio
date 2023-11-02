'use client'

import { FC } from 'react'

import { useTabs } from '../providers/TabsProvider'

const Tabs: FC = () => {
  const projectsContext = useTabs()

  return (
    <div className="flex gap-4 [&>*]:text-body [&>*]:text-clickable w-full items-center justify-center">
      <button
        type="button"
        className={`${
          projectsContext.activeTab === 'web' ? 'text-fg-active' : ''
        }`}
        onClick={() => {
          projectsContext.setActiveTab('web')
        }}
      >
        web
      </button>
      <button
        type="button"
        className={`${
          projectsContext.activeTab === 'figma' ? 'text-fg-active' : ''
        }`}
        onClick={() => {
          projectsContext.setActiveTab('figma')
        }}
      >
        figma
      </button>
      <button
        type="button"
        className={`${
          projectsContext.activeTab === 'html' ? 'text-fg-active' : ''
        }`}
        onClick={() => {
          projectsContext.setActiveTab('html')
        }}
      >
        html
      </button>
    </div>
  )
}

export default Tabs

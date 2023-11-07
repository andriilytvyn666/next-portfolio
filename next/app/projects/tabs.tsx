'use client'

import { FC } from 'react'
import { FiBox, FiFigma, FiFile } from 'react-icons/fi'

import { useTabs } from '../providers/TabsProvider'

const Tabs: FC = () => {
  const projectsContext = useTabs()

  return (
    <div className="border-border rounded-lg border w-fit flex [&>*]:text-body [&>*]:text-clickable mx-auto p-4 gap-5 items-center justify-center">
      <button
        type="button"
        className={`group flex gap-2  ${
          projectsContext.activeTab === 'web'
            ? '[&>*]:stroke-fg-active text-fg-active'
            : ''
        }`}
        onClick={() => {
          projectsContext.setActiveTab('web')
        }}
      >
        <FiBox className="w-5 h-5 transition-none group-hover:stroke-fg-active " />
        web
      </button>

      <button
        type="button"
        className={`group flex gap-2  ${
          projectsContext.activeTab === 'figma'
            ? '[&>*]:stroke-fg-active text-fg-active'
            : ''
        }`}
        onClick={() => {
          projectsContext.setActiveTab('figma')
        }}
      >
        <FiFigma className="w-5 h-5 transition-none group-hover:stroke-fg-active " />
        figma
      </button>
      <button
        type="button"
        className={`group flex gap-2  ${
          projectsContext.activeTab === 'html'
            ? '[&>*]:stroke-fg-active text-fg-active'
            : ''
        }`}
        onClick={() => {
          projectsContext.setActiveTab('html')
        }}
      >
        <FiFile className="w-5 h-5 transition-none group-hover:stroke-fg-active " />
        html
      </button>
    </div>
  )
}

export default Tabs

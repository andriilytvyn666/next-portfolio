'use client'

import { createContext, useContext, useState } from 'react'

type TabsContextValue = {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabsContext = createContext<TabsContextValue>({
  activeTab: 'web',
  setActiveTab: (tab: string) => {},
})

type Props = {
  children: React.ReactNode
}
export function useTabs() {
  return useContext(TabsContext)
}

export default function TabsProvider({ children }: Props) {
  const [activeTab, setActiveTab] = useState<string>('web')

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  )
}

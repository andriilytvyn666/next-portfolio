'use client'

import { FC, useEffect, useState } from 'react'

import LocaleProvider from './providers/LocaleProvider'
import TabsProvider from './providers/TabsProvider'

type Props = {
  children: React.ReactNode
}

const Providers: FC<Props> = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LocaleProvider>
      <TabsProvider>{children}</TabsProvider>
    </LocaleProvider>
  )
}

export default Providers

'use client'

import { ThemeProvider } from 'next-themes'
import { FC, useEffect, useState } from 'react'

import LocaleProvider from './providers/LocaleProvider'

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
    <ThemeProvider attribute="class">
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  )
}

export default Providers

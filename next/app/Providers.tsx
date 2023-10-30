'use client'

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

  return <LocaleProvider>{children}</LocaleProvider>
}

export default Providers

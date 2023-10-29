'use client'

import { ThemeProvider } from 'next-themes'
import { FC, useEffect, useState } from 'react'

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

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Providers

'use client'

import { FC, useEffect, useState } from 'react'

import ImageViewerProvider from './providers/ImageViewerProvider'
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
    <ImageViewerProvider>
      <TabsProvider>{children}</TabsProvider>
    </ImageViewerProvider>
  )
}

export default Providers

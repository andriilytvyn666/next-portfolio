'use client'

import { createContext, useContext, useState } from 'react'

type ImageViewerValue = {
  isImageOpen: boolean
  setIsImageOpen: (isImageOpen: boolean) => void
  image: string
  setImage: (image: string) => void
}

const ImageViewerContext = createContext<ImageViewerValue>({
  isImageOpen: false,
  setIsImageOpen: (isImageOpen: boolean) => {},
  image: '',
  setImage: (image: string) => {},
})

type Props = {
  children: React.ReactNode
}
export function useImageViewer() {
  return useContext(ImageViewerContext)
}

export default function TabsProvider({ children }: Props) {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [image, setImage] = useState('')

  return (
    <ImageViewerContext.Provider
      value={{ isImageOpen, setIsImageOpen, image, setImage }}
    >
      {children}
    </ImageViewerContext.Provider>
  )
}

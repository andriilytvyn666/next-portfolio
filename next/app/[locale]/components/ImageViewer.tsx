'use client'

import Image from 'next/image'
import { FC } from 'react'
import { Modal } from 'react-aria-components'

import { useImageViewer } from '../providers/ImageViewerProvider'

const ImageViewer: FC = () => {
  const { image, isImageOpen, setIsImageOpen } = useImageViewer()

  return (
    // TODO: figure out why modal is broken in webkit
    // <Modal isOpen={isImageOpen}>
    <div
      className={`${
        isImageOpen ? '' : ''
      } fixed top-0 left-0 z-50 flex items-center justify-center w-full min-h-screen px-4 lg:px-0 md:w-screen`}
      onClick={() => setIsImageOpen(false)}
    >
      <div className="absolute z-20 w-full h-full bg-bg opacity-95" />
      <Image src={image} alt="test" width={800} height={600} className="z-30" />
    </div>
    // </Modal>
  )
}

export default ImageViewer

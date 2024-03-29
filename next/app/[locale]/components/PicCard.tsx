'use client'

import Image from 'next/image'
import { FC } from 'react'

import { useImageViewer } from '../providers/ImageViewerProvider'

type Props = {
  imageUrl: string
}

const PicCard: FC<Props> = ({ imageUrl }) => {
  const { setImage, setIsImageOpen } = useImageViewer()

  return (
    <div
      onClick={() => {
        setImage(imageUrl)
        setIsImageOpen(true)
      }}
      className="w-full lg:max-w-[18.5rem] aspect-[4/3] bg-bg-active overflow-hidden box-content"
    >
      <Image
        src={imageUrl}
        alt="pic"
        width={256 * 2}
        height={192 * 2}
        className="hover:scale-[107%] select-none w-full"
      />
    </div>
  )
}

export default PicCard

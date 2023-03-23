import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  subtitle: string
  url: string
  imageUrl: string
}

export default function Card({ title, subtitle, url, imageUrl }: Props) {
  return (
    <Link href={url} target="_blank" className="w-full h-20">
      <div className="flex gap-4 p-4 rounded-lg hover:bg-bg-active">
        <div className="w-12 h-12 overflow-hidden rounded-lg">
          <Image
            unoptimized
            src={imageUrl}
            width="48"
            height="48"
            alt="rihter-logo"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-fg">{title}</h4>
          <h5 className="text-fg-secondary">{subtitle}</h5>
        </div>
      </div>
    </Link>
  )
}

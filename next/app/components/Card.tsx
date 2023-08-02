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
      <div className="flex gap-4 p-4 border rounded-lg hover:bg-bg-active border-bg-active">
        <Image
          unoptimized
          src={imageUrl}
          width="48"
          height="48"
          className="w-12 h-12 rounded-lg min-w-12 min-h-12"
          alt="rihter-logo"
        />
        <div className="flex flex-col gap-1 truncate">
          <h4 className="truncate text-fg">{title}</h4>
          <h5 className="truncate text-fg-secondary">{subtitle}</h5>
        </div>
      </div>
    </Link>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  subtitle: string
  url: string
  imageUrl: string
}

export default function Project({ title, subtitle, url, imageUrl }: Props) {
  return (
    <Link href={url} target="_blank" className="">
      <div className="flex flex-col gap-4 group">
        <div className="box-content overflow-hidden border aspect-video bg-bg-active border-border hover:border-border-active">
          <Image
            src={imageUrl}
            alt="card"
            width={388 * 2}
            height={218.25 * 2}
            className="group-hover:scale-[107%] w-[24.25rem] aspect-video select-none"
          />
        </div>

        <div className="flex flex-col gap-1 truncate">
          <h3 className="underline decoration-bg group-hover:decoration-fg-active line-clamp-1 text-fg-active text-subtitle">
            {title}
          </h3>
          <p className="line-clamp-1 text-body ">{subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

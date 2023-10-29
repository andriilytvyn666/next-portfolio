import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  subtitle: string
  url: string
  // imageUrl: string
}

export default function Project({ title, subtitle, url }: Props) {
  return (
    <Link href={url} target="_blank" className="">
      <div className="flex flex-col gap-4 group">
        <div className="w-[24.75rem] aspect-video dark:bg-bg-active-dark bg-bg-active border dark:border-border-dark border-border dark:hover:border-border-active-dark hover:border-border-active overflow-hidden box-content">
          <Image
            src="/images/project.webp"
            alt="card"
            width={336}
            height={222.75}
            className="group-hover:scale-[107%] w-[24.75rem] aspect-video"
          />
        </div>

        <div className="flex flex-col gap-1 truncate">
          <h3 className="underline dark:decoration-bg-dark decoration-bg dark:group-hover:decoration-fg-active-dark group-hover:decoration-fg-active line-clamp-1 dark:text-fg-active-dark text-fg-active text-subtitle">
            {title}
          </h3>
          <p className="line-clamp-1 text-body ">{subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

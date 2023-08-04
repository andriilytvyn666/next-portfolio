import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  date: string
  url: string
}

export default function Card({ title, date, url }: Props) {
  return (
    <Link href={url} target="_self" className="w-full">
      <div className="flex gap-4 p-4 border rounded-lg hover:bg-bg-active border-bg-active">
        <div className="flex justify-between w-full gap-1 truncate">
          <h4 className="truncate text-fg">{title}</h4>
          <span className="truncate text-itemSubtitle text-fg-secondary">
            {date}
          </span>
        </div>
      </div>
    </Link>
  )
}

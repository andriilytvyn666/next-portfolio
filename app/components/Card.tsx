import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  subtitle: string
}

export default function Card({ title, subtitle }: Props) {
  return (
    <Link href="https://rihterb.pp.ua" target="_blank" className="w-full h-20">
      <div className="flex gap-4 p-4 rounded-lg hover:bg-bg-active">
        <div className="w-12 h-12 rounded-lg bg-fg"></div>
        <div className="flex flex-col gap-1">
          <h4 className="text-fg">{title}</h4>
          <h5 className="text-fg-secondary">{subtitle}</h5>
        </div>
      </div>
    </Link>
  )
}

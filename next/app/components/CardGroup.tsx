import React from 'react'

type Props = {
  title?: string
  children: React.ReactNode
  singleCol?: boolean
}

export default function CardGroup({ title, singleCol, children }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {title !== undefined ? (
        <h3 className="text-fg text-headerSm">{title}</h3>
      ) : undefined}

      <div
        className={`flex flex-wrap gap-5 md:grid ${
          singleCol !== undefined ? 'md:grid-cols-1' : 'md:grid-cols-2'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

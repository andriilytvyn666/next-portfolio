import React from 'react'

type Props = {
  title: string
  subtitle?: string
  className: string
}

export default function PageHead({ title, subtitle, className }: Props) {
  return (
    <div className={`flex flex-col gap-4 text-left md:text-left ${className}`}>
      <h1 className="text-fg text-header">{title}</h1>
      {subtitle !== undefined && (
        <h2 className="text-fg-secondary text-body">{subtitle}</h2>
      )}
    </div>
  )
}

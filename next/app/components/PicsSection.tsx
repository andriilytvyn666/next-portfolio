import React from 'react'

type Props = {
  date: Date
  children: React.ReactNode
}

export default function PicsSection({ date, children }: Props) {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-4 lg:w-fit lg:mx-auto gap-x-6 gap-y-8">
      <h2 className="select-none lg:col-span-4 text-subtitle text-fg-active">
        {date
          .toLocaleDateString('en-us', {
            month: 'long',
            year: 'numeric',
          })
          .toLowerCase()}
      </h2>
      {children}
    </div>
  )
}

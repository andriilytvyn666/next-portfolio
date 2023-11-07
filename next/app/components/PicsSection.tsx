import React from 'react'

type Props = {
  date: Date
  children: React.ReactNode
}

export default function PicsSection({ date, children }: Props) {
  return (
    <div className="flex flex-col gap-5 w-fit lg:mx-auto">
      <h2 className="select-none lg:col-span-4 text-subtitle text-fg-active">
        {date
          .toLocaleDateString('en-us', {
            month: 'long',
            year: 'numeric',
          })
          .toLowerCase()}
      </h2>
      <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-8">
        {children}
      </div>
    </div>
  )
}

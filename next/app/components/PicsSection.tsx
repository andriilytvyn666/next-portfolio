import React from 'react'

type Props = {
  date: Date
  children: React.ReactNode
}

export default function PicsSection({ date, children }: Props) {
  return (
    <div className="grid grid-cols-4 mx-auto w-fit gap-x-6 gap-y-8">
      <h2 className="col-span-4 select-none text-subtitle text-fg-active">
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

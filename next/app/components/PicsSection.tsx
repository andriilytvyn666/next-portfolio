import React from 'react'

import PicsCard from './PicsCard'

type Props = {
  date: Date
  children: React.ReactNode
}

export default function PicsSection({ date, children }: Props) {
  return (
    <div className="grid grid-cols-4 w-fit mx-auto gap-x-6 gap-y-8">
      <h2 className="text-subtitle text-fg-active col-span-4">
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

'use client'

import { useLocale } from 'next-intl'
import React, { useState } from 'react'

type Props = {
  date: Date
  children: React.ReactNode
}

export default function PicsSection({ date, children }: Props) {
  const locale = useLocale()
  const [isGroupHidden, setIsGroupHidden] = useState(false)

  return (
    <div
      className={`${isGroupHidden ? 'gap-0' : 'gap-5'} flex flex-col  w-fit`}
    >
      <h2
        className="select-none lg:col-span-5 text-subtitle text-fg-active"
        onClick={() => setIsGroupHidden(!isGroupHidden)}
      >
        {date
          .toLocaleDateString(locale === 'ru' ? 'uk' : locale, {
            month: 'long',
            year: 'numeric',
          })
          .toLowerCase()}
      </h2>
      <div
        className={`${
          isGroupHidden ? 'h-0 opacity-0' : 'h-full'
        } overflow-hidden gap-y-6 sm:gap-y-0 w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 `}
      >
        {children}
      </div>
    </div>
  )
}

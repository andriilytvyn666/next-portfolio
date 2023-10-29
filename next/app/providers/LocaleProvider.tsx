'use client'

import { createContext, useContext, useState } from 'react'

type LocaleContextValue = {
  locale: string
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'uk',
  toggleLocale: () => {},
})

type Props = {
  children: React.ReactNode
}
export function useLocale() {
  return useContext(LocaleContext)
}

export default function LocaleProvider({ children }: Props) {
  const [locale, setLocale] = useState<'uk' | 'en'>('en')

  function toggleLocale() {
    locale === 'uk' ? setLocale('en') : setLocale('uk')
  }

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

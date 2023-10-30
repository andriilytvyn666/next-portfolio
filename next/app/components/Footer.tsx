'use client'

import { useEffect, useState } from 'react'

import { useLocale } from '../providers/LocaleProvider'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { locale, toggleLocale } = useLocale()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="flex w-full items-center justify-between pt-4 pb-5">
      <p>copyright © 2023 andrii lytvyn</p>
      <div className="flex gap-4">
        <button onClick={toggleLocale} className="select-none">
          {locale === 'en' ? 'українська' : 'english'}
        </button>
      </div>
    </footer>
  )
}

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
    // TODO: figure out figma padding bottom inconsistency
    <footer className="flex items-center justify-between w-full px-0 pt-0 pb-2 lg:pt-6 lg:pb-6">
      <p className="hidden lg:inline">copyright © 2023 andrii lytvyn</p>
      <p className="inline lg:hidden">© 2023 andrii lytvyn</p>
      <div className="flex gap-4">
        <button onClick={toggleLocale} className="select-none">
          {locale === 'en' ? 'українська' : 'english'}
        </button>
      </div>
    </footer>
  )
}

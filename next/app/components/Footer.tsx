'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { useLocale } from '../providers/LocaleProvider'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
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
        <button onClick={toggleLocale}>
          {locale === 'en' ? 'українська' : 'english'}
        </button>
        <button
          onClick={() => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }}
        >
          {theme === 'dark' ? (
            <FiSun className="w-5 h-5" />
          ) : (
            <FiMoon className="w-5 h-5" />
          )}
        </button>
      </div>
    </footer>
  )
}

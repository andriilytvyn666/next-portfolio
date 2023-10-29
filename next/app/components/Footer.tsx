'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="flex w-full items-center justify-between pt-4 pb-5">
      <p>copyright © 2023 andrii lytvyn</p>
      <p>українська</p>
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
    </footer>
  )
}

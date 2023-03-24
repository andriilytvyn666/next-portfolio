'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiClock } from 'react-icons/hi2'

import styles from './Footer.module.css'

export default function Footer() {
  const [date, setDate] = useState<string>('hh:mm')

  useEffect(() => {
    const locale = 'en-us'

    const dateFormat: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
    }

    setDate(Intl.DateTimeFormat(locale, dateFormat).format())

    setInterval(
      () => setDate(Intl.DateTimeFormat(locale, dateFormat).format()),
      1000
    )
  }, [])

  return (
    <footer className={styles['footer']}>
      <span className="flex gap-2 text-footer text-fg-secondary">
        <Link
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          className="border-bg link text-fg-secondary hover:border-fg-secondary"
        >
          CC BY-NC-SA 4.0
        </Link>
        <span className="select-none">{'·'}</span>
        2023 © Andrii Lytvyn
      </span>
      <span className="flex gap-2 text-footer text-fg-secondary">
        <span className="flex items-center gap-2">
          <Image
            src="/emoji/flag-ukraine.webp"
            alt="clock"
            className="pointer-events-none select-none"
            width={20}
            height={20}
          />
          {'Lviv, Ukraine'}
        </span>
        <span className="select-none">{'·'}</span>
        <span className="flex gap-1.5 items-center">
          <HiClock size={20} /> {date} (GMT+2)
        </span>
      </span>
    </footer>
  )
}

'use client'

import React, { useEffect, useState } from 'react'

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
      <span className="text-footer text-fg-secondary">
        CC BY-NC-SA 4.0 2023 © Andrii Lytvyn
      </span>
      <span className="text-footer text-fg-secondary">
        Lviv, Ukraine · {date} (GMT+2)
      </span>
    </footer>
  )
}

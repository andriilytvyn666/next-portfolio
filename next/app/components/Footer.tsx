import Image from 'next/image'
import React from 'react'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <span className="text-footer text-fg-secondary">
        © 2023 Andrii Lytvyn
      </span>
      <Image
        src={`/images/underconstruction.png`}
        alt="underconstruction"
        width={32}
        height={32}
        unoptimized
      />
    </footer>
  )
}

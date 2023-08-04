import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './Footer.module.css'

type Props = {
  name: string
}

export default function Footer({ name }: Props) {
  return (
    <footer className={styles['footer']}>
      <span className="text-footer text-fg-secondary">
        © {new Date().getFullYear()} Andrii Lytvyn
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

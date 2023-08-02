import Link from 'next/link'
import React from 'react'

import styles from './ButtonLink.module.css'

type Props = {
  title: string
  link: string
  children: React.ReactNode
}

export default function ButtonLink({ title, children, link }: Props) {
  return (
    <Link href={link} target="_blank">
      <div className={styles['button-link']}>
        <div className="w-5 h-5">{children}</div>
        <span className="text-fg">{title}</span>
      </div>
    </Link>
  )
}

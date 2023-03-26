import { Link } from 'next-intl'
import Image from 'next/image'
import React from 'react'

import styles from './Footer.module.css'

type Props = {
  name: string
  location: string
}

export default function Footer({ name, location }: Props) {
  return (
    <footer className={styles['footer']}>
      <span className="text-footer text-fg-secondary">
        <Link
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          className="border-bg link text-fg-secondary hover:border-fg-secondary"
        >
          CC BY-NC-SA 4.0
        </Link>{' '}
        2023 © {name}
      </span>
      <span className="flex text-footer text-fg-secondary">
        <Link className={styles['locale-link']} href="/" locale="uk">
          <Image
            src={'/emoji/flag-ukraine.webp'}
            alt="uk"
            width={20}
            height={20}
            unoptimized
          />
          UK
        </Link>
        <Link className={styles['locale-link']} href="/" locale="en">
          <Image
            src={'/emoji/flag-usa.webp'}
            alt="uk"
            width={20}
            height={20}
            unoptimized
          />
          EN
        </Link>
      </span>
    </footer>
  )
}

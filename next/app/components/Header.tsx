'use client'

import Image from 'next/image'
import NavLink from 'next/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import styles from './Header.module.css'

const links = [
  { name: 'home', link: '/' },
  // { name: 'skills', link: '/skills' },
  { name: 'projects', link: '/projects' },
  // { name: 'courses', link: '/courses' },
  { name: 'posts', link: '/posts' },
]

type Props = {
  navNames: string[]
  locale: string
}

export default function Header({ navNames }: Props) {
  const pathname = usePathname()

  return (
    <header className={styles['header']}>
      <nav className={styles['header-nav']}>
        <NavLink href="/">
          <Image
            src={`/images/logo.png`}
            alt="logo"
            width={88}
            height={31}
            unoptimized
            className="border border-fg-secondary"
          />
        </NavLink>{' '}
        <div className="flex flex-wrap justify-center gap-2 py-4">
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={link.name}
              className={`border border-bg-active hover:border-fg-secondary rounded-md select-none text-itemNav px-2 hover:text-fg hover:translate-y-1 ${
                link.link === pathname && 'text-fg bg-bg-active'
              }`}
            >
              {navNames[index]}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

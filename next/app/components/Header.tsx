'use client'

import { Link } from 'next-intl'
import Image from 'next/image'
import NavLink from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import styles from './Header.module.css'

const links = [
  { name: 'home', link: '/' },
  { name: 'skills', link: '/skills' },
  { name: 'projects', link: '/projects' },
  { name: 'courses', link: '/courses' },
]

type Props = {
  navNames: string[]
}

export default function Header({ navNames }: Props) {
  const pathname = usePathname()

  return (
    <header className={styles['header']}>
      <nav className={styles['header-nav']}>
        <NavLink href="/">
          <Image
            src={`/emoji/${pathname === '/' ? 'home' : pathname}.png`}
            alt="logo"
            width={48}
            height={48}
            unoptimized
          />
        </NavLink>{' '}
        <div className="flex">
          <Link href="/" locale="uk">
            UK
          </Link>
          <Link href="/" locale="en">
            EN
          </Link>
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={link.name}
              className={`select-none text-itemNav  px-2.5 hover:text-fg hover:translate-y-1 ${
                link.link === pathname && 'text-fg'
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

'use client'

import Image from 'next/image'
import NavLink from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import styles from './Header.module.css'

const links = [
  { name: 'Home', link: '/' },
  { name: 'Skills', link: '/skills' },
  { name: 'Projects', link: '/projects' },
  { name: 'Courses & Edu', link: '/courses' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className={styles['header-width']}>
      <nav className={styles['header-nav']}>
        <NavLink href="/">
          <Image
            src={`/emoji/${pathname === '/' ? 'home' : pathname}.png`}
            alt="logo"
            width={42}
            height={42}
            unoptimized
          />
        </NavLink>{' '}
        <div className="flex">
          {links.map((link) => (
            <NavLink
              href={link.link}
              key={link.name}
              className={`select-none text-itemNav  px-2.5 hover:text-fg hover:translate-y-1 ${
                link.link === pathname && 'text-fg'
              }`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

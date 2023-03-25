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
          {/* causes unavoidable mismatch waring */}
          <Image
            src={`/emoji/${Math.floor(Math.random() * 11) + 1}.png`}
            alt="logo"
            width={48}
            height={48}
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

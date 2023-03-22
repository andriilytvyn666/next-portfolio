'use client'

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
    <div className={styles['header-width']}>
      {links.map((link) => (
        <NavLink
          href={link.link}
          key={link.name}
          className={`text-itemNav hover:text-fg ${
            link.link === pathname && 'text-fg'
          }`}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

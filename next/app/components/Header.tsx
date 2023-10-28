'use client'

import Image from 'next/image'
import NavLink from 'next/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  { name: 'projects', link: '/projects' },
  { name: 'pics', link: '/pics' },
  { name: 'resume', link: '/resume' },
]

type Props = {
  navNames: string[]
  locale: string
}

export default function Header({ navNames }: Props) {
  const pathname = usePathname()

  return (
    <header className="w-full max-w-[90rem] flex justify-between py-4 px-8">
      <div className="flex gap-4 items-center">
        <NavLink href="/">
          <Image
            src={`/images/logo.webp`}
            alt="logo"
            width={32}
            height={32}
            unoptimized
          />
        </NavLink>
        <NavLink href="/">
          <h1 className="text-clickable text-body">andrii lytvyn</h1>
        </NavLink>
      </div>

      <nav className="flex items-center gap-3">
        {links.map((link) => (
          <Link
            href={link.link}
            key={link.name}
            className={`text-clickable text-body select-none p-2 ${
              link.link === pathname && 'text-fg-active'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

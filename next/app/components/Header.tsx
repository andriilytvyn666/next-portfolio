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
    <header className="flex justify-between w-full lg:py-4">
      <div id="logo" className="flex items-center gap-4 select-none">
        <NavLink href="/">
          <Image
            src={`/images/logo.webp`}
            alt="logo"
            width={32}
            height={32}
            unoptimized
            className="w-7 h-7 lg:w-8 lg:h-8"
          />
        </NavLink>
        <NavLink href="/">
          <h1 className="hidden lg:inline text-clickable text-body whitespace-nowrap">
            andrii lytvyn
          </h1>
        </NavLink>
      </div>

      <nav className="flex items-center gap-3">
        {links.map((link) => (
          <Link
            href={link.link}
            key={link.name}
            className={`text-clickable select-none p-2 ${
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

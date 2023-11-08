'use client'

import Image from 'next/image'
import NavLink from 'next/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FiBox, FiInstagram, FiUser } from 'react-icons/fi'

const links = [
  { name: 'projects', link: '/projects' },
  { name: 'pix', link: '/pix' },
  { name: 'resume', link: '/resume' },
]

type Props = {
  navNames: string[]
  locale: string
}

export default function Header({ navNames }: Props) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 flex justify-between w-full py-4 lg:py-4 bg-bg">
      <div id="logo" className="flex items-center gap-4 select-none">
        <NavLink href="/">
          <Image
            src={`/images/logo.webp`}
            alt="logo"
            width={32}
            height={32}
            unoptimized
            className="min-w-[1.75rem] min-h-[1.75rem] lg:w-8 lg:h-8"
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
          <div
            className="flex items-center gap-2 group text-clickable "
            key={link.name}
          >
            <Link
              href={link.link}
              className={`select-none flex gap-2 p-2 [&>*]:transition-none transition-none ${
                link.link === pathname && 'text-fg-active'
              }`}
            >
              <FiBox
                width={20}
                height={20}
                className={`group-hover:stroke-fg-active w-5 h-5 ${
                  link.link === pathname && 'stroke-fg-active'
                } ${link.name === 'projects' ? 'block' : 'hidden'}`}
              />
              <FiUser
                width={20}
                height={20}
                className={`group-hover:stroke-fg-active w-5 h-5 ${
                  link.link === pathname && 'stroke-fg-active'
                } ${link.name === 'resume' ? 'block' : 'hidden'}`}
              />
              <FiInstagram
                className={`group-hover:stroke-fg-active w-5 h-5 ${
                  link.link === pathname && 'stroke-fg-active'
                } ${link.name === 'pix' ? 'block' : 'hidden'}`}
              />
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  )
}

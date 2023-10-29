import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

import client from '../client'
import Button from './components/Button'

export default async function Home() {
  const data = await client.fetch<Homepage>(`*[_type == "homepage"][0]`, {
    next: { cache: 'force-cache' },
  })

  const portableTextComponents: PortableTextComponents = {
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http')
          ? '_blank'
          : undefined
        if (target === '_blank') {
          return (
            <Link className="link" href={value?.href}>
              {children}
            </Link>
          )
        } else {
          return (
            <Link className="link" href={value?.href}>
              {children}
            </Link>
          )
        }
      },
    },
    block: {
      normal: ({ children }) => (
        <p className="text-fg-secondary text-body">{children}</p>
      ),
    },
  }

  return (
    <div>
      <div className="flex gap-4">
        <Button name="telegram" link="https://t.me/nneeeooo" target="_blank" />
        <Button
          name="github"
          link="https://github.com/andriilytvyn666"
          target="_blank"
        />
        <Button
          name="instagram"
          link="https://instagram.com/nneeeooo_pics"
          target="_blank"
        />
        <Button name="email" link="mailto:lytvyn.andrii.contact@gmail.com" />
      </div>
    </div>
  )
}

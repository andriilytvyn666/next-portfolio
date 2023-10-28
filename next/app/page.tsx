import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

import client from '../client'
import ButtonLink from './components/ButtonLink'
import Card from './components/Card'

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
    <div className="grid grid-cols-3 gap-y-8 gap-x-6 w-fit mx-auto items-center">
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
    </div>
  )
}

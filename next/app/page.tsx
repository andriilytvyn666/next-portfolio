import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

import client from '../client'
import ButtonLink from './components/ButtonLink'

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
    <>
      <h1 className="text-center text-headerXl text-fg md:text-left">
        {data.name}
      </h1>
      <div className="flex flex-col gap-[24px] text-body text-fg-secondary">
        <PortableText value={data.text} components={portableTextComponents} />
      </div>
      {/* flex flex-col items-center w-full gap-4 md:justify-between md:flex-row */}
      <div className="grid grid-cols-1 grid-rows-2 gap-4 md:flex md:justify-between">
        <div className="grid grid-cols-4 gap-4">
          {data.links.map((link, index) => {
            return (
              <>
                {link.name !== 'Resume' ? (
                  <ButtonLink key={index} title={link.name} link={link.link} />
                ) : (
                  ''
                )}
              </>
            )
          })}
        </div>
        <div className="w-full md:w-fit">
          <ButtonLink title={data.links[4].name} link={data.links[4].link} />
        </div>
      </div>
    </>
  )
}

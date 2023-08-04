import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { BsFillFilePdfFill } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { RiFileWord2Fill } from 'react-icons/ri'
import { SiGithub, SiLinkedin, SiSkype, SiTelegram } from 'react-icons/si'

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

  const selectIcon = (name: string): ReactNode => {
    switch (name) {
      case 'Github':
        return <SiGithub className="w-full h-full fill-fg" />
      case 'Linkedin':
        return <SiLinkedin className="w-full h-full fill-fg" />
      case 'Email':
        return <MdEmail className="w-full h-full fill-fg" />
      case 'Skype':
        return <SiSkype className="w-full h-full fill-fg" />
      case 'Telegram':
        return <SiTelegram className="w-full h-full fill-fg" />
      case 'Resume.pdf':
        return <BsFillFilePdfFill className="w-full h-full fill-fg" />
      case 'Resume.docx':
        return <RiFileWord2Fill className="w-full h-full fill-fg" />
      default:
        return <FiArrowUpRight className="w-full h-full fill-fg" />
    }
  }

  return (
    <>
      <h1 className="text-center text-headerXl text-fg md:text-left">
        {data.name}
      </h1>
      <div className="flex flex-col gap-[24px] text-body text-fg-secondary">
        <PortableText value={data.text} components={portableTextComponents} />
      </div>

      <div className="grid gap-4 sm:flex sm:flex-wrap">
        {data.links.map((link, index) => {
          return (
            <ButtonLink key={index} title={link.name} link={link.link}>
              {selectIcon(link.name)}
            </ButtonLink>
          )
        })}
      </div>
    </>
  )
}

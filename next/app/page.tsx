import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { AiOutlineFilePdf, AiOutlineFileWord } from 'react-icons/ai'
import { FiArrowUpRight } from 'react-icons/fi'
import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiSkype,
  SiTelegram,
} from 'react-icons/si'

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
        return <SiGithub className="w-full h-full" />
      case 'Linkedin':
        return <SiLinkedin className="w-full h-full" />
      case 'Email':
        return <SiGmail className="w-full h-full" />
      case 'Skype':
        return <SiSkype className="w-full h-full" />
      case 'Telegram':
        return <SiTelegram className="w-full h-full" />
      case 'Resume.pdf':
        return <AiOutlineFilePdf className="w-full h-full" />
      case 'Resume.docx':
        return <AiOutlineFileWord className="w-full h-full" />
      default:
        return <FiArrowUpRight className="w-full h-full" />
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

// export async function getStaticProps() {
//   const content = await client.fetch<Homepage>(`*[_type == "homepage"][0]`)

//   return {
//     props: {
//       content,
//     },
//   }
// }

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Link } from 'next-intl'
import { useLocale } from 'next-intl'
import PlainLink from 'next/link'
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

import client, {
  getLocalizedPortableText,
  getLocalizedString,
} from '../../client'
import ButtonLink from '../components/ButtonLink'

export default async function Home() {
  const data = await client.fetch<Homepage>(`*[_type == "homepage"][0]`)
  const locale = useLocale()

  const portableTextComponents: PortableTextComponents = {
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http')
          ? '_blank'
          : undefined
        if (target === '_blank') {
          return (
            <PlainLink className="link" href={value?.href}>
              {children}
            </PlainLink>
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
      case 'github':
        return <SiGithub className="w-full h-full" />
      case 'linkedin':
        return <SiLinkedin className="w-full h-full" />
      case 'gmail':
        return <SiGmail className="w-full h-full" />
      case 'skype':
        return <SiSkype className="w-full h-full" />
      case 'telegram':
        return <SiTelegram className="w-full h-full" />
      case 'resumePdf':
        return <AiOutlineFilePdf className="w-full h-full" />
      case 'resumeDocx':
        return <AiOutlineFileWord className="w-full h-full" />
      default:
        return <FiArrowUpRight className="w-full h-full" />
    }
  }

  return (
    <>
      <h1 className="text-center text-headerXl text-fg md:text-left">
        {getLocalizedString(locale, data.name)}
      </h1>
      <div className="flex flex-col gap-[24px] text-body text-fg-secondary">
        <PortableText
          value={getLocalizedPortableText(locale, data.text)}
          components={portableTextComponents}
        />
      </div>

      <div className="grid gap-4 sm:flex sm:flex-wrap">
        {data.links.map((link, index) => {
          return (
            <ButtonLink
              key={index}
              title={getLocalizedString(locale, link.name)}
              link={link.link}
            >
              {selectIcon(link.internalName)}
            </ButtonLink>
          )
        })}
      </div>
    </>
  )
}

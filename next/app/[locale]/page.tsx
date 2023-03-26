import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Link } from 'next-intl'
import { useLocale } from 'next-intl'
import PlainLink from 'next/link'
import { IoDocumentOutline } from 'react-icons/io5'
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
        <ButtonLink link="mailto:lytvyn.andrii.contact@gmail.com" title="Gmail">
          <SiGmail className="w-full h-full" />
        </ButtonLink>
        <ButtonLink link="https://t.me/nneeeooo" title="Telegram">
          <SiTelegram className="w-full h-full" />
        </ButtonLink>
        <ButtonLink
          link="https://join.skype.com/invite/KOwuCulY372x"
          title="Skype"
        >
          <SiSkype className="w-full h-full" />
        </ButtonLink>
        <ButtonLink
          link="https://www.linkedin.com/in/andrii-lytvyn-80350a226/"
          title="LinkedIn"
        >
          <SiLinkedin className="w-full h-full" />
        </ButtonLink>
        <ButtonLink link="https://github.com/andriilytvyn666" title="Github">
          <SiGithub className="w-full h-full" />
        </ButtonLink>
        <ButtonLink link="https://github.com/andriilytvyn666" title="CV">
          <IoDocumentOutline className="w-full h-full" />
        </ButtonLink>
      </div>
    </>
  )
}

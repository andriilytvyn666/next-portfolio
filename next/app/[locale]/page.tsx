import { useTranslations } from 'next-intl'
import { Link } from 'next-intl'
import PlainLink from 'next/link'
import { IoDocumentOutline } from 'react-icons/io5'
import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiSkype,
  SiTelegram,
} from 'react-icons/si'

import ButtonLink from '../components/ButtonLink'

export default function Home() {
  const t = useTranslations('home')

  return (
    <>
      <h1 className="text-center text-headerXl text-fg md:text-left">
        {t('name')}
      </h1>
      <div className="flex flex-col gap-[24px] text-body text-fg-secondary">
        <p>
          Hi there! My name is Andrii Lytvyn, and I am a 3rd-year student of CS
          & AI at{' '}
          <PlainLink href="https://lpnu.ua/en" className="link" target="_blank">
            Lviv Polytechnic National University
          </PlainLink>
          .
        </p>
        <p>
          Creating UI designs in Figma and bringing them to life is my passion.
          I have been working with Next.js 13, Nuxt 3, and Tailwind CSS lately.
          Here you can find{' '}
          <Link href="/projects" className="link">
            my projects
          </Link>
          .
        </p>
        <p>
          Aside from that, I have some valuable experience with other tools &
          languages. Learn more on the{' '}
          <Link href="/projects" className="link">
            skills page
          </Link>
          .
        </p>
        <p>
          Outside of the computer world, I enjoy Ukrainian underground music. In
          the future, I would like to create a project to showcase interesting
          musicians because some deserve much more attention.
        </p>
        <p>
          Feel free to contact me at any time. Below you could find my contacts
          and{' '}
          <PlainLink
            href="https://github.com/andriilytvyn666"
            target="_blank"
            className="link"
          >
            CV
          </PlainLink>
          .
        </p>
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

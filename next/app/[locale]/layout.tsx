import { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

import Debug from '../components/Debug'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrii Lytvyn',
  description:
    'I am a web developer from Ukraine. Interested mainly in Vue, React & UI/UX.',
  icons: {
    shortcut: '/favicon.ico',
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#000000',
}

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function RootLayout({ children, params }: Props) {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  const t = useTranslations('header')
  const tHome = useTranslations('home')
  const tFooter = useTranslations('footer')

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Debug />
        <div className="flex flex-col items-center flex-grow min-h-screen gap-12 pt-8 md:pt-4 bg-bg">
          <Header
            navNames={[t('home'), t('skills'), t('projects'), t('courses')]}
          />
          <article
            className={`grid items-stretch justify-center w-full grid-cols-10 gap-5 px-4 grow mx-auto ${styles['article']}`}
          >
            <span className="text-fg">{params.locale}</span>
            <div className="flex flex-col col-span-10 gap-8">{children}</div>
          </article>
          <Footer name={tHome('name')} location={tFooter('location')} />
        </div>
      </body>
    </html>
  )
}

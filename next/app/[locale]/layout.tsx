import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import Providers from './Providers'
import Debug from './components/Debug'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andrii Lytvyn',
  description:
    'A web developer from Ukraine. Interested in UI/UX, React & Vue.',
  icons: {
    shortcut: '/favicon.ico',
    icon: '/favicon-32x32.png',
  },
  metadataBase: new URL('https://andriilytvyn.pp.ua'),
  openGraph: {
    title: 'Andrii Lytvyn',
    description:
      'A web developer from Ukraine. Interested in UI/UX, React & Vue.',
    url: 'https://andriilytvyn.pp.ua',
  },
}

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({ children, params }: Props) {
  let messages
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={params.locale}>
      <body className="bg-bg">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Providers>
            <Debug />
            <div className=" max-w-[90rem] min-h-screen mx-auto flex flex-col flex-grow px-4 lg:px-8 gap-4 lg:gap-5">
              <Header
                locale={params.locale}
                navNames={['home', 'projects', 'posts']}
              />
              <article className="grid grid-cols-12 gap-5 grow ">
                <div className="flex flex-col col-span-12 gap-5 lg:gap-12">
                  {children}
                </div>
              </article>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

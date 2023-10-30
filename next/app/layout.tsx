import { Metadata } from 'next'
import Image from 'next/image'

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

export default function RootLayout({ children, params }: Props) {
  return (
    <html>
      <body className="bg-bg">
        <Providers>
          <Debug />
          <div className=" flex flex-col items-center flex-grow min-h-screen gap-12 max-w-[90rem] mx-auto px-8">
            <Header
              locale={params.locale}
              navNames={['home', 'projects', 'posts']}
            />
            <article className="grid items-stretch justify-center w-full grid-cols-12 gap-5  grow ">
              <div className="flex flex-col col-span-12 gap-8">{children}</div>
            </article>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

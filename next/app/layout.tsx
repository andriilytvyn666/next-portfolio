import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Debug from './components/Debug'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        {/* <Debug /> */}
        <div className="flex flex-col items-center flex-grow min-h-screen gap-4 pt-8 md:gap-12 md:pt-4 bg-bg">
          <Header
            locale={params.locale}
            navNames={['Home', 'Projects', 'Posts']}
          />
          <article className="grid items-stretch justify-center w-full grid-cols-10 gap-5 px-4 grow mx-auto max-w-[90rem]">
            <div className="flex flex-col col-span-10 gap-8">{children}</div>
          </article>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Debug from './components/Debug'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
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
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Debug />
        <div className="flex flex-col items-center flex-grow min-h-screen gap-12 pt-8 md:pt-4 bg-bg">
          <Header />
          <article
            className={`grid items-stretch justify-center w-full grid-cols-10 gap-5 px-4 grow mx-auto ${styles['article']}`}
          >
            <div className="flex flex-col col-span-10 gap-8">{children}</div>
          </article>
          <Footer />
        </div>
      </body>
    </html>
  )
}

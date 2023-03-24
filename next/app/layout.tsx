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
      <body
        className={
          inter.className +
          ' bg-bg text-fg-secondary flex items-center flex-col h-screen gap-12'
        }
      >
        <Header />
        <div className={styles['page-grid']}>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col justify-between h-full">
              <Debug />
              <article className="flex flex-col gap-8">{children}</article>
              <Footer />
            </div>
          </div>
        </div>{' '}
      </body>
    </html>
  )
}

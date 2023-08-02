import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

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
        <div className="flex flex-col items-center flex-grow min-h-screen gap-12 pt-8 md:pt-4 bg-bg">
          <Header
            locale={params.locale}
            navNames={['Home', 'Skills', 'Projects', 'Courses']}
          />
          <article
            className={`grid items-stretch justify-center w-full grid-cols-10 gap-5 px-4 grow mx-auto ${styles['article']}`}
          >
            <div className="flex flex-col col-span-10 gap-8">{children}</div>
          </article>
          <Footer name={'Andrii Lytvyn'} />
        </div>
      </body>
    </html>
  )
}

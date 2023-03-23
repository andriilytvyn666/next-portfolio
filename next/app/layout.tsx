import { Inter } from 'next/font/google'

import Debug from './components/Debug'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrii Lytvyn',
  description: 'My portfolio website',
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
              {children}
              <Footer />
            </div>
          </div>
        </div>{' '}
      </body>
    </html>
  )
}

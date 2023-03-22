import { Inter } from 'next/font/google'

import Header from './components/Header'
import LayoutMotion from './components/LayoutMotion'
import './globals.css'

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
        <LayoutMotion>{children}</LayoutMotion>
      </body>
    </html>
  )
}

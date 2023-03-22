'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

import styles from '../layout.module.css'
import Debug from './Debug'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export default function LayoutMotion({ children }: Props) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <div className={styles['page-grid']}>
        <div className="flex flex-col justify-between">
          <motion.div
            key={pathname}
            transition={{ type: 'ease-in', duration: 0.25 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col justify-between h-full"
          >
            <Debug />
            {children}
            <Footer />
          </motion.div>{' '}
        </div>
      </div>
    </AnimatePresence>
  )
}

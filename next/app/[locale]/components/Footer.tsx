'use client'

import { useLocale, useTranslations } from 'next-intl'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { useEffect, useState } from 'react'

export default function Footer() {
  const locales = ['en', 'uk', 'ru'] as const
  const { Link, usePathname } = createSharedPathnamesNavigation({ locales })
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('footer')

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="flex items-center justify-between w-full px-0 pt-4 pb-6 lg:pb-5 lg:pt-6">
      <p className="hidden lg:inline">copyright © 2023 {t('copyright')}</p>
      <p className="inline lg:hidden">© 2023 {t('copyright')}</p>
      <div className="flex gap-4">
        <Link
          href={pathname}
          locale={locale !== 'uk' ? 'uk' : 'en'}
          className="select-none"
        >
          {locale !== 'uk' ? 'українська' : 'english'}
        </Link>
      </div>
    </footer>
  )
}

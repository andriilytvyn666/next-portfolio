import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

const MoreProjects: FC = () => {
  const t = useTranslations('featured')

  const phrase = t('more').split(' ')

  return (
    <Link
      href="/projects"
      className="lg:flex-col lg:absolute lg:right-0 lg:top-0 lg:max-w-[8.75rem] lg:min-w-[8.75rem] flex lg:h-full "
    >
      <div className="flex items-center justify-center w-full h-full py-6 border lg:py-0 hover:bg-bg-active hover:border-border-active border-border">
        <span className="hidden lg:inline text-fg-active">
          {`${phrase[0]} ${phrase[2]}`}
          <br />
          {phrase[1]}
        </span>
        <span className="lg:hidden text-fg-active ">{t('more')}</span>
      </div>
      <div className="hidden w-full h-20 lg:flex"></div>
    </Link>
  )
}

export default MoreProjects

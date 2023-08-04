import Link from 'next/link'
import React from 'react'
import { ReactNode } from 'react'
import { BsFillFilePdfFill } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { RiFileWord2Fill } from 'react-icons/ri'
import { SiGithub, SiLinkedin, SiSkype, SiTelegram } from 'react-icons/si'

import styles from './ButtonLink.module.css'

type Props = {
  title: string
  link: string
}

const selectIcon = (name: string): ReactNode => {
  switch (name) {
    case 'Github':
      return <SiGithub className="w-full h-full fill-fg" />
    case 'Linkedin':
      return <SiLinkedin className="w-full h-full fill-fg" />
    case 'Email':
      return <MdEmail className="w-full h-full fill-fg" />
    case 'Skype':
      return <SiSkype className="w-full h-full fill-fg" />
    case 'Telegram':
      return <SiTelegram className="w-full h-full fill-fg" />
    case 'Resume':
      return <BsFillFilePdfFill className="w-full h-full fill-bg" />
    default:
      return <FiArrowUpRight className="w-full h-full fill-fg" />
  }
}

export default function ButtonLink({ title, link }: Props) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`${title === 'Resume' ? 'ml-auto' : ''}`}
    >
      <button
        className={`${styles['button-link']} ${
          title == 'Resume' ? 'px-4 bg-fg hover:bg-fg-secondary' : 'px-3'
        }`}
      >
        <div className="w-5 h-5">{selectIcon(title)}</div>
        {title === 'Resume' ? <span className="text-bg">{title}</span> : ''}
      </button>
    </Link>
  )
}

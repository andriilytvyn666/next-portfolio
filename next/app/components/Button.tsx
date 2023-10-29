import Link from 'next/link'
import React, { FC, HTMLAttributeAnchorTarget } from 'react'
import { ReactNode } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { SiGithub, SiInstagram, SiTelegram } from 'react-icons/si'

type Props = {
  name: string
  link: string
  target?: HTMLAttributeAnchorTarget
}

const Button: FC<Props> = ({ name, link, target }: Props) => {
  const selectIcon = (name: string): ReactNode => {
    switch (name) {
      case 'github':
        return <SiGithub className="w-5 h-5" />
      case 'instagram':
        return <SiInstagram className="w-5 h-5" />
      case 'email':
        return <MdEmail className="w-5 h-5" />
      case 'telegram':
        return <SiTelegram className="w-5 h-5" />
      default:
        return <FiArrowUpRight className="w-5 h-5" />
    }
  }

  return (
    <Link href={link} target={target}>
      <button className="group flex border-border border hover:border-border-active rounded-lg px-4 py-2.5 gap-3 bg-bg-active items-center">
        <div className="[&>*]:group-hover:fill-fg-active [&>*]:transition-none">
          {selectIcon(name)}
        </div>
        <span className="group-hover:text-fg-active text-body">{name}</span>
      </button>
    </Link>
  )
}
Button.defaultProps = {
  target: '_self',
}

export default Button

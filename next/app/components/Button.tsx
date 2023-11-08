import Link from 'next/link'
import React, { FC, HTMLAttributeAnchorTarget } from 'react'
import { ReactNode } from 'react'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import { SiGithub, SiInstagram, SiTelegram } from 'react-icons/si'

type Props = {
  name: string
  link: string
  target?: HTMLAttributeAnchorTarget
  className?: string
}

const Button: FC<Props> = ({ name, link, target, className }: Props) => {
  const selectIcon = (name: string): ReactNode => {
    switch (name) {
      case 'github':
        return <SiGithub className=" group-hover:fill-fg-active" />
      case 'instagram':
        return <SiInstagram className=" group-hover:fill-fg-active" />
      case 'email':
        return <FiMail className="group-hover:stroke-fg-active" />
      case 'telegram':
        return <SiTelegram className="group-hover:fill-fg-active" />
      default:
        return <FiArrowUpRight className="group-hover:stroke-fg-active" />
    }
  }

  return (
    <Link
      href={link}
      target={target}
      className="w-full lg:w-fit group flex border-border border hover:border-border-active rounded-lg px-4 py-2.5 gap-3 bg-bg-active items-center box-content"
    >
      <div className="[&>*]:transition-none [&>*]:w-4 [&>*]:h-4">
        {selectIcon(name)}
      </div>
      <span className="group-hover:text-fg-active dark:group-hover:text-fg-active-dark">
        {name}
      </span>
    </Link>
  )
}
Button.defaultProps = {
  target: '_self',
  className: '',
}

export default Button

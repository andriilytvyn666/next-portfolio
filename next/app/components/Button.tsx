import Link from 'next/link'
import React, { FC, HTMLAttributeAnchorTarget } from 'react'
import { ReactNode } from 'react'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
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
        return (
          <SiGithub className=" group-hover:fill-fg-active dark:group-hover:fill-fg-active-dark" />
        )
      case 'instagram':
        return (
          <SiInstagram className=" group-hover:fill-fg-active dark:group-hover:fill-fg-active-dark" />
        )
      case 'email':
        return (
          <FiMail className="group-hover:stroke-fg-active dark:group-hover:stroke-fg-active-dark" />
        )
      case 'telegram':
        return (
          <SiTelegram className="group-hover:fill-fg-active dark:group-hover:fill-fg-active-dark" />
        )
      default:
        return (
          <FiArrowUpRight className="group-hover:stroke-fg-active dark:group-hover:fill-fg-active-dark" />
        )
    }
  }

  return (
    <Link href={link} target={target}>
      <button className="group flex dark:border-border-dark border-border border dark:hover:border-border-active-dark hover:border-border-active rounded-lg px-4 py-2.5 gap-3 dark:bg-bg-active-dark bg-bg-active items-center box-content">
        <div className="[&>*]:transition-none [&>*]:w-5 [&>*]:h-5">
          {selectIcon(name)}
        </div>
        <span className="group-hover:text-fg-active dark:group-hover:text-fg-active-dark">
          {name}
        </span>
      </button>
    </Link>
  )
}
Button.defaultProps = {
  target: '_self',
}

export default Button

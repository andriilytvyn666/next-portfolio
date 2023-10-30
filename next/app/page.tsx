import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

import client from '../client'
import Button from './components/Button'

export default async function Home() {
  const data = await client.fetch<Homepage>(`*[_type == "homepage"][0]`, {
    next: { cache: 'force-cache' },
  })

  const portableTextComponents: PortableTextComponents = {
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http')
          ? '_blank'
          : undefined
        if (target === '_blank') {
          return (
            <Link className="link" href={value?.href}>
              {children}
            </Link>
          )
        } else {
          return (
            <Link className="link" href={value?.href}>
              {children}
            </Link>
          )
        }
      },
    },
    block: {
      normal: ({ children }) => (
        <p className="text-fg-secondary text-body">{children}</p>
      ),
    },
  }

  return (
    <div className="flex gap-12">
      <div className="min-w-[40rem] h-[30rem] dark:hover:border-border-active-dark hover:border-border-active border border-border dark:border-border-dark overflow-hidden box-content">
        <Image
          src="/images/homepage1.webp"
          width={640}
          height={480}
          alt="Homepage picture"
          className="hover:scale-[107%] h-full select-none"
        />
      </div>
      <div className="flex justify-center flex-col gap-4 pr-16 ">
        <h1 className="text-title text-fg-active dark:text-fg-active-dark duration-100 underline">
          hi there!
        </h1>
        <p>
          i am 20 years old computer science student at lpnu (4th year)
          <br />
          i like to make things in figma and then to turn them into vue/react
          websites
          <br />
          <br />
          and i also do like to take pictures with my olympus camera or play
          some guitar whenever i feel bored or something
          <br />
          <br />
          hope you like my website
          <br />
          <br />
          have a nice day
          <br />
          <br />
          \(^ヮ^)/
        </p>

        <div className="flex gap-4 flex-wrap pt-4">
          <Button
            name="telegram"
            link="https://t.me/nneeeooo"
            target="_blank"
          />
          <Button
            name="github"
            link="https://github.com/andriilytvyn666"
            target="_blank"
          />
          <Button
            name="instagram"
            link="https://instagram.com/nneeeooo_pics"
            target="_blank"
          />
          <Button name="email" link="mailto:lytvyn.andrii.contact@gmail.com" />
        </div>
      </div>{' '}
    </div>
  )
}

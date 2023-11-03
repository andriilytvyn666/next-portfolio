import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

import client from '../client'
import Button from './components/Button'
import FeaturedProjectsSlider from './components/FeaturedProjecstSlider'
import HomepageSlider from './components/HomapageSlider'

export default async function Home() {
  const data = await client.fetch<Homepage>(
    `*[_type == "homepage"][0] { title, pix, text, links, featuredProjects }`
  )

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
    <div className="flex flex-col gap-12">
      <div className="flex gap-12">
        <HomepageSlider pix={data.pix} className="max-w-[30rem]" />
        <div className="flex flex-col justify-center w-full gap-4 pr-16">
          <h1 className="underline duration-100 text-title text-fg-active">
            {data.title}
          </h1>
          <PortableText value={data.text} components={portableTextComponents} />
          <div className="flex flex-wrap gap-4 pt-4">
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
            <Button
              name="email"
              link="mailto:lytvyn.andrii.contact@gmail.com"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <FeaturedProjectsSlider projects={data.featuredProjects} />
        <Link
          href="/projects"
          className="w-full max-w-[8.75rem] flex items-center justify-center h-[13.922rem] border hover:bg-bg-active hover:border-border-active border-border"
        >
          <span className="text-fg-active">
            {'more ->'}
            <br />
            projects
          </span>
        </Link>
      </div>
    </div>
  )
}

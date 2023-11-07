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
    <div className="flex flex-col gap-6 lg:gap-12">
      <div className="flex flex-col gap-6 lg:gap-12 lg:flex-row">
        <h1 className="underline duration-100 lg:hidden text-title text-fg-active">
          {data.title}
        </h1>
        <HomepageSlider pix={data.pix} className="w-full max-w-[30rem]" />
        <div className="flex flex-col justify-center w-full gap-4 lg:pr-16">
          <h1 className="hidden underline duration-100 lg:inline text-title text-fg-active">
            {data.title}
          </h1>
          <PortableText value={data.text} components={portableTextComponents} />
          {/* TODO: fix weird grid behaviour */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex w-full gap-4 lg:w-fit lg:flex-wrap">
              <Button
                name="telegram"
                link="https://t.me/nneeeooo"
                target="_blank"
              />
              <Button
                name="email"
                link="mailto:lytvyn.andrii.contact@gmail.com"
              />
            </div>
            <Button
              name="github"
              link="https://github.com/andriilytvyn666"
              target="_blank"
              className="col-span-2"
            />
            <Button
              name="instagram"
              link="https://instagram.com/nneeeooo_pics"
              target="_blank"
              className="col-span-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-6 lg:flex-row">
        <FeaturedProjectsSlider projects={data.featuredProjects} />
        <Link
          href="/projects"
          className="w-full lg:max-w-[8.75rem] lg:min-w-[8.75rem] flex items-center py-6 lg:py-0 justify-center lg:h-[13.641rem] border hover:bg-bg-active hover:border-border-active border-border"
        >
          <span className="hidden lg:inline text-fg-active">
            {'more ->'}
            <br />
            projects
          </span>
          <span className="lg:hidden text-fg-active">
            {'more  projects ->'}
          </span>
        </Link>
      </div>
    </div>
  )
}

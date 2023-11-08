import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

import client from '../../client'
import Button from './components/Button'
import FeaturedProjectsSlider from './components/FeaturedProjecstSlider'
import HomepageSlider from './components/HomapageSlider'
import MoreProjects from './components/MoreProjects'

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
        <HomepageSlider pix={data.pix} className="w-full lg:max-w-[30rem]" />
        <div className="flex flex-col justify-center w-full gap-4 lg:pr-16">
          <h1 className="hidden underline duration-100 lg:inline text-title text-fg-active">
            {data.title}
          </h1>
          <div className="flex flex-col gap-4 md:flex-col-reverse lg:flex-col">
            <PortableText
              value={data.text}
              components={portableTextComponents}
            />
            <div className="flex flex-col gap-4 pt-4 md:pt-0 lg:pt-4 md:flex-row">
              <div className="flex gap-4 md:hidden">
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
                name="telegram"
                link="https://t.me/nneeeooo"
                target="_blank"
                className="hidden md:flex"
              />
              <Button
                name="email"
                link="mailto:lytvyn.andrii.contact@gmail.com"
                className="hidden md:flex"
              />
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
      </div>
      <div className="relative flex flex-col w-full gap-6 lg:gap-6">
        <FeaturedProjectsSlider projects={data.featuredProjects} />
        <MoreProjects />
      </div>
    </div>
  )
}

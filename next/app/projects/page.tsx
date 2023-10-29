import imageUrlBuilder from '@sanity/image-url'
import React from 'react'

import client from '../../client'
import Card from '../components/Card'
import CardGroup from '../components/CardGroup'
import PageHead from '../components/PageHead'

export default async function Projects() {
  const data = await client.fetch<Projects>(`*[_type == "projects"][0]`, {
    next: { cache: 'force-cache' },
  })
  const builder = imageUrlBuilder(client)

  return (
    <div className="grid grid-cols-3 gap-y-8 gap-x-6 w-fit mx-auto items-center">
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
      <Card
        title="rihterb.pp.ua"
        subtitle="website for ukrainian indie musician vasily richter"
        url="https://rihterb.pp.ua"
      />
    </div>
  )
}

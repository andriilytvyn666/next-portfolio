import React from 'react'

import Card from '../components/Card'
import CardGroup from '../components/CardGroup'
import PageHead from '../components/PageHead'

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <PageHead
        title="Projects"
        className="lg:col-span-2"
        subtitle="Things I’ve been working on in my free time"
      />
      <CardGroup title="Vue 3">
        <Card
          title="Vasily Richter site"
          subtitle="Site for Ukrainian indie musician"
        />
        <Card
          title="Vasily Richter site"
          subtitle="Site for Ukrainian indie musician"
        />
        <Card
          title="Vasily Richter site"
          subtitle="Site for Ukrainian indie musician"
        />
      </CardGroup>
      <CardGroup title="React">
        <Card
          title="Portfolio site"
          subtitle="My portfolio build with Nuxt.js"
        />
      </CardGroup>
    </div>
  )
}

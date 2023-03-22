import React from 'react'

import Card from '../components/Card'
import CardGroup from '../components/CardGroup'
import PageHead from '../components/PageHead'

export default function Courses() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <PageHead
          title="Courses"
          className="lg:col-span-2"
          subtitle="My certificates for completed courses on Coursera & Udemy"
        />
        <CardGroup>
          <Card
            title="Foundations of UX Design"
            subtitle="3 Sep, 2022 · Google "
          />
          <Card
            title="Foundations of UX Design"
            subtitle="3 Sep, 2022 · Google "
          />
          <Card
            title="Foundations of UX Design"
            subtitle="3 Sep, 2022 · Google "
          />
          <Card
            title="Foundations of UX Design"
            subtitle="3 Sep, 2022 · Google "
          />
        </CardGroup>
      </div>
      <div className="flex flex-col gap-6">
        <PageHead title="Education" className="lg:col-span-2" />
        <CardGroup singleCol={true}>
          <Card
            title="Lviv Polytechnic National University"
            subtitle="Bachelor ‧ CS/AI ‧ 2020 - 2024"
          />
        </CardGroup>
      </div>
    </div>
  )
}

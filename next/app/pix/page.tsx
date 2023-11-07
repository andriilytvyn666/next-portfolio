import imageUrlBuilder from '@sanity/image-url'

import client from '../../client'
import PicCard from '../components/PicCard'
import PicsSection from '../components/PicsSection'

export default async function Pics() {
  const data = await client.fetch<PixGroup[]>(
    '*[_type == "pixGroup"] { title, date, pix }'
  )

  const builder = imageUrlBuilder(client)

  return (
    <>
      {' '}
      {data
        .sort((a, b) => {
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)

          return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
        })
        .map((pixGroup) => {
          return (
            <PicsSection key={pixGroup.title} date={new Date(pixGroup.date)}>
              {pixGroup.pix.reverse().map((pic) => {
                return (
                  <PicCard
                    key={pic.asset._ref}
                    imageUrl={builder.image(pic).url()}
                  />
                )
              })}
            </PicsSection>
          )
        })}
    </>
  )
}

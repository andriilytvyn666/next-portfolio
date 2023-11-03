'use client'

import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { FC } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import client from '../../client'

type Props = {
  pix: image[]
  className?: string
}

const HomepageSlider: FC<Props> = ({ pix, className }) => {
  const builder = imageUrlBuilder(client)
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        delay: 2000,
      }}
      allowTouchMove={false}
      loop
      spaceBetween={16}
      slidesPerView={1}
      className={className}
    >
      {pix.map((pic) => {
        return (
          <SwiperSlide key={pic.asset._ref}>
            <div className="box-content overflow-hidden border hover:border-border-active border-border">
              <Image
                src={builder.image(pic).url()}
                width={640}
                height={480}
                alt="Homepage picture"
                className="hover:scale-[107%] h-full select-none"
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
    // TODO: reuse this bullets tag
    // <div id="bullets" className="flex justify-center gap-2.5"></div>
  )
}

HomepageSlider.defaultProps = {
  className: '',
}

export default HomepageSlider

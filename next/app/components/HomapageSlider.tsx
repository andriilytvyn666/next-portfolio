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
        delay: 3000,
      }}
      loop
      spaceBetween={16}
      slidesPerView={1}
      className={className}
    >
      {pix.map((pic) => {
        return (
          <SwiperSlide key={pic.asset._ref}>
            {/* max-h-[22.625rem] */}
            <div className="md:max-h-[22.625rem] lg:max-h-[20rem] lg:h-full box-content flex items-center justify-center overflow-hidden border  hover:border-border-active border-border">
              <Image
                src={builder.image(pic).url()}
                width={480}
                height={360}
                alt="Homepage picture"
                className="hover:scale-[107%] aspect-4/3 h-full  w-full select-none"
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

'use client'

import imageUrlBuilder from '@sanity/image-url'
import { FC } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import client from '../../client'
import Project from './Project'

type Props = {
  projects: Project[]
}

const FeaturedProjectsSlider: FC<Props> = ({ projects }) => {
  const builder = imageUrlBuilder(client)

  return (
    <div className="max-w-[73.078rem]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.title}>
              <Project
                title={project.title}
                subtitle={project.subtitle}
                url={project.link}
                imageUrl={builder.image(project.image).url()}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default FeaturedProjectsSlider

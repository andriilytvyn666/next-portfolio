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
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      slidesPerView={3}
      spaceBetween={16}
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
  )
}

export default FeaturedProjectsSlider

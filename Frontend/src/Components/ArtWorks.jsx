import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import artWorks from '../Data/artworks'

const ArtWorks = () => {
  return (
    <section className="mt-32 max-w-7xl mx-auto px-6 text-gray-100">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-600 font-mono drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          ArtWorks
        </h1>
        <h2 className="text-lg md:text-xl font-light mt-3 text-blue-300">
          Some of my{' '}
          <span className="text-pink-400 font-semibold">best works</span>.
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={40}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="mt-12"
      >
        {artWorks.map((art, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Artwork Card */}
            <div className="relative w-full max-w-md aspect-[3/4] bg-black/30 overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.4)] group">
              <img
                src={art.img}
                alt={art.Name}
                className="w-full h-full object-contain p-2 transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Name Tag */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 py-2 text-center text-purple-300 font-medium text-lg transition-all duration-500 group-hover:bg-black/70">
                {art.Name}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/60 rounded-2xl transition-all duration-500"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ArtWorks

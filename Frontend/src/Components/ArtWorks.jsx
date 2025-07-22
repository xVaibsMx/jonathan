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
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-12"
      >
        {artWorks.map((art, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Artwork Card */}
            <div className="relative w-full max-w-md h-[28rem] md:h-[32rem] bg-black/40 overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.4)] group flex items-center justify-center">
              <img
                src={art.img}
                alt={art.Name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-lg font-semibold text-purple-300">
                  {art.Name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ArtWorks

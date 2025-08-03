import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import artWorks from '../Data/artworks'

const ArtWorks = () => {
  return (
    <section
      aria-label="Jonathan's Artworks"
      className="mt-32 max-w-7xl mx-auto px-6 text-gray-100"
    >
      {/* Heading */}
      <header className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-semibold text-purple-700 font-mono tracking-wide">
          ArtWorks
        </h2>
        <p className="text-xl md:text-2xl font-light mt-4 text-blue-400 max-w-xl mx-auto leading-relaxed">
          A curated collection of my{' '}
          <span className="text-pink-400 font-semibold">finest artworks</span>,
          showcasing creativity and technique.
        </p>
      </header>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={40}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="mt-10"
        aria-live="polite"
      >
        {artWorks.map((art, index) => (
          <SwiperSlide
            key={art.id || index}
            className="flex flex-col items-center justify-center"
          >
            <article className="relative w-full max-w-sm aspect-[3/4] bg-black/25 rounded-3xl shadow-lg shadow-purple-700/40 overflow-hidden group transition-transform duration-500 ease-in-out hover:scale-[1.03]">
              <img
                src={art.img}
                alt={art.Name}
                loading="lazy"
                className="w-full h-full object-cover transition-shadow duration-500 ease-in-out group-hover:shadow-[0_0_30px_10px_rgba(168,85,247,0.5)] rounded-3xl"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-3 text-center text-purple-300 font-semibold text-lg tracking-wide transition-colors duration-500 group-hover:bg-black/60">
                {art.Name}
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl border-4 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ArtWorks

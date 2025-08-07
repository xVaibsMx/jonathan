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
      id="artworks"
      aria-label="Jonathan's Artworks"
      className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 text-gray-100"
    >
      <header className="text-center mb-16 px-2 sm:px-0">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-purple-700 font-mono tracking-wide">
          ArtWorks
        </h2>
        <p className="text-base sm:text-xl md:text-2xl font-light mt-3 sm:mt-4 text-blue-400 max-w-xl mx-auto leading-relaxed">
          A curated collection of my{' '}
          <span className="text-pink-400 font-semibold">finest artworks</span>,
          showcasing creativity and technique.
        </p>
      </header>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        pagination={{
          clickable: true,
          bulletClass:
            'swiper-pagination-bullet !bg-purple-400 !w-3 !h-3 !mx-1 sm:!w-4 sm:!h-4',
          bulletActiveClass: '!bg-purple-600',
        }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="mt-10"
        aria-live="polite"
      >
        {artWorks.map((art, index) => (
          <SwiperSlide
            key={art.id || index}
            className="flex flex-col items-center justify-center"
          >
            <article className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-[3/4] bg-black/30 rounded-3xl shadow-lg shadow-purple-700/40 overflow-hidden group transition-transform duration-500 ease-in-out hover:scale-[1.03]">
              <img
                src={art.img}
                alt={art.Name}
                loading="lazy"
                className="w-full h-full object-cover rounded-3xl transition-all duration-500 ease-in-out group-hover:shadow-[0_0_30px_10px_rgba(168,85,247,0.5)]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-2 sm:py-3 text-center text-purple-300 font-semibold text-base sm:text-lg tracking-wide transition-colors duration-500 group-hover:bg-black/60">
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

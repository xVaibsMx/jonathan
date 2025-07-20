import React from 'react'
import januImg from '../Assets/Jonathan.jpeg'
import kakashi from '../Assets/Kakashi.jpg'

const Hero = () => {
  return (
    <section className="mt-12 text-gray-100">
      {/* 🔥 Top Main Hero */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 px-6">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-400 ">
            Jonathan Sam <br /> Wilbur
          </h1>
          <h2 className="text-2xl mt-3 text-blue-300 font-semibold tracking-wide">
            Freelance <span className="text-pink-400">Anime Artist</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-sm leading-relaxed mx-auto md:mx-0">
            Draws with the precision of a{' '}
            <span className="text-red-400 font-bold drop-shadow-sm">
              Sharingan
            </span>
            . ⚡
          </p>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/official_anime_art_sales/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-md shadow-purple-900/50"
          >
            Order Now
          </a>
        </div>

        {/* Right Main Image */}
        <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-[0_0_25px_rgba(168,85,247,0.4)]">
          <img
            src={januImg}
            alt="Artwork"
            className="w-full h-full object-cover transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-1"
          />
        </div>
      </div>

      {/* 🔥 Kakashi Inspired Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-20 text-center md:text-left px-6">
        {/* Kakashi Image */}
        <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-2xl shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          <img
            src={kakashi}
            alt="Kakashi"
            className="w-full h-full object-cover transform transition-all duration-500 ease-in-out hover:scale-110"
          />
        </div>

        {/* Kakashi-Inspired Intro Text */}
        <div className="max-w-lg text-gray-300 leading-relaxed">
          <p className="text-xl md:text-2xl font-light">
            Hey, I’m <span className="text-purple-400 font-bold">Jonathan</span>
            , the{' '}
            <span className="text-blue-400 font-semibold">
              Copy Artist of Pixels
            </span>
            . <br />I mimic{' '}
            <span className="text-pink-400 font-semibold">styles</span>, master{' '}
            <span className="text-green-400 font-semibold">techniques</span>,
            and craft{' '}
            <span className="text-yellow-400 font-semibold">
              original artworks
            </span>{' '}
            that speak louder than words. <br />
            Like{' '}
            <span className="text-red-400 font-bold">
              Kakashi, the Copy Ninja
            </span>
            , I adapt, learn fast, and{' '}
            <span className="text-purple-300 font-semibold">
              perfect every stroke
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

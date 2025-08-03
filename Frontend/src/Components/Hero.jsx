import React from 'react'
import januImg from '../Assets/Jonathan.jpeg'
import kakashi from '../Assets/Kakashi.jpg'

const Hero = () => {
  return (
    <section id="hero" className="mt-12 text-gray-100 px-4 sm:px-6">
      {/* Image first on mobile */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-16">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-500 font-mono leading-tight drop-shadow-sm">
            Jonathan <br />
            Sam Wilbur
          </h1>
          <h2 className="text-lg sm:text-xl mt-2 text-blue-300 font-semibold tracking-widest uppercase">
            Freelance <span className="text-pink-400">Anime Artist</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-sm leading-relaxed mx-auto md:mx-0">
            Drawing with the precision of a{' '}
            <span className="text-red-400 font-bold drop-shadow-md">
              Sharingan
            </span>
            . ⚡ Your favorite characters, redrawn with soul.
          </p>
          <a
            href="https://www.instagram.com/official_anime_art_sales/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 text-purple-400 font-medium border border-purple-500 rounded-full hover:text-white hover:bg-purple-600 transition-all duration-300 shadow-lg"
          >
            Order Now
          </a>
        </div>

        {/* Profile Image */}
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-3xl shadow-[0_0_25px_rgba(168,85,247,0.4)]">
          <img
            src={januImg}
            alt="Jonathan"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105 hover:rotate-[1.5deg]"
          />
        </div>
      </div>

      {/* Kakashi Visual + Intro */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 mt-16 text-center md:text-left">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 overflow-hidden rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          <img
            src={kakashi}
            alt="Kakashi"
            className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
          />
        </div>

        <div className="max-w-xl text-gray-300 px-2 sm:px-0">
          <p className="text-base sm:text-lg font-light leading-loose">
            I'm <span className="text-purple-400 font-bold">Jonathan</span>, a{' '}
            <span className="text-blue-400 font-semibold">
              Copy Artist of Pixels
            </span>
            . I recreate anime styles, perfect techniques, and craft{' '}
            <span className="text-yellow-400 font-semibold">
              original artworks
            </span>{' '}
            that speak louder than words. <br />
            Inspired by{' '}
            <span className="text-red-400 font-bold">
              Kakashi, the Copy Ninja
            </span>
            , I adapt, evolve, and perfect every stroke.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import januImg from '../Assets/Jonathan.jpeg'
import kakashi from '../Assets/Kakashi.jpg'

const Hero = () => {
  return (
    <section id="hero" className="mt-12 text-gray-100 px-4 sm:px-6">
      {/* Top part with image + name */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-600 font-mono leading-tight">
            Jonathan <br />
            Sam Wilbur
          </h1>
          <h2 className="text-xl sm:text-2xl mt-3 text-blue-300 font-semibold tracking-wide">
            Freelance <span className="text-pink-400">Anime Artist</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-sm leading-relaxed mx-auto md:mx-0">
            Draws with the precision of a{' '}
            <span className="text-red-400 font-bold drop-shadow-sm">
              Sharingan
            </span>
            . ⚡
          </p>
          <a
            href="https://www.instagram.com/official_anime_art_sales/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 sm:mt-8 px-4 py-2 text-purple-400 font-medium text-base sm:text-lg border border-purple-500 rounded-full hover:text-white hover:bg-purple-500 transition-all duration-300"
          >
            Order Now
          </a>
        </div>

        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-[0_0_25px_rgba(168,85,247,0.4)]">
          <img
            src={januImg}
            alt="Artwork"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-110 hover:rotate-[1deg] hover:shadow-[0_0_30px_rgba(216,70,239,0.4)]"
          />
        </div>
      </div>

      {/* Bottom section with Kakashi image and text */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-16 text-center md:text-left">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden rounded-2xl shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          <img
            src={kakashi}
            alt="Kakashi"
            className="w-full h-full object-cover transform transition-all duration-500 ease-in-out hover:scale-110"
          />
        </div>

        <div className="max-w-lg text-gray-300 leading-relaxed px-4 sm:px-0">
          <p className="text-base sm:text-xl md:text-2xl font-light">
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

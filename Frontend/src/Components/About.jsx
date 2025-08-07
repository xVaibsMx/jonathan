import React from 'react'
import januImg from '../Assets/Jonathan2.jpeg'

const About = () => {
  return (
    <section
      id="about"
      className="mt-24 sm:mt-28 py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center text-gray-100 bg-gradient-to-b from-[#0f0f1a] via-[#0c0c17] to-[#090915]"
    >
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-purple-700 font-mono tracking-wide">
          Meet Jonathan
        </h1>
        <h3 className="text-lg sm:text-2xl md:text-3xl text-blue-400 mt-3 font-light tracking-wide px-2 sm:px-0">
          The boy who turns anime dreams into jaw-dropping sketches 🎨
        </h3>
      </div>

      {/* Profile Image */}
      <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-lg shadow-purple-700/30 mb-10 sm:mb-12">
        <img
          src={januImg}
          alt="Jonathan"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
        />
      </div>

      {/* Intro Paragraphs */}
      <div className="max-w-2xl sm:max-w-3xl text-center space-y-5 sm:space-y-6 leading-relaxed text-gray-200">
        <p className="text-base sm:text-xl md:text-2xl">
          Yo! I’m{' '}
          <span className="text-purple-500 font-semibold">Jonathan</span> – a{' '}
          <span className="text-blue-400 font-semibold">
            16-year-old anime fanatic
          </span>{' '}
          armed with pencils, pens, and way too much energy.
        </p>
        <p className="text-base sm:text-xl md:text-2xl">
          For over <span className="text-pink-500 font-semibold">2 years</span>,
          I’ve been obsessed with drawing{' '}
          <span className="text-green-400 font-semibold">
            cool anime characters
          </span>{' '}
          (and yes, my{' '}
          <span className="text-yellow-400 font-semibold">shading game</span> is
          ridiculously strong 💪).
        </p>
        <p className="text-base sm:text-xl md:text-2xl">
          Favorite character?{' '}
          <span className="text-red-500 font-semibold">Kakashi Hatake</span> –
          because copying techniques and making them my own is kinda my thing.
          🎭
        </p>
      </div>

      {/* Fun Fact Box */}
      <div className="mt-12 sm:mt-14 p-5 sm:p-6 bg-gray-900/70 rounded-2xl border border-purple-700/30 shadow-md shadow-purple-800/40 max-w-md text-center text-sm sm:text-base md:text-lg text-gray-300">
        💡 <span className="text-purple-500 font-semibold">Fun Fact:</span> My
        sketchbook is basically an{' '}
        <span className="text-blue-400 font-semibold">anime multiverse</span>.
        Enter at your own risk. 😉
      </div>
    </section>
  )
}

export default About

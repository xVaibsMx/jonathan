import React from 'react'
import januImg from '../Assets/Jonathan.jpeg'

const About = () => {
  return (
    <section
      className="mt-28 py-20 flex flex-col items-center text-gray-100 px-6 
                 bg-gradient-to-b from-[#0f0f1a] via-[#0c0c17] to-[#090915]"
    >
      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-semibold text-purple-700 font-mono tracking-wide">
          ✨ Meet Jonathan
        </h1>
        <h3 className="text-2xl md:text-3xl text-blue-400 mt-3 font-light tracking-wide max-w-md mx-auto">
          The boy who turns anime dreams into jaw-dropping sketches 🎨
        </h3>
      </div>

      {/* Image */}
      <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-lg shadow-purple-700/30 mb-12">
        <img
          src={januImg}
          alt="Jonathan"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
        />
      </div>

      {/* Text */}
      <div className="max-w-3xl text-center space-y-6 leading-relaxed text-gray-200">
        <p className="text-xl md:text-2xl">
          Yo! I’m{' '}
          <span className="text-purple-500 font-semibold">Jonathan</span> – a{' '}
          <span className="text-blue-400 font-semibold">
            16-year-old anime fanatic
          </span>{' '}
          armed with pencils, pens, and way too much energy.
        </p>

        <p className="text-xl md:text-2xl">
          For over <span className="text-pink-500 font-semibold">2 years</span>,
          I’ve been obsessed with drawing{' '}
          <span className="text-green-400 font-semibold">
            cool anime characters
          </span>{' '}
          (and yes, my{' '}
          <span className="text-yellow-400 font-semibold">shading game</span> is
          ridiculously strong 💪).
        </p>

        <p className="text-xl md:text-2xl">
          Favorite character?{' '}
          <span className="text-red-500 font-semibold">Kakashi Hatake</span> –
          because copying techniques and making them my own is kinda my thing.
          🎭
        </p>
      </div>

      {/* Fun Fact Box */}
      <div className="mt-14 p-6 bg-gray-900/70 rounded-2xl border border-purple-700/30 shadow-md shadow-purple-800/40 max-w-lg text-center text-base md:text-lg text-gray-300">
        💡 <span className="text-purple-500 font-semibold">Fun Fact:</span> My
        sketchbook is basically an{' '}
        <span className="text-blue-400 font-semibold">anime multiverse</span>.
        Enter at your own risk. 😉
      </div>
    </section>
  )
}

export default About

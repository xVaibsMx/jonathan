import React from 'react'
import januImg from '../Assets/Jonathan.jpeg'

const About = () => {
  return (
    <section
      className="mt-28 py-20 flex flex-col items-center text-gray-100 px-6 
  bg-gradient-to-b from-[#0f0f1a] via-[#0c0c17] to-[#090915]"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-extrabold text-purple-600 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
          ✨ Meet Jonathan
        </h1>
        <h3 className="text-2xl md:text-3xl text-blue-300 mt-3 font-light tracking-wide">
          The boy who turns anime dreams into jaw-dropping sketches 🎨
        </h3>
      </div>

      {/* Image */}
      <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-[0_0_35px_rgba(168,85,247,0.5)] mb-12">
        <img
          src={januImg}
          alt="Jonathan"
          className="w-full h-full object-cover transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-1"
        />
      </div>

      {/* Text */}
      <div className="max-w-3xl text-center space-y-6 text-xl md:text-2xl leading-relaxed">
        <p>
          Yo! I’m <span className="text-purple-400 font-bold">Jonathan</span> –
          a{' '}
          <span className="text-blue-400 font-semibold">
            16-year-old anime fanatic
          </span>{' '}
          armed with pencils, pens, and way too much energy.
        </p>

        <p>
          For over <span className="text-pink-400 font-bold">2 years</span>,
          I’ve been obsessed with drawing{' '}
          <span className="text-green-400 font-semibold">
            cool anime characters
          </span>{' '}
          (and yes, my{' '}
          <span className="text-yellow-400 font-bold">shading game</span> is
          ridiculously strong 💪).
        </p>

        <p>
          Favorite character?{' '}
          <span className="text-red-400 font-bold">Kakashi Hatake</span> –
          because copying techniques and making them my own is kinda my thing.
          🎭
        </p>
      </div>

      {/* Fun Fact Box */}
      <div className="mt-12 p-6 bg-gray-900/80 rounded-2xl border border-purple-800/40 shadow-lg shadow-purple-900/50 max-w-lg text-center text-lg md:text-xl">
        💡 <span className="text-purple-400 font-semibold">Fun Fact:</span> My
        sketchbook is basically an{' '}
        <span className="text-blue-400 font-bold">anime multiverse</span>. Enter
        at your own risk. 😉
      </div>
    </section>
  )
}

export default About

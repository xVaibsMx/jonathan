import React from 'react'
import januImg from '../Assets/Jonathan.jpeg'

const Landing = () => {
  return (
    <main>
      <div className="flex justify-center items-center gap-16 mt-10 text-gray-100">
        {/* Left Text Section */}
        <div>
          <h1 className="text-5xl font-extrabold text-purple-400 leading-tight">
            Jonathan Sam <br /> Wilbur
          </h1>
          <h2 className="text-2xl mt-3 text-blue-300 font-semibold tracking-wide">
            Freelance Anime Artist
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-sm leading-relaxed">
            Draws with the precision <br /> of a{' '}
            <span className="text-red-400 font-bold">Sharingan</span>. ⚡
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-96 h-96 overflow-hidden rounded-3xl shadow-2xl shadow-purple-800/50">
          <img
            src={januImg}
            alt="Artwork"
            className="w-full h-full object-cover transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-1"
          />
        </div>
      </div>
    </main>
  )
}

export default Landing

import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('contact')
      if (section) {
        const top = section.getBoundingClientRect().top
        if (top < window.innerHeight * 0.9) {
          setIsVisible(true)
          window.removeEventListener('scroll', onScroll)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll() // check immediately on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="contact"
      className={`py-24 px-6 text-gray-100 flex flex-col items-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <header className="text-center mb-16 max-w-3xl">
        <h2 className="text-5xl font-bold text-purple-500 tracking-tight mb-4">
          📬 Get in Touch
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed">
          Interested in collaborating, commissioning artwork, or just want to
          say hi? Reach out to me through the links below — I’d love to hear
          from you.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center">
        <a
          href="https://www.instagram.com/_copy___ninja_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-4 border border-purple-500 text-purple-400 hover:border-purple-300 hover:text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-purple-700/40 w-full md:w-auto"
        >
          <span className="text-base font-medium">Jonathan's Personal</span>
        </a>

        <a
          href="https://www.instagram.com/official_anime_art_sales/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-4 border border-pink-500 text-pink-400 hover:border-pink-300 hover:text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-pink-700/40 w-full md:w-auto"
        >
          <span className="text-base font-medium">Anime Art Sales</span>
        </a>
      </div>
    </section>
  )
}

export default Contact

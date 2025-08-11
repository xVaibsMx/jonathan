import React, { useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

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
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 text-gray-100 flex flex-col items-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <header className="text-center mb-14 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-500 tracking-tight mb-4">
          📬 Get in Touch
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-light text-gray-300 leading-relaxed">
          Interested in collaborating, commissioning artwork, or just want to
          say hi? Reach out to me through the links below — I’d love to hear
          from you.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center">
        <a
          href="https://www.instagram.com/_copy___ninja_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 border border-purple-500 text-purple-400 hover:border-purple-300 hover:text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-purple-700/40 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaInstagram className="text-lg" />
          <span className="font-medium">Jonathan's Personal</span>
        </a>

        <a
          href="https://www.instagram.com/official_anime_art_sales/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 border border-pink-500 text-pink-400 hover:border-pink-300 hover:text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-pink-700/40 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaInstagram className="text-lg" />
          <span className="font-medium">Anime Art Sales</span>
        </a>

        <a
          href="https://wa.me/917708418374"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 border border-green-500 text-green-400 hover:border-green-300 hover:text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-green-700/40 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaWhatsapp className="text-lg" />
          <span className="font-medium">WhatsApp</span>
        </a>
      </div>
    </section>
  )
}

export default Contact

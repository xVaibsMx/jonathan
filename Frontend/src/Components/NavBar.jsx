import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: '🎨 ArtWorks', target: 'artworks' },
    { label: '✨ Meet Jonathan', target: 'about' },
    { label: "📩 Let's Collab", target: 'contact' },
  ]

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (!section) return

    const duration = 4000 // duration in milliseconds (1.5 seconds)
    const start = window.pageYOffset
    const targetPosition =
      section.getBoundingClientRect().top + window.pageYOffset
    const distance = targetPosition - start
    let startTime = null

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = easeInOutQuad(timeElapsed, start, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      } else {
        window.scrollTo(0, targetPosition) // Fix final position
      }
    }

    requestAnimationFrame(animation)
    setIsOpen(false) // Close menu on mobile
  }

  return (
    <nav className="w-full flex justify-center pt-10 z-50 relative">
      <div className="md:hidden absolute top-8 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-100 bg-purple-700 px-3 py-2 rounded-md shadow-md shadow-purple-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 text-lg font-mono bg-gray-900/80 text-gray-100 rounded-3xl py-4 px-8 shadow-lg shadow-purple-900/40 backdrop-blur-md border border-purple-800/40 transition-all duration-500 ease-in-out ${
          isOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            onClick={() => scrollToSection(item.target)}
            className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-700 ease-out hover:bg-purple-500 hover:text-white"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar

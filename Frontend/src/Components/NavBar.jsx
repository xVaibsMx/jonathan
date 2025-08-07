import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: '/', target: 'hero' },
    { label: '🎨 ArtWorks', target: 'artworks' },
    { label: '✨ Meet Jonathan', target: 'about' },
    { label: '📬 Get in Touch', target: 'contact' },
  ]

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (!section) return

    const duration = 1200
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
        window.scrollTo(0, targetPosition)
      }
    }

    requestAnimationFrame(animation)
    setIsOpen(false)
  }

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="fixed top-0 left-1/2 z-50 flex justify-center pt-6 backdrop-blur-sm -translate-x-1/2 w-full max-w-7xl px-4">
        {/* Mobile Toggle Button */}
        <div className="md:hidden absolute top-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-100 bg-purple-700 px-3 py-2 rounded-md shadow-md shadow-purple-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen
              ? 'absolute top-16 left-1/2 -translate-x-1/2 mx-auto w-[90%]'
              : ''
          } md:flex flex-col md:flex-row items-center gap-6 md:gap-10 text-base font-mono bg-gray-900/90 text-gray-100 rounded-3xl px-6 py-5 shadow-xl shadow-purple-900/40 backdrop-blur-md border border-purple-800/40 transition-all duration-500 ease-in-out ${
            isOpen ? 'flex' : 'hidden md:flex'
          }`}
          style={{ minWidth: '250px' }}
        >
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => scrollToSection(item.target)}
              className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-purple-500 hover:text-white"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar

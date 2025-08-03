import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-20 border-t border-purple-800/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Jonathan Sam Wilbur. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/_copy___ninja_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-600 transition-colors duration-300"
            aria-label="Jonathan's Personal Instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/official_anime_art_sales/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-600 transition-colors duration-300"
            aria-label="Anime Art Sales Instagram"
          >
            Art Sales
          </a>
          <a
            href="mailto:jonathan@example.com"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            aria-label="Email Jonathan"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

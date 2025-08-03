import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-20 border-t border-purple-800/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Jonathan Sam Wilbur. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-sm text-gray-400">
          <p className="mb-2 md:mb-0">
            Built by{' '}
            <a
              href="https://x.com/xVaibsMx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-600"
            >
              Vaibhav.M
            </a>
          </p>

          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/_copy___ninja_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
              aria-label="Jonathan's Personal Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.instagram.com/official_anime_art_sales/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors duration-300"
              aria-label="Anime Art Sales Instagram"
            >
              Art Sales
            </a>
            <a
              href="mailto:jonathan@example.com"
              className="hover:text-gray-100 transition-colors duration-300"
              aria-label="Email Jonathan"
            >
              Email
            </a>
            <a
              href="https://github.com/xVaibsMx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="Vaibhav's GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

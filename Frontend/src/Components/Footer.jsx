import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 border-t border-purple-800/40">
      {/* Main Info Section */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Jonathan Sam Wilbur. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="https://www.instagram.com/_copy___ninja_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            Personal Instagram
          </a>
          <a
            href="https://www.instagram.com/official_anime_art_sales/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            Art Sales
          </a>
          <a
            href="mailto:jonathan@example.com"
            className="hover:text-gray-100 transition"
          >
            Email
          </a>
        </div>
      </div>

      {/* Creator Section */}
      <div className="bg-gray-950 border-t border-purple-800/30 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            Built & Maintained by{' '}
            <a
              href="https://x.com/xVaibsMx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-600 transition"
            >
              Vaibhav.M
            </a>
          </p>

          <div className="flex space-x-5 text-sm text-gray-400">
            <a
              href="https://x.com/xVaibsMx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.instagram.com/xvaibsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              Instagram
            </a>
            <a
              href="https://github.com/xVaibsMx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
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

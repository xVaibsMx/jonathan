import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-purple-800/40">
      {/* Main Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Jonathan Sam Wilbur. All rights reserved.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-sm text-center md:text-right">
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
            href="https://wa.me/917708418374"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            WhatsApp
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
          <p className="text-sm text-center text-gray-400">
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

          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-sm text-gray-400">
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

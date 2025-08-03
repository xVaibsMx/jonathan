import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-center pt-10">
      <ul className="flex gap-10 text-lg font-mono bg-gray-900/80 text-gray-100 rounded-full py-3 px-10 shadow-lg shadow-purple-900/40 backdrop-blur-md border border-purple-800/40">
        {[
          { label: '🎨 ArtWorks' },
          { label: '✨ Meet Jonathan' },
          { label: "📩 Let's Collab" },
        ].map((item, idx) => (
          <li
            key={idx}
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

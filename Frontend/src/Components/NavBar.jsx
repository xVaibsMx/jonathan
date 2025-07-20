import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-center pt-10">
      <ul className="flex gap-10 text-lg font-mono bg-gray-900/80 text-gray-100 rounded-full py-3 px-10 shadow-lg shadow-purple-900/40 backdrop-blur-md border border-purple-800/40">
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out">
          ✨ Meet Jonathan
        </li>
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out">
          🎨 Masterpieces
        </li>
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out">
          📩 Let's Collab
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

import React from 'react'

const NavBar = () => {
  return (
    <section className="flex justify-center pt-10">
      <ul className="flex gap-12 text-lg font-mono bg-gray-900/80 text-gray-100 rounded-full py-3 px-12 shadow-md shadow-purple-900/40 backdrop-blur-md">
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out">
          About
        </li>
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out">
          Gallery
        </li>
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out">
          Contact
        </li>
      </ul>
    </section>
  )
}

export default NavBar

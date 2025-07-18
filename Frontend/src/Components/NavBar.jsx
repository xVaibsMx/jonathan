import React from 'react'

const NavBar = () => {
  return (
    <section className="flex justify-center pt-10">
      <ul className="flex gap-12 text-xl font-mono bg-black bg-opacity-80 text-white rounded-full py-3 px-12 shadow-lg">
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-amber-200 hover:text-black transition">
          About
        </li>
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-amber-200 hover:text-black transition">
          Gallery
        </li>
        <li className="cursor-pointer rounded-full px-4 py-2 hover:bg-amber-200 hover:text-black transition">
          Contact
        </li>
      </ul>
    </section>
  )
}

export default NavBar

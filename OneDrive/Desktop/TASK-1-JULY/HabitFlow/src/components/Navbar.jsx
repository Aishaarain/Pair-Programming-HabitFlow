import React from 'react'

import DarkMode from './DarkMode'
const Navbar = () => {
  return (
  <>
  <nav className="flex items-center justify-between px-6 md:px-16 py-4 border-b dark:bg-teal-900 dark:text-white">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpeg" alt="Habitflow Logo" className="w-12 h-12 rounded-full" />
            <span className="text-xl font-semibold">Habitflow</span>
          </div>
  
          <div className="flex items-center space-x-3">
            <DarkMode/>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </nav> 
        </>
  )
}

export default Navbar
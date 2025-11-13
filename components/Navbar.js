'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="backdrop-blur-lg bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-700 px-6 py-4 flex items-center justify-between relative shadow-2xl border-b border-white/20">
      {/* Logo with enhanced styling */}
      <Link href="/shorten">
        <div className="text-3xl font-extrabold text-white tracking-wider cursor-pointer hover:scale-105 transition-all duration-300 hover:drop-shadow-glow">
          Bit<span className="text-yellow-300">Links</span>
          
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white font-semibold items-center">
        <Link href="/">
          <li className="hover:text-yellow-300 transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl hover:scale-110 hover:shadow-lg">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="hover:text-cyan-300 transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl hover:scale-110 hover:shadow-lg">
            About
          </li>
        </Link>
        <Link href="/shorten">
          <li className="hover:text-green-300 transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl hover:scale-110 hover:shadow-lg">
            Shorten
          </li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-pink-300 transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl hover:scale-110 hover:shadow-lg">
            Contact
          </li>
        </Link>
        <li className='flex gap-4 ml-4'>
          <Link href="/shorten">
            <button className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-xl shadow-2xl px-6 py-3 transition-all duration-300 hover:scale-110 hover:shadow-glow transform hover:-translate-y-1'>
              🚀 Try Now
            </button>
          </Link>
          <Link  href="https://github.com/Ashvin-lohana" 
  target="_blank">
            <button className='bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black border border-gray-600 text-white font-bold rounded-xl shadow-2xl px-6 py-3 transition-all duration-300 hover:scale-110 flex items-center gap-2 hover:shadow-glow'>
              ⭐ GitHub
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div 
        className="md:hidden text-white cursor-pointer text-2xl bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-b from-purple-700 to-indigo-800 backdrop-blur-lg md:hidden shadow-2xl border-t border-white/20 z-50">
          <ul className="flex flex-col p-4 gap-4 text-white font-semibold">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-yellow-300 transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl hover:scale-105 border-l-4 border-yellow-400">
                🏠 Home
              </li>
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-cyan-300 transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl hover:scale-105 border-l-4 border-cyan-400">
                ℹ️ About
              </li>
            </Link>
            <Link href="/generate" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-green-300 transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl hover:scale-105 border-l-4 border-green-400">
                🔗 Shorten
              </li>
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-pink-300 transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl hover:scale-105 border-l-4 border-pink-400">
                📞 Contact
              </li>
            </Link>
            <div className="flex gap-3 mt-4">
              <Link href="/shorten" onClick={() => setIsMobileMenuOpen(false)}>
                <button className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg px-6 py-3 transition-all duration-300 hover:scale-105 flex-1 text-center'>
                  🚀 Try Now
                </button>
              </Link>
              <Link href="/github" onClick={() => setIsMobileMenuOpen(false)}>
                <button className='bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black border border-gray-600 text-white font-bold rounded-xl shadow-lg px-6 py-3 transition-all duration-300 hover:scale-105 flex-1 text-center flex items-center justify-center gap-2'>
                  ⭐ GitHub
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '@/constants'

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          TaskManager
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center gap-6 text-gray-600">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

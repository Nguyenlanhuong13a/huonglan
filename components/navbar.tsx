"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  // Helper function to get link classes
  const getLinkClasses = (path: string, isMobile = false) => {
    const baseClasses = isMobile 
      ? "block py-3 px-4 transition-colors min-h-[44px] flex items-center"
      : "transition-all duration-300 font-medium hover:scale-105"
    
    const activeClasses = isActive(path)
      ? `text-restaurant-orange-500 font-semibold ${isMobile ? 'nav-link-active-mobile bg-orange-50 dark:bg-orange-900/20' : 'nav-link-active'}`
      : "text-restaurant-charcoal-700 dark:text-gray-300 hover:text-restaurant-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
    
    return `${baseClasses} ${activeClasses}`
  }

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm fade-in-down transition-colors duration-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300 min-h-[44px] min-w-[44px]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="https://huonglanfresno.com/wp-content/uploads/2023/10/Untitled-design-2023-09-30T193752.932.png"
                alt="Huong Lan Logo"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:rotate-12 transition-transform duration-500"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.2) brightness(1.1)'
                }}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold text-restaurant-orange-500 leading-tight">
                Huong Lan
              </span>
              <span className="text-xs text-restaurant-charcoal-500 dark:text-gray-400 font-medium hidden sm:block">
                Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link href="/" className={getLinkClasses('/')}>
                Home
              </Link>
              <Link href="/menu" className={getLinkClasses('/menu')}>
                Menu
              </Link>
              <Link href="/locations" className={getLinkClasses('/locations')}>
                Locations
              </Link>
              <Link href="/contact" className={getLinkClasses('/contact')}>
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-restaurant-charcoal-700 dark:text-gray-300 hover:text-restaurant-orange-500 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="py-2 space-y-1">
              <Link
                href="/"
                className={getLinkClasses('/', true)}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className={getLinkClasses('/menu', true)}
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/locations"
                className={getLinkClasses('/locations', true)}
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/contact"
                className={getLinkClasses('/contact', true)}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

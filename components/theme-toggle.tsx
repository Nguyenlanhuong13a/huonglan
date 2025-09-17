'use client'

import { useTheme } from '@/lib/theme-context'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="relative p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 text-yellow-500" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 text-yellow-500 transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`h-5 w-5 text-blue-500 absolute top-2 left-2 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
    </button>
  )
}

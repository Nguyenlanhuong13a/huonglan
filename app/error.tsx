"use client"

import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-restaurant-orange-500 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Server Error
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Something went wrong on our end. Please try again later.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={reset}
            className="bg-restaurant-orange-500 text-white px-8 py-3 rounded-2xl hover:bg-restaurant-orange-600 transition-all duration-300 font-semibold"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 font-semibold"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

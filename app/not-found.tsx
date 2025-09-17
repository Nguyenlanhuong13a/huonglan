import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-restaurant-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link 
          href="/"
          className="bg-restaurant-orange-500 text-white px-8 py-3 rounded-2xl hover:bg-restaurant-orange-600 transition-all duration-300 font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

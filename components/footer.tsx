import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-white py-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Restaurant Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3 text-orange-400">Huong Lan Restaurant</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Serving The Central Valley For Over 10 Years. Authentic Vietnamese cuisine with traditional flavors and fresh ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-orange-400">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/menu" className="block text-gray-300 hover:text-orange-400 transition-colors">Menu</Link>
              <Link href="/locations" className="block text-gray-300 hover:text-orange-400 transition-colors">Locations</Link>
              <Link href="/reservations" className="block text-gray-300 hover:text-orange-400 transition-colors">Reservations</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-orange-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-orange-400">Contact</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <p><strong>Huong Lan 9:</strong> (559) 221-8000</p>
              <p><strong>Huong Lan 10:</strong> (559) 251-5000</p>
              <p><strong>Pho Or Banh Mi:</strong> (559) 271-9998</p>
              <p className="text-xs text-gray-400 mt-2">Multiple locations in Fresno</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>© 2024 Huong Lan Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

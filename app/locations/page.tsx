import { locations } from "@/lib/locations-data"

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Locations</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Visit us at any of our three convenient locations throughout Fresno
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">{location.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${location.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-orange-600 transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300">{location.hours}</p>
                  </div>
                </div>

                {location.hasOnlineOrdering && (
                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      ✓ Online Ordering Available
                    </span>
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{location.description}</p>

                <div className="flex gap-3">
                  <a
                    href={`tel:${location.phone}`}
                    className="flex-1 bg-orange-600 text-white text-center py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  >
                    Call Now
                  </a>
                  {location.hasOnlineOrdering && location.onlineOrderingUrl && (
                    <a
                      href={location.onlineOrderingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white dark:bg-gray-800 text-orange-600 border-2 border-orange-600 py-2 px-4 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900 transition-colors font-medium text-center"
                    >
                      Order Online
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Visit Us Today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Each of our locations offers the same authentic Vietnamese flavors and warm hospitality. 
            Order online or call ahead for pickup - we're committed to providing you with an exceptional experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Online Ordering</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Order your favorite dishes online for quick pickup. Fresh ingredients and traditional recipes ready when you arrive.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Call Ahead Pickup</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Call us directly to place your order and pick it up at your convenience. Fast, fresh, and ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
